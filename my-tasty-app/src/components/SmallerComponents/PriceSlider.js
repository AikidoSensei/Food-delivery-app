import React, { useRef, useEffect } from 'react'
import { useState } from 'react'
import { sortPrice } from '../../features/FilterSlice'
import { useDispatch } from 'react-redux'
const PriceSlider = () => {
  const [maxPrice, setMaxPrice] = useState('')
  const [showLimit, setShowLimit] = useState(false)
  const dispatch = useDispatch()
  const handleEditPrice = (e) => {
    if (maxPrice > 100 || maxPrice.toString().length > 2) {
      setMaxPrice('')
    } else {
      setMaxPrice(e.target.value)
    }
  }

  return (
    <section className='slider-wrapper'>
      <article className='slider-container'>
        <div className='slider-content'>
          <div className='slider-header'>
            <p>Max-Price(£)</p>
            <span
              onClick={() => {
                dispatch(sortPrice(maxPrice))
              }}
            >
              Apply
            </span>
          </div>
          <div className='range-container'>
            <div className='input-container'>
              <input
                type='number'
                min='0'
                max='100'
                value={maxPrice}
                onChange={handleEditPrice}
              />
            </div>
            <div className='slider-range'>
              <span>0</span>
              <input
                type='range'
                name=''
                id=''
                min='0'
                max='100'
                onChange={(e) => {
                  setMaxPrice(e.target.value)
                }}
              />
              <span>100</span>
            </div>
          </div>
        </div>
      </article>
    </section>
  )
}

export default PriceSlider
