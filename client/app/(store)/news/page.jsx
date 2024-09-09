"use client";
import { NewsCard } from "@src/components/common";
import { BlogsData } from "@src/data/data";
import newsAction, { fetchNews } from "@src/lib/actions/news.action";
import React, { useEffect, useState } from "react";

const page = () => {
  const [newsData, setNewsData] = useState(null);

  useEffect(() => {
    getNewsList();
  }, []);

  const getNewsList = () => {
    newsAction
      .getNews()
      .then((resp) => {
        setNewsData(resp.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="flex flex-col">
      <h1 className="text-[65px] font-bold mb-6 text-center">NEWS</h1>
      <p className="-mt-[15px] mb-8 md:w-[50%] text-center m-auto">
        Stay in the loop with the latest motorcycle industry updates and
        Netgarage announcements on our News page.
      </p>
      <div className="w-full bg-white grid grid-cols-3 p-7 rounded-xl gap-3 gap-y-5">
        {newsData?.length == 0 ? (
          <h1 className="font-bold text-4xl text-center">
            No News Available...
          </h1>
        ) : (
          newsData?.map((item, id) => {
            return (
              <div className="w-full" key={id}>
                <NewsCard data={item} />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default page;
