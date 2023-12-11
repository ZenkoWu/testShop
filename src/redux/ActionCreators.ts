import { TCatalogPayload, TListItem } from "../types";
import { cartActionTypes, catalogActionTypes } from "./actionTypes";

export const cart = {
    add: (payload: TListItem) => ({type: cartActionTypes.ADD_ITEM, payload})
}

export const catalog = {
    setList: (payload: TCatalogPayload)=> ({ type: catalogActionTypes.SET_LIST, payload})
}

