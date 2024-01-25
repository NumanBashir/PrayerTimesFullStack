import React, { useState } from "react";
import { format } from "date-fns";

const Clock = () => {
  let time = new Date().toLocaleTimeString();
  // let newTime = format(new Date(), "HH:mm:ss");

  const [currentTime, setCurrentTime] = useState();

  const updateTime = () => {
    let time = new Date().toLocaleTimeString();
    setCurrentTime(time);
  };

  setInterval(updateTime, 1000);

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl">Current time: {time}</h1>
    </div>
  );
};

export default Clock;
