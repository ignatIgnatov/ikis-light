import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CarouselItem from "./CarouselItem";
import { topMeels } from "../../utils/utils";

const MuliitemCarousel = () => {
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
    <div className="my-8 px-2 h-[16rem]">
      <Slider {...settings}>
        {topMeels.map((item) => (
          <div className="px-1">
            <CarouselItem image={item.image} title={item.title} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MuliitemCarousel;
