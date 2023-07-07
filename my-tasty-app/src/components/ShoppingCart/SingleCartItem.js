import React from 'react'
import testImg from '../../Image-resources/hero-image.jpg'
import './ShoppingCart.css'
import MyCount from '../SmallerComponents/MyCount'
const SingleCartItem = ({product}) => {
  const {id, food_name, image, price, amount} = product
  return (
    <article className='cart-item'>
      <div className='cart-header'>
        <img src={image} alt='' />
        <p>{food_name}</p>
      </div>
      <div className='cart-count'>
        <MyCount scale={'0.6'} />
      </div>
      <div className='item-price'>
        <p>£{price}.99</p>
      </div>
      <div className='remove-item'>
        <i className='fa-solid fa-xmark remove-btn'></i>
      </div>
    </article>
  )
}

export default SingleCartItem
