import React, { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
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
import Offers from './components/Offers.js/Offers'
import Footer from './components/Footer/Footer'
import LoginSignup from './components/LoginSignup/LoginSignup'
import { useSelector, useDispatch } from 'react-redux'
import { googleLogin } from './features/UserSlice'
function App() {
  const {isLoggedIn} = useSelector((state)=>state.user)
  const dispatch = useDispatch()
// const user = true;
useEffect( ()=>{
  const getUser = ()=>{
  fetch('http://localhost:5000/auth/login/success', {
    method:'GET',
    credentials:'include',
    headers:{
      Accept:'application/json',
      'Content-Type':'application/json ',
      'Access-Control-Allow-Credentials':true,
    },
  }).then(resObject=>{
    if(resObject)
    {dispatch(googleLogin())};
  }).catch(err=>{
    console.log(err);
  })
}
  getUser()
},[])

  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={isLoggedIn && <SharedComponent />}>
          <Route index element={isLoggedIn ? <HomePage /> : <LoginSignup/>} />
          <Route path='food-detail' element={<FoodDetail />} />
          <Route path='cart' element={<ShoppingCart />}/>
          <Route path='contact' element={<Contacts/>}/>
          <Route path='menu' element={<MainMenu/>}/>
          <Route path='location' element={<Location />}/>
          <Route path='favourite' element={
            <Favourite/>
          }/>
          <Route path='login' element={
            <LoginSignup/>
          }/>
          <Route path='*' element={<PageNotFound/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  ) 
}

export default App
 