"use client";
import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

// import required modules
import { FreeMode, Keyboard, Mousewheel } from "swiper/modules";

import { BikeCard, Loader } from ".";
import listingsAction from "@src/lib/actions/listings.action";
import { Toast } from "@src/context/ToastContex";

const ListingSlider = () => {
  const [data, setData] = useState();

  const { warn } = Toast();

  useEffect(() => {
    getListingsList();
  }, []);

  const getListingsList = () => {
    listingsAction
      .fetchListings()
      .then((resp) => {
        setData(resp.data.data);
      })
      .catch((error) => {
        console.log(error);
        warn(error);
      });
  };

  return (
    <div className="w-full bg-transparent rounded-xl">
      <Swiper
        slidesPerView={1} // Default for mobile
        spaceBetween={15}
        freeMode={false}
        modules={[FreeMode, Keyboard, Mousewheel]}
        keyboard={false}
        mousewheel={false}
        className="mySwiper h-auto w-full !overflow-hidden"
        breakpoints={{
          // Adjust number of slides based on screen width
          640: {
            slidesPerView: 1, // Mobile portrait
          },
          768: {
            slidesPerView: 2, // Tablet portrait
          },
          1024: {
            slidesPerView: 3, // Tablet landscape or small desktop
          },
          1280: {
            slidesPerView: 4, // Large desktop
          },
          1536: {
            slidesPerView: 5, // Extra large desktop
          },
        }}
      >
        {data ? (
          data?.map((item, id) => {
            return (
              <SwiperSlide
                className="flex items-center justify-center min-w-[350px]"
                key={id}
              >
                <BikeCard data={item} />
              </SwiperSlide>
            );
          })
        ) : (
          <div className="w-full rounded-lg h-[200px] flex items-center justify-center">
            <Loader />
          </div>
        )}
      </Swiper>
    </div>
  );
};

export default ListingSlider;
