import { applyMiddleware, combineReducers, createStore  } from "redux";
import { cartReducer } from "./reducers/cartReducer";
import { catalogReducer } from "./reducers/catalogReducer";
import {thunk} from "redux-thunk"

const reducers = combineReducers({
    cart: cartReducer,
    catalog: catalogReducer

})
const loggerMiddleware = (store: any) => (next: any) => (action: any) => {
    console.log("action", action);
    next(action);
  };
const middleware = applyMiddleware(thunk, loggerMiddleware);
export const store = createStore(reducers, {}, middleware)
