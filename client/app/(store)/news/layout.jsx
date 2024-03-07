import { Ad } from "@src/components/common";
import React from "react";

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
