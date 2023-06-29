import React from 'react'
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero'
import Menu from './components/Menu/Menu';
import FoodDetail from './components/FoodDetail/FoodDetail';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Hero/>
     <Menu/>
     <FoodDetail/>
     <ShoppingCart/>
    </div>
  );
}

export default App;
