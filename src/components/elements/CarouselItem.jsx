import React from "react";

const CarouselItem = ({ image, title }) => {
  return (
    <div className="m-2 flex flex-col justify-center items-center relative h-[18rem]">
      <img
        className="rounded-md object-cover border border-gray-400 shadow-xl transition-transform transform hover:scale-110 hover:shadow-2xl hover:z-20"
        src={image}
        alt={title}
      />
    </div>
  );
};

export default CarouselItem;
