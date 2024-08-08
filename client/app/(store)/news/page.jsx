"use client";
import { NewsCard } from "@src/components/common";
import { BlogsData } from "@src/data/data";
import { fetchNews } from "@src/lib/actions/news.action";
import React, { useEffect, useState } from "react";

const page = () => {
  // const [newsData, setNewsData] = useState(null);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   const { data } = await fetchNews();
  //   setNewsData(data);
  // };
  // console.log(newsData);
  return (
    <div className="flex flex-col">
      <h1 className="text-[65px] font-bold mb-6 text-center">NEWS</h1>
      <p className="-mt-[15px] mb-8 md:w-[50%] text-center m-auto">
        Stay in the loop with the latest motorcycle industry updates and
        Netgarage announcements on our News page.
      </p>
      <div className="w-full bg-white flex flex-wrap justify-between p-7 rounded-xl gap-3 gap-y-5">
        {BlogsData?.length == 0 ? (
          <h1 className="font-bold text-[36px] text-center">
            No News Available...
          </h1>
        ) : (
          BlogsData?.map((item, i) => {
            return (
              <div className="w-[32%]" key={i}>
                <NewsCard {...item} key={i} />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default page;
