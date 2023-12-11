import { TListItem, TState } from "../../types";
import { cartActionTypes } from "../actionTypes";

const initialState = {
    items: [],
    itemsCount: 0
}

export const cartReducer = (
    state: TState['cart'] = initialState, 
    {
        payload, 
        type
    }: {
        payload: TListItem, 
        type: keyof typeof cartActionTypes
    }
) => {
    switch(type) {
        case  cartActionTypes.ADD_ITEM: {
            return {
                ...state,
                items: [...state.items, payload],
                itemsCount: state.itemsCount + 1
            }
        }
        default: return state;
    }
} 