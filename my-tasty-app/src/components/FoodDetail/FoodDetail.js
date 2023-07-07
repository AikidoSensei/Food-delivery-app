import React, { useEffect, useState } from 'react'
import './FoodDetail.css'
import testImg from '../../Image-resources/hero-image.jpg'
import MyRating from '../SmallerComponents/MyRating'
import MyCount from '../SmallerComponents/MyCount'
import BackBtn from '../SmallerComponents/BackBtn'
import { useSelector, useDispatch } from 'react-redux'
import { getOneProduct } from '../../features/FilterSlice'
import Loading from '../SmallerComponents/Loading'
const FoodDetail = () => {
const {singleProduct, apiLoading, isError } = useSelector((state)=>state.filter);
const [myProducts, setMyProducts] = useState()

const { image, food_name,price, category, description, rating, reviews} = singleProduct;
useEffect(()=>{
  setMyProducts(myProducts);
},[])
  return (
    <main className='detail-wrapper'>
      <section className='detail-container'>
       
        <BackBtn/>
        {/* main-details section */}
        {  apiLoading ? <Loading/> :    <article className='main-detail'>
          <div className='left-detail'>
            <img className='detail-img' src={image} alt='' />
          </div>
          {/* product details on the right has 3 sections  */}
          <div className='right-detail'>
           {/* section 1 */}
            <section className='title-rating-fav'>
              <i
                className='fa-solid fa-heart detailed'
                style={{ color: 'var(--red)' }}
              ></i>
              <h2>{food_name}</h2>
              <MyRating />
              <div className='anniversary'>Anniversary Deal</div>
            </section>
            {/* section 2 */}
            <section className='detail-price'>
             <div className="price-section">
             <h2>£{price}.99</h2><span>£{Math.floor(price * 1.2)}.99</span>
             </div>
              <p>{description}<br /> </p>
              <div className="count-container">
               QTY
              <MyCount/>
              </div>
            </section>
            {/* section 3 */}
            <section className='add-cart-container'>
              <a className='add-to-cart' href='#'>
                <i class='fa-solid fa-cart-arrow-down'></i>
                ADD TO CART
              </a>
            </section>
          </div>
        <div className='similar-products'></div>
        <div className='product-reviews'></div>
        </article>}
      </section>
    </main>
  )
}

export default FoodDetail
