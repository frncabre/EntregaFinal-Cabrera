// CartWidget.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './CartWidget.css';

const CartWidget = () => {
  const { cart } = useCart();

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div className="cart-widget">
      {cart.length > 0 && (
        <Link to="/cart">
          <div className="cart-icon">
            <span>{getTotalItems()}</span>
            <img src="https://static-00.iconduck.com/assets.00/shopping-cart-icon-512x462-yrde1eu0.png" alt="Cart Icon" />
          </div>
        </Link>
      )}
    </div>
  );
};

export default CartWidget;
