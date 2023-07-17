import './Header.css';
import { Filters } from './Filters.jsx';
import { Navbar } from './Navbar.jsx';
import { Cart } from './Cart.jsx';

export function Header() {
  let previousScrollPosition = window.scrollY;

  window.addEventListener('scroll', () => {
    let currentScrollPosition = window.scrollY;
    const $header = document.querySelector('.header');

    if (previousScrollPosition > currentScrollPosition) {
      $header.style.top = '0px';
    } else {
      $header.style.top = `-${$header.offsetHeight}px`;
    }

    previousScrollPosition = currentScrollPosition;
  });

  return (
    <header className='header'>
      <nav className='navbar'>
        <Navbar />
        <Cart />
      </nav>
      <Filters />
    </header>
  );
}
