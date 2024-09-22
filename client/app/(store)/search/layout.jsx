import { Filters } from "@src/components/common";
import React from "react";

export default function Layout({ children }) {
  return (
    <div
      style={{ marginTop: "100px" }}
      className="flex flex-col lg:flex-row justify-between gap-5 bg-bg w-full px-4 lg:px-[4%]"
    >
      <div className="w-full lg:w-[25%] relative">
        <Filters />
      </div>
      <div className="w-full lg:w-[73%] mt-5 lg:mt-0">{children}</div>
    </div>
  );
}
