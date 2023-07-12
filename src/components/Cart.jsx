import './Cart.css';
import { useId } from 'react';
import { CartIcon, ClearCartIcon } from './Icons.jsx';
import { useCart } from '../hooks/useCart';

function CartItem({ thumbnail, title, price, quantity, addToCart, removeFromCart }) {
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
        <div>
          <button onClick={addToCart}>+</button>
          <button onClick={removeFromCart}>-</button>
        </div>
      </footer>
    </li>
  );
}

export function Cart() {
  const cartId = useId();
  const { cart, addToCart, removeFromCart, clearCart } = useCart();

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
          <ul
            style={{
              overflow: 'auto'
            }}
          >
            {cart.map(product => (
              <CartItem
                key={product.id}
                addToCart={() => addToCart(product)}
                removeFromCart={() => removeFromCart(product)}
                {...product}
              />
            ))}
          </ul>
        )}

        <div className='remove-button-container'>
          <button onClick={clearCart}>
            <ClearCartIcon />
          </button>
        </div>
      </aside>
    </>
  );
}
