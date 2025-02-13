import React from 'react';
import Logo from '../assets/fresh.jpg';
import { Link } from 'react-router-dom';
import '../style/Navbar.css';

function Navbar() {
  return (
    <div className='navbar'>
      <div className='leftside'>
        <img src={Logo} className='logo-img' alt='Logo' />
      </div>

      <div className='rightside'>
        <Link to='/'>Home</Link>
        <Link to='/menu'>Menu</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
      </div>

      {/* Hamburger Menu (Visible only on small screens) */}
      <div className='hamburger'>
        <div className='line'></div>
        <div className='line'></div>
        <div className='line'></div>
      </div>
    </div>
  );
}

export default Navbar;