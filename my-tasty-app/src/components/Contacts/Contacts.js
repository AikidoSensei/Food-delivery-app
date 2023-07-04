import React from 'react'
import './Contact.css'
import orangeCustomer from '../../Image-resources/green-customer.jpg'
import MyRating from '../SmallerComponents/MyRating'
import BackBtn from '../SmallerComponents/BackBtn'
import { Link } from 'react-router-dom'
const Contact = () => {
  return (
    <section className='contact-wrapper'>
      <div className='contact-container'>
        <div className='contact-back-btn'>
          <Link to='/'>
            <BackBtn />
          </Link>
        </div>
        <div className='contact-image'>
          <img src={orangeCustomer} alt='' />
        </div>
        <div className='left-contact'>
          <div className='value-text'>
            <h3>Our Contact</h3>
            <h2>Just a click away!</h2>
            <p>
              We offer 24/7 customer care services <br />
              Feel free to contact us on any of the contact provided below.
            </p>
          </div>
          <div className='c-container'>
            <div className='contact'>
              <div>
                <span className='logo-btn'>
                  <i class='fa-solid fa-phone fa-shake'></i>
                </span>
                <div className='f-detail'>
                  <h4>Call</h4>
                  <p>010 231 789 67</p>
                </div>
              </div>
              <button className='contact-btn'>Call now</button>
            </div>
            <div className='contact'>
              <div>
                <span className='logo-btn'>
                  <i class='fa-solid fa-message fa-bounce'></i>
                </span>
                <div className='f-detail'>
                  <h4>Chat</h4>
                  <p>010 231 789 67</p>
                </div>
              </div>
              <button className='contact-btn'>Chat</button>
            </div>
            <div className='contact'>
              <div>
                <span className='logo-btn'>
                  <i class='fa-solid fa-video fa-fade'></i>
                </span>
                <div className='f-detail'>
                  <h4>Video call</h4>
                  <p>010 231 789 67</p>
                </div>
              </div>
              <button className='contact-btn'>Call now</button>
            </div>
            <div className='contact'>
              <div>
                <span className='logo-btn'>
                  <i class='fa-solid fa-envelope fa-flip'></i>
                </span>
                <div className='f-detail'>
                  <h4>Message</h4>
                  <p>010 231 789 67</p>
                </div>
              </div>
              <button className='contact-btn'>Message</button>
            </div>
          </div>
        </div>
        <div className='review-container'>
          <div className='review-content'>
            <h2>Rate Our Customer Service</h2>
            <MyRating />
            <p>Give Us FeedBack</p>
            <textarea maxLength={'150'}></textarea>
            <button>Post FeedBack</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
