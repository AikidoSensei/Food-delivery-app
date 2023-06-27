import React from 'react'
import { useState } from 'react'
import './NavBar.css'
import logo1 from '../../logo-1.png'
import CartIcon from './CartIcon'
import MySearchBar from '../SmallerComponents/MySearchBar'
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
        <MySearchBar/>
        <CartIcon/>
      <div className='menu active' ></div>
      </div>
    </nav>
  )
}

export default NavBar
