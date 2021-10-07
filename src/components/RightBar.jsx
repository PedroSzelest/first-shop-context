import React, { useContext } from "react";
import CartContext from "../context/cart/Cart.Context";
import "./components styles/RightBar.css"
import { v4 as uuidv4 } from "uuid";

const RightBar = ()=> {

    const { items, showCart, removeItem } = useContext(CartContext)

    let total_price = 0

    items.forEach( item => total_price += item.price)

    return (
        <nav className={`right_bar ${showCart}`}>
            <div className="cart_price">
                {`TOTAL: ${total_price.toFixed(2)}`}
            </div>
            {items.map( (cart, index) => (
                <div className="cart_container" key={uuidv4()}>
                    <div className="cart_image">
                        <img src={cart.image} alt={cart.name} />
                    </div>
                    <div className="cart_data">
                        <p>{cart.name}</p>
                        <p>{cart.price}</p>
                    </div>
                    <button onClick={()=> removeItem(index)}>REMOVE</button>
                </div>
            ))}
        </nav>
    )
}

export default RightBar