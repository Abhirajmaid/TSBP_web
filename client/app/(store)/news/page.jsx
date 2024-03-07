"use client";
import { NewsCard } from "@src/components/common";
import { BlogsData } from "@src/data/data";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-[65px] font-bold mb-6 text-center">NEWS</h1>
      <p className="-mt-[15px] mb-8 md:w-[50%] text-center m-auto">
        Lorem ipsum dolor sit amet consectetur. Diam pharetra tellus sed nulla
        augue. Ornare
      </p>
      <div className="w-full bg-white flex flex-wrap justify-between p-7 rounded-xl gap-3">
        {BlogsData?.map((item, i) => {
          return (
            <div className="w-[32%]" key={i}>
              <NewsCard {...item} key={i} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default page;
