import React, { useEffect } from 'react'
import './ShoppingCart.css'
import BackBtn from '../SmallerComponents/BackBtn'
import SingleCartItem from './SingleCartItem'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ShoppingCart = () => {
  const { cartItems, total } = useSelector((state) => state.cart)
  useEffect(() => {
    console.log(cartItems)
  }, [cartItems])
  const handleCheckout = ()=>{
    fetch('/create-checkout-session', {
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        cartItems
      })
    }).then(res=>{
      if(res.ok)return res.json()
      return res.json().then(json =>Promise.reject(json))
    }).then(({url})=>{
  window.location = url
}).catch(e=>{
  console.error(e.error)
})
     
  }
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
              <div className='left-content'>
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
                <div className='checkout-container'>
                  <h2>
                    £0.00 Discount<span>Pay £{total.toFixed(2)}</span>
                  </h2>
                 
                    <button onClick={handleCheckout}>checkout</button>

                </div>
              </div>
            </div>
            <div className='right-cart'>
              <div className='cart-items-container'>
                {cartItems.length < 1 ? (
                  <div className='empty-cart'>
                    <i class='fa-solid fa-cart-shopping'></i>
                    <h2>Your cart is empty</h2>
                  </div>
                ) : (
                  cartItems.map((item) => {
                    return <SingleCartItem product={item} />
                  })
                )}
              </div>
            </div>
          </div>
        </article>
        {/* TOTAL SECTION */}
        <div className='total-container'>total: £{total.toFixed(2)}</div>
      </section>
    </main>
  )
}

export default ShoppingCart
