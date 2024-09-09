"use client";
import {
  ListingSlider,
  Loader,
  SectionTitle,
  SellerAdCard,
} from "@src/components/common";
import { GearsCat } from "@src/components/home";
import {
  AboutListing,
  ListingDetails,
  Variant,
} from "@src/components/listings";
import { Toast } from "@src/context/ToastContex";
import bikesAction from "@src/lib/actions/bikes.action";
import listingsAction from "@src/lib/actions/listings.action";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
  const param = useParams();

  const { warn } = Toast();

  const [data, setData] = useState();
  const [bikeDetails, setBikeDetails] = useState();

  useEffect(() => {
    getListingsDetails();
  }, []);

  const getListingsDetails = () => {
    listingsAction
      .getBikeListingById(param.id)
      .then((resp) => {
        console.log("data", resp.data.data);
        setData(resp.data.data);
      })
      .catch((error) => {
        console.log(error);
        warn(error);
      });
  };

  useEffect(() => {
    getBikeDetails();
  }, [data]);

  const getBikeDetails = () => {
    bikesAction
      .getBikeModel(data?.attributes?.bike_model?.data?.attributes?.slug)
      .then((resp) => {
        setBikeDetails(resp.data.data);
      })
      .catch((error) => {
        console.log(error);
        warn(error);
      });
  };

  console.log("var", bikeDetails);

  return (
    <>
      {data ? (
        <div className="flex flex-col gap-5 w-[90%] mx-auto">
          <ListingDetails data={data} />
          <SectionTitle title="About" />
          <AboutListing data={data} />
          {bikeDetails ? (
            bikeDetails[0]?.attributes?.variants?.data.length > 0 ? (
              <Variant data={bikeDetails[0]} />
            ) : (
              <div className="text-xl font-semibold p-5 w-full bg-white rounded-lg">
                No Variants
              </div>
            )
          ) : (
            <Loader />
          )}
          <GearsCat />
          <SectionTitle title="From Similar Price Range" />
          <ListingSlider filter="super-bikes" />
          <SectionTitle title="From Similar Category" btn="/" />
          <ListingSlider filter="cruiser-bikes" />
          <SellerAdCard />
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
