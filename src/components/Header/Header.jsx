import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Header.css"

function Header() {

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", background: "red" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", background: "green" }}
        onClick={onClick}
      />
    );
  }

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <div className='Header container my-5'>


      <div className="row g-5">


          <div className="col-lg-8 col-sm-12">
            <Slider {...settings} className='slidee'>

              <div className='men'>
                <div>
                  <b>Men Fashon</b>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni quaerat, tempora, omnis assumenda temporibus repudiandae repellat nam iure consectetur quas iusto cupiditate expedita esse inventore eum ea reprehenderit! Tempore, cum.</p>
                  <button className='btn-outline-primary'>Shop Now</button>
                </div>
              </div>
              <div className='women'>
                <div>
                  <b>Women Fashon</b>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni quaerat, tempora, omnis assumenda temporibus repudiandae repellat nam iure consectetur quas iusto cupiditate expedita esse inventore eum ea reprehenderit! Tempore, cum.</p>
                  <button className='btn-outline-primary'>Shop Now</button>
                </div>
              </div>
              <div className='kids'>
                <div>
                  <b>Kids Fashon</b>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni quaerat, tempora, omnis assumenda temporibus repudiandae repellat nam iure consectetur quas iusto cupiditate expedita esse inventore eum ea reprehenderit! Tempore, cum.</p>
                  <button className='btn-outline-primary'>Shop Now</button>
                </div>
              </div>

            </Slider>
          </div>

          <div className="col-lg-4 col-md-12">
            <div className="offer">

              <div className='offer_one'>
                  <p>Save 20%</p>
                  <b>Special Offer</b>
                  <button className='btn btn-outline-primary'>Shop Now</button>
              </div>
              
              <div className='offer_two'>
                  <p>Save 20%</p>
                  <b>Special Offer</b>
                  <button className='btn btn-outline-primary'>Shop Now</button>
              </div>

            </div>
          </div>

      </div>

    </div>
  )
}

export default Header
