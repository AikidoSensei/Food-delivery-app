import React from 'react'
import { useState } from 'react'
import './SmallerComponentsStyles.css'
const MyCount = ({scale}) => {
  return (
    <div  className='count-wrapper' style={{scale:scale}}>
      <div className='count-container'>
        <span>
          <i className='fa-solid fa-minus'></i>
            <span>1</span>
          <i className='fa-solid fa-plus'></i>
        </span>
      </div>
    </div>
  )
}

export default MyCount
