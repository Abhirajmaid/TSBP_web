import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const SellerAdCard = () => {
  return (
    <div className="w-[90%] bg-red-600 rounded-2xl flex gap-6 relative md:px-[80px] md:py-[60px] p-[30px] mx-auto">
      <div className="w-full flex flex-col gap-7">
        <h2 className="text-[82px] leading-[80px] text-white font-extrabold">
          Become Seller <br /> Today!
        </h2>
        <Link href="/seller">
          <Button size="lg">Click Here &rarr;</Button>
        </Link>
      </div>
      <Image
        src="/images/Adbike.png"
        width={1500}
        height={1500}
        alt="shop"
        className=" absolute right-0 w-[800px] -top-10 md:block hidden"
      />
    </div>
  );
};

export default SellerAdCard;
