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
import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu";

import { deleteCookie, hasCookie } from "cookies-next";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState();
  const pathname = usePathname();
  const isActive = (href) => pathname == href;
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/search" + "?" + "query=" + searchQuery);
  };

  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (hasCookie("jwt")) {
      setIsLogin(true);
    }
  }, []);

  const onSignOut = () => {
    sessionStorage.clear();
    deleteCookie("jwt");
    router.push("/sign-in");
  };

  return (
    <>
      <div className="fixed bg-black md:h-[70px] h-[80px] top-0 left-0 w-full z-[99] px-[3%] md:px-[3%] flex gap-4 justify-between items-center">
        <Link href="/store">
          <Image
            src="/images/Logo2.png"
            width={300}
            height={100}
            alt="NetGarage"
            className="h-[40px] w-[200px]"
          />
        </Link>
        <div>
          <Select>
            <SelectTrigger className="w-[120px] rounded-lg bg-white/10 border-none text-white">
              <SelectValue placeholder="City" />
            </SelectTrigger>
            <SelectContent className="w-[150px] z-[99]">
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
        <div className="w-[40%] flex items-center bg-white/10 px-4 rounded-lg border-[2px] cursor-text border-[#888888]/25">
          <Icon icon="tabler:search" className="text-white" />
          <form className="w-full" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Find your bike..."
              className="w-full p-2 bg-transparent placeholder:text-white/60 outline-none focus:outline-none text-white"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <input
              type="submit"
              className="absolute -left-[999999] w-[1px] h-[1px]"
              tabIndex="-1"
            />
          </form>
        </div>
        <div className="w-[25%] px-1 top-5">
          <ul className="flex item-center justify-between w-full gap-[12px] text-white">
            {navLinks.map((item, id) => {
              return (
                <Link
                  key={id}
                  href={item.url}
                  className={`${
                    isActive(`${item.url}`) ? "text-primary_light" : ""
                  } font-semibold text-[1vw] hover:text-primary_light`}
                >
                  <li>{item.linkText}</li>
                </Link>
              );
            })}
          </ul>
        </div>
        <div className="flex gap-5 items-center">
          <Link href="/seller-login">
            <Button className="font-semibold text-[1vw] bg-white/15 hover:bg-white/30">
              Sell Your Bike
            </Button>
          </Link>

          {isLogin ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="flex items-center gap-1 cursor-pointer font-semibold bg-white rounded-full p-2">
                  <Icon icon="lucide:user-round" width={20} />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[150px] z-[99]">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="/user-profile">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => onSignOut()}>
                  Log Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link href="/sign-in">
              <Button className="font-semibold text-lg border-2 border-[#888888]/50 bg-black/40 hover:bg-white/30">
                Login
              </Button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
