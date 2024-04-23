import { AboutUs } from "@src/components/about";
import React from "react";

export const metadata = {
  title: "About Us",
  description:
    "Netgarage is India's trusted online marketplace for buying and selling premium pre-owned motorcycles. Find a wide variety of top brands like Harley Davidson, Ducati, and Royal Enfield at unbeatable prices. Sell your motorcycle quickly and securely with our hassle-free listing process and secure transaction system.",
};

const page = () => {
  return (
    <div className="pt-[100px] px-[4%] bg-white">
      <AboutUs />
    </div>
  );
};

export default page;
