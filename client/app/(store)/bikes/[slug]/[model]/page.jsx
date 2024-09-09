"use client";
import { BikeDetails, BikeSpecs, Reviews } from "@src/components/bikes";
import { ListingSlider, Loader, SectionTitle } from "@src/components/common";
import { Variant } from "@src/components/listings";
import { Toast } from "@src/context/ToastContex";
import bikesAction from "@src/lib/actions/bikes.action";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
  const param = useParams();

  const { warn } = Toast();

  const [data, setData] = useState();

  useEffect(() => {
    getBikeDetails();
  }, []);

  const getBikeDetails = () => {
    bikesAction
      .getBikeModel(param.model)
      .then((resp) => {
        setData(resp.data.data[0]);
      })
      .catch((error) => {
        console.log(error);
        warn(error);
      });
  };

  return (
    <>
      {data ? (
        <div className="flex flex-col gap-5 w-[90%] mx-auto">
          <BikeDetails data={data} />
          {data?.attributes?.variants?.data.length > 0 ? (
            <Variant data={data} />
          ) : (
            <div className="text-xl font-semibold p-5 pl-0 w-full rounded-lg">
              No Variants
            </div>
          )}
          <BikeSpecs data={data} />
          <SectionTitle title="User Reviews" />
          <Reviews model={param.model} />
          <SectionTitle title="Similars Bikes" />
          <ListingSlider filter="super-bikes" />
        </div>
      ) : (
        <div className="flex justify-center w-full min-h-screen items-center">
          <Loader />
        </div>
      )}
    </>
  );
};

export default page;
