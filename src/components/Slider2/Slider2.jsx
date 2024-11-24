import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Slider2.css"
import slide_1 from "./../../assets/images/vendor-6-CmmiMxIm.jpg"
import slide_2 from "./../../assets/images/vendor-7-BBAmhwW7 (1).jpg"
import slide_3 from "./../../assets/images/download (1).jpeg"
import slide_4 from "./../../assets/images/download (2).jpeg"
import slide_5 from "./../../assets/images/download.jpeg"

function Slider2() {

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
    autoplay:true,
    autoplaySpeed:500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow /> ,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          
        }
      } ,
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          
        }
      }
      ]
  };

  return (
    <div className='Slider2 container'>
      
      <Slider  {...settings} className='slider '>
        <div>
            <img src={slide_1} alt="" />
        </div>
        <div>
            <img src={slide_2} alt="" />
        </div>
        <div>
            <img src={slide_3} alt="" />
        </div>
        <div>
            <img src={slide_4} alt="" />
        </div>
        <div>
            <img src={slide_5} alt="" />
        </div>
      </Slider>

    </div>
  )
}

export default Slider2
