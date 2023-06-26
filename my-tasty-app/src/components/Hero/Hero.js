import React from 'react'
import './Hero.css'
import plate1 from '../../Image-resources/tasty-plate2.png'
const Hero = () => {
  return (
    <main>
      <section className='hero-container'>
        <article className='hero-slate'>
          <div className='slate'>
            <div className='left-hero'>
              <h1>
              TASTY <br /> JUST GOT <br />
              <span>Tastier!!!</span>
              </h1>
              <a className='order-now' href="#">Order Now</a>
            </div>
            <div className='right-hero'>
              {/* <img id='plate1' src={plate1}/> */}
            </div>
          </div>
        </article>
      </section>
    </main>
  )
}

export default Hero
