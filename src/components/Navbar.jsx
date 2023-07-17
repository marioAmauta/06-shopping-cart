import { useRef } from 'react';
import './Navbar.css';

export function Navbar() {
  const navbarMenuRef = useRef(null);

  return (
    <>
      <div
        className='navbar-toggle'
        onClick={() => navbarMenuRef.current.classList.add('active')}
      ></div>
      <aside
        className='navbar-menu'
        ref={navbarMenuRef}
      >
        <button onClick={() => navbarMenuRef.current.classList.remove('active')}>Close</button>
        <ul>
          <li>Hello</li>
          <li>Hello</li>
        </ul>
      </aside>
    </>
  );
}
