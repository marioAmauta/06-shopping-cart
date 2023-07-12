import { useReducer } from 'react';
import { cartReducer, CART_ACTIONS, cartInitialState } from '../reducers/cart.js';

export function useCartReducer() {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);

  function addToCart(product) {
    dispatch({ type: CART_ACTIONS.ADD_TO_CART, payload: product });
  }

  function itemDecrement(product) {
    dispatch({ type: CART_ACTIONS.ITEM_DECREMENT, payload: product });
  }

  function removeFromCart(product) {
    dispatch({ type: CART_ACTIONS.REMOVE_FROM_CART, payload: product });
  }

  function clearCart() {
    dispatch({ type: CART_ACTIONS.CLEAR_CART });
  }

  return {
    cart: state,
    addToCart,
    itemDecrement,
    removeFromCart,
    clearCart
  };
}
