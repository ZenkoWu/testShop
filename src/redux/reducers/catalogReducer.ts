import { TCatalogPayload, TState } from "../../types";
import { catalogActionTypes } from "../actionTypes";

const initialState = {
    list: [],
    itemsCount: 0,
}

export const catalogReducer = (
    state: TState['catalog'] = initialState, 
    {
        type, 
        payload
    }: {
        type: keyof typeof catalogActionTypes, 
        payload: TCatalogPayload
    }
) => {
    switch(type) {
        case catalogActionTypes.SET_LIST: {
            return {
                ...state,
                list: payload,
                itemsCount: payload.length
            }
        }
        default: return state;
    }
} 