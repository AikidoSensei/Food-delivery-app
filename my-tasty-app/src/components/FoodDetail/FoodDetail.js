import React from 'react'
import './FoodDetail.css'
import testImg from '../../Image-resources/hero-image.jpg'
const FoodDetail = () => {
  return (
    <main className='detail-wrapper'>
      <section className='detail-container'>
        <div className='back-btn'>
          <i class='fa-solid fa-arrow-left'></i>
        </div>
        <article className='main-detail'>
          <div className='left-detail'>
            <img className='detail-img' src={testImg} alt='' />
          </div>
          <div className='right-detail'>
            <div className='title-rating-fav'>
              <i className='fa-sharp fa-regular fa-heart detail-fav'></i>
              <h2>Pasta Pepper Soup Ganished</h2>
              <h3>rating section</h3>
              <div className='anniversary'>Anniversary Deal</div>
            </div>
            <div className='detail-price'>
              <h2>
                <span>£</span>99 <span>150</span>
              </h2>
            </div>
          </div>
        </article>
        <div className='similar-products'></div>
        <div className='product-reviews'></div>
      </section>
    </main>
  )
}

export default FoodDetail
