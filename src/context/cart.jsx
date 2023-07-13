import { PropTypes } from 'prop-types';
import { createContext } from 'react';
import { useCartReducer } from '../hooks/useCartReducer';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const { cart, addToCart, itemDecrement, removeFromCart, clearCart } = useCartReducer();

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        itemDecrement,
        removeFromCart,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: PropTypes.array
};
