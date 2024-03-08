import Image from "next/image";
import React from "react";
import { bikesCat } from "@src/data/data";

const BikeCat = () => {
  return (
    <div className="w-full flex justify-between gap-3 bg-white p-[20px] rounded-xl">
      {bikesCat.map((item) => {
        return (
          <div
            className="rounded-lg py-5 px-2 border-[2px] bg-white border-black/20 flex flex-col justify-center items-center cursor-pointer"
            key={item.id}
          >
            <Image
              src={item.image}
              width={1500}
              height={1500}
              className="w-[230px] h-auto"
              alt={item.name}
            />
            <h2 className="text-lg font-semibold">{item.name}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default BikeCat;
