import React from 'react'
import { useLocation } from 'react-router-dom'

function CourseDetails() {
    const location = useLocation();

    return (
        <div>
            <div className='row'>
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
                <div className='col-10 py-4'>
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
                <div className='col-10 py-4'>
                    <div className='row'>
                        <div className='bg-dark text-white col-11'>
                            {location.state.title} <br /> <br /> <br /> {location.state.author}
                        </div>
                    </div>
                </div>
                <div className='col-1'>

                </div>
            </div>

            <div className='row'>
                <div className='col-1'>

                </div>
            </div>

            <div className='row'>
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
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen>
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>

            <div className='row'>
                <div className='col-1'>

                </div>
            </div>

            
        </div>
        
    )
}





export default CourseDetails