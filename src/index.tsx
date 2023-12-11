import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {App} from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const root = createRoot(document.getElementById('root')  as Element);
root.render(
    <StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </StrictMode>   
);