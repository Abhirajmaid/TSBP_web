import { Filters } from "@src/components/common";
import { BikeCat } from "@src/components/home";
import React from "react";

export default function Layout({ children }) {
  return (
    <div
      style={{ marginTop: "100px" }}
      className="flex justify-between gap-5 bg-bg w-full px-[4%]"
    >
      <div className="w-[25%] relative">
        <Filters />
      </div>
      <div className="w-[73%]">{children}</div>
    </div>
  );
}
