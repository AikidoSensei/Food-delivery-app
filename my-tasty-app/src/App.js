import React from 'react'
import './App.css'
import FoodDetail from './components/FoodDetail/FoodDetail'
import ShoppingCart from './components/ShoppingCart/ShoppingCart'
import HomePage from './components/HomePage/HomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SharedComponent from './SharedComponent'
import Location from './components/Location/Location'
import Contacts from './components/Contacts/Contacts';
import PageNotFound from './components/SmallerComponents/PageNotFound'
import MainMenu from './components/MainMenu/MainMenu'
import Favourite from './components/Favourite/Favourite'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedComponent />}>
          <Route index element={<HomePage />} />
          <Route path='food-detail' element={<FoodDetail />} />
          <Route path='cart' element={<ShoppingCart />}/>
          <Route path='contact' element={<Contacts/>}/>
          <Route path='menu' element={<MainMenu/>}/>
          <Route path='location' element={<Location />}/>
          <Route path='favourite' element={
            <Favourite/>
          }/>
          <Route path='*' element={<PageNotFound/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  ) 
}

export default App
