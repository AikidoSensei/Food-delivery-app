import React, { useEffect, useState } from 'react'
import './Menu.css'
import SingleItem from './SingleItem'
import { getProducts, sortCategory } from '../../features/FilterSlice';
import { useSelector, useDispatch } from 'react-redux'
import Loading from '../SmallerComponents/Loading';
const Menu = () => {
  const { productItems, apiLoading } = useSelector((state) => state.filter)
  const [data, setData] = useState([])
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProducts())    
  }, [])
  // console.log(productItems);
  return (
    <main className='menu-wrapper'>
      <section className='menu-container'>
        <h3>Choose from our popular categories</h3>
        {/* <a>{faPlusSquare}</a> */}
        <section className='list-container'>
          {/* <Categories/> */}
          <a
            className='menu-btn'
            onClick={() => {
              dispatch(getProducts())
            }}
          >
            <i className='fa-solid fa-utensils'></i>
            All
          </a>
          <a
            className='menu-btn'
            onClick={() => dispatch(sortCategory('burger'))}
          >
            <i className='fa-solid fa-hamburger'></i>
            Burger
          </a>
          <a
            className='menu-btn'
            onClick={() => dispatch(sortCategory('Pizza'))}
          >
            <i className='fa-solid fa-pizza-slice'></i>
            Pizza
          </a>
          <a
            className='menu-btn'
            onClick={() => dispatch(sortCategory('Salad'))}
          >
            <i className='fa-solid fa-leaf'></i>
            Salad
          </a>
          <a
            className='menu-btn '
            onClick={() => dispatch(sortCategory('Pastries'))}
          >
            <i className='fa-solid fa-cheese'></i>
            Pastries
          </a>
          <a
            className='menu-btn'
            onClick={() => dispatch(sortCategory('Chicken'))}
          >
            <i className='fa-solid fa-drumstick-bite'></i>
            Chiken
          </a>
          <a
            className='menu-btn'
            onClick={() => dispatch(sortCategory('Beverage'))}
          >
            <i className='fa-solid fa-cocktail'></i>
            Beverage
          </a>
          <a
            className='menu-btn'
            onClick={() => dispatch(sortCategory('Special'))}
          >
            <i className='fa-solid fa-concierge-bell'></i>
            Special
          </a>
        </section>
        <section className='food-wrapper'>
          {apiLoading ? (
            <Loading />
          ) : (
            <article className='food-container'>
              {productItems.map((item) => {
                return <SingleItem product={item} />
              })}
            </article>
          )}
        </section>
      </section>
    </main>
  )
}
// () => dispatch(burger('burger'))
export default Menu
