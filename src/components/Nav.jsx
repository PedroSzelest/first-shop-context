import React, { useContext } from "react";
import "./components styles/Nav.css";
import CartContext from "../context/cart/Cart.Context";

const Nav = () => {

    const { items, showHideCart } = useContext(CartContext)

    return (
        <nav>
            <div className="initial_nav">
                <h2>paints</h2>
                <ul>
                    <li>Home</li>
                    <li>Contact</li> 
                </ul>
            </div>
            <div className="right_nav">
                <div className="shop_icon" onClick={()=> showHideCart()}>
                    <i 
                    className="fa fa-shopping-cart"
                    aria-hidden="true"
                    />
                    <div className="item_count">
                        <span>{items.length}</span>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav 
