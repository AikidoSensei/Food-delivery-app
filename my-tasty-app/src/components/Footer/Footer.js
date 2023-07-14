import React from 'react'
import './Footer.css'
import footer from '../../Image-resources/footer-2.png'
import footerLogo from '../../Image-resources/logo-4.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
const element = <FontAwesomeIcon icon={faEnvelope} />
const Footer = () => {
  return (
    <footer className='footer-wrapper'>
      <div className='footer-container'>
        <div className='footer-image'>
          <img src={footer} alt='' />
          <FontAwesomeIcon icon={faEnvelope} />
        </div>
        <div className='footer-content'>
          <div className='left-footer'>
            <img src={footerLogo} alt='footer-logo' />

            <p>
              Tasty is a demo e-commerce store
              <br />
              developed by Adavize Abbas.
            </p>
            <hr />
            <div className='footer-contact'>
              <p>
                <span>
                  <i class='fa-solid fa-phone'></i>
                </span>
                +234 812 444 5681
              </p>
              <p>
                <span>
                  <i class='fa-solid fa-calendar-days'></i>
                </span>
                Mon-Sun: 07:00AM - 5:00PM
              </p>
              <p>
                <span>icon</span>4730 Crystal Ville Nottingham NOT 90012
              </p>
            </div>
          </div>
          <div className='right-footer'>
            <p>suberuabbas@gmail.com</p>
            <div className='quick-links'>
              <Link to='/about'> About </Link>
              <Link to='/location'> Location </Link>
            </div>
            <hr />
            <p>Social Media</p>
            <div className='social-media'>
              <i class='fa-brands fa-twitter'></i>
              <i class='fa-brands fa-github'></i>
              <i class='fa-brands fa-linkedin'></i>
            </div>
            <hr />
            <p>
              &copy; 2023 Original Images from Pixels <br />
              Designed by Adavize Abbas
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer