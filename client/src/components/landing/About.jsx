import { aboutData } from "@src/data/data";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="flex flex-col gap-10 w-[90%] md:w-[80%] mx-auto p-6 md:p-[60px] border-2 border-[#888888]/50 rounded-lg bg-black/40 backdrop-filter backdrop-blur-lg bg-opacity-10">
      {aboutData.map((item) => {
        return (
          <div
            className={`flex flex-col md:flex-row gap-8 items-center justify-between ${
              item.id == 2 ? `md:flex-row-reverse` : `md:flex-row`
            } w-full mx-auto`}
            key={item.id}
          >
            <div className="flex flex-col gap-6 w-full md:w-[45%]">
              <h1 className="font-semibold text-[6vw] md:text-[2vw] text-white">
                {item.title}
              </h1>
              <p className="text-white text-[14px] md:text-[16px]">
                {item.text}
              </p>
            </div>
            <Image
              src={item.img}
              width={500}
              height={500}
              alt="TSBP"
              className="w-full md:w-[35%] rounded-lg"
            />
          </div>
        );
      })}
    </div>
  );
};

export default About;
