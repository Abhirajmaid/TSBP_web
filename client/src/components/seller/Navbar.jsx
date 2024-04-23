"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import { cities } from "@src/data/data";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@src/components/ui/select";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <>
      <div className="fixed bg-black md:h-[70px] h-[80px] top-0 left-0 w-full z-[99] px-[3%] md:px-[3%] flex gap-4 justify-between items-center">
        <div className="flex items-center gap-5">
          <Link href="/store">
            <Image
              src="/images/Logo2.png"
              width={240}
              height={300}
              alt="RKChaiwala"
              className="h-[40px] w-[200px]"
            />
          </Link>
          <div>
            <Select>
              <SelectTrigger className="w-[120px] rounded-lg bg-white/10 border-none text-white">
                <SelectValue placeholder="City" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Cities</SelectLabel>
                  {cities.map((city) => {
                    return (
                      <SelectItem
                        value={city.value}
                        key={city.value}
                        className="hover:text-gray-500 cursor-pointer"
                      >
                        {city.label}
                      </SelectItem>
                    );
                  })}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex gap-5 items-center">
          <Link href="/store">
            <Button className="font-semibold text-lg bg-white/15 hover:bg-white/30">
              Go to Store
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
              <Button className="font-semibold text-[1vw] bg-white/15 hover:bg-white/30">
                Login
              </Button>
            </Link>
          </SignedOut>
        </div>
      </div>
    </>
  );
};

export default Navbar;
