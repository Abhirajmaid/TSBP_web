"use client";
import { Toast } from "@src/context/ToastContex";
import React, { useEffect, useState } from "react";

const Loader = () => {
  const [showLoader, setShowLoader] = useState(true);

  const { warn } = Toast();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
      warn("Somting went wrong!");
    }, 60000);

    return () => clearTimeout(timer);
  }, []);

  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {showLoader ? (
        <div className="w-[80px] h-[80px] rounded-full border-[2px] border-t-primary_light animate-spin"></div>
      ) : (
        <div className="text-center">
          <p className="mb-4">Something went wrong. Please try again.</p>
          <button
            onClick={handleReload}
            className="px-4 py-2 bg-primary_light text-white rounded-lg"
          >
            Reload
          </button>
        </div>
      )}
    </div>
  );
};

export default Loader;
