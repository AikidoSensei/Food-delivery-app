import React from 'react'
import notFound from '../../Image-resources/not-found.jpg'
import { Link } from 'react-router-dom'
const PageNotFound = () => {
  return (
    <main className='not-found-wrapper'>
      <section className='not-found-container'>
        <div className='not-found-content'>
          <h2>404 We Can't seem to find that page</h2>
          <img src={notFound} alt='not-found' />
          <p>Back to HomePage</p>
          <Link to='/'>
          <button>
            <i class='fa-solid fa-house'></i>Back To Homepage
          </button>
          </Link>
        </div>
      </section>
    </main>
  )
}

export default PageNotFound
