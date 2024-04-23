"use client";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Tag = ({ tag }) => {
  return (
    <p className="p-1 px-[6px] bg-[#E8E8E8] text-black rounded-lg ">{tag}</p>
  );
};

const BikeSellCard = ({
  name,
  bike_image,
  year,
  location,
  km_ridden,
  owner,
  bs,
  emi,
  price,
  id,
  category,
  special,
}) => {
  return (
    <div className="w-full flex flex-col gap-2 h-fit shadow-xl transition-all bg-white rounded-xl overflow-hidden">
      <div className="h-[55%] relative">
        <Image
          src={bike_image}
          width={500}
          height={500}
          className="h-full w-full object-cover"
          alt="tsbp"
        />
        <div className="absolute top-2 right-2 flex gap-3 items-center">
          <Icon
            icon="material-symbols:edit-sharp"
            width={40}
            className="p-2 bg-primary rounded-[100px] text-white cursor-pointer"
          />
          <Link href={`/listings/${id}`}>
            <Icon
              icon="carbon:view-filled"
              width={40}
              className="p-2 bg-primary rounded-[100px] text-white cursor-pointer"
            />
          </Link>
          <Icon
            icon="material-symbols:delete-sharp"
            width={40}
            className="p-2 bg-primary rounded-[100px] text-white cursor-pointer"
          />
        </div>
      </div>
      <div className="flex flex-col gap-5 px-3 pb-4">
        <span className="flex justify-between">
          <h2 className="font-bold text-base">{name}</h2>
          <p>{year}</p>
        </span>
        <span className="flex items-center gap-1">
          <Icon icon="ep:location" width={20} height={20} />
          <p>{location}</p>
        </span>
        <span className="flex items-center gap-3 text-[0.7vw]">
          <>
            <Tag tag={`${km_ridden} kms`} />
          </>
          <>
            <Tag tag={`${owner} Owner`} />
          </>
          <>
            <Tag tag={bs} />
          </>
        </span>
        <span className="flex justify-between text-[#666666] font-bold text-[15px]">
          <p>₹{emi}/month</p>
          <p>₹{price}</p>
        </span>
      </div>
    </div>
  );
};

export default BikeSellCard;
