<<<<<<< Updated upstream
import React from 'react';

const About = () => {
    return (
        <>
            <p>About</p>
        </>
    )
}

export default About
=======
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imgone from "../assets/Image1.jpg";
import imgtwo from "../assets/Image2.jpg";
import imgthree from "../assets/Image3.jpg";
import imgfour from "../assets/Image4.jpg";
import imgfive from "../assets/Image5.jpg";
import imgsix from "../assets/Image6.jpg";
import imgseven from "../assets/Image7.jpg";
import imgeight from "../assets/Image8.jpg";
import imgnine from "../assets/Image9.jpg";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <img src={imgone} alt="Piano" />
      </div>
      <div>
        <img src={imgtwo} alt="Micraphone" />
      </div>
      <div>
        <img src={imgthree} alt="Guitar" />
      </div>
      <div>
        <img src={imgfour} alt="Music sheets" />
      </div>
      <div>
        <img src={imgfive} alt="Singing" />
      </div>
      <div>
        <img src={imgsix} alt="Music listening" />
      </div>
      <div>
        <img src={imgseven} alt="Piano and sheets" />
      </div>
      <div>
        <img src={imgeight} alt="Piano practice" />
      </div>
      <div>
        <img src={imgnine} alt="Piano practice two" />
      </div>
    </Slider>
  );
}
>>>>>>> Stashed changes
