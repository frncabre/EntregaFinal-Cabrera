// Cart.js
import React from 'react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import './Cart.css';


const Cart = () => {
  const { cart, removeItem, clearCart } = useCart();

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart-container">
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <>
          <p>No hay items en el carrito.</p>
          <Link to="/">Ir a la tienda</Link>
        </>
      ) : (
        <>
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <p>{item.name}</p>
              <p>Cantidad: {item.quantity}</p>
              <p>Precio: ${item.price * item.quantity}</p>
              <button onClick={() => removeItem(item.id)}>Eliminar</button>
            </div>
          ))}
          <div className="cart-total">
            <p>Total: ${getTotalPrice()}</p>
            <button onClick={clearCart}>Vaciar Carrito</button>
            <Link to='/checkout'>Checkout</Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
