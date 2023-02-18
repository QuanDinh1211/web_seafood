import React from "react";
import Slider from "react-slick";

import "../../assets/styles/slideStyle.scss";

import ImageLink from "../../components/layouts/ImageLink";

const SliderContainer = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };
  return (
    <Slider {...settings}>
      <div>
        <ImageLink
          url="link"
          img="https://theme.hstatic.net/1000030244/1000943806/14/slide_2.jpg?v=3053"
        />
      </div>
      <div>
        <ImageLink
          url="link"
          img="https://theme.hstatic.net/1000030244/1000943806/14/slide_4.jpg?v=3053"
        />
      </div>
      <div>
        <ImageLink
          url="link"
          img="https://theme.hstatic.net/1000030244/1000943806/14/slide_1.jpg?v=3053"
        />
      </div>
    </Slider>
  );
};

export default SliderContainer;
