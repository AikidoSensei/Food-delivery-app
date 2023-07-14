import React from 'react'
import testImg from '../../Image-resources/hero-image.jpg'
import hotSale from '../../Image-resources/hot-sale-fixed.svg'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getOneProduct } from '../../features/FilterSlice'
const HotPlate = ({item}) => {
  const dispatch = useDispatch()
  const { id, amount, image, food_name, price, rating } = item
  return (
    <Link to='/food-detail'>
      <div
        className='hot-plate-container'
        onClick={() => {
          dispatch(getOneProduct(id))
        }}
      >
        <img src={image} alt='testImg' />
        <img src={hotSale} alt='' />
        <h4>£{price}</h4>
      </div>
    </Link>
  )
}

export default HotPlate
