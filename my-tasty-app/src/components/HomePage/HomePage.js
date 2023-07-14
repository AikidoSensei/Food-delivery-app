import React from 'react'
import HotDeals from '../HotDeals/HotDeals'
import Hero from '../Hero/Hero'
import Menu from '../Menu/Menu'
import Offers from '../Offers.js/Offers'

const HomePage = () => {
  return (
    <div>
      <Hero/>
      <HotDeals/>
      <Offers/>
      <Menu/>
    </div>
  )
}

export default HomePage
