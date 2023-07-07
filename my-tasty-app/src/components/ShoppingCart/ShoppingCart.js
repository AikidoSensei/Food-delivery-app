import React from 'react'
import './ShoppingCart.css'
import BackBtn from '../SmallerComponents/BackBtn'
import SingleCartItem from './SingleCartItem'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const ShoppingCart = () => {
  const {cartItems} = useSelector((state)=>state.cart)
  console.log(cartItems);
  return (
    <main className='cart-wrapper'>
      <section className='cart-container'>
        <div className='back-title'>
          <Link to='/'>
          <BackBtn />
          </Link>
          <h2>Your Shopping Cart</h2>
        </div>
        {/* CART CONTAINER */}
        <article className='cart-content'>
          <div className='cart-discount'>
            <div className='left-discount'>
             <div className="left-content">
              <div className='discount-card'>
                <div>
                  <h5>Current Discount</h5>
                  <h5>Tasty</h5>
                </div>
                <div>
                  <p>£0.00</p>
                  <i class='fa-solid fa-credit-card panel'></i>
                </div>
              </div>
              <div className='discount-card2'></div>
             </div>
            </div>
            <div className='right-cart'>
             <div className="cart-items-container">
              {
                cartItems.map((item)=>{
                 return <SingleCartItem product={item}/>
                })
              }
              
             </div>       
            </div>
          </div>
        </article>
        {/* TOTAL SECTION */}
        <div className='total-container'>
         total: £100
        </div>
      </section>
    </main>
  )
}

export default ShoppingCart
