import React, { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import FoodDetail from './components/FoodDetail/FoodDetail'
import ShoppingCart from './components/ShoppingCart/ShoppingCart'
import HomePage from './components/HomePage/HomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SharedComponent from './SharedComponent'
import Location from './components/Location/Location'
import Contacts from './components/Contacts/Contacts'
import PageNotFound from './components/SmallerComponents/PageNotFound'
import MainMenu from './components/MainMenu/MainMenu'
import Favourite from './components/Favourite/Favourite'

import LoginSignup from './components/LoginSignup/LoginSignup'
import { useSelector, useDispatch } from 'react-redux'
import { googleLogin } from './features/UserSlice'
import ProtectedRoutes from './ProtectedRoute'
function App() {
  const { isLoggedIn } = useSelector((state) => state.user)
  const dispatch = useDispatch()
  // const user = true;

  useEffect(() => {
    const getUser = () => {
      fetch('https://tasty-backend-yula.onrender.com/auth/login/success', {
        method: 'GET',
        credentials: 'include',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json ',
          'Access-Control-Allow-Credentials': true,
        },
      })
        .then((resObject) => {
          if (resObject) {
            dispatch(googleLogin())
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
    getUser()
  }, [isLoggedIn])

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route path='/' element={<SharedComponent />}>
            <Route index element={<HomePage />} />
            <Route path='food-detail' element={<FoodDetail />} />
            <Route path='cart' element={<ShoppingCart />} />
            <Route path='contact' element={<Contacts />} />
            <Route path='menu' element={<MainMenu />} />
            <Route path='location' element={<Location />} />
            <Route path='favourite' element={<Favourite />} />
          </Route>
          <Route path='login' element={<LoginSignup />} />
          <Route path='*' element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
