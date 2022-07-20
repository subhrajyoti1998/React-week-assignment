import React from 'react';

function Profile() {
let cols = [];

    for (let i = 0; i < 10; i++) {
        cols.push(
        <div className='col-12 col-md-4 col-lg-3 col-xl-2'>
            <div className='card m-3'>
                <h4 className='card-title'> TEST title {i} </h4>
            </div>
        </div>
        );
    }

  return (
    <div className='container-fluid'>

        <div className='row border'>
          {cols}  
        </div>

    </div>
  )
}

export default Profile