import { Gears } from "@src/data/data";
import Image from "next/image";
import React from "react";
import { SectionTitle } from "../common";

const GearsCat = () => {
  return (
    <>
      <div className="flex justify-between">
        <SectionTitle title="Motorcycle Gear" />
        <button className="btn text-primary_dark">View All &rarr;</button>
      </div>
      <div className="flex justify-between items-center gap-3">
        {Gears.map((item) => {
          return (
            <div className="flex flex-col justify-center items-center gap-5 bg-white p-6  rounded-xl cursor-pointer">
              <Image src={item.image} width={200} height={300} />
              <h2>{item.name}</h2>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default GearsCat;
