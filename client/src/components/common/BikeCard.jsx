"use client";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Tag = ({ tag }) => {
  return (
    <p className="p-1 px-[6px] bg-[#E8E8E8] text-black rounded-lg text-xs sm:text-sm md:text-base">
      {tag}
    </p>
  );
};

const BikeCard = ({ data }) => {
  return (
    <Link href={`/listings/${data?.attributes?.slug}/${data?.id}`}>
      <div className="w-full flex flex-col gap-2 h-fit cursor-pointer hover:shadow-2xl transition-all bg-white rounded-xl overflow-hidden border">
        <div className="h-[55%]">
          <Image
            src={data?.attributes?.bike_image || "/images/Bikes/bike3.png"}
            width={500}
            height={500}
            className="h-full w-full object-cover"
            alt="tsbp"
          />
        </div>
        <div className="flex flex-col gap-4 px-3 pb-4">
          <span className="flex justify-between">
            <h2 className="font-bold text-sm sm:text-base md:text-lg">
              {data?.attributes?.name}
            </h2>
            <p className="text-xs sm:text-sm md:text-base">
              {data?.attributes?.manufacturing_year}
            </p>
          </span>
          <span className="flex items-center gap-1 text-xs sm:text-sm md:text-base">
            <Icon icon="ep:location" width={20} height={20} />
            <p>{data?.attributes?.city}</p>
          </span>
          <span className="flex items-center gap-2 text-xs sm:text-sm md:text-base">
            <Tag tag={`${data?.attributes?.km_ridden} kms`} />
            <Tag tag={`${data?.attributes?.owner_name} Owner`} />
            <Tag tag={data?.attributes?.bs || "BS-6"} />
          </span>
          <span className="flex flex-row justify-between text-[#666666] font-semibold text-xs sm:text-sm md:text-base">
            <p className="text-left">
              Price: <br /> ₹{Number(data?.attributes?.expected_price)}
            </p>
            <p className="text-right">
              EMI option: <br /> ₹{data?.attributes?.expected_price}/month
            </p>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default BikeCard;
