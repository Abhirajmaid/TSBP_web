"use client";
import { BikesData } from "@src/data/data";
import { useParams } from "next/navigation";
import React from "react";

const page = () => {
  const param = useParams();

  const listing = BikesData.find((item) => {
    return item.id == param.id;
  });

  return <div className="mt-[150px]">{listing.name}</div>;
};

export default page;
