import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col-reverse lg:flex-row justify-center  h-[90vh] lg:h-[105vh] w-full items-center px-4 lg:px-0">
        <div className="flex flex-col gap-6 w-full lg:w-[40%] text-center lg:text-left z-[99]">
          <h1 className="text-white text-[8vw] lg:text-[3.5vw] font-bold leading-[9vw] lg:leading-[55px]">
            Finding the ride <br className="hidden lg:block" />
            of your dreams <br className="hidden lg:block" />
            has never been easier
          </h1>
          <Link href="/store">
            <Button className="border-2 border-primary_light bg-white/15 text-[3vw] lg:text-[0.8vw] w-full lg:w-[30%] py-3 lg:py-6">
              Visit Store
            </Button>
          </Link>
        </div>
        <div className=" md:flex flex-col w-full lg:w-[60%] mt-8 lg:mt-0">
          <Image
            src="/images/landing_hero.svg"
            height={500}
            width={500}
            className="w-full lg:w-[1100px] z-[1]"
            alt="TSBP"
          />
          <Image
            src="/images/shadow.svg"
            height={1000}
            width={1000}
            className="-translate-y-[80%] w-full h-auto z-[0] md:block hidden"
            alt="TSBP"
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-center w-full lg:w-[80%] mx-auto mt-6 lg:-mt-[75px] gap-6 lg:gap-0">
        <div className="flex flex-col gap-3 items-center">
          <h1 className="text-[8vw] lg:text-[40px] text-primary font-bold">
            55+
          </h1>
          <p className="text-white font-normal text-xl">Premium Resellers</p>
        </div>
        <Image
          src="/images/line_break.svg"
          height={100}
          width={100}
          className="hidden lg:block w-[250px]"
          alt="line"
        />
        <div className="flex flex-col gap-3 items-center">
          <h1 className="text-[8vw] lg:text-[40px] text-primary font-bold">
            5000+
          </h1>
          <p className="text-white font-normal text-xl">Reving Customers</p>
        </div>
        <Image
          src="/images/line_break.svg"
          height={100}
          width={100}
          className="hidden lg:block w-[250px]"
          alt="line"
        />
        <div className="flex flex-col gap-3 items-center">
          <h1 className="text-[8vw] lg:text-[40px] text-primary font-bold">
            362+
          </h1>
          <p className="text-white font-normal text-xl">Superbikes Listed</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
