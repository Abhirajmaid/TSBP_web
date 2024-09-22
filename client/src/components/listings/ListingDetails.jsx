import React from "react";
import { ProductImages } from "@src/components/common";
import { Icon } from "@iconify/react";
import Link from "next/link";

const ListingDetails = ({ data }) => {
  return (
    <div className="flex flex-col md:flex-row w-full mx-auto justify-between mt-[50px] md:mt-[100px] gap-5">
      {/* Left Side - Main Content */}
      <div className="flex flex-col w-full md:w-[75%] bg-white p-5 rounded-lg gap-y-5 text-text_dark">
        {/* Title */}
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold">
            {data?.attributes?.name}
          </h1>
        </div>

        {/* Images */}
        <div className="w-full">
          {data && <ProductImages images={data?.attributes?.img?.data} />}
        </div>

        {/* Bike Details */}
        <div className="border-2 rounded-lg border-[#A6A6A6] p-4 md:p-6">
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 items-center gap-4 text-sm md:text-[17px] font-semibold">
            <li>
              Year:
              <br />
              <span className="font-medium">
                {data?.attributes?.manufacturing_year}
              </span>
            </li>
            <li>
              Brand:
              <br />
              <span className="font-medium">
                {
                  data?.attributes?.brand_or_company_name?.data?.attributes
                    ?.name
                }
              </span>
            </li>
            <li>
              Model:
              <br />
              <span className="font-medium">
                {data?.attributes?.bike_model?.data?.attributes?.model_name}
              </span>
            </li>
            <li>
              Kms Driven:
              <br />
              <span className="font-medium">{data?.attributes?.km_ridden}</span>
            </li>
            <li>
              Owner:
              <br />
              <span className="font-medium">
                {data?.attributes?.owner_name}
              </span>
            </li>
            <li>
              Location:
              <br />
              <span className="font-medium">{data?.attributes?.city}</span>
            </li>
            <li>
              Registration:
              <br />
              <span className="font-medium">
                {data?.attributes?.registration}
              </span>
            </li>
          </ul>
        </div>

        {/* Background Gray Section */}
        <div className="bg-bg_gray p-4 md:p-8 rounded-lg">
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 items-center gap-4 text-sm">
            <li>Year:</li>
            <li>Brand:</li>
            <li>Model:</li>
            <li>Kms Driven:</li>
            <li>Owner:</li>
            <li>Location:</li>
            <li>Registration:</li>
          </ul>
        </div>
      </div>

      {/* Right Side - Sidebar */}
      <div className="flex flex-col gap-5 w-full md:w-[25%]">
        {/* Buy Now Section */}
        <div className="flex flex-col bg-white rounded-lg h-auto w-full p-5 gap-y-5 md:p-6 md:gap-y-6 fixed bottom-0 left-0 right-0 z-50 md:static shadow-lg md:shadow-none">
          <div className="flex justify-between items-center w-full text-lg md:text-xl">
            <span>Buy it now at</span>
            <h3 className="font-semibold text-lg md:text-xl">
              Rs. {data?.attributes?.expected_price}
            </h3>
          </div>
          <div className="w-auto flex items-center gap-3">
            <div className="w-10 h-10 md:w-14 md:h-14 bg-gray-400 rounded-full hidden md:block"></div>
            <h2 className="text-sm md:text-xl hidden md:block">
              {data?.attributes?.owner_name}, {data?.attributes?.city}
            </h2>
          </div>
          <div className="w-full flex items-center gap-3">
            <button className="w-[50%] rounded-l-full rounded-r-lg bg-[#00A3FF] p-2 md:p-3 font-semibold text-white">
              Call Now
            </button>
            <button className="w-[50%] rounded-r-full rounded-l-xl bg-[#04B200] p-2 md:p-3 font-semibold text-white">
              Chat
            </button>
          </div>
          <div className="hidden md:block">
            <button className="w-full rounded-full bg-black font-semibold text-white p-2 md:p-4">
              Get Store Direction
            </button>
          </div>
        </div>

        {/* Variants Section */}
        <div className="flex flex-col bg-white rounded-lg h-full w-full p-5 gap-y-5">
          <Link
            href="/"
            className="w-full flex flex-col gap-3 bg-bg_gray p-4 rounded-lg"
          >
            <span>Variants</span>
            <span className="text-xl font-semibold flex justify-between">
              {data?.attributes?.variant?.data?.attributes?.name}
              <Icon icon="uiw:right" width="1.2em" height="1.2em" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ListingDetails;
