import React from 'react'
import NavBar from './components/NavBar/NavBar'
import {Link, Outlet} from 'react-router-dom'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { evaluateTotal } from './features/CartSlice'
import Footer from './components/Footer/Footer'

const SharedComponent = () => {
  const {cartItems} =  useSelector((state)=>state.cart)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(evaluateTotal())
  },[cartItems])
  return (
    <div>
      <NavBar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default SharedComponent
