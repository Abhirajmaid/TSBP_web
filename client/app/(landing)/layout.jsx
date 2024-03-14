"use client";
import { montserrat } from "@app/fonts";
import { Footer } from "@src/components/common";
import { Navbar } from "@src/components/landing";

export default function Layout({ children }) {
  return (
    <>
      <div className={`${montserrat.className} bg-black`}>
        <Navbar />
        {children}
        <Footer bg="black" />
      </div>
    </>
  );
}
