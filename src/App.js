import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import MyCartItem from './components/MyCartItem';
import AllCourses from './components/AllCourses';
import React, { useEffect, useState } from 'react'
import CourseDetails from './components/CourseDetails';


function App() {

  const [totalPrice, setTotalPrice] = useState(0.0);
  const [cartItems, setCartItems] = useState([]);
  let addToCart = (item) => {
    if ( ! cartItems.includes(item)) {
      setCartItems(prev => [...prev, item]);
    }
  }

  return (
    <div className = "App">
      <BrowserRouter>
        <Header />
        <div className='container'>
          <Routes>
            <Route path = "/" element = {<AllCourses addElement = { addToCart }
                                                      cartItems = { cartItems } />}/>
            
            <Route path = "/cart" element = {<MyCartItem setCartItems = { setCartItems }
                                                          cartItems = { cartItems } />}/>
            
            <Route path = "/courseDetails" element = {<CourseDetails />}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;