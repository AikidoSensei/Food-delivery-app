import React, { useEffect, useState } from 'react'
import './FoodDetail.css'
import MyRating from '../SmallerComponents/MyRating'
import MyCount from '../SmallerComponents/MyCount'
import BackBtn from '../SmallerComponents/BackBtn'
import { useSelector, useDispatch } from 'react-redux'

import Loading from '../SmallerComponents/Loading'
import { addToCart, removeItem } from '../../features/CartSlice'
import {
  addToFavourite,
  removeFromFavourite,
} from '../../features/FavouriteSlice'

const FoodDetail = () => {
  const dispatch = useDispatch()
  const [showAdded, setShowAdded] = useState(false)
  const [showFav, setShowFav] = useState(false)
  const { singleProduct, apiLoading } = useSelector((state) => state.filter)

  const { cartItems } = useSelector((state) => state.cart)
  const { favouriteItems } = useSelector((state) => state.favourite)

  useEffect(() => {
    cartItems.find((item) => {
      if (item.id === id) {
        setShowAdded(true)
      }
    })
    favouriteItems.find((item) => {
      if (item.id === id) {
        setShowFav(true)
      }
    })
  }, [])

  const {
    id,
    image,
    food_name,
    price,
    category,
    amount,
    description,
    rating,
    reviews,
  } = singleProduct

  // GET UNIQUE CART ITEM AMOUNT
  const amountFunc = () => {
    let uniqueAmount = cartItems.find((item) => {
      if (item.id === id) {
        return item
      }
    })
    if (!uniqueAmount) {
      dispatch(removeItem(id))
      setShowAdded(false)
      return 1
    }
    return uniqueAmount.amount
  }
  return (
    <main className='detail-wrapper'>
      <section className='detail-container'>
        <BackBtn />
        {/* main-details section */}
        {apiLoading ? (
          <Loading />
        ) : (
          <article className='main-detail'>
            <div className='left-detail'>
              <img className='detail-img' src={image} alt='' />
            </div>
            {/* product details on the right has 3 sections  */}
            <div className='right-detail'>
              {/* section 1 */}
              <section className='title-rating-fav'>
                <div className='fav-container-fd'>
                  {showFav ? (
                    <i
                      style={{ color: 'var(--red)', cursor: 'pointer' }}
                      className='fa-sharp fa-solid fa-heart fav'
                      onClick={(e) => {
                        e.stopPropagation()
                        dispatch(removeFromFavourite(id))
                        setShowFav(false)
                      }}
                    ></i>
                  ) : (
                    <i
                      style={{ color: 'var(--red)', cursor: 'pointer' }}
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
                <h2>{food_name}</h2>

                <MyRating rate={rating} />
                <div className='anniversary'>Anniversary Deal</div>
              </section>
              {/* section 2 */}
              <section className='detail-price'>
                <div className='price-section'>
                  <h2>£{price}.99</h2>
                  <span>£{Math.floor(price * 1.2)}.99</span>
                </div>
                <p>
                  {description}
                  <br />
                </p>
                {showAdded && (
                  <div className='count-container'>
                    QTY
                    <MyCount amount={amountFunc()} id={id} />
                  </div>
                )}
              </section>
              {/* section 3 */}
              <section className='add-cart-container'>
                {showAdded ? (
                  <a
                    className='remove-from-cart'
                    onClick={(e) => {
                      e.stopPropagation()
                      dispatch(removeItem(id))
                      setShowAdded(false)
                    }}
                  >
                    <i class='fa-solid fa-trash'></i>
                    REMOVE FROM CART
                  </a>
                ) : (
                  <a
                    className='add-to-cart'
                    onClick={(e) => {
                      e.stopPropagation()
                      dispatch(
                        addToCart({ id, image, food_name, price, amount })
                      )
                      setShowAdded(true)
                    }}
                  >
                    <i class='fa-solid fa-cart-arrow-down'></i>
                    ADD TO CART
                  </a>
                )}
              </section>
            </div>
            <section className='review-similar'>
              <div className='similar-products'></div>
              <div className='product-reviews'>
                <h2>Product Reviews</h2>
                {reviews.map((review) => {
                  return <p>{review}</p>
                })}
              </div>
            </section>
          </article>
        )}
      </section>
    </main>
  )
}

export default FoodDetail
