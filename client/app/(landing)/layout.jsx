"use client";
import { montserrat } from "@app/fonts";
import { Navbar } from "@src/components/landing";

export default function Layout({ children }) {
  return (
    <>
      <div className={montserrat.className}>
        <Navbar />
        {children}
      </div>
    </>
  );
}
