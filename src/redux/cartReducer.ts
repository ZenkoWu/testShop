import { cartActionTypes } from "./actionTypes";
import { TState } from "./store";

export type TPayload = string

const initialState = {
    tickets: {},
    ticketsCount: 0
}

export const cartReducer = (
    state: TState['cart'] = initialState, 
    {payload, type}: {payload: TPayload, type: keyof typeof cartActionTypes}
) => {
    switch(type) {

    
        case cartActionTypes.INCREMENT: {
            const count = state.tickets[payload] || 0;
            
            return {
                ...state,
                tickets: {
                    ...state.tickets, 
                    [payload]: count + 1
                } ,
                ticketsCount: state.ticketsCount + 1  
            }
        }
        case cartActionTypes.DECREMENT: {
            const count = state.tickets[payload] || 0;

            return {
                ...state,
                tickets: {
                    ...state.tickets, 
                    [payload]: count - 1
                } ,
                ticketsCount: state.ticketsCount + 1
            }
        } 
        case  cartActionTypes.DELETE_TICKETS: {
            const count = state.tickets[payload];
            delete state.tickets[payload]
                
            return {
                ...state,
                tickets: {
                    ...state.tickets
                } ,
                ticketsCount: !state.tickets[payload] ? state.ticketsCount - count :  state.ticketsCount
            }
        }
        default: return state;
    }
} 