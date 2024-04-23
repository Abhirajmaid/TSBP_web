import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-between h-[105vh] w-full items-center ">
        <div className="flex flex-col gap-6 w-[40%]">
          <h1 className="text-white text-[3.5vw] font-bold leading-[55px]">
            Finding the ride <br /> of your dreams <br /> has never been easier
          </h1>
          <Link href="/store">
            <Button className="border-2 border-primary_light bg-white/15 text-[0.8vw] w-[30%] py-6">
              Visit Store
            </Button>
          </Link>
        </div>
        <div className="flex flex-col w-[60%]">
          <Image
            src="images/landing_hero.svg"
            height={500}
            width={500}
            className="translate-y-[18%] w-[1100px] z-[1]"
            alt="TSBP"
          />
          <Image
            src="images/shadow.svg"
            height={1000}
            width={1000}
            className="-translate-y-[50%] w-full h-auto z-[0]"
            alt="TSBP"
          />
        </div>
      </div>
      <div className="flex justify-between items-center w-[80%] mx-auto -mt-[75px]">
        <div className="flex flex-col gap-3 items-center">
          <h1 className="text-[40px] text-primary font-bold">55+</h1>
          <p className="text-white font-normal text-xl">Premium Resellers</p>
        </div>
        <Image
          src="images/line_break.svg"
          height={100}
          width={100}
          className="w-[250px]"
          alt="line"
        />
        <div className="flex flex-col gap-3 items-center">
          <h1 className="text-[40px] text-primary font-bold">5000+</h1>
          <p className="text-white font-normal text-xl">Reving Customers</p>
        </div>
        <Image
          src="images/line_break.svg"
          height={100}
          width={100}
          className="w-[250px]"
          alt="line"
        />
        <div className="flex flex-col gap-3 items-center">
          <h1 className="text-[40px] text-primary font-bold">362+</h1>
          <p className="text-white font-normal text-xl">Superbikes Listed</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
