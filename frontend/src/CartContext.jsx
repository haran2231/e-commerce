import React, { createContext, useReducer, useEffect, useState } from 'react';
import axios from 'axios';

const CartContext = createContext();

const initialState = {
  items: [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'SET_CART':
      return {
        ...state,
        items: action.payload,
      };
    case 'ADD_TO_CART':
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        items: state.items.filter(item => item._id !== action.payload.productId),
      };
    case 'CLEAR_CART':
      return {
        ...state,
        items: [],
      };
    default:
      return state;
  }
};


export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const [loading, setLoading] = useState(true);
  const baseUrl = 'https://e-commerce-916t.onrender.com';

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.get(`${baseUrl}/api/cart`);
        dispatch({ type: 'SET_CART', payload: response.data.items });
      } catch (error) {
        console.error('There was an error fetching the cart!', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, []);

  return (
    <CartContext.Provider value={{ cart: state.items, dispatch, loading }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
