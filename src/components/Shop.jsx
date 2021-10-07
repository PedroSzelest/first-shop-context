import React, { useContext } from "react";
import data from "../data";
import Rating from "./Rating";
import "./components styles/Shop.css";
import CartContext from "../context/cart/Cart.Context"

const Shop = ()=> {

    const { addItem } = useContext(CartContext)

    return (
        <div className="shop_container">
            {data.map( item => (
                <div className="item_container">
                    <div className="item_image_container">
                        <img src={item.image} alt={item.name} />
                    </div>
                    <div className="item_data">
                        <h3>{item.name}</h3>
                        <h4>{`$${item.price}`}</h4>
                        <Rating 
                        rating={item.rating}
                        views={item.views}
                        />
                    </div>
                    <button className="item_add" onClick={()=> addItem(item)}>Add to cart</button>
                </div>
            ))}
        </div>
    )
}

export default Shop