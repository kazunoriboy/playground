import * as types from './types';
import {
    filterCartItem,
    getCartItem,
    sortCartItems,
    checkExistItem,
} from './selectors'

const initialState = {
    cart: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_ITEM:
            const { id, name, price } = action.payload;
            let newCart = [];
            const isExistItem = checkExistItem(state.cart, id);

            if (isExistItem) {
                const newItem = getCartItem(state.cart, id);
                const newItemStock = newItem.stock + 1;
                const newItemTotalPrice = newItem.price * (newItem.stock + 1);
                const filteredCartItem = filterCartItem(state.cart, id);
                newCart = sortCartItems([
                    ...filteredCartItem,
                    {
                        ...newItem,
                        stock: newItemStock,
                        totalPrice: newItemTotalPrice,
                    },
                ]);
            } else {
                newCart = sortCartItems([
                    ...state.cart,
                    {
                        id,
                        name,
                        price,
                        stock: 1,
                        totalPrice: price,
                    },
                ]);
            }
            return {
                ...state,
                cart: newCart,
            };
        default:
            return state;
    }
};

export default reducer;
