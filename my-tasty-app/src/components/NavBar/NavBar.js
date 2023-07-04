import React from 'react'
import { useState, useContext } from 'react'
import './NavBar.css'
import logo1 from '../../logo-1.png'
import CartIcon from './CartIcon'
import MySearchBar from '../SmallerComponents/MySearchBar'
import { Link } from 'react-router-dom'
import Search from '../SmallerComponents/Search'

export const SearchContext = React.createContext()

const NavBar = () => {
  const [showNav, setShowNav] = useState(false);
  const [showSearch, setShowSearch] = useState(false) 
  if(showNav===true){
    window.addEventListener('click', ()=>{
      setShowNav(false);
    })
  }
  if(!showSearch === true){
    window.addEventListener('click', ()=>{
      setShowSearch(false);
    })
  }
 const handleSearch = (e)=>{
    e.stopPropagation();
    setShowSearch(true)
  }
  return (
    <SearchContext.Provider value={{ handleSearch }}>
      <nav>
        <div className='nav-container'>
          <div className='logo-section'>
            <Link to='/'>
            <img className='logo' src={logo1} alt='logo' />
            </Link>
          </div>
          <div className='links'>
            <Link to='/'>Home</Link>
            <Link to='/menu'>Menu</Link>
            <Link to='/location'>Location</Link>
            <Link to='/contact'>Contact</Link>
          </div>
          <div className='search-query-container'>
            <MySearchBar />
            <div
              className={
                showSearch ? 'search-show ' : 'search-hide'
              }
            >
              <Search />
            </div>
          </div>
          <Link to='/cart'>
            <div className='cart-icon-container'>
              <div className='cart-item-amount'>
                <span>2</span>
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
            <div className={showNav ? 'menu active' : 'menu'}></div>
          </div>
        </div>
        <div className={!showNav ? 'mobile-nav show-nav' : 'mobile-nav'}>
          <Link to='/'>Home</Link>
          <Link to='/menu'>Menu</Link>
          <Link to='/location'>Location</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/favourite'>Favourite</Link>
        </div>
      </nav>
    </SearchContext.Provider>
  )
}

export default NavBar
