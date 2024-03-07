"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

import { BikesData } from "@src/data/data";
import { BikeCard } from ".";

const ListingSlider = () => {
  return (
    <div className="w-full p-8 bg-white rounded-xl">
      <Swiper
        slidesPerView={5}
        spaceBetween={23}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper h-auto w-full "
      >
        {BikesData.map((item) => {
          return (
            <SwiperSlide
              className="flex items-center justify-center  hover:shadow-xl hover:scale-[1.1]"
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
