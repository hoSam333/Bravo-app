import React from 'react'
import "./Services.css"


function Services() {
  return (
    <div className='Services container'>
      <h2 className='h2 text-center my-5 fs-1 fw-bold '>SERVCIES</h2>
      
      <div className="row g-3">

          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className='one d-flex align-items-center  gap-2 p-4'>
              <i className="fa-solid fa-check"></i>
              <p>Quality Product</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className='one d-flex align-items-center  gap-2 p-4'>
              <i className="fa-solid fa-truck"></i>
              <p>Free Shipping</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className='one d-flex align-items-center  gap-2 p-4'>
              <i className="fa-solid fa-check"></i>
              <p>14-Day Return</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className='one d-flex align-items-center  gap-2 p-4'>
              <i className="fa-solid fa-truck"></i>
              <p>24/7 Support</p>
            </div>
          </div>
      </div>

    </div>
  )
}

export default Services
