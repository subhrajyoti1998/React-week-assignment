import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import MyCartItem from './components/MyCartItem';
import AllCourses from './components/AllCourses';
import React, { useState } from 'react'
import CourseDetails from './components/CourseDetails';
import WishList from './components/WishList';
import Profile from './components/Profile';

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
    let addedToCartMsgAlert = false;
    if ( ! cartItems.includes(item)) {
      if (wishListItems.includes(item)) { // Add items from WishList to Cart
        addedToCartMsgAlert = true;
        alert('You have successfully saved the Course in Cart.');
        setWishListItems(wishListItems.filter(record => {
            return record.id !== item.id;
        }))
      }

      if ( !addedToCartMsgAlert) {
        alert('You have successfully saved the Course in Cart.');
      }
      setCartItems(prev => [...prev, item]);
    }
  }

  const [wishListItems, setWishListItems] = useState([]);
  let addToWishList = (itemToAdd) => {
    if ( ! wishListItems.includes(itemToAdd)) {
      setWishListItems(prev => [...prev, itemToAdd]);
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
                                                      addToWishList = { addToWishList }
                                                      wishListItems = { wishListItems }
                                                      totalAmount = { totalPurchaseAmount } />}/>
            
            <Route path = "/cart" element = {<MyCartItem setCartItems = { setCartItems }
                                                          cartItems = { cartItems }
                                                          totalAmount = { totalPurchaseAmount }
                                                          addToWishList = { addToWishList } />}/>
            
            <Route path = "/courseDetails" element = {<CourseDetails addItem = { addToCart } />}/>

            <Route path = "/wishlist" element = {<WishList wishListItems = { wishListItems }
                                                            addToCart = { addToCart }
                                                            cartItems = { cartItems }
                                                            setWishListItems = { setWishListItems } />}/>
            
            <Route path = "/profile" element = {<Profile />}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;