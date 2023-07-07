import React from 'react'
import './Favourite.css'
import testImg from '../../Image-resources/hero-image.jpg'
const Favourite = () => {
  return (
    <main className='favourite-wrapper'>
      <section className='favourite-container'>
       <div className="favourite-content">
        <div className='favourite'>
         <div className="fav-image">
          <img src={testImg} alt='test' />
         </div>
          <div className='favourite-detail'>
            <div className='top-fav'>
              <p>Chicken Jollof</p>
              <button>ORDER</button>
            </div>
            <div className='bottom-fav'>
              <div className='price-fav'>
                <h3>£99</h3>
                <span>.99</span>
              </div>
              <p>REMOVE</p>
            </div>
          </div>
        </div>
       </div>
      </section>
    </main>
  )
}

export default Favourite
