import { Loader } from "@src/components/common";
import React from "react";

const loading = () => {
  return (
    <div className="w-full h-screen md:p-[6%] flex justify-center items-center">
      <Loader />
    </div>
  );
};

export default loading;
