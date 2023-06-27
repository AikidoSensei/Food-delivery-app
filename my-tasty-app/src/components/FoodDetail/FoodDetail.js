import React from 'react'
import './FoodDetail.css'
import testImg from '../../Image-resources/hero-image.jpg'
import MyRating from '../SmallerComponents/MyRating'
import MyCount from '../SmallerComponents/MyCount'
const FoodDetail = () => {
  return (
    <main className='detail-wrapper'>
      <section className='detail-container'>
       
        <div className='back-btn'>
          <i class='fa-solid fa-arrow-left'></i>
        </div>
        {/* main-details section */}
        <article className='main-detail'>
          <div className='left-detail'>
            <img className='detail-img' src={testImg} alt='' />
          </div>
          {/* product details on the right has 3 sections  */}
          <div className='right-detail'>
           {/* section 1 */}
            <section className='title-rating-fav'>
              <i
                className='fa-solid fa-heart detailed'
                style={{ color: 'var(--red)' }}
              ></i>
              <h2>Pasta Pepper Soup Ganished</h2>
              <MyRating />
              <div className='anniversary'>Anniversary Deal</div>
            </section>
            {/* section 2 */}
            <section className='detail-price'>
             <div className="price-section">
             <h2>£99.99</h2><span>£150.99</span>
             </div>
              <p>Lorem ipsum dolor sit amet.
              Suscipit eum eos hic maxime.
              Natus, excepturi? Voluptatum, facilis repellat.
              Distinctio, dicta maiores. Molestiae, nobis.
              Libero corrupti iusto tenetur alias! <br /> </p>
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
        </article>
        <div className='similar-products'></div>
        <div className='product-reviews'></div>
      </section>
    </main>
  )
}

export default FoodDetail
