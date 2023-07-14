import React from 'react'
import { useState } from 'react'
const MyRating = ({rate}) => {
 const [rating, setRating] = useState('');
  return (
    <div
      style={{
        width: '100%',
        heith: '30px',
        gap: '1rem',
        paddingBottom: '20px',
      }}
    >
      <i
        className={
          rating >= 1 || rate >= 1
            ? 'fa-solid fa-star rating'
            : 'fa-regular fa-star rating'
        }
        style={{ color: 'var(--orange)' }}
        onClick={() => {
          rating === 1 ? setRating(0) : setRating(1)
        }}
      ></i>
      <i
        className={
          rating >= 2 || rate >= 2
            ? 'fa-solid fa-star rating'
            : 'fa-regular fa-star rating'
        }
        style={{ color: 'var(--orange)' }}
        onClick={() => setRating(2)}
      ></i>
      <i
        className={
          rating >= 3 || rate >= 3
            ? 'fa-solid fa-star rating'
            : 'fa-regular fa-star rating'
        }
        style={{ color: 'var(--orange)' }}
        onClick={() => setRating(3)}
      ></i>
      <i
        className={
          rating >= 4 || rate >= 4
            ? 'fa-solid fa-star rating'
            : 'fa-regular fa-star rating'
        }
        style={{ color: 'var(--orange)' }}
        onClick={() => setRating(4)}
      ></i>
      <i
        className={
          rating >= 5 || rate >= 5
             ? 'fa-solid fa-star rating'
            : 'fa-regular fa-star rating'
        }
        style={{ color: 'var(--orange)' }}
        onClick={() => setRating(5)}
      ></i>
    </div>
  )
}

export default MyRating
