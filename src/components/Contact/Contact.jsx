import React from 'react'
import "./Contact.css"


function Contact() {
  return (
    <div className='Contact container p-5'>
      
      <h3 className='fw-bold text-center h1 my-5'> Contact <span>Us</span> </h3>

        <div className="row g-3">

        <div className="col-lg-8 col-sm-12">

          <form className='p-4 rounded-4'>
              <input type="text" placeholder='Name' />
              <input type="email" placeholder='Email' />
              <input type="name" placeholder='Subject' />
              <textarea placeholder='Message'></textarea>
              <button type='submit'> Send Message </button>
          </form>

        </div>


        <div className="col-lg-4 col-sm-12">

        <div className='p-4 map rounded-3'>
          <iframe className='w-100' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3434.3521362674496!2d31.499302325344377!3d30.595829392237796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7f147e5fe7337%3A0x27ea7767255ccbe!2z2LTYsdmD2Kkg2KjYsdin2YHZiCDZhNiq2LnZhNmK2YUg2KfZhNio2LHZhdis2Kk!5e0!3m2!1sar!2seg!4v1713800005950!5m2!1sar!2seg" ></iframe>
        </div>

        <div className='location d-flex flex-column gap-3 p-4 mt-4 rounded-3'>
            <div>
                <i className="fa-solid fa-location-crosshairs"></i>
                <b className='fs-5 opacity-75 ms-3'>Egypt - Sharkia - Zagazig</b>
            </div>
            <div>
            <i className="fa-regular fa-message"></i>
                <b className='fs-5 opacity-75 ms-3'>bravocoading123@gmail.com</b>
            </div>
            <div>
                <i className="fa-solid fa-phone"></i>
                <b className='fs-5 opacity-75 ms-3'>+0123456789</b>
            </div>
        </div>

        </div>

        </div>

    </div>
  )
}

export default Contact
