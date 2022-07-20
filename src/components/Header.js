import React from 'react';
import { Link } from "react-router-dom";

function Header() {
    let url = window.location.href;
    url = url.slice(0, -1);

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="https://hashedin.com/">
                        <img src='./images/hashedIn-Logo.png'
                            width={128}
                            height={41}
                            alt="logo" />
                    </a>

                    <button className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div class = "collapse navbar-collapse d-flex justify-content-end w-100"
                            id="navbarSupportedContent">
                        <div>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 float-right">
                                <li className="nav-item mx-4"> {/* All Courses */}
                                    <a className = "nav-link" aria-current="page" href="/" >
                                        COURSES
                                    </a>
                                </li>
                                
                                <li className = "nav-item mx-4"> {/* Wish List */}
                                    <a className = "nav-link" href = { url + "/wishlist" } >
                                        MY WISHLIST
                                    </a>
                                </li>

                                <li className = "nav-item mx-4"> {/* Shopping Cart */}
                                    <a className = "nav-link" href = { url + "/cart" }>
                                        <img src = './images/shopping-cart.png'
                                             width = {24}
                                             height = {23}
                                             alt = "logo" />
                                        <div>
                                            {/* <Link to = "/cart">Cart</Link> */}
                                        </div>
                                    </a>
                                </li>

                                <li className="nav-item mx-4"> {/* Profile */}
                                    <a className="nav-link" href= { url + "/profile" } >
                                        <img src = './images/profile.png'
                                        width = {24}
                                        height = {24}
                                        alt = "logo"/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header