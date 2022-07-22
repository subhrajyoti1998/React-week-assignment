import React from 'react'
import { useState } from 'react';

function MyCartItem( { setCartItems, cartItems } ) {
    /*let removeFromCart = (item) => {
        let updatedCart = cartItems.filter((record) => record.id !== item.id);
        setCartItems(updatedCart);
        //setTotalPrice(prev => prev - parseFloat(item.discounted_price || item.actual_price));
    }*/

    const removeFromCart = (item) => {
        setCartItems(cartItems.filter(record => {
                return record.id !== item.id;
            }))
    };

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
                                <div className='row' key={record.id}>
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
                                                                <button className='btn btn-sm app-btn' >
                                                                        {/* onClick={() => addToWishList(record)}*/}
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
                    { /*totalPrice */ }
                </div>
            </div>
        </div>
    )
//     <div className='row'>
//         <div className='col-9'>
//             <div className='row'>
//                 <div className='col-1 border '>
//                     LOGO
//                 </div>
//                 <div className='col-3 border font-weight-bold'>
//                     Responsive Design Course XYZ How to design responsive templates
//                 </div>
//                 <div className='col-2 border '>
//                     Joseph Marie
//                 </div>
//                 <div className='col-6  border p-2'>
//                     <div className='d-flex flex-row justify-content-end'>
//                         <div className='font-weight-bold mx-3' >
//                             Rs 563/-
//                         </div>
//                         <div className='mx-3'>
//                             <del>Rs 923/-</del>
//                         </div>
//                         <div className='mx-3'>
//                             <button className='btn btn-warning btn-sm'>ADD TO CART</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <div className='col-3'>
//             <div className='row'>
//                 <div className='col-12 border p-4'>
//                     Your Cart Details
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
}

export default MyCartItem