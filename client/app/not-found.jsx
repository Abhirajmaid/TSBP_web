import { Footer, Navbar } from "@src/components/common";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <>
      <Navbar />
      <div className="w-full h-[100vh] -mb-[60px] flex justify-center items-center bg-primary_light/40 flex-col">
        <h5 className="text-[72px] font-bold text-primary">
          404 | Back to
          <Link href="/" className="underline">
            Home
          </Link>
        </h5>
        <p className="text-5xl">We Think You Are Lost...</p>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
