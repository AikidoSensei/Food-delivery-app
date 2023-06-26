import React from 'react'
import './Menu.css'
import SingleItem from './SingleItem'

const Menu = () => {
  return (
    <main className='menu-wrapper'>
      <main className='menu-container'>
        <h3>Choose from our popular categories</h3>
        <section className='list-container'>
          <a className='menu-btn active' href='#'>
            <i className='fa-solid fa-utensils'></i>
            All
          </a>
          <a className='menu-btn' href='#'>
            <i className='fa-solid fa-hamburger'></i>
            Buger
          </a>
          <a className='menu-btn' href='#'>
            <i className='fa-solid fa-pizza-slice'></i>
            Pizza
          </a>
          <a className='menu-btn' href='#'>
            <i className='fa-solid fa-leaf'></i>
            Salad
          </a>
          <a className='menu-btn ' href='#'>
            <i className='fa-solid fa-cheese'></i>
            Pastries
          </a>
          <a className='menu-btn' href='#'>
            <i className='fa-solid fa-drumstick-bite'></i>
            Chiken
          </a>
          <a className='menu-btn' href='#'>
            <i className='fa-solid fa-cocktail'></i>
            Beverage
          </a>
          <a className='menu-btn' href='#'>
            <i className='fa-solid fa-concierge-bell'></i>
            Special
          </a>
        </section>
        <section className='food-wrapper'>
          <article className='food-container'>
            <SingleItem/>
            <SingleItem/>
            <SingleItem/>
            <SingleItem/>
            <SingleItem/>
            <SingleItem/>
            <SingleItem/>
            <SingleItem/>
            <SingleItem/>
          </article>
        </section>
      </main>
    </main>
  )
}

export default Menu
