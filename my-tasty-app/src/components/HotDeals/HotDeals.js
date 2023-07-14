import React, { useEffect, useState, useRef } from 'react'
import HotPlate from '../SmallerComponents/HotPlate'
import './HotDeals.css'
import { useDispatch, useSelector } from 'react-redux';
import { getMyHotDeals } from '../../features/FilterSlice';

const HotDeals = () => {
 const ref = useRef(null);
 const dispatch = useDispatch()
  const {hotDeals}= useSelector((state)=>state.filter)

  useEffect(()=>{
    dispatch(getMyHotDeals())
  },[])
  return (
    <div className='hot-wrapper'>
      <h3>Hot deals</h3>
      <div className='hot-container' ref={ref}>
        <div className='hot-content'>
          {
            hotDeals.map((item)=>{
             return (  <HotPlate item={item} />)

            })
          }
        </div>
      </div>
    </div>
  )
}

export default HotDeals
