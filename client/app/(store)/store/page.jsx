"use client";
import { useUser } from "@clerk/nextjs";
import {
  ListingSlider,
  SectionTitle,
  SellerAdCard,
} from "@src/components/common";
import { BikeCat, GearsCat, HomeSwiper } from "@src/components/home";
import React from "react";

const page = async () => {
  const user = useUser();
  console.log(user.user);
  return (
    <div
      className="px-[4%] bg-bg gap-[30px] flex flex-col overflow-hidden"
      style={{ paddingTop: "90px" }}
    >
      <BikeCat />
      <HomeSwiper />
      <ListingSlider filter="featured" />
      <GearsCat />
      <SectionTitle title="Super Bikes" />
      <ListingSlider filter="super-bikes" />
      <SectionTitle title="Cruiser" />
      <ListingSlider filter="cruiser-bikes" />
      <SellerAdCard />
    </div>
  );
};

export default page;
