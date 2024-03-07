"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import { Button } from "../ui/button";

const colors = ["bg-red-600", "bg-blue-600", "bg-gray-600", "bg-green-600"];

const BrandsList = [
  {
    id: "kawasaki",
    label: "Kawasaki",
    name: "brand",
  },
  {
    id: "bmw",
    label: "BMW",
    name: "brand",
  },
  {
    id: "triumph",
    label: "Triumph",
    name: "brand",
  },
  {
    id: "tvs",
    label: "TVS",
    name: "brand",
  },
];
const BodyTypeList = [
  {
    id: "sport",
    label: "Sport",
    name: "bodytype",
  },
  {
    id: "street-fighter",
    label: "Street Fighter",
    name: "bodytype",
  },
  {
    id: "adventure",
    label: "Adventure",
    name: "bodytype",
  },
  {
    id: "cruiser",
    label: "Cruiser",
    name: "bodytype",
  },
];

const ColorList = [
  {
    id: "green",
    label: "Green",
    name: "color",
  },
  {
    id: "gray",
    label: "Black",
    name: "color",
  },
  {
    id: "blue",
    label: "Blue",
    name: "color",
  },
  {
    id: "red",
    label: "Red",
    name: "color",
  },
];

const Filters = () => {
  const [filters, setFilters] = useState([]);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  // useEffect(() => {
  //   const values = params.getAll(["brand", "color", "bodytype"]);

  //   document.getElementsByName("color").checked = false;
  // }, [searchParams]);

  function handleChange(e) {
    const { name, value, checked } = e.target;
    if (checked) {
      setFilters((pre) => [...pre, value]);
      router.push(pathname + "?" + createQueryString(name, value));
    } else {
      router.push(pathname + "?" + createQueryString(name, value));
      setFilters((pre) => {
        return [...pre.filter((item) => item !== value)];
      });
    }
  }

  const createQueryString = useCallback(
    (name, value) => {
      if (params.has(name, value)) {
        params.delete(name, value);
      } else params.append(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const clearFilters = (e) => {
    router.push(pathname);
    setFilters([]);
  };

  return (
    <div className="bg-white p-6 rounded-xl w-[23%] fixed ">
      <h3 className="text-sm text-gray-400">Filters</h3>
      <div className="flex flex-col gap-4 mt-5">
        <div>
          <h3 className="text-lg font-semibold">Brands</h3>
          <div className="flex flex-col gap-3 p-3 bg-bg_dark rounded-xl">
            {BrandsList.map((item) => {
              return (
                <span
                  key={item.id}
                  className="flex items-center justify-between w-full"
                >
                  <input
                    type="checkbox"
                    name={item.name}
                    value={item.id}
                    onChange={handleChange}
                    className="cursor-pointer"
                  />
                  <p>{item.label}</p>
                </span>
              );
            })}
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Year</h3>
          <div></div>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Price Range</h3>
          <div></div>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Body Type</h3>
          <div className="flex flex-col gap-3 p-3 bg-bg_dark rounded-xl">
            {BodyTypeList.map((item) => {
              return (
                <span
                  key={item.id}
                  className="flex items-center justify-between w-full"
                >
                  <input
                    type="checkbox"
                    name={item.name}
                    value={item.id}
                    onChange={handleChange}
                    className="cursor-pointer"
                  />
                  <p>{item.label}</p>
                </span>
              );
            })}
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Body Colour</h3>
          <div className="flex justify-between p-3 bg-bg_dark rounded-xl">
            {ColorList.map((item) => {
              return (
                <span
                  key={item.id}
                  className="flex flex-col items-center justify-center gap-2"
                >
                  <span
                    className={`w-[36px] h-[36px] bg-${item.id}-600 rounded-full`}
                  ></span>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name={item.name}
                      value={item.id}
                      onChange={handleChange}
                    />
                    <p>{item.label}</p>
                  </div>
                </span>
              );
            })}
          </div>
        </div>
        <div className="flex justify-between">
          <Button
            className="w-[48%] bg-primary_light/80"
            onClick={clearFilters}
          >
            Clear Filters
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Filters;
