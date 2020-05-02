import {Alert, StyleSheet, View} from "react-native";
import React, {useState} from "react";
import DynamicTitle from "../components/DynamicTitle";
import {Appbar, FAB} from "react-native-paper";
import ReloadButton from "../components/ReloadButton";
import {connect} from 'react-redux';
import AddressesList from "../components/AddressesList";
import BalanceFetcher from "../utils/BalanceFetcher";
import {i18n} from '../translations/i18n';
import EmptyScreenContent from "../components/EmptyScreenContent";
import PromptModal from "../components/PromptModal";
import * as Actions from "../store/actions";
import store from "../store/store";
import {Toast} from "../components/Toast";

export default connect(state => ({
    folders: state.folders,
    addressesBalance: state.addresses
}))(function FolderContentScreen({navigation, route, folders, addressesBalance}) {

    const [showRenameModal, setShowRenameModal] = useState(false);

    const folder = folders.find(folder => folder.uid === route.params.folder.uid);

    if (!folder) {
        navigation.goBack();
        return null;
    }
    navigation.setOptions({
        headerTitle: props => <DynamicTitle title={folder.name} icon={"md-folder"} satAmount={folder.totalBalance}
                                            onPress={() => {
                                                setShowRenameModal(true)
                                            }}/>,
        headerLeft: props => <Appbar.BackAction color={"white"} onPress={() => navigation.goBack()}/>,
        headerRight: props => <View style={{display: 'flex', flexDirection: 'row'}}>
            <Appbar.Action color="white" icon="trash-can" onPress={() => {
                Alert.alert(i18n.t('delete'), i18n.t('delete_folder_sure'), [
                    {
                        text: i18n.t('cancel'),
                        onPress: () => {},
                        style: 'cancel',
                    },
                    {
                        text: i18n.t('delete'),
                        onPress: async () => {
                            store.dispatch(Actions.removeFolder(folder));
                            setTimeout(() => Toast.showToast({
                                type: "top",
                                message: i18n.t('successfully_deleted'),
                                duration: 1500
                            }), 300)
                        },
                        style: 'destructive',
                    },
                ], {cancelable: true});
            }}/>
            <Appbar.Action color="white" icon="plus" onPress={() => navigation.navigate('Add', {folder})}/>
        </View>,
        headerTitleContainerStyle: {
            width: '100%',
            paddingHorizontal: 80
        }
    });

    const submitRenameModal = (newName) => {
        store.dispatch(Actions.renameFolder(folder, newName));
    }

    const list = <AddressesList addresses={folder.addresses} folders={folders} folder={folder}
                                balances={addressesBalance}
                                onRefresh={async () => {
                                    await BalanceFetcher.filterAndFetchBalances();
                                }} afterRefresh={() => {
    }}
    />

    return (
        <View style={{flex: 1}}>
            {showRenameModal && <PromptModal title={i18n.t('rename_folder')} description={i18n.t('enter_folder_name')}
                                             inputPlaceholder={i18n.t('folder_name')} visible={showRenameModal}
                                             submitLabel={i18n.t('done')}
                                             onClose={() => setShowRenameModal(false)}
                                             onValidate={submitRenameModal}
                                             defaultValue={folder.name}
            />}
            {folder.addresses.length > 0 ? list : <EmptyScreenContent text={i18n.t('no_address')}/>}
            <ReloadButton/>
            <FAB style={styles.fab} color={"white"} icon={"plus"} onPress={() => navigation.navigate('Add', {folder})}/>
        </View>)
})

const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        margin: 32,
        right: 0,
        bottom: 0,
        backgroundColor: '#f47c1c',
    },
})
