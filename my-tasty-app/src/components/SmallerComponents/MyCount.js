import React from 'react'
import { useState } from 'react'
import './SmallerComponentsStyles.css'
const MyCount = ({scale}) => {
  const [count, setCount] = useState(0)
  return (
    <div className='count-wrapper' style={{ scale: scale }}>
      <div className='count-container'>
        <span>
          <i
            className='fa-solid fa-minus'
            onClick={() => {
              if (count === 0){
                return;
              }
              setCount(count - 1)
            }
            }
          ></i>
          <span>{count}</span>
          <i
            className='fa-solid fa-plus'
            onClick={() => setCount(count + 1)}
          ></i>
        </span>
      </div>
    </div>
  )
}

export default MyCount
