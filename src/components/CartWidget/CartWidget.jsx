import React from 'react';
import './CartWidget.css';

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <i>🛒</i>
      <span className="cart-badge">77</span>
    </div>
  );
};

export default CartWidget;