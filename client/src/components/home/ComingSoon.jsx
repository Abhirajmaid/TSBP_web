"use client";
import React from "react";
import { motion } from "framer-motion";

const ComingSoon = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white"
    >
      <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
      <p className="text-lg mb-8">
        This Part of the website is under construction. Stay tuned!
      </p>
      <div className="text-sm">© 2024 NetGarage</div>
    </motion.div>
  );
};

export default ComingSoon;
