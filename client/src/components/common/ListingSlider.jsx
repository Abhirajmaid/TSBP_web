"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

// import required modules
import { FreeMode, Keyboard, Mousewheel } from "swiper/modules";

import { BikesData } from "@src/data/data";
import { BikeCard } from ".";

const ListingSlider = () => {
  return (
    <div className="w-full bg-transparent rounded-xl">
      <Swiper
        slidesPerView={5}
        spaceBetween={15}
        freeMode={true}
        modules={[FreeMode, Keyboard, Mousewheel]}
        keyboard={true}
        mousewheel={true}
        className="mySwiper h-auto w-full !overflow-visible"
      >
        {BikesData.map((item) => {
          return (
            <SwiperSlide
              className="flex items-center justify-center  hover:shadow-xl hover:scale-[1.2]"
              key={item.id}
            >
              <BikeCard {...item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ListingSlider;
