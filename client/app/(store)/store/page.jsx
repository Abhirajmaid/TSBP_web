"use client";
import { useClerk, useUser } from "@clerk/nextjs";
import {
  ListingSlider,
  SectionTitle,
  SellerAdCard,
} from "@src/components/common";
import { BikeCat, GearsCat, HomeSwiper } from "@src/components/home";
import { createUser } from "@src/lib/actions/user.action";
import React, { useEffect } from "react";

const initialstate = {
  id: "",
  emailAddresses: "",
  imageUrl: "",
  firstName: "",
  lastName: "",
  username: "",
};

const page = () => {
  useEffect(() => {
    // createUser({ firstName: "asdasd", email: "addd@gmail.com" });
  }, []);

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
