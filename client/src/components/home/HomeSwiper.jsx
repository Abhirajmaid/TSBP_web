"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import {
  Navigation,
  Pagination,
  Keyboard,
  Mousewheel,
  Autoplay,
} from "swiper/modules";
import Image from "next/image";

// import {ads}

const HomeSwiper = () => {
  return (
    <div>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Navigation, Keyboard, Mousewheel, Autoplay]}
        className="mySwiper h-[500px] flex items-center justify-center"
        navigation={true}
        keyboard={true}
        mousewheel={false}
      >
        <SwiperSlide>
          <Image
            src="/images/carouselImg.png"
            width={1000}
            height={1000}
            className="h-full w-full rounded-xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/carouselImg.png"
            width={1000}
            height={1000}
            className="h-full w-full rounded-xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/carouselImg.png"
            width={1000}
            height={1000}
            className="h-full w-full rounded-xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/carouselImg.png"
            width={1000}
            height={1000}
            className="h-full w-full rounded-xl"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeSwiper;
