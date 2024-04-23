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
import { BikeCard } from ".";
import { fetchListings } from "@src/lib/actions/listings.action";

const ListingSlider = () => {
  const [listingsData, setListingsData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const { data } = await fetchListings();
    setListingsData(data);
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
        {listingsData?.map((item) => {
          return (
            <SwiperSlide
              className="flex items-center justify-center"
              key={item.id}
            >
              <BikeCard {...item.attributes} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ListingSlider;
