import {
  customerLinks,
  navLinks,
  otherLinks,
  socialLinks,
} from "@src/data/navLinks";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-primary h-fit w-full mt-[60px]">
      <div className="flex justify-between items-center p-[5%]">
        <div className="flex flex-col gap-8 text-white">
          <Image
            src="/images/LOGO_footer.png"
            width={500}
            height={500}
            className="w-[150px] h-auto"
          />

          <p>For the Love of Superbikes</p>
        </div>
        <div className="flex w-[50%] justify-between items-start">
          <div>
            <h4 className="mb-[40px] font-semibold text-white">Links</h4>
            <ul className="flex flex-col gap-4 text-sm text-white font-normal">
              {navLinks.map((item, i) => {
                return (
                  <Link href={item.url} key={i}>
                    <li>{item.linkText}</li>
                  </Link>
                );
              })}
            </ul>
          </div>
          <div>
            <h4 className="mb-[40px] font-semibold text-white">Other Links</h4>
            <ul className="flex flex-col gap-4 text-sm text-white font-normal">
              {otherLinks.map((item, i) => {
                return (
                  <Link href={item.url} key={i}>
                    <li>{item.linkText}</li>
                  </Link>
                );
              })}
            </ul>
          </div>
          <div>
            <h4 className="mb-[40px] font-semibold text-white">
              Consumer Policy
            </h4>
            <ul className="flex flex-col gap-4 text-sm text-white font-normal">
              {customerLinks.map((item, i) => {
                return (
                  <Link href={item.url} key={i}>
                    <li>{item.linkText}</li>
                  </Link>
                );
              })}
            </ul>
          </div>
          <div>
            <h4 className="mb-[40px] font-semibold text-white">Socials</h4>
            <ul className="flex flex-col gap-4 text-sm text-white font-normal">
              {socialLinks.map((item, i) => {
                return (
                  <Link href={item.url} target="_blank" key={i}>
                    <li>{item.linkText}</li>
                  </Link>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-300 pb-3">
        All Rights Reserved © The Super Bike Project
      </div>
    </div>
  );
};

export default Footer;
