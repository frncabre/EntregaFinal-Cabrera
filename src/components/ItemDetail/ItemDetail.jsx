// ItemDetail.jsx
import React from 'react';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { useCart } from '../../context/CartContext'; // Importa el useCart

const ItemDetail = ({ item }) => {
  const { addItem, isInCart } = useCart();

  const handleOnAdd = count => {
    if (count > 0) {
      if (!isInCart(item.id)) {
        addItem(item, count);
        console.log(`Se agregaron ${count} ${item.name} al carrito`);
      } else {
        console.log('El producto ya está en el carrito');
      }
    } else {
      console.log('La acción no se puede realizar');
    }
  };

  return (
    <div className="container">
      <img src={item.img} className="image" alt={item.name} />
      <h2 className="title">{item.name}</h2>
      <p className="description">{item.description}</p>
      <p className="price">Precio: ${item.price}</p>
      <ItemCount stock={item.stock} onAdd={handleOnAdd} />
    </div>
  );
};

export default ItemDetail;
