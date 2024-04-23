import { EventsSlider } from "@src/components/events";
import React from "react";

export const metadata = {
  title: "Events",
  description:
    "Rev up your excitement with Netgarage's dynamic lineup of motorcycle events, connecting riders and igniting passions.",
};

const page = () => {
  return (
    <div className="-mb-[60px] h-screen min-h-[700px]">
      <EventsSlider />
    </div>
  );
};

export default page;
