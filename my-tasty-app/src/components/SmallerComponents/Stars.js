import React from 'react'

const Stars = ({rate}) => {
  return (
    <div className='immutable-wrapper'>
      <div className='immutable-container'>
        <div className='immutable-content'>
          <i
            className={
              rate >= 1
                ? 'fa-solid fa-star'
                : 'fa-regular fa-star'
            }
            style={{ color: 'var(--orange)' }}
          ></i>
          <i
            className={
              rate >= 2
                ? 'fa-solid fa-star'
                : 'fa-regular fa-star'
            }
            style={{ color: 'var(--orange)' }}
          ></i>
          <i
            className={
              rate >= 3
                ? 'fa-solid fa-star'
                : 'fa-regular fa-star'
            }
            style={{ color: 'var(--orange)' }}
          ></i>
          <i
            className={
              rate >= 4
                ? 'fa-solid fa-star'
                : 'fa-regular fa-star'
            }
            style={{ color: 'var(--orange)' }}
          ></i>
          <i
            className={
              rate >= 5
                ? 'fa-solid fa-star'
                : 'fa-regular fa-star'
            }
            style={{ color: 'var(--orange)' }}
          ></i>
        </div>
      </div>
    </div>
  )
}

export default Stars
