export const getCartItem = (cart, id) => {
    return cart.find((item) => item.id === id);
};

export const filterCartItem = (cart, id) => {
    return cart.filter((item) => item.id !== id);
};

export const sortCartItems = (cart) => {
    return cart.slice().sort((a, b) => {
        return a.id - b.id;
    });
};

export const checkExistItem = (cart, id) => {
    return cart.some((item) => item.id === id);
};
