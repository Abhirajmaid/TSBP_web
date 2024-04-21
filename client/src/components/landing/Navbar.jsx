"use client";
import { navLinks } from "@src/data/navLinks";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { usePathname, useRouter } from "next/navigation";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  const pathname = usePathname();
  const isActive = (href) => pathname == href;
  return (
    <div className="fixed md:h-[70px] h-[80px] top-0 left-0 w-full z-[99] px-[3%] md:px-[3%] flex gap-4 justify-between items-center">
      <Link href="/">
        <Image
          src="/images/Logo + Wordmark Horizontal(white).png"
          width={600}
          height={700}
          alt="The SuperBike Project"
          className="h-[45px] w-[240px] overflow-hidden"
        />
      </Link>
      <div className="flex items-center gap-5">
        <div className="p-[6.5px] px-7 border-2 border-[#888888]/50 top-5 rounded-lg bg-black/40 backdrop-filter backdrop-blur-lg bg-opacity-10">
          <ul className="flex item-center justify-between w-full gap-10 text-white">
            {navLinks.map((item) => {
              return (
                <Link
                  key={item.id}
                  href={item.url}
                  className={`${
                    isActive(`${item.url}`) ? "text-primary_light" : ""
                  } font-semibold text-base hover:text-primary_light`}
                >
                  <li>{item.linkText}</li>
                </Link>
              );
            })}
          </ul>
        </div>
        <div className="flex gap-5 items-center">
          <SignedIn>
            <UserButton
              afterSignOutUrl="/"
              userProfileMode="navigation"
              userProfileUrl="/user-profile"
            />
          </SignedIn>
          <SignedOut>
            <Link href="/sign-in">
              <Button className="font-semibold text-lg border-2 border-[#888888]/50 bg-black/40 hover:bg-white/30">
                Login
              </Button>
            </Link>
          </SignedOut>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
