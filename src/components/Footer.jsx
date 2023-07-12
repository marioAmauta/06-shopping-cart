import { useContext } from 'react';
import { FiltersContext } from '../context/filters.jsx';
import { CartContext } from '../context/cart.jsx';

export function Footer() {
  const { filters } = useContext(FiltersContext);
  const { cart } = useContext(CartContext);
  console.log(cart);

  return (
    <footer className='footer'>
      <p>{JSON.stringify(filters, null, 2)}</p>
      {/* <p>{JSON.stringify(cart, null, 2)}</p> */}
    </footer>
  );
}
