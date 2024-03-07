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
  const router = useRouter();
  return (
    <div className="fixed bg-transparent md:h-[70px] h-[80px] top-0 left-0 w-full z-[99] px-[3%] md:px-[3%] flex gap-4 justify-between items-center">
      <Link href="/">
        <Image
          src="/images/LOGO.png"
          width={300}
          height={300}
          alt="RKChaiwala"
        />
      </Link>
      <div className="p-1 px-7 border-2 border-[#888888]/50 top-5 rounded-xl bg-black/40 backdrop-filter backdrop-blur-lg bg-opacity-10">
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
        <Link href="/seller">
          <Button className="font-semibold text-lg bg-black/40 backdrop-filter backdrop-blur-lg bg-opacity-10 border-2 border-[#888888]/50">
            Sell Your Bike
          </Button>
        </Link>
        <SignedIn>
          <UserButton
            afterSignOutUrl="/"
            userProfileMode="navigation"
            userProfileUrl="/user-profile"
          />
        </SignedIn>
        <SignedOut>
          <Link href="/sign-in">
            <Button className="font-semibold text-lg">Login</Button>
          </Link>
        </SignedOut>
      </div>
    </div>
  );
};

export default Navbar;
