import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const tabs = [
  {
    tabName: "Profile",
    link: "/profile",
  },
  {
    tabName: "Sell Your Bike",
    link: "/seller",
  },
  {
    tabName: "Help",
    link: "/help-center",
  },
];

const Ad = () => {
  return <div className="w-full h-[300px] p-6 bg-white rounded-xl">AD</div>;
};

export default Ad;
