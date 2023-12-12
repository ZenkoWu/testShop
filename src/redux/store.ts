import { applyMiddleware, combineReducers, createStore  } from "redux";
import { cartReducer } from "./reducers/cartReducer";
import { catalogReducer } from "./reducers/catalogReducer";
import {thunk} from "redux-thunk"

const reducers = combineReducers({
    cart: cartReducer,
    catalog: catalogReducer

})

const middleware = applyMiddleware(thunk);
export const store = createStore(reducers, {}, middleware)
