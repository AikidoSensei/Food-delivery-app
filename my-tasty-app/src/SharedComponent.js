import React from 'react'
import NavBar from './components/NavBar/NavBar'
import {Link, Outlet} from 'react-router-dom'
const SharedComponent = () => {
  return (
    <div>
      <NavBar/>
      <Outlet/>
    </div>
  )
}

export default SharedComponent
