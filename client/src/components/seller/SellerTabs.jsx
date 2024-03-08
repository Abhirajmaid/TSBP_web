"use client";
import React from "react";
import { Button } from "../ui/button";
import { SellersTabList } from "@src/data/navLinks";
import Link from "next/link";
import { Icon } from "@iconify/react";

const SellerTabs = () => {
  return (
    <div className="w-full items-center justify-center flex gap-5 p-3 bg-black">
      {SellersTabList.map((item) => {
        return (
          <Link href={item.url} key={item.id} className="w-[19%]">
            <Button className="flex gap-2 items-center bg-white/15 w-full hover:bg-white/30">
              <Icon icon={item.icon} className="text-xl" />
              {item.linkText}
            </Button>
          </Link>
        );
      })}
    </div>
  );
};

export default SellerTabs;
