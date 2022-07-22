import React from 'react'
import { useLocation } from 'react-router-dom'

function CourseDetails( {addItem} ) {
    const location = useLocation();

    return (
        <div>
            <div className='row py-2'>
                <div className='col-1'>

                </div>
                <div className='col-10 bg-dark text-white py-4'>
                    Discover all latest Courses
                </div>
                <div className='col-1'>

                </div>
            </div>

            <div className='row'>
                <div className='col-1'>

                </div>
                <div className='col-10 py-2'>
                    <div className='row'>
                        <div className='col-2'>
                            All Courses
                        </div>
                    </div>
                </div>
                <div className='col-1'>

                </div>
                <div className='col-1'>

                </div>
                <div className='col-10 py-2'>
                    <div className='row'>
                        <div className='bg-dark text-white col-11'>
                            {location.state.title} <br /> <br /> <br /> {location.state.author}
                        </div>
                    </div>
                </div>
                <div className='col-1'>

                </div>
            </div>

            <div className='row py-2'>
                <div className='col-1'>

                </div>
            </div>

            <div className='row py-2'>
                <div className='col-1'>

                </div>
                <div className='col-10'>
                    <div className='row'>
                        <div className='col-6 border'>
                            {location.state.details}
                        </div>
                        <div className='col-6 border'>
                            <iframe width="550" height="300"
                                    src="https://www.youtube.com/embed/tWcqSIQr6Ks"
                                    title= {location.state.title}
                                    frameBorder="2"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen>
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>

            { /* Add to Cart Button */}
            <div className='row py-2'>
                <div className='col-6'>

                </div>
                <div className='col-5 text-end'>
                    <button className='btn btn-md app-btn text-bold'
                            onClick={() => addItem(location.state)}>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>        
    )
}





export default CourseDetails