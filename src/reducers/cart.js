export const cartInitialState = JSON.parse(window.localStorage.getItem('cart')) || [];

export const CART_ACTIONS = {
  ADD_TO_CART: 'ADD_TO_CART',
  ITEM_DECREMENT: 'ITEM_DECREMENT',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART'
};

function updateLocalStorage(cart) {
  window.localStorage.setItem('cart', JSON.stringify(cart));
}

export function cartReducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTIONS.ADD_TO_CART: {
      const productInCartIndex = state.findIndex(item => item.id === payload.id);

      if (productInCartIndex >= 0) {
        const newCart = structuredClone(state);
        newCart[productInCartIndex].quantity += 1;

        updateLocalStorage(newCart);

        return newCart;
      }

      const newCart = [...state, { ...payload, quantity: 1 }];

      updateLocalStorage(newCart);

      return newCart;
    }

    case CART_ACTIONS.ITEM_DECREMENT: {
      const productInCartIndex = state.findIndex(item => item.id === payload.id);

      if (productInCartIndex >= 0) {
        const newCart = structuredClone(state);
        if (newCart[productInCartIndex].quantity === 1) {
          newCart.splice(productInCartIndex, 1);
          updateLocalStorage(newCart);
          return newCart;
        }

        newCart[productInCartIndex].quantity -= 1;
        updateLocalStorage(newCart);
        return newCart;
      }

      break;
    }

    case CART_ACTIONS.REMOVE_FROM_CART: {
      const newCart = state.filter(item => item.id !== payload.id);

      updateLocalStorage(newCart);

      return newCart;
    }

    case CART_ACTIONS.CLEAR_CART: {
      updateLocalStorage([]);

      return [];
    }

    default: {
      return state;
    }
  }
}
