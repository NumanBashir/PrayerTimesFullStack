import React, { useState } from "react";

const Clock = () => {
  let time = new Date().toLocaleTimeString();
  const [currentTime, setCurrentTime] = useState();

  const updateTime = () => {
    let time = new Date().toLocaleTimeString();
    setCurrentTime(time);
  };

  setInterval(updateTime, 1000);

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl">Current time:</h1>
      <h1 className="text-2xl mb-4">{time}</h1>
    </div>
  );
};

export default Clock;
