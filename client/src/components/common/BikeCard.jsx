"use client";
import { Icon } from "@iconify/react";
import Image from "next/image";
import React from "react";

const Tag = ({ tag }) => {
  return (
    <p className="p-1 px-[6px] bg-gray-300 text-black rounded-lg ">{tag}</p>
  );
};

const BikeCard = ({
  name,
  bike_image,
  year,
  location,
  kms,
  owner,
  bs,
  emi,
  price,
  id,
  category,
  special,
}) => {
  return (
    <div className="flex flex-col gap-2 h-full w-full cursor-pointer hover:shadow-2xl hover:scale-[1.05] p-1 transition-all">
      <div className="h-[55%]">
        <Image
          src={bike_image}
          width={500}
          height={500}
          className="h-full w-full object-cover"
          alt="tsbp"
        />
      </div>
      <div className="flex flex-col gap-5">
        <span className="flex justify-between">
          <h2 className="font-bold text-base">{name}</h2>
          <p>{year}</p>
        </span>
        <span className="flex items-center gap-1">
          <Icon icon="ep:location" width={20} height={20} />
          <p>{location}</p>
        </span>
        <span className="flex items-center gap-3 text-[0.6vw]">
          <>
            <Tag tag={`${kms} kms`} />
          </>
          <>
            <Tag tag={`${owner} Owner`} />
          </>
          <>
            <Tag tag={bs} />
          </>
        </span>
        <span className="flex justify-between text-black/70 font-bold text-[15px]">
          <p>₹{emi}/month</p>
          <p>₹{price}</p>
        </span>
      </div>
    </div>
  );
};

export default BikeCard;
