import React from 'react'
import testImg from '../../Image-resources/hero-image.jpg'
import './SingleItem.css'
const SingleItem = () => {
  return (
    <div className='food-content'>
      <img src={testImg} alt='image' />
      <div>
        <i className='fa-sharp fa-solid fa-heart fav'></i>
        <h4>Food Name</h4>
        <h2>
          <span>£</span>99
        </h2>
        <p>
          <i className='fa-solid fa-star rating'></i>3.5
        </p>
        <a href=''>
          <i className='fa-sharp fa-solid fa-circle-plus add-item'></i>
        </a>
      </div>
    </div>
  )
}

export default SingleItem
