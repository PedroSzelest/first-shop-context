import { SHOW_HIDE_CART, ADD_ITEM, REMOVE_ITEM } from "../types";

const CartReducer = (state, action)=> {
    switch (action.type) {
        case SHOW_HIDE_CART: 
            return {
                ...state,
                showCart: !state.showCart
            }

        case ADD_ITEM:
            return {
                ...state,
                items: [
                    ...state.items,
                    action.payload
                ]
            }

        case REMOVE_ITEM:
            return {
                ...state,
                items: state.items.filter( (item, index) => index !== action.payload)
            }

        default: 
            return state
    }
}

export default CartReducer