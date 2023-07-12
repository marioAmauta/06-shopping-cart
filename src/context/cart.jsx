import { PropTypes } from 'prop-types';
import { createContext, useState } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = product => {
    const isProductInCart = cart.findIndex(item => item.id === product.id);

    if (isProductInCart >= 0) {
      const newCart = structuredClone(cart);
      newCart[isProductInCart].quantity += 1;
      return setCart(newCart);
    }

    setCart(prevState => [...prevState, { ...product, quantity: 1 }]);
  };

  const removeFromCart = product => {
    setCart(prevState => prevState.filter(item => item.id !== product.id));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
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
