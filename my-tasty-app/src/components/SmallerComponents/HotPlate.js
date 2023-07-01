import React from 'react'
import testImg from '../../Image-resources/hero-image.jpg'
import hotSale from '../../Image-resources/hot-sale-fixed.svg'
const HotPlate = ({price}) => {
  return (
    <div className='hot-plate-container'>
     <img src={testImg}alt="testImg" />
     <img src={hotSale} alt="" />
     <h4>£{price}</h4>
    </div>
  )
}

export default HotPlate
