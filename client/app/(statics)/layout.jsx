"use client";
import { inter, montserrat } from "@app/fonts";
import { Footer, Navbar } from "@src/components/common";

export default function Layout({ children }) {
  return (
    <>
      <div className={montserrat.className}>
        <Navbar />
        <div className={inter.className}>{children}</div>
        <Footer bg="primary" />
      </div>
    </>
  );
}
