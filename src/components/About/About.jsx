import React from 'react'
import "./About.css"
import img from "../../assets/images/about.jpg"

function About() {
  return (
    <div className='About container my-5 p-5'>
      
      <h2 > About <span>Us</span> </h2>
        
        <div className="row">

          <div className="col-lg-5 col-sm-12">
            <div className='w-100'>
              <img className='w-100' src={img} alt="" />
            </div>
          </div>

          <div className="col-lg-7 col-sm-12">
            <div className='d-flex flex-column gap-3'>
              <b className='fs-3'>Welcome To <span>Bravo Shop</span></b>
              <p className='fs-4 fw-bold opacity-75'><span>Bravo Shop</span> is Best online Shopping Company Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam expedita dolore omnis cumque ipsa vel nam non necessitatibus eius, molestiae officiis, rem et distinctio? Nisi voluptates amet in aliquam sapiente.</p>
              <button>Shop Now</button>
            </div>
          </div>


        </div>

    </div>
  )
}

export default About
