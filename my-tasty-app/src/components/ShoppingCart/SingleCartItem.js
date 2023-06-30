import React from 'react'
import testImg from '../../Image-resources/hero-image.jpg'
import './ShoppingCart.css'
import MyCount from '../SmallerComponents/MyCount'
const SingleCartItem = () => {
  return (
    <article className='cart-item'>
      <div className='cart-header'>
        <img src={testImg} alt='' />
        <p>Food Item hot</p>
      </div>
      <div className='cart-count'>
        <MyCount scale={'0.6'} />
      </div>
      <div className='item-price'>
        <p>£1000.99</p>
      </div>
      <div className='remove-item'>
        <i className='fa-solid fa-xmark remove-btn'></i>
      </div>
    </article>
  )
}

export default SingleCartItem
