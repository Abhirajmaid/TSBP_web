import {
  customerLinks,
  navLinks,
  otherLinks,
  socialLinks,
} from "@src/data/navLinks";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = ({ bg }) => {
  return (
    <div className={`bg-${bg} h-fit w-full mt-[60px]`}>
      <div className="flex flex-col md:flex-row justify-between items-center p-[5%] gap-8">
        <div className="flex flex-col gap-4 text-white md:w-[25%]">
          <Image
            src="/images/LOGO2.png"
            width={200}
            height={60}
            alt="NetGarage"
            className="w-[200px] h-[40px] md:w-[300px] md:h-[60px]"
          />
          <p className="text-sm md:text-base">For the Love of Superbikes</p>
        </div>
        <div className="grid-cols-2 grid md:flex md:flex-row md:w-[70%] justify-between items-start gap-8">
          <div className="w-full md:w-auto">
            <h4 className="mb-[20px] md:mb-[40px] font-semibold text-white">
              Links
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-white font-normal">
              {navLinks.map((item, i) => (
                <Link href={item.url} key={i}>
                  <li>{item.linkText}</li>
                </Link>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-auto">
            <h4 className="mb-[20px] md:mb-[40px] font-semibold text-white">
              Other Links
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-white font-normal">
              {otherLinks.map((item, i) => (
                <Link href={item.url} key={i}>
                  <li>{item.linkText}</li>
                </Link>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-auto">
            <h4 className="mb-[20px] md:mb-[40px] font-semibold text-white">
              Consumer Policy
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-white font-normal">
              {customerLinks.map((item, i) => (
                <Link href={item.url} key={i}>
                  <li>{item.linkText}</li>
                </Link>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-auto">
            <h4 className="mb-[20px] md:mb-[40px] font-semibold text-white">
              Socials
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-white font-normal">
              {socialLinks.map((item, i) => (
                <Link href={item.url} target="_blank" key={i}>
                  <li>{item.linkText}</li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-300 pb-3 text-sm">
        All Rights Reserved © NETGARAGE
      </div>
    </div>
  );
};

export default Footer;
