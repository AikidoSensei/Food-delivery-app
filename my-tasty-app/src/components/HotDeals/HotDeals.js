import React, { useEffect, useState, useRef } from 'react'
import HotPlate from '../SmallerComponents/HotPlate'
import './HotDeals.css'
const HotDeals = () => {
 const [scroll, setScroll]= useState(true);
 const ref = useRef(null);

  return (
    <div className='hot-wrapper'>
      <h3>Hot deals</h3>
      <div className='hot-container' ref={ref}>
        <div className={scroll ? 'hot-content active' : 'hot-content'} >
          <HotPlate price={1} />
          <HotPlate price={2} />
          <HotPlate price={3} />
          <HotPlate price={4} />
          <HotPlate price={5} />
          <HotPlate price={6} />
          <HotPlate price={7} />
          <HotPlate price={8} />
          <HotPlate price={9} />
          <HotPlate price={10} />
          <HotPlate price={11} />
        </div>
      </div>
    </div>
  )
}

export default HotDeals
