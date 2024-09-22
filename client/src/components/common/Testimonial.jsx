"use client";
import React from "react";
import { testimonials } from "@src/data/data";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const TestimonialCard = ({ image, reviewText, name, role }) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-8 w-full shadow-md cursor-grab p-8 md:p-12 border-2 border-[#888888]/50 rounded-lg bg-white/10">
      <Image
        src={image}
        alt="webfudge user"
        width={100}
        height={100}
        className="object-cover md:w-[120px] h-[120px] w-[90px] mx-auto rounded-full"
      />
      <div className="flex gap-4 relative text-white">
        <span>
          <Icon
            icon="bi:quote"
            className="md:static absolute text-[2rem] md:text-[3rem] top-0 left-0 text-primary_light"
          />
        </span>
        <div className="text-center md:text-right text-base font-medium">
          <p className="italic mb-4 font-Poppins text-sm md:text-lg">
            {reviewText}
          </p>
          <h4 className="text-primary_light text-sm md:text-base font-medium">
            - {name} <br />
            <span className="text-[0.8rem] md:text-sm">( {role} )</span>
          </h4>
        </div>
      </div>
    </div>
  );
};

const Testimonial = () => {
  return (
    <div className="px-[3%] md:px-0">
      <h2 className="text-[6vw] md:text-[3vw] tracking-tighter uppercase text-center mb-5 text-white">
        User Reviews{" "}
        <span className="text-primary text-[8vw] md:text-[4vw]">.</span>
      </h2>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper w-full md:w-[70%] mx-auto"
      >
        {testimonials.map((item, i) => (
          <SwiperSlide key={i}>
            <TestimonialCard {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
