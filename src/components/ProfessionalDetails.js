import React from 'react'

function ProfessionalDetails() {
    return (
        <div>
            <div className='row '>
                <div className='col-1'>

                </div>
                <div className='col-10'>
                   <br />
                   <br />
                   How much Experience do you have
                </div>
            </div>
            <div className='row '>
                <div className='col-1'>

                </div>
                <div className='col-10'>
                    <div>
                        <input type = 'radio' name = 'experience' /> 0-5
                        <input type = 'radio' name = 'experience' /> 5-10
                        <input type = 'radio' name = 'experience' /> 10+
                        <br />
                        <br />
                    </div>
                </div>
            </div>

            <div className='row '>
                <div className='col-1'>

                </div>
                <div className='col-10'>
                    <div>
                        What is your area of Expertise ?
                        <br />
                        <input type = 'radio' name = 'techstack' /> Java
                        <input type = 'radio' name = 'techstack' /> React
                        <input type = 'radio' name = 'techstack' /> Backend
                        <br />
                        <br />
                    </div>
                </div>
            </div>

            <div className='row '>
                <div className='col-1'>

                </div>
                <div className='col-10'>
                    <div>
                        Mention Your role
                        <br />
                        <textarea className = 'textarea'
                                  rows = '10'
                                  cols = '50' >
                        </textarea>
                    </div>
                </div>
            </div>

            <div className='btn app-btn pull-right p-2 m-2'>
                Save
            </div>
        </div>
    )
}

export default ProfessionalDetails