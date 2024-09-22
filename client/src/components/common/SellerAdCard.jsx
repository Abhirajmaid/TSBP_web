import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const SellerAdCard = () => {
  return (
    <div className="w-[90%] bg-[#FF5810] rounded-2xl flex flex-col md:flex-row gap-6 relative md:px-[80px] md:py-[60px] p-[30px] mx-auto">
      <div className="w-full flex flex-col gap-4 md:gap-7">
        <h2 className="text-[8vw] md:text-[82px] leading-[9vw] md:leading-[80px] text-white font-extrabold">
          Become Seller <br /> Today!
        </h2>
        <Link href="/seller-login">
          <Button size="lg" className="text-[4vw] md:text-base">
            Click Here &rarr;
          </Button>
        </Link>
      </div>
      <Image
        src="/images/Adbike.png"
        width={1500}
        height={1500}
        alt="shop"
        className="absolute right-5 w-[300px] md:w-[650px] top-10 md:top-1 hidden md:block"
      />
    </div>
  );
};

export default SellerAdCard;
