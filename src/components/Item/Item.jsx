import React from "react";
import './Item.css';
import { Link } from "react-router-dom";

const Item = ({id, name, img, price}) => {
    return(
        <div className="container">
            <h1 className="title">{name}</h1>
            <img src={img} className="image" alt={name} />
            <h2 className="price">${price}</h2>
            <Link to={ `/item/${id} `} className="button" >Ver</Link>
        </div>
    )
}

export default Item