import React, { useEffect } from 'react'
import { useState, useContext } from 'react'
import './NavBar.css'
import logo1 from '../../logo-1.png'
import CartIcon from './CartIcon'
import MySearchBar from '../SmallerComponents/MySearchBar'
import { Link, NavLink } from 'react-router-dom'
import Search from '../SmallerComponents/Search'
import {useSelector } from 'react-redux'
import { logout } from '../../features/UserSlice'
import { useDispatch } from 'react-redux'
export const SearchContext = React.createContext()

const NavBar = () => {
  const dispatch = useDispatch()
  const { amount } = useSelector((state) => state.cart)
  const [showNav, setShowNav] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const [displayNav, setDisplayNav] = useState(false)
  const handleDisplayNav = () => {
    if (window.scrollY > 100) {
      setDisplayNav(true)
    } else {
      setDisplayNav(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleDisplayNav)
  }, [])
  if (showNav === true) {
    window.addEventListener('scroll', () => {
      setShowNav(false)
      return window.removeEventListener('scroll', handleDisplayNav)
    })
  }
  if (!showSearch === true) {
    window.addEventListener('click', () => {
      setShowSearch(false)
    })
  }
  const handleSearch = (e) => {
    e.stopPropagation()
    setShowSearch(true)
  }
  const googleLogout = ()=>{
    window.open('https://tasty-rose.vercel.app', '_self')
  }
  return (
    <SearchContext.Provider value={{ handleSearch }}>
      <nav>
        <div className={displayNav ? 'nav-container' : 'display-nav'}>
          <div className='logo-section'>
            <Link to='/'>
              <img className='logo' src={logo1} alt='logo' />
            </Link>
          </div>
          <div className='links'>
            <NavLink
              className={({ isActive }) => (isActive ? 'link active' : 'link')}
              to='/'
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? 'link active' : 'link')}
              to='/menu'
            >
              Menu
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? 'link active' : 'link')}
              to='/favourite'
            >
              Favourite
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? 'link active' : 'link')}
              to='/contact'
            >
              Contact
            </NavLink>
          </div>
          <div className='search-query-container'>
            <MySearchBar />
            <div className={showSearch ? 'search-show ' : 'search-hide'}>
              <Search />
            </div>
          </div>
          <Link to='/cart'>
            <div className='cart-icon-container'>
              <div className={amount > 0 ? 'cart-item-amount' : 'no-amount'}>
                <span>{amount}</span>
              </div>
              <CartIcon />
            </div>
          </Link>
          <div
            className='main-nav'
            onClick={(e) => {
              e.stopPropagation()
              setShowNav(!showNav)
            }}
          >
            <div
              className='user-log'
              onClick={(e) => {
                e.stopPropagation()
                localStorage.removeItem('usertoken')
                dispatch(logout())
                googleLogout()
              }}
            >
              <span>logout</span>
            </div>
            <div className={showNav ? 'menu activate' : 'menu'}></div>
          </div>
        </div>
        <div className={!showNav ? 'mobile-nav show-nav' : 'mobile-nav'}>
          <Link to='/'>Home</Link>
          <Link to='/menu'>Menu</Link>
          <Link to='/favourite'>Favourite</Link>
          <Link to='/contact'>Contact</Link>
          <div
            className='log-out'
            onClick={() => {
              localStorage.removeItem('usertoken');
              dispatch(logout());
              googleLogout()
            }}
          >
            <p>Logout</p>
          </div>
        </div>
      </nav>
    </SearchContext.Provider>
  )
}

export default NavBar
