import {configureStore} from '@reduxjs/toolkit'
import cartReducer from './features/CartSlice'
import productReducer from './features/ProductSlice'
import filterReducer from './features/FilterSlice'
import queryReducer from './features/QuerySlice'
import favouriteReducer from './features/FavouriteSlice'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'
import userReducer from './features/UserSlice'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, userReducer)

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    filter: filterReducer,
    products: productReducer,
    query: queryReducer,
    favourite: favouriteReducer,
    user: persistedReducer,
  },
})
export const persistor = persistStore(store)
