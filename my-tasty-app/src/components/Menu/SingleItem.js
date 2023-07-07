import React from 'react'
import testImg from '../../Image-resources/hero-image.jpg'
import './SingleItem.css'
import Stars from '../SmallerComponents/Stars'
import { getOneProduct } from '../../features/FilterSlice'
import { addToCart } from '../../features/CartSlice'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
const SingleItem = ({product}) => {
  const  {id, amount, image,food_name, price, rating} = product;
  const dispatch = useDispatch();

  return (
    <article
      className='food-content'
      onClick={() => {
        dispatch(getOneProduct(id))
      }}
    >
      <Link to='/food-detail'>
        <img src={image} alt='image' />
      </Link>
      <div className='food-info'>
        <h5>{food_name}</h5>
        <div className='star-wrap'>
          <Stars rate={rating} scale={'0.6'} />
        </div>
        <div className='item-price'>
          <h3>£{price}</h3>
          <span>.99</span>
        </div>
        <div className='fav-container'>
          <i className='fa-sharp fa-solid fa-heart fav'></i>
        </div>
        <a
          className='add-item'
          onClick={(e) => {
            e.stopPropagation()
            dispatch(addToCart({ image, food_name, price, amount }))
          }}
        >
          <i className='fa-sharp fa-solid fa-circle-plus add-item'></i>
        </a>
      </div>
    </article>
  )
}

export default SingleItem


