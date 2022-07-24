import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function WishList( { wishListItems, addToCart, cartItems, setWishListItems } ) {

    const totalWishListAmount = () => {
        let amount = 0.0;
        for (let i = 0; i < cartItems.length; i++) {
            amount += parseFloat(cartItems[i].discounted_price || cartItems[i].actual_price);
        }
        return amount;
    }

    const [priceOrder, setPriceOrder] = useState('plth');
    const navigate = useNavigate();

    function sortItem() {
        if (priceOrder === 'plth' || priceOrder === 'phtl') {
            wishListItems.sort((record1, record2) => {
                let multiplier = priceOrder === 'plth' ? -1 : 1;
                return multiplier * ((record1?.discounted_price || record1?.actual_price || Infinity) 
                                        - (record2?.discounted_price || record2?.actual_price || Infinity));
            })
        }
    }

    const removeFromWishList = (item) => {
        setWishListItems(wishListItems.filter(record => {
            return record.id !== item.id;
        }))
    };

    const addToCartAndRemoveFromWishList = (item) => {
        addToCart(item);
        removeFromWishList(item);
    }


    return (
        <div>
            <div className='row'>
                <div className='col-12 bg-dark text-white py-4'>
                    Discover all latest Courses
                </div>
            </div>
            <div className='row'>
                <div className='col-12 py-3'>
                    <div className='row'>
                        <div className='col-7'>
                            My Wish List
                        </div>
                        <div className='col-2'>
                            <select className="form-select" onChange={(event) => {
                                setPriceOrder(event.target.value);
                                sortItem()
                            }}>
                                <option value="plth">Price Low to High</option>
                                <option value="phtl">Price High to Low</option>
                            </select>
                        </div>
                        <div className='col-3'>
                            <form className="d-flex" role="search">
                                <input className="form-control me-2"
                                        type = "search"
                                        placeholder="Search"
                                        aria-label = "Search" />
                                <button className="btn btn-outline-warning" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Courses */}
            <div className='row mx-2'>
                <div className='col-9'>
                    {
                        wishListItems && wishListItems.map( record => {
                            return(
                                <div className='row' key={record.id}>
                                    <div className='col-12'>
                                        <div className='row py-2'>
                                            <div className='col-12'>
                                                <div className='row'>
                                                    <div className='col-1 bg-light'>
                                                        
                                                    </div>
                                                    <div className='col-3 font-weight-bold'>
                                                        { record.title }
                                                    </div>
                                                    <div className='col-2  '>
                                                        { record.author }
                                                    </div>
                                                    <div className='col-6  p-2'>
                                                        <div className='d-flex flex-row justify-content-end'>
                                                            <div className='font-weight-bold mx-3' >
                                                                { record.discounted_price != null
                                                                        ? record.discounted_price
                                                                        : record.actual_price}
                                                            </div>
                                                            <div className='text-right mx-3'>
                                                                <del>{ record.discounted_price != null
                                                                            ? record.discounted_price
                                                                            : null }</del>
                                                            </div>
                                                            <div className='mx-3'>
                                                                <button className='btn btn-sm app-btn'
                                                                        onClick={() => addToCartAndRemoveFromWishList(record)}>
                                                                    ADD TO CART
                                                                </button>
                                                            </div>
                                                            <div className='mx-3'>
                                                                <button className='btn btn-sm'
                                                                        onClick = {() => removeFromWishList(record) } >
                                                                        <img src = './images/delete.svg'
                                                                            width = {10}
                                                                            height = {12}
                                                                            alt = "logo"/>
                                                                </button>
                                                            </div>
                                                            <div className='mx-3'>
                                                                <button className='btn btn-sm'
                                                                        onClick = { () => navigate('/courseDetails', {state : record} ) } >
                                                                        <img src = './images/go_to_details.svg'
                                                                            width = {6}
                                                                            height = {12}
                                                                            alt = "logo"/>
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

                {/* Show Cart */}
                <div className='col-3 px-4'>
                    <h5 className='text-center'>Your Cart Details</h5>

                    {cartItems.slice(0, 4).map(item => (
                        <div className='row border-bottom' key={item.id}>
                            <div className='col-2'>
                                <div className='p-4 bg-light'>
                                </div>
                            </div>
                            <div className='col-10'>
                                { item.title }
                            </div>
                            <div className='col-12 text-end'>
                                { (item.discounted_price || item.actual_price) }
                            </div>
                        </div>
                    ))}
                    
                </div>

                {/* Go to Cart Button and Total Amount Section */ }
                <div className='row p-2'>
                    <div className='col-9 px-4'>
                        <div className=''>
                        </div>
                    </div>
                    <div className='col-3 text-small'>
                        Total Value for Items in WishList
                    </div>
                </div>
                <div className='row p-2'>
                    <div className='col-10 text-end px-4'>
                        RS- { totalWishListAmount() } /-
                    </div>
                    <div className='col-2 text-start'>
                        <button className='btn btn-md app-btn text-bold'
                                    onClick = { () => navigate('/cart') }>
                                Go to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WishList