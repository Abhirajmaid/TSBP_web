import { eventData } from "@src/data/data";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const EventSec = () => {
  return (
    <div className="w-full h-[700px] mb-[50px]">
      <h3 className="flex items-center justify-between mb-6">
        <span className="section_title !text-white">Events</span>
        <Link href="/events">
          <button className="btn text-white text-xl">View All &rarr;</button>
        </Link>
      </h3>
      {eventData.map((item) => {
        return (
          <div
            className="w-full h-full relative rounded-xl overflow-hidden"
            key={item.id}
          >
            <div className="absolute bg-gradient-to-t from-black to-white/0 top-0 left-0 w-full h-full"></div>
            <video
              muted
              autoPlay
              loop="true"
              width="320"
              height="240"
              className="w-full h-full top-0 left-0 object-cover"
            >
              <source src={item.video} type="video/mp4" />
              <source src={item.video} type="video/3gpp" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute bottom-0 left-0 p-6 w-[50%] flex flex-col gap-5">
              <h1 className="text-[2.5vw] font-bold text-white leading-[65px] ">
                {item.title}
              </h1>
              <span className="text-[1.3vw] text-white font-semibold">
                {item.date}
              </span>
              <Link href={`events/${item.id}`}>
                <Button className="w-[30%]">{item.button_txt}</Button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default EventSec;
