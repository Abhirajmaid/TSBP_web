import { SellerLogin, SellerReg } from "@src/components/seller";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen justify-center items-center relative">
        <Image
          src="https://images.unsplash.com/photo-1637476349345-d8f88e11e573?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={1000}
          alt="netgarage"
          height={1000}
          className="absolute top-0 left-0 object-cover h-full w-full"
        />
        <div className="z-50">
          <SellerLogin />
        </div>
      </div>
    </>
  );
};

export default page;
