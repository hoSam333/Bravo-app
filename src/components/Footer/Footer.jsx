import React from 'react'
import "./Footer.css"
import ll from "../../assets/images/pay.png"
function Footer() {
  return (
    <footer className='mt-5' >
        <div className='top_footer'>
          <div className='single' >
              <b>Get In Touch</b>
              <p>No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et et dolor sed dolor. Rebum tempor no vero est magna amet no</p>
          </div>
          <div className='single' >
              <b>QUICK SHOP</b>
              <div>
                  <a href="#">Home</a>
                  <a href="#">About</a>
                  <a href="#">Shop</a>
                  <a href="#">Contact</a>
                  <a href="#">Cart</a>
              </div>
          </div>
          <div className='single' >
            <b>Shop Media</b>
            <div>
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-linkedin"></i>
                <i className="fa-brands fa-github"></i>
            </div>
          </div>
          <div className='single' >
            <b>NEWSLETTER</b>
            <p>Duo stet tempor ipsum sit amet magna ipsum tempor est</p>
            <div className="input-group mb-3">
                <input type="email" className="form-control" placeholder="Your email adress" aria-label="Recipient's username" aria-describedby="button-addon2" />
                <button className="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
            </div>
          </div>
        </div>
        <hr />
        <div className="down_footer">
          <p>@ copywrite By Bravo Team , All Right Reserved</p>
          <img src={ll} alt="" />
        </div>
    </footer>
  )
}

export default Footer
