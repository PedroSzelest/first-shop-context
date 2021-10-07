import React, { useReducer } from "react"; 
import CartContext from "./Cart.Context";
import CartReducer from "./Cart.Reducer";
import { SHOW_HIDE_CART, ADD_ITEM, REMOVE_ITEM } from "../types";

const CartState = ({ children })=>  {

    const initialState = {
        showCart: false,
        items: []
    }

    const [state, dispatch] = useReducer(CartReducer, initialState)

    const showHideCart = ()=> {
        dispatch({ type: SHOW_HIDE_CART })
    }

    const addItem = item => {
        dispatch({ type: ADD_ITEM, payload: item})
    } 

    const removeItem = index => {
        dispatch({ type: REMOVE_ITEM, payload: index })
    }

    return (
        <CartContext.Provider
        value={{
            showCart: state.showCart,
            items: state.items,
            showHideCart,
            addItem,
            removeItem
        }}
        >
            {children}
        </CartContext.Provider>
    )
}

export default CartState