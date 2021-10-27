import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../state/cart/actions";
import { shopData } from "../data/shopData";

export const Shop = () => {
    const dispatch = useDispatch();
    const shopItems = shopData.products.map((item) => (
        <div className="shop_item" key={item.id}>
            <p className="shop_itemName">{item.name}</p>
            <p className="shop_description">{item.description}</p>
            <p className="shop_itemName">{item.price} 円</p>
            <button
                className="shop_addButton"
                onClick={() => {
                    dispatch(addToCart(item.id, item.name, item.price));
                }}
            >
                カートに追加する
            </button>
        </div>
    ));
    return <div className="shop">{shopItems}</div>
};
