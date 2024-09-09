"use client";
import reviewsAction from "@src/lib/actions/reviews.action";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const ReviewCard = ({ data }) => {
  return (
    <div className="p-7 bg-white w-1/4 rounded-lg flex flex-col gap-4 h-auto">
      <div className="flex items-center gap-4">
        <Image
          src={data?.attributes?.profile_pic?.data?.attributes?.url}
          width={200}
          height={200}
          className="rounded-full object-cover w-10 h-10 border"
        />
        <p>{data?.attributes?.name}</p>
      </div>
      <h2 className="text-lg font-semibold">{data?.attributes?.title}</h2>
      <p className="text-base text-text_para">{data?.attributes?.review}</p>
      <div className="flex gap-4 w-full">
        {data?.attributes?.img?.data?.length > 0 ? (
          data?.attributes?.img?.data?.map((item, id) => (
            <Image
              src={item?.attributes?.url}
              width={200}
              height={200}
              key={id}
              className="object-cover w-[33%] h-[100px] rounded-lg border"
            />
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

const Reviews = (model) => {
  console.log(model);

  const [data, setData] = useState();

  useEffect(() => {
    getReviews();
  }, []);

  const getReviews = () => {
    reviewsAction
      .getReviews(model.model)
      .then((resp) => {
        console.log(resp.data.data);
        setData(resp.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="w-full">
      <div className="flex w-full gap-5 items-stretch">
        {data?.map((item, id) => {
          return <ReviewCard data={item} key={id} />;
        })}
      </div>
    </div>
  );
};

export default Reviews;
