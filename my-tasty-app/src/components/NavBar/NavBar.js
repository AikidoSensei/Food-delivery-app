import React from 'react'
import { useState } from 'react'
import './NavBar.css'
import logo1 from '../../logo-1.png'
import CartIcon from './CartIcon'
const NavBar = () => {
  const [toggleNav, setToggleNav] = useState(false);
  return (
    <nav>
      <div className='nav-container'>
        <div className='logo-section'>
          <img className='logo' src={logo1} alt='logo' />
        </div>
        <div className='links'>
            <a href="">Home</a>
            <a href="">Our menu</a>
            <a href="">Location</a>
            <a href="">Contact</a>
        </div>
        <CartIcon/>
      </div>
      <div className={toggleNav ? "menu change" : "menu"}></div>
    </nav>
  )
}

export default NavBar
