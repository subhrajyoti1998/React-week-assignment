import React from 'react'

function MyCartItem() {
  return (
    <div className='row'>
        <div className='col-1'>
            LOGO
        </div>
        <div className='col-3 font-weight-bold'>
            Responsive Design Course XYZ How to design responsive templates
        </div>
        <div className='col-2'>
            Joseph Marie
        </div>
        <div className='col-6 p-2'>
            <div className='d-flex flex-row justify-content-end'>
                <div className='font-weight-bold mx-3' >
                    Rs 563/-
                </div>
                <div className='mx-3'>
                    <del>Rs 923/-</del>
                </div>
                <div className='mx-3'>
                    <button className='btn btn-warning btn-sm'>ADD TO CART</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MyCartItem