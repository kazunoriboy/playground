import * as types from "./types";

export const addToCart = (id, name, price) => ({
    type: types.ADD_ITEM,
    payload: {
        id,
        name,
        price,
    },
});

export const clearCart = () => ({
    type: types.CLEAR,
});
