import React from "react";
import { ProductImages } from "@src/components/common";
import { Icon } from "@iconify/react";
import Link from "next/link";

const ListingDetails = ({ data }) => {
  return (
    <div className="flex w-full mx-auto justify-between mt-[100px] gap-5">
      <div className="flex flex-col w-[75%] bg-white p-5 rounded-lg gap-y-5 text-text_dark">
        <div>
          <h1 className="text-3xl font-semibold">{data?.attributes?.name}</h1>
        </div>
        <div className="w-full">
          {data && <ProductImages images={data?.attributes?.img?.data} />}
        </div>
        <div className="border-2 rounded-lg  border-[#A6A6A6] p-8">
          <ul className="flex items-center gap-4 justify-between text-[17px] font-semibold">
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
        <div className="bg-bg_gray p-8 rounded-lg">
          <ul className="grid grid-cols-5 items-center gap-4 justify-between">
            <li>Year: </li>
            <li>Brand: </li>
            <li>Model: </li>
            <li>Kms Driven: </li>
            <li>Owner: </li>
            <li>Location: </li>
            <li>Registration: </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-5 w-[25%]">
        <div className="flex flex-col bg-white rounded-lg h-auto w-full p-5 gap-y-5">
          <div className="flex justify-between items-center w-full text-xl">
            <span>Buy it now at</span>
            <h3 className="font-semibold">
              Rs. {data?.attributes?.expected_price}
            </h3>
          </div>
          <div className="w-auto flex items-center gap-3">
            <div className="w-14 h-14 bg-gray-400 rounded-full"></div>
            <h2 className="text-xl">
              {data?.attributes?.owner_name}, {data?.attributes?.city}
            </h2>
          </div>
          <div className="w-full flex items-center gap-3">
            <button className="w-[50%] rounded-l-full rounded-r-lg bg-[#00A3FF] p-3 font-semibold text-white">
              Call Now
            </button>
            <button className="w-[50%] rounded-r-full rounded-l-xl bg-[#04B200] p-3 font-semibold text-white">
              Chat
            </button>
          </div>
          <div>
            <button className="w-full rounded-full bg-black font-semibold text-white p-4">
              Get Store Direction
            </button>
          </div>
        </div>
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
