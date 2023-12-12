import { TListItem, TState } from "../../types";
import { cartActionTypes } from "../actionTypes";

const initialState = {
    items: JSON.parse(localStorage.getItem('cartItems') || '[]'),
    itemsCount: JSON.parse(localStorage.getItem('cartItemsCount') || '0')
}

export const cartReducer = (
    state: TState['cart'] = initialState, 
    {
        payload, 
        type
    }: {
        payload: TListItem | TListItem['id'], 
        type: keyof typeof cartActionTypes
    }
) => {
    switch(type) {
        case  cartActionTypes.ADD_ITEM: {
            
            const items = [...state.items, payload]
            const itemsCount = state.itemsCount + 1

            localStorage.setItem('cartItems', JSON.stringify(items))
            localStorage.setItem('cartItemsCount', JSON.stringify(itemsCount))

            return {
                ...state,
                items,
                itemsCount
            }
        }
        case  cartActionTypes.DELETE_ITEM: {
            const items = state.items.filter((el: TListItem) => el.id !== payload)
            const itemsCount = state.itemsCount - 1
            
            localStorage.setItem('cartItems', JSON.stringify(items))
            localStorage.setItem('cartItemsCount', JSON.stringify(itemsCount))

            return {
                ...state,
                items,
                itemsCount
            }
        }

        default: return state;
    }
} 