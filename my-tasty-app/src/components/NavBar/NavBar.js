import React from 'react'
import { useState } from 'react'
import './NavBar.css'
import logo1 from '../../logo-1.png'
import CartIcon from './CartIcon'
import MySearchBar from '../SmallerComponents/MySearchBar'
import { Link, Outlet } from 'react-router-dom'
const NavBar = () => {
  const [showNav, setShowNav] = useState(false);

  if(showNav===true){
    window.addEventListener('click', ()=>{
      setShowNav(false)
    })
  }
  return (
    
    <nav>
      <div className='nav-container'>
        <div className='logo-section'>
          <img className='logo' src={logo1} alt='logo' />
        </div>
        <div className='links'>
          <a href=''>Home</a>
          <a href=''>Menu</a>
          <a href=''>Location</a>
          <a href=''>Contact</a>
        </div>
        <MySearchBar />
        <Link to='/cart'>
        <div className="cart-icon-container">
          <div className="cart-item-amount">
            <span>2</span>
          </div>
        <CartIcon />
        </div>
        </Link>
        <div className='main-nav' onClick={(e) => {
          e.stopPropagation();
          setShowNav(!showNav)}}>
          <div className={showNav ? 'menu active' : 'menu'}></div>
        </div>
      </div>
      <div className={!showNav ? 'mobile-nav show-nav' : 'mobile-nav'}>
        <a href=''>Home</a>
        <a href=''>Menu</a>
        <a href=''>Location</a>
        <a href=''>Contact</a>
        <a href=''>Favourite</a>
      </div>
    </nav>
  )
}

export default NavBar
