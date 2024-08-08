"use client";
import { BikeCard } from "@src/components/common";
import { BikesData } from "@src/data/data";
import { fetchListings } from "@src/lib/actions/listings.action";
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

  // const [listingsData, setListingsData] = useState(null);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   const { data } = await fetchListings();
  //   setListingsData(data);
  // };

  // useEffect(() => {}, []);
  return (
    <div className="w-full bg-white flex flex-wrap justify-between p-7 rounded-xl gap-3 gap-y-5">
      {BikesData?.length == 0 ? (
        <h1 className="font-bold text-[36px] text-center">
          Nothing To show...
        </h1>
      ) : (
        BikesData?.map((item) => {
          return (
            <div className="w-[32%]" key={item.id}>
              <BikeCard {...item} />
            </div>
          );
        })
      )}
    </div>
  );
};

export default page;
