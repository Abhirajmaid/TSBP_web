import {
  BikeSellCard,
  Notification,
} from "@src/components/seller/sellerDashboard";
import { BikesData } from "@src/data/data";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="px-[4%] my-[100px]">
      <div className="w-full flex gap-4">
        <div className="bg-white rounded-xl w-[70%]">
          <div className="flex justify-between items-center px-7 pt-7">
            <h1 className="font-semibold text-xl">Your Bike</h1>
            <Link href="/seller/new-bike">
              <span className="font-semibold text-3xl cursor-pointer">+</span>
            </Link>
          </div>
          <div className="flex flex-wrap justify-between p-7 gap-3 gap-y-5">
            {BikesData?.map((item) => {
              return (
                <div className="w-[32%]" key={item.id}>
                  <BikeSellCard {...item} />
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-[30%]">
          <Notification />
        </div>
      </div>
    </div>
  );
};

export default page;
