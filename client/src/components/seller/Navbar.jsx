"use client";
import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@src/data/navLinks";
import { usePathname, useRouter } from "next/navigation";
import { Icon } from "@iconify/react";
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
import { useState } from "react";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const DotIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      fill="currentColor"
    >
      <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
    </svg>
  );
};
const CustomPage = () => {
  return (
    <div>
      <h1>Custom Profile Page</h1>
      <p>This is the custom profile page</p>
    </div>
  );
};
const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState();
  const pathname = usePathname();
  const isActive = (href) => pathname == href;
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/search" + "?" + "query=" + searchQuery);
  };
  return (
    <>
      <div className="fixed bg-black md:h-[70px] h-[80px] top-0 left-0 w-full z-[99] px-[3%] md:px-[3%] flex gap-4 justify-between items-center">
        <div className="flex items-center gap-5">
          <Link href="/">
            <Image
              src="/images/LOGO.png"
              width={300}
              height={300}
              alt="RKChaiwala"
            />
          </Link>
          <div>
            <Select>
              <SelectTrigger className="w-[120px] rounded-lg bg-white/10 border-none text-white">
                <SelectValue placeholder="City" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Pune</SelectLabel>
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
          <Link href="/home">
            <Button className="font-semibold text-lg">Go to Store</Button>
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
    </>
  );
};

export default Navbar;
