import { applyMiddleware, combineReducers, createStore  } from "redux";
import { cartReducer } from "./cartReducer";

export type TState = {
    cart: {
        ticketsCount: number,
        tickets: {[key: string]: number}
    }
}

const reducers = combineReducers({
    cart: cartReducer

})
export const store = createStore(reducers)
