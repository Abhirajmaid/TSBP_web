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
    <div className=" flex md:flex-row flex-col gap-8 w-full shadow-md cursor-grab p-12 border-2 border-[#888888]/50 rounded-lg bg-white/10">
      <Image
        src={image}
        alt="webfudge user"
        width={100}
        height={100}
        className=" object-cover md:w-[120px] h-[120px] w-[90px] mx-auto rounded-full"
      />
      <div className="flex gap-4 relative text-white">
        <span>
          <Icon
            icon="bi:quote"
            className=" md:static absolute text-[3rem] top-0 left-0 text-primary_light"
          />
        </span>
        <div className="md:text-right text-center text-base font-medium">
          <p className="italic mb-4 font-Poppins text-lg">{reviewText}</p>
          <h4 className="md:text-right text-center text-primary_light text-base font-medium">
            - {name} <br /> <span>( {role} )</span>
          </h4>
        </div>
      </div>
    </div>
  );
};

const Testimonial = () => {
  //   console.log(testimonials);
  return (
    <div className="md:px-0 px-[3%]">
      <h2 className="md:text-[3vw] text-[7vw] tracking-tighter uppercase align-middle text-center mb-5 text-white">
        User Reviews{" "}
        <span className="text-primary md:!text-[4vw] !text-[8vw]">.</span>
      </h2>
      <Swiper
        spaceBetween={60}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper w-full md:w-[70%]"
      >
        {testimonials.map((item, i) => {
          return (
            <SwiperSlide key={i}>
              <TestimonialCard {...item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
