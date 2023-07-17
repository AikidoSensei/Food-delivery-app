import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromFavourite } from '../../features/FavouriteSlice'
import { addToCart } from '../../features/CartSlice'
const SingleFavourite = ({ fav }) => {
  const dispatch = useDispatch()
  const { id, image, food_name, price, amount } = fav
  const [showCart, setShowCart] = useState(true)
  const { cartItems, total } = useSelector((state) => state.cart)
useEffect(()=>{
  cartItems.find((item) => {
      if (item.id === id) {
       console.log(item);
       setShowCart(false)
      }
    })
},[])
  
  return (
    <div className='favourite-content'>
      <div className='favourite'>
        <div className='fav-image'>
          <img src={image} alt='test' />
        </div>
        <div className='favourite-detail'>
          <div className='top-fav'>
            <p>{food_name}</p>
            {showCart && (
              <i
                className='fa-solid fa-cart-plus'
                onClick={() => {
                  dispatch(addToCart({ id, image, food_name, price, amount }))
                  setShowCart(false)
                }}
              ></i>
            )}
          </div>
          <div className='bottom-fav'>
            <div className='price-fav'>
              <h3>£{price}</h3>
              <span>.99</span>
            </div>
            <p
              onClick={(e) => {
                e.stopPropagation()
                dispatch(removeFromFavourite(id))
              }}
            >
              REMOVE
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleFavourite
