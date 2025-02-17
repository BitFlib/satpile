import * as Actions from "../store/actions";
import NetInfo from '@react-native-community/netinfo';
import Mempool from "./explorers/Mempool";
import store from "../store/store";
import {Toast} from "../components/Toast";
import {i18n} from '../translations/i18n';
import {AddressesList, Explorer, ExplorerApi, Folder} from "./Types";
import * as BackgroundFetch from "expo-background-fetch";
import {Platform, StatusBar} from "react-native";
import {Notifications} from "./Notifications";
import {DERIVATION_BATCH_SIZE, generateNextNAddresses, shouldDeriveMoreAddresses} from "./XPubAddresses";
import {Electrum} from "./explorers/Electrum";
import TradeBlock from "./explorers/TradeBlock";
import BlockCypher from "./explorers/BlockCypher";
import {AddressStatusType} from "../components/AddressStatus";

export default class BalanceFetcher {

    static showNetworkActivity(show: boolean) {
        if (Platform.OS === "ios") {
            StatusBar.setNetworkActivityIndicatorVisible(show);
        }
    }

    static getErroredAddresses() {
        return Object
            .entries(store.getState().addresses)
            .reduce((list, [address, value]) => {
                if(value.status === AddressStatusType.ERROR){
                    return {
                        ...list,
                        [address]: value
                    }
                }
                return list;
            }, {});
    }

    static async filterAndFetchBalances(showError: boolean = true, onlyErrorAddresses = false) {
        const addressesToFetch : AddressesList = onlyErrorAddresses ?
            this.getErroredAddresses() : store.getState().addresses;
        console.log(addressesToFetch);
        if(Object.keys(addressesToFetch).length === 0){
            return null;
        }

        this.showNetworkActivity(true);
        let networkState = await NetInfo.fetch();
        this.showNetworkActivity(false);
        if (networkState.isConnected) {
            this.showNetworkActivity(true);

            const diff = await this.getExplorer(store.getState().settings.explorer).fetchAndUpdate(addressesToFetch);
            BalanceFetcher.afterBalanceFetch(showError);
            this.showNetworkActivity(false);
            return diff;
        } else if (showError) {
            Toast.showToast({type: 'top', message: i18n.t('no_network'), duration: 1500})
        }

        return null;
    }

    public static getExplorer(explorer: ExplorerApi): Explorer {
        switch (explorer) {
            case ExplorerApi.BLOCKSTREAM_INFO: return new Mempool("https://blockstream.info");
            case ExplorerApi.TRADEBLOCK_COM: return new TradeBlock();
            //case ExplorerApi.BLOCKCYPHER_COM: return new BlockCypher(); //Disabled because of rate limit
            case ExplorerApi.ELECTRUM_BLOCKSTREAM:
                return new Electrum({
                    host: "blockstream.info",
                    port: 700,
                    protocol: "tls"
                });
            case ExplorerApi.CUSTOM:
                return this.getCustomExplorerInstance();
            case ExplorerApi.MEMPOOL_SPACE_ONION: return new Mempool("http://mempoolhqx4isw62xs7abwphsq7ldayuidyx2v2oethdhhj6mlo2r6ad.onion", 1000/50);
            default:
            case ExplorerApi.MEMPOOL_SPACE: return new Mempool("https://mempool.space", 1000/50);
        }
    }

    private static getCustomExplorerInstance() {
        const settings = store.getState().settings;
        if(settings.explorer === ExplorerApi.CUSTOM && settings.explorerOption){
            switch(settings.explorerOption.type){
                case "electrum": return new Electrum(settings.explorerOption.options);
            }
        }

        return null;

    }

    private static afterBalanceFetch(showError: boolean) {
        store.dispatch(Actions.updateFoldersTotal(store.getState().addresses));
        store.dispatch(Actions.updateLastReloadTime());
        let shouldRefresh = false;
        store.getState().folders.forEach((folder: Folder) => {
            if(folder.xpubConfig){
                if(folder.xpubConfig.branches){
                    folder.xpubConfig.branches.map(branch => {
                        if(shouldDeriveMoreAddresses(folder, branch, store.getState().addresses)){
                            shouldRefresh = true;
                            const newAddresses = generateNextNAddresses(folder, branch, DERIVATION_BATCH_SIZE);
                            store.dispatch(Actions.addDerivedAddresses(folder, branch, newAddresses));
                        }
                    })
                }
            }
        })

        if(shouldRefresh){
            this.filterAndFetchBalances(showError);
        }
    }

    static async backgroundFetch() {
        try{
            const diffs = await BalanceFetcher.filterAndFetchBalances(false);
            if(!diffs || diffs.length === 0){
                return BackgroundFetch.BackgroundFetchResult.NoData;
            }
            await Notifications.sendUpdateNotification(diffs);
            return BackgroundFetch.BackgroundFetchResult.NewData;
        }catch(e){
            return BackgroundFetch.BackgroundFetchResult.Failed;
        }
    }
}
