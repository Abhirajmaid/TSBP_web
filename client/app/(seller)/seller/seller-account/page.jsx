"use client";
import { Loader } from "@src/components/common";
import { Button } from "@src/components/ui/button";
import { Toast } from "@src/context/ToastContex";
import sellerAction from "@src/lib/actions/seller.action";
import userAction from "@src/lib/actions/user.action";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const SellerProfile = () => {
  const [user, setUser] = useState(null);
  const [seller, setSeller] = useState(null);

  const { error, success } = Toast();

  const [form, setForm] = useState({
    store_name: "",
    owner: "",
    email: "",
    mobile: "",
    street: "",
    state: "",
    zip: "",
    country: "",
    gst_no: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    console.log(form);
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  useEffect(() => {
    getSellerInfo();
  }, [user]);

  useEffect(() => {
    setForm({
      store_name: seller?.attributes.store_name,
      owner: seller?.attributes.owner,
      email: seller?.attributes.email,
      mobile: seller?.attributes.mobile,
      street: seller?.attributes.street,
      state: seller?.attributes.state,
      zip: seller?.attributes.zip,
      country: seller?.attributes.country,
      gst_no: seller?.attributes.gst_no,
    });
    console.log(form, "Form");
  }, [seller]);

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
      setSeller(resp.data.data[0]);
    });
  };

  console.log(seller);

  const handleSubmit = () => {
    console.log("HI", form);
  };

  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen my-[100px]">
      <main className="bg-white p-6 rounded-lg shadow-lg">
        {form ? (
          <div className="flex flex-col md:flex-row items-start">
            <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-6">
              <Image
                src="/images/avatar.jpg" // Placeholder image path
                alt="Seller Profile Picture"
                width={120}
                height={120}
                className="w-32 h-32 rounded-full border-2 border-gray-300"
              />
            </div>
            <div className="flex flex-col w-full">
              <h1 className="text-3xl font-semibold mb-4">
                Store Name: {seller?.attributes?.store_name}
              </h1>
              <label className="block mb-2 font-medium">Owner:</label>
              <input
                type="text"
                name="owner"
                className="border rounded p-2 mb-4"
                value={form?.owner}
                onChange={handleChange}
              />

              <label className="block mb-2 font-medium">Email:</label>
              <input
                type="email"
                name="email"
                className="border rounded p-2 mb-4"
                value={form?.email}
                onChange={handleChange}
              />

              <label className="block mb-2 font-medium">Mobile:</label>
              <input
                type="tel"
                name="mobile"
                className="border rounded p-2 mb-4"
                value={form?.mobile}
                onChange={handleChange}
              />

              <label className="block mb-2 font-medium">Address:</label>
              <input
                type="text"
                name="street"
                className="border rounded p-2 mb-4"
                value={form?.street}
                onChange={handleChange}
              />

              <label className="block mb-2 font-medium">State:</label>
              <input
                type="text"
                name="state"
                className="border rounded p-2 mb-4"
                value={form?.state}
                onChange={handleChange}
              />

              <label className="block mb-2 font-medium">Zip:</label>
              <input
                type="text"
                name="zip"
                className="border rounded p-2 mb-4"
                value={form?.zip}
                onChange={handleChange}
              />

              <label className="block mb-2 font-medium">Country:</label>
              <input
                type="text"
                name="country"
                className="border rounded p-2 mb-4"
                value={form?.country}
                onChange={handleChange}
              />

              <label className="block mb-2 font-medium">GST No:</label>
              <input
                type="text"
                name="gst_no"
                className="border rounded p-2 mb-4"
                value={form?.gst_no}
                onChange={handleChange}
              />

              <Button onClick={handleSubmit}>Save Changes</Button>
            </div>
          </div>
        ) : (
          <div className="w-full flex justify-center items-center">
            <Loader />
          </div>
        )}
      </main>
    </div>
  );
};

export default SellerProfile;
