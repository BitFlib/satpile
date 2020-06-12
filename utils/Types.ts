import {AddressStatusType} from "../components/AddressStatus";

export type AddressValue = { status: AddressStatusType, balance: number };
export type AddressesList = {
    [address: string]: AddressValue
}
export type AddressesBalanceDifference = {
    address: string;
    before: AddressValue;
    after: AddressValue;
}

export type FolderAddress = {
    name: string,
    address: string;
}

export type ListOrderType = "custom" | "alphabetically";

export type Folder = {
    uid: string;
    name: string;
    addresses: FolderAddress[];
    orderAddresses: ListOrderType;
}

export interface Explorer {
    fetchAndUpdate(AddressesList): Promise<AddressesBalanceDifference[]>
}
