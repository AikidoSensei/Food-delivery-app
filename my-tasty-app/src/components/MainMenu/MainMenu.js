import React from 'react'
import './MainMenu.css'
import SingleItem from '../Menu/SingleItem'
import Filter from '../SmallerComponents/Filter'
import { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../features/FilterSlice'
import { price, rating } from '../../features/FilterSlice'
import Loading from '../SmallerComponents/Loading'
import BackBtn from '../SmallerComponents/BackBtn'
const MainMenu = () => {
const { productItems, apiLoading } = useSelector((state) => state.filter);

  const dispatch = useDispatch()
 const [showFilter, setShowFilter] = useState(false);
 window.addEventListener('click', ()=>{
  if (showFilter===true){
   setShowFilter(false)
  }
 })
   useEffect(() => {
    dispatch(getProducts())
   }, [])
  return (
    <main className='main-wrapper'>
      <section className='main-container'>
             <BackBtn/>
        <article className='main-content'>
          <div className={showFilter ? 'main-left' : 'show-filter'}>
            <Filter />
          </div>
          <div className='main-right'>
            <div className='top-menu'>
              <p>Find Amazing Dishes</p>
              <span>Sort by: Popularity</span>
            </div>
            <div className='product-filter'>
              <p>{productItems.length} items found</p>
              <span
                onClick={(e) => {
                  e.stopPropagation()
                  setShowFilter(!showFilter)
                }}
              >
                Filter
              </span>
            </div>
             {apiLoading ? <Loading/> :
            <div className='dish-container'>
             
              {productItems.map((item) => {
                return <SingleItem product={item} />
              })}
            </div> 
             }
          </div>
        </article>
      </section>
    </main>
  )
}

export default MainMenu
