import React from 'react';
import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <Link to = "/" className = "navbar-item" >
                        <img src='./images/hashedIn-Logo.png'
                                width={128}
                                height={41}
                                alt="logo" />
                    </Link>

                    <button className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className = "collapse navbar-collapse d-flex justify-content-end w-100"
                            id="navbarSupportedContent">
                        <div>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 float-right">
                                <li className="nav-item mx-4"> {/* All Courses */}
                                    <Link to = "/" className = "navbar-item" >
                                        COURSES
                                    </Link>
                                </li>
                                
                                <li className = "nav-item mx-4"> {/* Wish List */}
                                    <Link to = "/wishlist" className = "navbar-item" >
                                        MY WISHLIST
                                    </Link>
                                </li>

                                <li className = "nav-item mx-4"> {/* Shopping Cart */}
                                    <Link to = "/cart" className = "navbar-item" >
                                        <img src = './images/shopping-cart.png'
                                                width = {24}
                                                height = {23}
                                                alt = "logo" />
                                    </Link>
                                </li>

                                <li className="nav-item mx-4"> {/* Profile */}
                                    <Link to = "/profile" className = "navbar-item" >
                                        <img src = './images/profile.png'
                                            width = {24}
                                            height = {24}
                                            alt = "logo"/>
                                    </Link>
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