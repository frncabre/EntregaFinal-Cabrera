import React from 'react';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';


function ItemDetail({ item }) {
    const handleOnAdd = (count) => {
      if (item.stock > 0 && count > 0) {
        console.log(`Se agrego ${count} ${item.name}`)
      }else{
        console.log('La accion no se puede realizar')
      }
    }

    return (
      <div className="container">
        <img src={item.img} className="image" />
        <h2 className="title">{item.name}</h2>
        <p className="description">{item.description}</p>
        <p className="price">Precio: ${item.price}</p>
        <ItemCount stock={item.stock} onAdd={handleOnAdd} /> 
      </div>
    );
  }
  
  export default ItemDetail;

