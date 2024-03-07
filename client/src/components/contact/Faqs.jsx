"use client";

import React, { useState } from "react";
import { faqs } from "@src/data/data";
import { BiMinus, BiPlus } from "react-icons/bi";
import Link from "next/link";

const SingleFaq = ({ question, response, url }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleShow = () => {
    setIsOpen(!isOpen);
    setIsActive(!isActive);
  };

  return (
    <div className=" border-b-2 border-gray-400/25  pb-2 ">
      <div
        className={`flex item-center justify-between md:my-7 my-4 cursor-pointer hover:text-primary ${
          isActive && "active"
        }`}
        onClick={handleShow}
      >
        <h1 className="md:text-[1.7vw] text-lg tracking-wide font-semibold">
          {question}
        </h1>
        {isOpen ? (
          <BiMinus className="text-2xl" />
        ) : (
          <BiPlus className="text-2xl" />
        )}
      </div>
      <p
        className={`p-0 max-h-0 overflow-hidden font-normal leading-8 transition-all md:text-[1.3vw] text-base ${
          isOpen && "isOpen"
        }`}
      >
        {response}
      </p>
    </div>
  );
};

const Faqs = () => {
  return (
    <div className="md:w-[70%] w-full m-auto bg-white md:p-[50px] p-[40px] rounded-2xl mt-[60px] gap-[20px]">
      <h1 className="md:text-[2vw] text-[4vw] md:mb-16">FAQs</h1>
      <div>
        {faqs.map((faq) => (
          <SingleFaq {...faq} key={faq.id} />
        ))}
      </div>
    </div>
  );
};

export default Faqs;
