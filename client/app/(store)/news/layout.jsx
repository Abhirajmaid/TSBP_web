import { Ad } from "@src/components/common";
import React from "react";

export const metadata = {
  title: "News",
  description:
    "Stay in the loop with the latest motorcycle industry updates and Netgarage announcements on our News page.",
};

const layout = ({ children }) => {
  return (
    <div className="w-full flex gap-5 mt-[150px] px-[3%]">
      <div className="w-[72%]">{children}</div>
      <div className="w-[25%]">
        <Ad />
      </div>
    </div>
  );
};

export default layout;
