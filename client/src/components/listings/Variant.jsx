import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";

const Variant = ({ data }) => {
  return (
    <div className="bg-white text-text_para  rounded-lg p-6 w-[74%] shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">{data?.attributes?.name}</h2>
      <table className="w-full">
        <thead>
          <tr className="text-left border-b">
            <th className="pb-2">Variant</th>
            <th className="pb-2">Price</th>
            <th className="pb-2">Specifications</th>
          </tr>
        </thead>
        <tbody>
          {data?.attributes?.variants?.data?.map((item, id) => {
            return (
              <tr className="border-b" key={id}>
                <td className="py-4">
                  {data?.attributes?.name} {item?.attributes?.name}
                </td>
                <td className="py-4">
                  {item?.attributes?.price}
                  <span className="text-sm block text-gray-400">
                    Avg. Ex-Showroom
                  </span>
                </td>
                <td className="py-4">
                  {item?.attributes?.front_brake_type} Brakes,{" "}
                  {item?.attributes?.wheel_type} Wheels
                </td>
                <td className="py-4">
                  <Link
                    href={`/bikes/${data?.attributes?.brand_or_company_name?.data?.attributes?.name}/${data?.attributes?.slug}`}
                    className=" bg-primary p-2 rounded-full text-white flex justify-center"
                  >
                    <Icon icon="uiw:right" width="1.2em" height="1.2em" />
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="mt-[20px]">
        <Link href="/contact-us" className="text-[#65A2EC]">
          Get Offers
        </Link>
      </div>
    </div>
  );
};

export default Variant;
