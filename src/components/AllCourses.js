import React, { useEffect, useState } from 'react'
import Records from './courses.json';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';

const PER_PAGE = 5;

function AllCourses( {addElement, cartItems, addToWishList, wishListItems, totalAmount} ) {

    /*const [currentPage, setCurrentPage] = useState(0);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData()}, []
    )

    function fetchData() {
        fetch(Records)
        .then((res) => res.json())
        .then((data) => {
            setData(data);
        });
    }*/

    const [priceOrder, setPriceOrder] = useState('plth');
    const navigate = useNavigate();
    const [pgIndx, setPgIndx] = useState(1);

    const noOfPages = Records.length % PER_PAGE > 0
                        ? parseInt(Records.length / PER_PAGE) + 1
                        : parseInt(Records.length / PER_PAGE);

    
    function sortItem() {
        if (priceOrder === 'plth' || priceOrder === 'phtl') {
            Records.sort((record1, record2) => {
                // let record1Price = record1.discounted_price != null
                //                     ? record1.discounted_price
                //                     : record1.actual_price;
                
                // let record2Price = record2.discounted_price != null
                //                     ? record2.discounted_price
                //                     : record2.actual_price;
                let multiplier = priceOrder === 'plth' ? -1 : 1;
                return ((record1?.discounted_price || record1?.actual_price || Infinity) 
                        - (record2?.discounted_price || record2?.actual_price || Infinity)) * multiplier;
            })
        }
    }

    const addElementToWishList = (course) => {
        if ( ! cartItems.includes(course) &&  ! wishListItems.includes(course)) {
            addToWishList(course);
        }
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
                            All Courses
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
                                <input className="form-control"
                                        type = "search"
                                        placeholder="Search"
                                        aria-label = "Search" />
                                <button className="btn btn-sm app-btn"
                                        type="submit">
                                        {/* onClick = {  } */}
                                    <img src='./images/search.svg'
                                         width={20}
                                         height={20}
                                         alt="logo" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Courses */}
            <div className='row mx-2'>
                <div className='col-9'>
                    {
                        Records && Records.slice((PER_PAGE * (pgIndx - 1)), Math.min(PER_PAGE * pgIndx, Records.length))
                            .map( record => {
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
                                                        <div className='row'>
                                                            <div className='col-1 text-end'>
                                                                <div className='btn btn-sm'
                                                                     onClick = {() => addElementToWishList(record) }>
                                                                    <img src = './images/star.jpg'
                                                                         width = {20}
                                                                         height = {28}
                                                                         alt = "logo"/>
                                                                </div>
                                                            </div>
                                                            <div className='col-11'>
                                                                <div className='d-flex flex-row justify-content-end'>
                                                                    <div className='font-weight-bold mx-3' >
                                                                        { record.discounted_price != null
                                                                                ? record.discounted_price
                                                                                : record.actual_price}
                                                                    </div>
                                                                    <div className='text-right mx-3'>
                                                                        <del> { record.discounted_price != null
                                                                                    ? record.discounted_price
                                                                                    : null } </del>
                                                                    </div>
                                                                    <div className='mx-3'>
                                                                        <button className='btn btn-sm app-btn'
                                                                                onClick={() => addElement(record)}>
                                                                            ADD TO CART
                                                                        </button>
                                                                    </div>
                                                                    <div className='mx-3'>
                                                                        <button className='btn btn-sm'
                                                                                onClick = { () => navigate('/courseDetails',
                                                                                {state : record} ) } >
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
                    <div className='col-3 text-start'>
                        Total Cart Value 
                    </div>
                </div>
                <div className='row p-2'>
                    <div className='col-10 text-end px-4'>
                        RS- { totalAmount() }
                    </div>
                    <div className='col-2 text-start'>
                        <button className='btn btn-md app-btn text-bold'
                                    onClick = { () => navigate('/cart') }>
                                Go to Cart
                        </button>
                    </div>
                </div>
            </div>

            {/* Pagination */}
            <div className='bg-light btn-sm app-btn-star'>
                {Array.from(Array(noOfPages), (e, i) => {
                    return (<span className='btn btn-lg'
                                  key={i + 1}
                                  onClick = {() => setPgIndx(i+1) } >
                                {i+1}
                            </span>)
                })}
            </div>
        </div>
    )
}

export default AllCourses