import './Cart.css';
import { PropTypes } from 'prop-types';
import { useId } from 'react';
import { CartIcon, ClearCartIcon, RemoveFromCartIcon } from './Icons.jsx';
import { useCart } from '../hooks/useCart';

function CartItem({ thumbnail, title, price, quantity, addToCart, itemDecrement, removeFromCart }) {
  return (
    <li>
      <img
        src={thumbnail}
        alt={`Thumbnail of ${title}`}
      />
      <strong>{title}</strong>
      <strong>${price}</strong>
      <footer>
        <small>Quantity: {quantity}</small>
        <small>Total: {quantity * price}</small>
        <div>
          <button onClick={addToCart}>+</button>
          <button onClick={itemDecrement}>-</button>
        </div>
        <button
          onClick={removeFromCart}
          style={{
            backgroundColor: 'darkRed'
          }}
        >
          <RemoveFromCartIcon />
        </button>
      </footer>
    </li>
  );
}

CartItem.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  addToCart: PropTypes.func.isRequired,
  itemDecrement: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired
};

export function Cart() {
  const cartId = useId();
  const { cart, addToCart, itemDecrement, removeFromCart, clearCart } = useCart();

  return (
    <>
      <label
        className='cart-button'
        htmlFor={cartId}
      >
        <CartIcon />
        {cart.length}
      </label>
      <input
        id={cartId}
        type='checkbox'
        hidden
      />

      <aside className='cart'>
        <p
          style={{
            textAlign: 'center',
            marginBottom: '2rem'
          }}
        >
          Total ${cart.reduce((acc, el) => acc + el.price * el.quantity, 0)}
        </p>
        {cart.length === 0 ? (
          <p
            style={{
              textAlign: 'center',
              margin: '6rem 0'
            }}
          >
            There are no products in cart
          </p>
        ) : (
          <ul>
            {cart.map(product => (
              <CartItem
                key={product.id}
                addToCart={() => addToCart(product)}
                itemDecrement={() => itemDecrement(product)}
                removeFromCart={() => removeFromCart(product)}
                {...product}
              />
            ))}
          </ul>
        )}

        <div className='remove-button-container'>
          <button
            onClick={clearCart}
            disabled={cart.length === 0}
            className='clear-cart-button'
          >
            <ClearCartIcon />
          </button>
        </div>
      </aside>
    </>
  );
}
