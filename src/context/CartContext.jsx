// CartContext.js
import React, { createContext, useContext, useReducer } from 'react';

const ActionTypes = {
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  CLEAR_CART: 'CLEAR_CART',
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case ActionTypes.REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };
    case ActionTypes.CLEAR_CART:
      return {
        ...state,
        items: [],
      };
    default:
      return state;
  }
};

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, { items: [] });

  const addItem = (item, quantity) => {
    const existingItem = cartState.items.find(i => i.id === item.id);

    if (existingItem) {
      dispatch({
        type: ActionTypes.ADD_ITEM,
        payload: {
          ...item,
          quantity: existingItem.quantity + quantity,
        },
      });
    } else {
      dispatch({
        type: ActionTypes.ADD_ITEM,
        payload: {
          ...item,
          quantity,
        },
      });
    }
  };

  const removeItem = itemId => {
    dispatch({
      type: ActionTypes.REMOVE_ITEM,
      payload: itemId,
    });
  };

  const clearCart = () => {
    dispatch({
      type: ActionTypes.CLEAR_CART,
    });
  };

  const isInCart = id => {
    return cartState.items.some(item => item.id === id);
  };

  return (
    <CartContext.Provider
      value={{
        cart: cartState.items,
        addItem,
        removeItem,
        clearCart,
        isInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
