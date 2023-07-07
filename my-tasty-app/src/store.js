import {configureStore} from '@reduxjs/toolkit'
import cartReducer from './features/CartSlice'
import productReducer from './features/ProductSlice'
import filterReducer from './features/FilterSlice'
export const  store = configureStore({
 reducer:{
  cart:cartReducer,
  filter:filterReducer,
  products:productReducer
 }
})