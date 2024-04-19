import React from "react";

const NotificationsData = [
  "Vyng gågähira tödektig eftersom dism öse epiv nen, i speligt. ",
  "Vyng gågähira tödektig eftersom dism öse epiv nen, i speligt. ",
  "Vyng gågähira tödektig eftersom dism öse epiv nen, i speligt. ",
  "Vyng gågähira tödektig eftersom dism öse epiv nen, i speligt. ",
  "Vyng gågähira tödektig eftersom dism öse epiv nen, i speligt. ",
  "Vyng gågähira tödektig eftersom dism öse epiv nen, i speligt. ",
  "Vyng gågähira tödektig eftersom dism öse epiv nen, i speligt. ",
  "Vyng gågähira tödektig eftersom dism öse epiv nen, i speligt. ",
  "Vyng gågähira tödektig eftersom dism öse epiv nen, i speligt. ",
];

const NotificationCard = ({ notify }) => {
  return (
    <div className="bg-bg_dark p-3 rounded-lg">
      <h2 className=" text-base ">{notify}</h2>
    </div>
  );
};

const Notification = () => {
  return (
    <div className="bg-white rounded-xl py-7 px-5 w-full">
      <h1 className="text-xl font-semibold pb-7">Notifications</h1>
      <div className="flex flex-col gap-y-5 max-h-[60vh] overflow-auto">
        {NotificationsData.map((item) => {
          return <NotificationCard notify={item} />;
        })}
      </div>
    </div>
  );
};

export default Notification;
