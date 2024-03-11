import { Gears } from "@src/data/data";
import Image from "next/image";
import React from "react";
import { SectionTitle } from "../common";

const GearsCat = () => {
  return (
    <>
      <SectionTitle title="Motorcycle Gear" />
      <div className="flex justify-between items-center gap-3">
        {Gears.map((item, i) => {
          return (
            <div
              className="flex flex-col justify-center items-center gap-5 bg-white p-6  rounded-xl cursor-pointer"
              key={i}
            >
              <Image
                src={item.image}
                width={200}
                height={300}
                alt={item.name}
              />
              <h2 className="font-medium">{item.name}</h2>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default GearsCat;
