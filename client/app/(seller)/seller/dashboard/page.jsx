"use client";
import { Loader } from "@src/components/common";
import {
  BikeSellCard,
  Notification,
} from "@src/components/seller/sellerDashboard";
import { Toast } from "@src/context/ToastContex";
import sellerAction from "@src/lib/actions/seller.action";
import userAction from "@src/lib/actions/user.action";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const page = () => {
  const [user, setUser] = useState();
  const [seller, setSeller] = useState();
  const [listings, setListings] = useState();

  const { error, warn } = Toast();

  useEffect(() => {
    fetchUserDetails();
  }, []);

  useEffect(() => {
    getSellerInfo();
  }, [user]);

  const fetchUserDetails = () => {
    const token = JSON.parse(sessionStorage.getItem("jwt")) || getCookie("jwt");
    userAction
      .fetchLoggedInUser(token)
      .then((resp) => {
        setUser(resp.data);
      })
      .catch((e) => {
        console.log(e);
        warn(e);
        error("Something Went Wrong!");
      });
  };

  const getSellerInfo = () => {
    const token = JSON.parse(sessionStorage.getItem("jwt")) || getCookie("jwt");
    const user_email = user?.email; // Get user's mail
    sellerAction.getSellerByEmail(token, user_email).then((resp) => {
      setSeller(resp.data.data);
      setListings(resp?.data?.data[0]?.attributes?.bike_listing?.data);
    });
  };

  return (
    <div className="px-[4%] my-[100px]">
      <div className="w-full flex gap-4">
        <div className="bg-white rounded-xl w-[70%]">
          <div className="flex justify-between items-center px-7 pt-7">
            <h1 className="font-semibold text-xl">Your Bike</h1>
            <Link href="/seller/new-bike">
              <span className="font-semibold text-3xl cursor-pointer">+</span>
            </Link>
          </div>
          {listings ? (
            <div className="grid grid-cols-3 p-7 gap-3 gap-y-5">
              {listings?.map((item, id) => {
                return (
                  <div className="w-full flex-grow" key={id}>
                    <BikeSellCard data={item} />
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="w-ful flex items-center justify-center h-[300px]">
              <Loader />
            </div>
          )}
        </div>
        <div className="w-[30%]">
          <Notification />
        </div>
      </div>
    </div>
  );
};

export default page;
