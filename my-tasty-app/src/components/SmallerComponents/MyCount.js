import React from 'react'
import { useState } from 'react'
import { increase, decrease, removeItem } from '../../features/CartSlice'
import './SmallerComponentsStyles.css'
import { useDispatch } from 'react-redux'
const MyCount = ({scale, amount, id}) => {
const dispatch = useDispatch()

  return (
    <div className='count-wrapper' style={{ scale: scale }}>
      <div className='count-container'>
        <span>
          <i
            className='fa-solid fa-minus'
            onClick={() => {
              if (amount === 1){
                dispatch(removeItem(id))
                return;
              }
              dispatch(decrease(id))
            }
            }
          ></i>
          <span>{amount}</span>
          <i
            className='fa-solid fa-plus'
            onClick={() =>dispatch(increase(id))}
          ></i>
        </span>
      </div>
    </div>
  )
}

export default MyCount
