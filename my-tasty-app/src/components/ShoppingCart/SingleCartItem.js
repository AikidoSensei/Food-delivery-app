import React from 'react'
import testImg from '../../Image-resources/hero-image.jpg'
import './ShoppingCart.css'
import MyCount from '../SmallerComponents/MyCount'
import { useDispatch } from 'react-redux'
import { removeItem } from '../../features/CartSlice'
const SingleCartItem = ({product}) => {
  const {id, food_name, image, price, amount} = product
  const dispatch = useDispatch()
  return (
    <article className='cart-item'>
      <div className='cart-header'>
        <img src={image} alt='image' />
        <p>{food_name}</p>
      </div>
      <div className='cart-count'>
        <MyCount amount={amount} id={id} scale={'0.6'} />
      </div>
      <div className='item-cart-price'>
        <p>£{price}.99</p>
      </div>
      <div className='remove-item' onClick={()=>{dispatch(removeItem(id))}}>
        <i className='fa-solid fa-xmark remove-btn'></i>
      </div>
    </article>
  )
}

export default SingleCartItem
