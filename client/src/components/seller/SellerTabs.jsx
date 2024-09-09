"use client";
import React from "react";
import { Button } from "../ui/button";
import { SellersTabList } from "@src/data/navLinks";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { usePathname } from "next/navigation";

const SellerTabs = () => {
  const pathname = usePathname();

  return (
    <div className="w-full items-center justify-center flex gap-5 p-3 bg-black">
      {SellersTabList.map((item) => {
        return (
          <Link href={`/seller/${item.url}`} key={item.id} className="w-[19%]">
            <Button
              className={`flex gap-2 items-center ${
                `/seller${item.url}` == `${pathname}`
                  ? "bg-white/30"
                  : "bg-white/15"
              }  w-full hover:bg-white/30`}
            >
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
