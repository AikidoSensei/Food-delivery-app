import React from 'react'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import LoginSignup from './components/LoginSignup/LoginSignup'
const ProtectedRoutes = () => {
 const { isLoggedIn } = useSelector((state) => state.user)
 
  return (
    <div>
     {isLoggedIn ? <Outlet/> : <LoginSignup/>}
    </div>
  )
}

export default ProtectedRoutes