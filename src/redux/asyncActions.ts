import axios from "axios";
import { API_ROUTES, BASE_URL } from "./apiRoutes";
import { TListItem } from "../types";
import { catalog } from "./actionCreators";

type TDispatch = (action: {type: string, payload: TListItem[]}) => void;

type TResponse = {
    data: {
        items: TListItem[]
    }
}
export const setList = () => {
    return (dispatch: TDispatch) => {
        axios.get(`${BASE_URL}${API_ROUTES.CATALOG}`).then((response: TResponse)=> {
            dispatch(catalog.setList(response.data.items));
        });
    }
}