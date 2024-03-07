import Image from "next/image";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center relative">
      <Image
        src="/images/login.svg"
        width={1000}
        height={1000}
        className="absolute top-0 left-0 object-cover h-full w-full"
      />
      <h1 className="text-center font-extrabold text-[65px] z-50 text-white">
        Login to Your Account
      </h1>
      <p className="w-[35%] mx-auto text-[18px] text-center mb-[35px] z-50 text-gray-300">
        Vorem ipsum dolor sit amet, consectetur adipiscing elit. Vorem ipsum
        dolor sit amet, consectetur adipiscing elit.{" "}
      </p>
      {children}
    </div>
  );
};

export default layout;
