"use client";
import React from "react";
import { Button } from "../ui/button";
import { FiArrowUpRight } from "react-icons/fi";
import { Icon } from "@iconify/react";
import { EventsData } from "@src/data/data";

const EventsCarouselItem = ({ img, aurther, title, topic, description }) => {
  return (
    <>
      <div className="w-full h-full relative item">
        <div className="w-full h-full absolute bg-black/70"></div>
        <img src={img} alt="tsbp" className="w-full h-full object-cover" />
        <div className="absolute px-[10%] box-border text-white top-[20%]">
          <div className="font-bold tracking-[10px]">{aurther}</div>
          <div className="text-[5em] font-bold leading-[1.3em] [text-shadow:_0_5px_10px_#000000B3]">
            {title}
          </div>
          <div className="text-[4em] font-bold leading-[1.3em] text-primary_light [text-shadow:_0_5px_10px_#000000B3]">
            {topic}
          </div>
          <div className="w-[45%]">{description}</div>
          <div className="flex gap-5 mt-5 ">
            <Button className="uppercase">
              SEE MORE <FiArrowUpRight className="inline text-xl ml-1" />
            </Button>
            <Button className="uppercase">
              Register <FiArrowUpRight className="inline text-xl ml-1" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

const EventThumbnailItem = ({ img, title, topic }) => {
  return (
    <>
      <div className="w-[150px] h-[220px] shrink-0 relative rounded-[20px] overflow-hidden">
        <div className="w-full h-full absolute bg-gradient-to-t from-black/80 to-transparent "></div>
        <img src={img} className="w-full h-full object-cover" alt="tsbp" />
        <div className="text-white absolute bottom-2.5 inset-x-2.5">
          <div className="font-medium">{title}</div>
          <div className="text-primary_light font-semibold">{topic}</div>
        </div>
      </div>
    </>
  );
};

// function showSlider(type) {
//   let SliderItemsDom = SliderDom.querySelectorAll(".carousel .list .item");
//   let thumbnailItemsDom = document.querySelectorAll(
//     ".carousel .thumbnail .item"
//   );

//   if (type === "next") {
//     SliderDom.appendChild(SliderItemsDom[0]);
//     thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
//     carouselDom.classList.add("next");
//   } else {
//     SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
//     thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
//     carouselDom.classList.add("prev");
//   }
//   clearTimeout(runTimeOut);
//   runTimeOut = setTimeout(() => {
//     carouselDom.classList.remove("next");
//     carouselDom.classList.remove("prev");
//   }, timeRunning);

//   clearTimeout(runNextAuto);
//   runNextAuto = setTimeout(() => {
//     next.click();
//   }, timeAutoNext);
// }

const showSlider = (type) => {
  return;
};

const EventSlider = () => {
  return (
    <div className="h-screen overflow-hidden relative">
      <div className="w-full h-full">
        {EventsData.map((item, id) => {
          return <EventsCarouselItem {...item} key={id} />;
        })}
      </div>
      <div className="absolute w-max z-[100] flex gap-5 left-2/4 bottom-[50px]">
        {EventsData.map((item) => {
          return <EventThumbnailItem {...item} />;
        })}
      </div>
      <div className="absolute z-[100] w-[300px] max-w-[30%] flex gap-2.5 items-center right-[52%] top-[80%]">
        <button
          onClick={showSlider("prev")}
          id="prev"
          className="flex items-center justify-center w-10 h-10 bg-[#eee4] text-white font-bold transition-[0.5s] rounded-[50%] border-[none] hover:bg-white hover:text-black"
        >
          <Icon icon="ooui:arrow-next-rtl" width={20} />
        </button>
        <button
          onClick={showSlider("next")}
          id="next"
          className="flex items-center justify-center w-10 h-10 bg-[#eee4] text-white font-bold transition-[0.5s] rounded-[50%] border-[none] hover:bg-white hover:text-black"
        >
          <Icon icon="ooui:arrow-next-ltr" width={20} />
        </button>
      </div>
      <div class="time"></div>
    </div>
  );
};

export default EventSlider;
