import {configureStore} from '@reduxjs/toolkit'
import cartReducer from './features/CartSlice'
import productReducer from './features/ProductSlice'
import filterReducer from './features/FilterSlice'
import queryReducer from './features/QuerySlice'
import favouriteReducer from './features/FavouriteSlice'

import userReducer from './features/UserSlice'
export const  store = configureStore({
 reducer:{
  cart:cartReducer,
  filter:filterReducer,
  products:productReducer,
  query:queryReducer,
  favourite:favouriteReducer,
  user:userReducer,
 }
})