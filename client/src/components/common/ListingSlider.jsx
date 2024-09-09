"use client";
import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

// import required modules
import { FreeMode, Keyboard, Mousewheel } from "swiper/modules";

import { BikesData } from "@src/data/data";
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
        slidesPerView={5}
        spaceBetween={15}
        freeMode={false}
        modules={[FreeMode, Keyboard, Mousewheel]}
        keyboard={false}
        mousewheel={false}
        className="mySwiper h-auto w-full !overflow-hidden"
      >
        {data ? (
          data?.map((item, id) => {
            return (
              <SwiperSlide
                className="flex items-center justify-center"
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
