import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CarouselItem from "./CarouselItem";

const MuliitemCarousel = ({ topMeels }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="mb-8">
      <Slider {...settings}>
        {topMeels &&
          topMeels.map((item) => (
            <div className="px-1">
              <CarouselItem image={item.image} title={item.title} />
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default MuliitemCarousel;
