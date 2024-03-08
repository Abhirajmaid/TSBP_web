"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import {
  FreeMode,
  Pagination,
  Keyboard,
  Mousewheel,
  Navigation,
} from "swiper/modules";

import { BikesData } from "@src/data/data";
import { BikeCard } from ".";

const ListingSlider = () => {
  return (
    <div className="w-full p-6 bg-transparent rounded-xl">
      <Swiper
        slidesPerView={5}
        spaceBetween={15}
        freeMode={true}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[FreeMode, Pagination, Keyboard, Mousewheel, Navigation]}
        keyboard={true}
        mousewheel={true}
        className="mySwiper h-auto w-full "
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
