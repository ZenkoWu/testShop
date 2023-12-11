import { cartActionTypes } from "./actionTypes";
import { TPayload } from "./cartReducer";

export const cart = {
    increment: (payload: TPayload) => ({type: cartActionTypes.INCREMENT, payload}),
    decrement: (payload: TPayload) => ({type: cartActionTypes.DECREMENT, payload}),
    deleteTickets: (payload: TPayload) => ({type: cartActionTypes.DELETE_TICKETS, payload}),
}