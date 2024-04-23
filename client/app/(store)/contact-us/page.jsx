import { ContactForm, Faqs } from "@src/components/contact";
import React from "react";

export const metadata = {
  title: "Contact Us",
  description: "Contact NetGarage Today for your Superbike!",
};

const page = () => {
  return (
    <>
      <div className="px-[4%] bg-bg">
        <div className="h-screen">
          <img
            src="/images/contact_us.png"
            alt="contact"
            className="h-full w-full absolute left-0 top-0 object-cover"
          />
          <div className="w-full relative top-1/2 -translate-y-1/2">
            <ContactForm />
          </div>
        </div>
        <Faqs />
      </div>
    </>
  );
};

export default page;
