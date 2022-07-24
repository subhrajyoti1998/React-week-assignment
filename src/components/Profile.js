import React, { useState } from 'react';
import ProfessionalDetails from './ProfessionalDetails';

  function Profile() {

    const [professional, setProfessional] = useState(false); // Default
    const isProfessional = (radioButtonResponse) => {
      setProfessional(radioButtonResponse);
    }

    return (
      <div>
        <div className='col-12 bg-dark text-white py-4 text-center my-4'>
            Profile
        </div>

        {/* Profile Picture */}
        <div className='row py-3'>
          <div className='col-1'>
            <img src='./images/profile-picture.png'
                  width={100}
                  height={110}
                  alt='logo' />
          </div>

          {/* Name Text boxes */}
          <div className='col-11'>
            <div className='row text-center'>
              <div className='col-4'>
                First Name <br />
                <form className='d-flex' role='search'>
                    <input className='form-control'
                            type = 'text'
                            placeholder='First Name' />
                </form>
              </div>
              <div className='col-3 px-2'>
                Middle Name
                <form className='d-flex' role='search'>
                    <input className='form-control'
                            type = 'text'
                            placeholder='Middle Name' />
                </form>
              </div>
              <div className='col-4 px-2'>
                Last Name
                <form className='d-flex' role='search'>
                    <input className='form-control'
                            type = 'text'
                            placeholder='Last Name' />
                </form>
              </div>
            </div>
          </div>

          {/* About Yourself Text Area */}
          <div className='row p-1'>
            <div className='col-1'>
              
            </div>
            <div className='col-6 text-start text-milddle'>
              About Yourself <br />
              <form className='d-flex'>
                    <textarea className='form-control'
                            type = 'text'
                            min = { 1 }
                            max = { 50 }
                            rows = { 4 }
                            cols = { 4 }
                            placeholder='Write Something about yourself' />
                </form>
            </div>
          </div>

          {/* Area of Interest */}
          <div className='row p-1'>
            <div className='col-1'>
              
            </div>
            <div className = 'col-6 text-start text-milddle'>
              <div className = 'check-box'>
                <br /> Area Of Interest <br />
                <form className='d-flex text-muted'>
                  <label>
                    <input type = 'checkbox'
                          name = 'designer' 
                          value = 'designer-check' /> Designer <br />
                    
                    <input type = 'checkbox'
                          name = 'developer'
                          value = 'developer-check' /> Developer <br />
                    
                    <input type = 'checkbox'
                          name = 'pm'
                          value = 'pm-check' /> Project Manager <br />

                    <input type = 'checkbox'
                          name = 'sales'
                          value = 'sales-check' /> Sales <br />
                  </label>
                </form>
              </div>
            </div>
          </div>

          {/* Are you a Student or a Professional */}
          <div className='row p-1'>
            <div className='col-1'>
              
            </div>
            <div className = 'col-6 text-start text-milddle'>
              <div className = 'radio-button'>
                <br /> Are you a Student or a Professional <br />

                <div className = 'col-6 text-start text-muted'>
                  <div>
                    <input type = 'radio'
                          value = 'false'
                          name = 'profession'
                          onChange = {() => { isProfessional(false) } } />
                      Student <br />
                    <input type = 'radio'
                          value = 'false'
                          name = 'profession'
                          onChange = {() => { isProfessional(true) } } />
                      Professional <br />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Details */}
          <div>
            { professional ? <ProfessionalDetails /> : null}
          </div>
        </div>
      </div>
    )
  }

export default Profile