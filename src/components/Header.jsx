import './Header.css';
import { Filters } from './Filters.jsx';

export function Header() {
  return (
    <header className='header'>
      <h1>React Shop</h1>
      <Filters />
    </header>
  );
}
