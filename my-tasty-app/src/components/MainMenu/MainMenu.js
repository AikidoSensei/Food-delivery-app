import React from 'react'
import './MainMenu.css'
import SingleItem from '../Menu/SingleItem'
import Filter from '../SmallerComponents/Filter'
import { useState } from 'react'
const MainMenu = () => {
 const [showFilter, setShowFilter] = useState(false);
 window.addEventListener('click', ()=>{
  if (showFilter===true){
   setShowFilter(false)
  }
 })
  return (
    <main className='main-wrapper'>
      <section className='main-container'>
        <article className='main-content'>
          <div className={showFilter ? 'main-left' : 'show-filter'}>
           <Filter/>
          </div>
          <div className='main-right'>
           <div className="top-menu">
            <p>Find Amazing Dishes</p>
            <span>Sort by: Popularity</span>
           </div>
           <div className="product-filter">
           <p>102 items found</p>
           <span onClick={(e)=>{
            e.stopPropagation();
            setShowFilter(!showFilter)
            }}>Filter</span>
           </div>
           <div className="dish-container">
            <SingleItem/>
            <SingleItem/>
            <SingleItem/>
            <SingleItem/>
            <SingleItem/>
            <SingleItem/>
            <SingleItem/>
            <SingleItem/>
            <SingleItem/>
            <SingleItem/>
            <SingleItem/>
            <SingleItem/>
            <SingleItem/>
            <SingleItem/>
           </div>
          </div>
        </article>
      </section>
    </main>
  )
}

export default MainMenu
