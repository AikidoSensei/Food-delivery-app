import React from 'react'

const Loading = () => {
  return (
    <main className='loading-wrapper'>
      <section className='loading-container'>
        <article className='loading-content'>
          <div className='loading-icons'>
            <i className='fa-solid fa-utensils fa-bounce'></i>
            <i class='fa-solid fa-mug-hot fa-bounce'></i>
            <i className='fa-solid fa-pizza-slice fa-bounce'></i>
          </div>
          <h2>Loading...</h2>
        </article>
      </section>
    </main>
  )
}

export default Loading
