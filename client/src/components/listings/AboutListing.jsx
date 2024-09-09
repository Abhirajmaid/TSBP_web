import Link from "next/link";
import React from "react";

const AboutListing = ({ data }) => {
  return (
    <div className="bg-white p-5 rounded-lg w-full mx-auto flex items-center justify-between gap-28">
      <div className="p-6 py-8 bg-bg_gray text-base text-text_para w-[30%] rounded-lg font-medium">
        {data?.attributes?.description}
        <div className="w-full text-end">
          <Link
            href={`/bikes/${data?.attributes?.brand_or_company_name?.data?.attributes?.name}/${data?.attributes?.bike_model?.data?.attributes?.slug}`}
          >
            <button className="p-0 text-[#65A2EC] text-sm mt-4">
              More Details
            </button>
          </Link>
        </div>
      </div>
      <div className="w-[55%]">
        <ul className="w-[55%] flex flex-col justify-end gap-y-2 text-lg text-text_para">
          <li className=" flex justify-between items-center">
            <span>Engine Capacity</span>
            <span className="font-bold text-start">
              {data?.attributes?.variant?.data?.attributes?.displacement} cc
            </span>
          </li>
          <li className="flex justify-between items-center">
            <span>Transmission</span>
            <span className="font-bold text-start">
              {data?.attributes?.variant?.data?.attributes?.transmission}
            </span>
          </li>
          <li className="flex justify-between items-center">
            <span>Kerb Weight</span>
            <span className="font-bold text-start">
              {data?.attributes?.variant?.data?.attributes?.kerb_weight} kg
            </span>
          </li>
          <li className="flex justify-between items-center">
            <span>Fuel Tank Capacity</span>
            <span className="font-bold text-start">
              {data?.attributes?.variant?.data?.attributes?.fuel_tank_capacity}{" "}
              liters
            </span>
          </li>
          <li className="flex justify-between items-center">
            <span>Seat Height</span>
            <span className="font-bold text-start">
              {data?.attributes?.variant?.data?.attributes?.seat_height} mm
            </span>
          </li>
          <li className="flex justify-between items-center">
            <span>Max Power</span>
            <span className="font-bold text-start">
              {data?.attributes?.variant?.data?.attributes?.max_power}
            </span>
          </li>
        </ul>
        <div className="w-[55%] text-end">
          <Link
            href={`/bikes/${data?.attributes?.brand_or_company_name?.data?.attributes?.name}/${data?.attributes?.bike_model?.data?.attributes?.slug}`}
          >
            <button className="p-0 text-[#65A2EC] text-sm mt-4">
              + See All Specs
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutListing;
