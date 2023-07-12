import './Products.css';
import PropTypes from 'prop-types';
import { useCart } from '../hooks/useCart.jsx';
import { AddToCartIcon, RemoveFromCartIcon } from './Icons.jsx';

export function Products({ products }) {
  const { addToCart, cart, removeFromCart } = useCart();

  const checkProductInCart = product => {
    return cart.some(item => item.id === product.id);
  };

  return (
    <>
      <main className='products'>
        <ul>
          {products.map(product => {
            const isProductInCart = checkProductInCart(product);

            return (
              <li key={product.id}>
                <img
                  src={product.thumbnail}
                  alt={product.title}
                />
                <strong>{product.title}</strong>
                <span>${product.price}</span>
                <button
                  style={{
                    backgroundColor: isProductInCart ? 'darkRed' : 'var(--button-background-color)'
                  }}
                  onClick={() => (isProductInCart ? removeFromCart(product) : addToCart(product))}
                >
                  {isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
                </button>
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
}

Products.propTypes = {
  products: PropTypes.array.isRequired
};
