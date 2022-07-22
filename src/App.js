import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import MyCartItem from './components/MyCartItem';
import AllCourses from './components/AllCourses';
import React, { useState } from 'react'
import CourseDetails from './components/CourseDetails';


function App() {

  const [totalAmount, setTotalAmount] = useState(0.0);
  let totalPurchaseAmount = () => {
    let amount = 0.0;
    for (let i = 0; i < cartItems.length; i++) {
      amount += parseFloat(cartItems[i].discounted_price || cartItems[i].actual_price);
    }
    return amount;
  }

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
                                                      cartItems = { cartItems }
                                                      totalAmount = { totalPurchaseAmount } />}/>
            
            <Route path = "/cart" element = {<MyCartItem setCartItems = { setCartItems }
                                                          cartItems = { cartItems }
                                                          totalAmount = { totalPurchaseAmount } />}/>
            
            <Route path = "/courseDetails" element = {<CourseDetails addItem = { addToCart } />}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;