import React from "react"
import {v4 as uuidv4 } from "uuid";

const Rating = ({ rating, views, color })=> {
    return (
        <div className="rating_container">
            {
                [1, 2, 3, 4, 5].map( rate => (
                    <span key={uuidv4()}>
                        <i
                        style={{color}}
                        className={
                            rating + 1 === rate + 0.5
                            ? "fas fa-star-half-alt"
                            : rating >= rate
                            ? "fas fa-star"
                            : "far fa-star"
                        }
                        ></i>
                    </span>
                )) 
            }
            <span>{views && views} views</span>
        </div>
    )
};

Rating.defaultProps = {
    color: "#FFA41C"
};

export default Rating