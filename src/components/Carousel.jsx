import Slider from "react-slick";

import "slick-carousel/slick/_slick.css";
import "slick-carousel/slick/_slickTheme.css";
import imgone from "../assets/Image1.jpg";
import imgtwo from "../assets/Image2.jpg";
import imgthree from "../assets/Image3.jpg";
import imgfour from "../assets/Image4.jpg";
import imgfive from "../assets/Image5.jpg";
import imgsix from "../assets/Image6.jpg";
import imgseven from "../assets/Image7.jpg";
import imgeight from "../assets/Image8.jpg";
import imgnine from "../assets/Image9.jpg";

export default function Carousel() {
  const sliderSettings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const Images = [
    {
      imageSrc: imgone,
    },
    {
      imageSrc: imgtwo,
    },
    {
      imageSrc: imgthree,
    },
    {
      imageSrc: imgfour,
    },
    {
      imageSrc: imgfive,
    },
    {
      imageSrc: imgsix,
    },
    {
      imageSrc: imgseven,
    },
    {
      imageSrc: imgeight,
    },
    {
      imageSrc: imgnine,
    },
  ];

  return (
    <div className="content">
      <Slider {...sliderSettings}>
        {Images.map((card, index) => (
          <div key={index}>
            <img
              alt={card.title}
              src={card.imageSrc}
              width="100%"
              height="400vh"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
