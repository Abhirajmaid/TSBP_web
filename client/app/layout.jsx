"use client";
import "./globals.css";
import { montserrat } from "./fonts";
import { Providers } from "@app/providers";
import { ToastContainer } from "react-toastify";

export default function RootLayout({ children }) {
  return (
    <>
      <Providers>
        <html lang="en">
          <body className={montserrat.className}>
            <ToastContainer />
            {children}
          </body>
        </html>
      </Providers>
    </>
  );
}
