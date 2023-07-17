import './Cart.css';
import { PropTypes } from 'prop-types';
import { CartIcon, RemoveFromCartIcon } from './Icons.jsx';
import { useCart } from '../hooks/useCart';
import { useRef } from 'react';

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
  const { cart, addToCart, itemDecrement, removeFromCart, clearCart } = useCart();

  const cartRef = useRef(null);

  return (
    <>
      <div
        className='cart-button'
        onClick={() => cartRef.current.classList.add('active')}
      >
        <CartIcon />
        {cart.length}
      </div>
      <aside
        className='cart'
        ref={cartRef}
      >
        <header>
          <div>
            <button
              onClick={clearCart}
              disabled={cart.length === 0}
              className='clear-cart-button'
            >
              Clear
            </button>
            <button onClick={() => cartRef.current.classList.remove('active')}>Close</button>
          </div>

          <h2>Cart</h2>
          <p>Total ${cart.reduce((acc, el) => acc + el.price * el.quantity, 0)}</p>
        </header>
        {cart.length === 0 ? (
          <p className='no-products'>There are no products in cart</p>
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
      </aside>
    </>
  );
}

Cart.propTypes = {
  cartState: PropTypes.shape({
    isOpen: PropTypes.bool.isRequired,
    setIsOpen: PropTypes.func.isRequired,
    setOtherElementOpen: PropTypes.func.isRequired
  })
};
