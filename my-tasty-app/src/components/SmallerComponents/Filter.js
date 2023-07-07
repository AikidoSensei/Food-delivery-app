import React from 'react'
import PriceSlider from './PriceSlider'
import Stars from './Stars'
import { useDispatch } from 'react-redux'
import {
  getProducts,
  sortCategory,
  sortRating,
} from '../../features/FilterSlice'
const Filter = () => {
  const dispatch = useDispatch()
  return (
    <div
      className='category-wrapper'
      onClick={(e) => {
        e.stopPropagation()
      }}
    >
      <p>Category</p>
      <section className='category-container'>
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
          Buger
        </a>
        <a className='menu-btn' onClick={() => dispatch(sortCategory('Pizza'))}>
          <i className='fa-solid fa-pizza-slice'></i>
          Pizza
        </a>
        <a className='menu-btn' onClick={() => dispatch(sortCategory('Salad'))}>
          <i className='fa-solid fa-leaf'></i>
          Salad
        </a>
        <a
          className='menu-btn'
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
      <PriceSlider />
      <div className='rating-sort'>
        <p>Product Rating</p>
        <form action=''>
          <div className='rater'>
            <input
              type='radio'
              name='rate'
              value='4'
              onClick={(e) => dispatch(sortRating(e.target.value))}
            />
            <Stars rate={4} /> <span>& Above</span>
          </div>
          <div className='rater'>
            <input
              type='radio'
              name='rate'
              value='3'
              onClick={(e) => dispatch(sortRating(e.target.value))}
            />
            <Stars rate={3} /> <span>& Above</span>
          </div>
          <div className='rater'>
            <input
              type='radio'
              name='rate'
              value='2'
              onClick={(e) => dispatch(sortRating(e.target.value))}
            />
            <Stars rate={2} /> <span>& Above</span>
          </div>
          <div className='rater'>
            <input
              type='radio'
              name='rate'
              value='1'
              onClick={(e) => dispatch(sortRating(e.target.value))}
            />
            <Stars rate={1} /> <span>& Above</span>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Filter
