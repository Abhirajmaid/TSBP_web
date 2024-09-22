import Link from "next/link";
import React from "react";

const AboutListing = ({ data }) => {
  return (
    <div className="bg-white p-5 rounded-lg w-full mx-auto flex flex-col lg:flex-row items-start lg:items-center gap-16">
      {/* Description Section */}
      <div className="p-6 py-8 bg-bg_gray md:text-base text-sm text-text_para w-full lg:w-[30%] rounded-lg font-medium">
        {data?.attributes?.description}
        <div className="w-full text-end mt-4">
          <Link
            href={`/bikes/${data?.attributes?.brand_or_company_name?.data?.attributes?.name}/${data?.attributes?.bike_model?.data?.attributes?.slug}`}
          >
            <button className="text-[#65A2EC] text-sm">More Details</button>
          </Link>
        </div>
      </div>

      {/* Specifications Section */}
      <div className="w-full lg:w-[40%]">
        <ul className="w-full flex flex-col gap-y-2 md:text-lg text-sm text-text_para">
          <li className="flex justify-between items-center">
            <span>Engine Capacity</span>
            <span className="font-bold">
              {data?.attributes?.variant?.data?.attributes?.displacement} cc
            </span>
          </li>
          <li className="flex justify-between items-center">
            <span>Transmission</span>
            <span className="font-bold">
              {data?.attributes?.variant?.data?.attributes?.transmission}
            </span>
          </li>
          <li className="flex justify-between items-center">
            <span>Kerb Weight</span>
            <span className="font-bold">
              {data?.attributes?.variant?.data?.attributes?.kerb_weight} kg
            </span>
          </li>
          <li className="flex justify-between items-center">
            <span>Fuel Tank Capacity</span>
            <span className="font-bold">
              {data?.attributes?.variant?.data?.attributes?.fuel_tank_capacity}{" "}
              liters
            </span>
          </li>
          <li className="flex justify-between items-center">
            <span>Seat Height</span>
            <span className="font-bold">
              {data?.attributes?.variant?.data?.attributes?.seat_height} mm
            </span>
          </li>
          <li className="flex justify-between items-center">
            <span>Max Power</span>
            <span className="font-bold">
              {data?.attributes?.variant?.data?.attributes?.max_power}
            </span>
          </li>
        </ul>
        <div className="w-full text-end mt-4">
          <Link
            href={`/bikes/${data?.attributes?.brand_or_company_name?.data?.attributes?.name}/${data?.attributes?.bike_model?.data?.attributes?.slug}`}
          >
            <button className="text-[#65A2EC] text-sm">+ See All Specs</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutListing;
