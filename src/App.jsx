import { products as initialProducts } from './mocks/products.json';
import { useState } from 'react';
import { useFilters } from './hooks/useFilters.jsx';
import { Header } from './components/Header.jsx';
import { Cart } from './components/Cart.jsx';
import { Products } from './components/Products.jsx';
import { CartProvider } from './context/cart';

export function App() {
  const { filterProducts } = useFilters();
  const [products] = useState(initialProducts);
  const filteredProducts = filterProducts(products);

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
    </CartProvider>
  );
}
