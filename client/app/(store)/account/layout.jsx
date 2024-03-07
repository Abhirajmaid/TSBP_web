"use client";

import { Sidebar } from "@src/components/account";

export default function Layout({ children }) {
  return (
    <>
      <div className="w-full flex gap-5 mt-[150px] px-[3%]">
        <div className="w-[25%]">
          <Sidebar />
        </div>
        {children}
      </div>
    </>
  );
}
