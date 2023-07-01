import React from 'react'
import { useRef } from 'react'
import './Location.css'
const Location = () => {
 const myMap = useRef(null)
  return (
    <div className='location-wrapper'>
     <div className="location-container">
      <div className="map-container">
       <div className="map" ref={myMap}>

       </div>

      </div>
      <div className="location-details">

      </div>
     </div>
     
    </div>
  )
}

export default Location
