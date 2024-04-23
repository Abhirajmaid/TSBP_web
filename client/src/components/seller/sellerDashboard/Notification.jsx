"use client";
import { Loader } from "@src/components/common";
import { fetchNotifications } from "@src/lib/actions/notification.action";
import React, { useEffect, useState } from "react";

const NotificationCard = ({ data }) => {
  return (
    <div className="bg-bg_dark p-3 rounded-lg relative flex">
      <h2 className=" text-base ">{data.Notify}</h2>
      {data.urgent ? (
        <>
          <span className="animate-ping absolute h-4 w-4 -top-1 -left-1 rounded-full bg-red-500 opacity-75"></span>
          <span className="absolute  h-4 w-4 -top-1 -left-1 rounded-full bg-red-500"></span>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

const Notification = () => {
  const [showLoader, setShowLoader] = useState(false);
  const [notify, setNotify] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setShowLoader(true);
    const { data } = await fetchNotifications();
    setNotify(data);
    setShowLoader(false);
  };
  console.log(notify);
  return (
    <div className="bg-white rounded-xl py-7 px-5 w-full">
      <h1 className="text-xl font-semibold pb-7">Notifications</h1>
      <div className="flex flex-col gap-y-5 max-h-[60vh]">
        {showLoader ? (
          <Loader />
        ) : (
          notify?.map((item, i) => {
            return <NotificationCard data={item.attributes} key={i} />;
          })
        )}
      </div>
    </div>
  );
};

export default Notification;
