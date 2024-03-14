import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="w-full h-fit flex flex-col gap-5 p-6 bg-white rounded-xl">
      {tabs.map((item, i) => {
        return (
          <Link href={item.link} key={i}>
            <Button className="bg-btn_gray text-black font-semibold w-full">
              {item.tabName}
            </Button>
          </Link>
        );
      })}
    </div>
  );
};

export default Sidebar;
