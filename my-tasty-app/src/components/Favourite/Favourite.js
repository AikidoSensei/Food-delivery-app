import React, {useState} from 'react'
import './Favourite.css'
import testImg from '../../Image-resources/hero-image.jpg'
import { useDispatch, useSelector } from 'react-redux'
import BackBtn from '../SmallerComponents/BackBtn'
import { removeFromFavourite } from '../../features/FavouriteSlice'
import { addToCart } from '../../features/CartSlice'
import SingleFavourite from './SingleFavourite'
const Favourite = () => {
  const dispatch = useDispatch()
  const {favouriteItems} = useSelector((state)=>state.favourite)
  console.log(favouriteItems);
  const [showCart, setShowCart] = useState(true)
 return (
    <main className='favourite-wrapper'>
      <section className='favourite-container'>
        <div className="main-top-fav">
      <BackBtn/>
      <h2>Your favourites</h2>
        </div>
     
        {favouriteItems.length < 1 ?
        <h2 className='no-listed'>You have no favourite listed</h2> :
        favouriteItems.map((fav)=>{
          return <SingleFavourite fav={fav}/>
        })}
      </section>
    </main>
  )
}

export default Favourite
