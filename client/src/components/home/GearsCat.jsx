import { Gears } from "@src/data/data";
import Image from "next/image";
import React from "react";
import { SectionTitle } from "../common";

const GearsCat = () => {
  return (
    <>
      <SectionTitle title="Motorcycle Gear" />
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-7 lg:grid-cols-7 gap-3 justify-items-center items-center">
        {Gears.map((item, i) => {
          return (
            <div
              className="flex flex-col justify-center items-center gap-4 bg-white p-4 sm:p-6 rounded-xl cursor-pointer w-full"
              key={i}
            >
              <Image
                src={item.image}
                width={150}
                height={200}
                alt={item.name}
                className="w-full h-auto object-contain"
              />
              <h2 className="font-medium text-center text-base md:text-lg">
                {item.name}
              </h2>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default GearsCat;
