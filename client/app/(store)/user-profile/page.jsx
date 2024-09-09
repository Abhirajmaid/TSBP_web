"use client";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
import { Toast } from "@src/context/ToastContex";

import { deleteCookie, getCookie } from "cookies-next";
import userAction from "@src/lib/actions/user.action";
import { Loader } from "@src/components/common";
import { Button } from "@src/components/ui/button";
import Link from "next/link";
import { ArrowRight, BarChart2 } from "lucide-react";

const ProfilePage = () => {
  const router = useRouter();

  const { warn } = Toast();

  const [user, setUser] = useState();

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = () => {
    const token = JSON.parse(sessionStorage.getItem("jwt")) || getCookie("jwt");

    userAction
      .fetchLoggedInUser(token)
      .then((resp) => {
        setUser(resp.data);
      })
      .catch((error) => {
        console.log(error);
        warn(error);
      });
  };

  const onSignOut = () => {
    sessionStorage.clear();
    deleteCookie("jwt");
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto md:p-6 p-2">
        {/* Header */}
        <div className="flex justify-between md:items-center gap-4 items-start border-b border-gray-300 pb-4 mb-6 md:flex-row flex-col">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 cursor-pointer font-semibold bg-white rounded-full p-2 border">
              <Icon icon="lucide:user-round" width={40} />
            </div>
            <h1 className="text-2xl font-bold">{user?.username}</h1>
          </div>
          <div onClick={() => onSignOut()} className=" cursor-pointer">
            <span className="flex items-center text-sm text-gray-600 hover:text-black">
              <Icon icon="lucide:log-out" className="h-5 w-5" />
              LOG OUT
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 md:grid-rows-1 grid-rows-2 gap-8 mb-6">
          {/* Account Details */}
          <div className="border border-gray-300 p-6 bg-white rounded-lg">
            <h2 className="text-lg font-bold mb-4">ACCOUNT DETAILS</h2>
            {user ? (
              <div className="text-base text-gray-600 flex flex-col gap-1">
                <p>{user?.username}</p>
                <p>{user?.email}</p>
                <p>{user?.mobile_number}</p>
                <p>India</p>
              </div>
            ) : (
              <Loader />
            )}
          </div>

          {/* Order History */}
          <div className="border border-gray-300 p-6 bg-white rounded-lg">
            <h2 className="text-lg font-bold mb-4">ORDER HISTORY</h2>
            <div className="text-sm text-gray-600">
              <p>YOU HAVEN'T PLACED ANY ORDERS YET.</p>
            </div>
          </div>
        </div>
        <div className="border border-gray-300 p-6 bg-white rounded-lg mb-6">
          {user?.role?.type === "seller" ? (
            <div className="bg-gradient-to-r from-primary_light to-primary text-white rounded-lg shadow-lg overflow-hidden">
              <div className="px-6 py-8 md:px-10 md:py-12 flex flex-col md:flex-row items-center justify-between">
                <div className="flex items-center mb-6 md:mb-0">
                  <BarChart2 className="h-12 w-12 mr-4" />
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">
                      Seller Dashboard
                    </h2>
                    <p className="text-purple-100">
                      Track your sales, manage inventory, and grow your business
                    </p>
                  </div>
                </div>
                <Link href="/seller/dashboard" passHref>
                  <Button className="bg-white text-primary_light  hover:bg-purple-100 hover:text-primary_dark  transition-colors duration-200">
                    Go to Dashboard
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          ) : (
            <>
              <h2 className="text-lg font-bold mb-4">BECOME A SELLER</h2>
              <div className="text-sm text-gray-600 mb-4">
                <p>
                  Join us and start selling your products to millions of
                  customers.
                </p>
              </div>
              <Link href="/become-seller">
                <Button>Become a Seller</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
