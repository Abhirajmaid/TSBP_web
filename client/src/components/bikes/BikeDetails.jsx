import React from "react";
import { ProductImages } from "@src/components/common";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { Button } from "../ui/button";

const BikeDetails = ({ data }) => {
  console.log(data);

  return (
    <div className="flex w-full mx-auto justify-between mt-[100px] gap-5">
      <div className="flex flex-col w-[75%] bg-white p-5 rounded-lg gap-y-5 text-text_dark">
        <div>
          <h1 className="text-3xl font-semibold">
            {data?.attributes?.brand_or_company_name?.data?.attributes?.name}{" "}
            {data?.attributes?.model_name}
          </h1>
        </div>
        <div className="w-full">
          {data && <ProductImages images={data?.attributes?.img?.data} />}
        </div>
        <span className="font-semibold text-xl">Top Specs</span>
        <div className="border-2 rounded-lg  border-[#A6A6A6] p-8">
          <ul className="flex items-center gap-4 justify-between text-[16px] font-medium">
            <li>
              Engine Capacity:
              <br />
              <span>
                {data?.attributes?.variants?.data[0]?.attributes?.displacement}{" "}
                cc
              </span>
            </li>
            <li>
              Transmission: <br />
              <span>
                {data?.attributes?.variants?.data[0]?.attributes?.transmission}
              </span>
            </li>
            <li>
              Kerb Weight: <br />
              <span>
                {data?.attributes?.variants?.data[0]?.attributes?.kerb_weight}{" "}
                kg
              </span>
            </li>
            <li>
              Fuel Tank: <br />
              <span>
                {
                  data?.attributes?.variants?.data[0]?.attributes
                    ?.fuel_tank_capacity
                }{" "}
                liters
              </span>
            </li>
            <li>
              Seat Height: <br />
              <span>
                {data?.attributes?.variants?.data[0]?.attributes?.seat_height}{" "}
                mm
              </span>
            </li>
            <li>
              Max Power: <br />
              <span>
                {data?.attributes?.variants?.data[0]?.attributes?.max_power}
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-5 w-[25%]">
        <div className="flex flex-col bg-white rounded-lg h-auto w-full p-5 gap-y-5">
          <div className="flex flex-col gap-5 w-full text-2xl">
            <h1 className="font-bold">{data?.attributes?.model_name}</h1>
            <h3 className="font-semibold">
              Rs. {data?.attributes?.variants?.data[0]?.attributes?.price}
            </h3>
          </div>
          <Button className="bg-transparent text-primary hover:text-white gap-x-2">
            Get Offers
            <Icon icon="mdi:local-offer" width="1.2em" height="1.2em" />
          </Button>
        </div>
        <div className="flex flex-col bg-white rounded-lg h-full w-full p-5 gap-y-5">
          AD
        </div>
      </div>
    </div>
  );
};

export default BikeDetails;
