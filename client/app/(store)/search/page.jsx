"use client";
import { BikeCard, Loader } from "@src/components/common";
import { Toast } from "@src/context/ToastContex";
import { BikesData } from "@src/data/data";
import listingsAction from "@src/lib/actions/listings.action";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const [brands, setBrands] = useState([]);
  const [bodyType, setBodyType] = useState([]);
  const [colors, setColors] = useState([]);

  useEffect(() => {
    const brands = params.getAll("brand");
    setBrands(brands);
    const bodyType = params.getAll("bodytype");
    setBodyType(bodyType);
    const colors = params.getAll("colors");
    setColors(colors);
  }, [searchParams]);

  console.log("Brands:", brands);
  console.log("BodyType:", bodyType);
  console.log("Colors:", colors);

  const [data, setData] = useState();

  const { warn } = Toast();

  useEffect(() => {
    getListingsList();
  }, []);

  const getListingsList = () => {
    listingsAction
      .fetchListings()
      .then((resp) => {
        setData(resp.data.data);
      })
      .catch((error) => {
        console.log(error);
        warn(error);
      });
  };

  return (
    <div className="w-full bg-white flex flex-wrap justify-between p-7 rounded-xl gap-3 gap-y-5">
      {data ? (
        data?.length == 0 ? (
          <h1 className="font-bold text-[36px] text-center">
            Nothing To show...
          </h1>
        ) : (
          data?.map((item, id) => {
            return (
              <div className="w-[32%]" key={id}>
                <BikeCard data={item} />
              </div>
            );
          })
        )
      ) : (
        <div className="w-full h-full flex justify-center">
          <Loader />
        </div>
      )}
    </div>
  );
};

export default page;
