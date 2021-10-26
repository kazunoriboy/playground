import { createStore, compose } from "redux";
import cartReducer from "./cart";

export const configureStore = () => {
    return createStore(
        cartReducer,
        compose(
            process.env.NODE_ENV === "development" && window.devToolsExtension
                ? window.devToolsExtension()
                : (f) => f
        )
    );
};
