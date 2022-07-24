import React from 'react'
import { useState } from 'react';

function MyCartItem( { setCartItems, cartItems, addToWishList } ) {
    /*let removeFromCart = (item) => {
        let updatedCart = cartItems.filter((record) => record.id !== item.id);
        setCartItems(updatedCart);
        //setTotalPrice(prev => prev - parseFloat(item.discounted_price || item.actual_price));
    }*/

    /*let totalAmount = () => {
        let amount = 0.0;
        cartItems.forEach(item => {
            amount += parseFloat(item.discounted_price || item.actual_price);
        });
        return amount;
    }*/

    //const [totalAmount, setTotalAmount] = useState();
    // const totalAmount = () => {
    //     return Object.values(cartItems)
    //                  .reduce((total, value) => total + value, 0);
    // }

    const removeFromCart = (item) => {
        setCartItems(cartItems.filter(record => {
            return record.id !== item.id;
        }))
    };

    const addToWishListAndRemoveFromCart = (item) => {
        removeFromCart(item);
        addToWishList(item);
    };

    const removeAllIetmsFromCart = () => {
        if (cartItems.length > 0) {
            alert('You have successfully place your Order.');
            setCartItems([]);
        } else {
            alert('No item is present in cart.');
        }
        
    };

    const totalAmount= () => {
        let amount = 0.0;
        for (let i = 0; i < cartItems.length; i++) {
            amount += parseFloat(cartItems[i].discounted_price || cartItems[i].actual_price);
        }
        return amount;
    }


    return (
        <div>
            <div className='row'>
                <div className='col-12 bg-dark text-white py-4'>
                    Shopping Cart
                </div>
            </div>

            <div className='row'>
                <div className='col-12 py-4'>
                    { cartItems.length } items in cart
                </div>
            </div>

            <div className='row'>
                <div className='col-9'>
                    {
                        cartItems && cartItems.map( record => {
                            return(
                                <div className='row py-2' key={record.id}>
                                    <div className='col-12'>
                                        <div className='row'>
                                            <div className='col-12'>
                                                <div className='row'>
                                                    <div className='col-1 bg-light'>
                                                        
                                                    </div>
                                                    <div className='col-5 text-start font-weight-bold'>
                                                        { record.title } <br /> { record.author }
                                                    </div>

                                                    <div className='col-6  p-2'>
                                                        <div className='d-flex flex-row justify-content-end'>
                                                            <div className='mx-3'>
                                                                <button className='btn btn-sm app-btn'
                                                                        onClick = { () => addToWishListAndRemoveFromCart(record) }>
                                                                    Move to WishList
                                                                </button>
                                                            </div>

                                                            <div className='font-weight-bold mx-3' >
                                                                { record.discounted_price != null
                                                                        ? record.discounted_price
                                                                        : record.actual_price}
                                                            </div>

                                                            <div className='mx-3'>
                                                                <button className='btn btn-sm' onClick = {() => removeFromCart( record )}>
                                                                    <img src='./images/delete.svg'
                                                                            width={15}
                                                                            height={20}
                                                                            alt="logo" />
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                <div className='col-3 px-4'>
                    <div className='row'>
                        <div className='col text-bold text-left'>
                            Total Amount <br /> <br />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col text-bold text-left'>
                            RS- { totalAmount() } /- <br /> <br />
                        </div>
                    </div>
                    <div className='row text-right'>
                        <button className='btn btn-md app-btn text-bold'
                                onClick={ removeAllIetmsFromCart }>
                            Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyCartItem