import { eventData } from "@src/data/data";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const EventSec = () => {
  return (
    <div className="w-full h-auto md:h-[700px] mb-[50px] px-4 md:px-0">
      <h3 className="flex items-center justify-between mb-6">
        <span className="section_title !text-white text-[6vw] md:text-[2.5vw]">
          Events
        </span>
        <Link href="/events">
          <button className="btn text-white text-[4vw] md:text-xl">
            View All &rarr;
          </button>
        </Link>
      </h3>
      {eventData.map((item) => {
        return (
          <div
            className="w-full h-[400px] md:h-full relative rounded-xl overflow-hidden mb-8"
            key={item.id}
          >
            <div className="absolute bg-gradient-to-t from-black to-white/0 top-0 left-0 w-full h-full"></div>
            <video
              muted
              autoPlay
              loop
              className="w-full h-full top-0 left-0 object-cover"
            >
              <source src={item.video} type="video/mp4" />
              <source src={item.video} type="video/3gpp" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute bottom-0 left-0 p-4 md:p-6 w-[90%] md:w-[50%] flex flex-col gap-3 md:gap-5">
              <h1 className="text-[6vw] md:text-[2.5vw] font-bold text-white leading-[6vw] md:leading-[65px]">
                {item.title}
              </h1>
              <span className="text-[4vw] md:text-[1.3vw] text-white font-semibold">
                {item.date}
              </span>
              <Link href={`events/${item.id}`}>
                <Button className="w-[50%] md:w-[30%] text-[3vw] md:text-base">
                  {item.button_txt}
                </Button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default EventSec;
