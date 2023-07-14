import React, {useState} from 'react'
import testImg from '../../Image-resources/hero-image.jpg'
import './SingleItem.css'
import Stars from '../SmallerComponents/Stars'
import { getOneProduct } from '../../features/FilterSlice'
import { addToCart,removeItem } from '../../features/CartSlice'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToFavourite, removeFromFavourite } from '../../features/FavouriteSlice'
const SingleItem = ({product}) => {
  const  {id, amount, image,food_name, price, rating} = product;
  const dispatch = useDispatch();
  const [showAdded, setShowAdded] = useState(false)
  const [showFav, setShowFav] = useState(false)
  return (
    <article className='food-content'>
      {showAdded && (
        <div className='added-modal'>
          <p>item added</p>
        </div>
      )}
      <Link to='/food-detail'>
        <img
          src={image}
          alt='image'
          onClick={() => {
            dispatch(getOneProduct(id))
          }}
        />
      </Link>
      <div className='food-info'>
        <h5>{food_name}</h5>
        <div className='star-wrap'>
          <Stars rate={rating} scale={'0.6'} />
        </div>
        <div className='item-price'>
          <h3>£{price}</h3>
          <span>.99</span>
        </div>
        <div className='fav-container'>
          {showFav ? (
            <i
              className='fa-sharp fa-solid fa-heart fav'
              onClick={(e) => {
                e.stopPropagation()
                dispatch(removeFromFavourite(id))
                setShowFav(false)
              }}
            ></i>
          ) : (
            <i
              className='fa-sharp fa-regular fa-heart fav'
              onClick={(e) => {
                e.stopPropagation()
                dispatch(
                  addToFavourite({
                    id,
                    image,
                    food_name,
                    price,
                    rating,
                    amount,
                  })
                )
                setShowFav(true)
              }}
            ></i>
          )}
        </div>
        {showAdded ? (
          <a
            className='add-item'
            onClick={(e) => {
              e.stopPropagation()
              dispatch(removeItem(id))
              setShowAdded(false)
            }}
          >
            <i className='fa-sharp fa-solid fa-circle-plus add-item menu-remove-item'></i>
          </a>
        ) : (
          <a
            className='add-item'
            onClick={(e) => {
              e.stopPropagation()
              dispatch(addToCart({ id, image, food_name, price, amount }))
              setShowAdded(true)
            }}
          >
            <i className='fa-sharp fa-solid fa-circle-plus add-item'></i>
          </a>
        )}
      </div>
    </article>
  )
}

export default SingleItem


