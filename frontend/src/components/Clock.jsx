import React, { useState, useEffect } from "react";

const Clock = ({ nextPrayerTime }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const getTimeUntilNextPrayer = () => {
    if (!nextPrayerTime) {
      return "";
    }

    const timeDifference = nextPrayerTime - currentTime;
    const hours = Math.floor(timeDifference / (1000 * 60 * 60));
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return `${hours}h ${minutes}m ${seconds}s until next prayer`;
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl">
        Current time: {currentTime.toLocaleTimeString()}
      </h1>
      <h2 className="text-2xl">{getTimeUntilNextPrayer()}</h2>
    </div>
  );
};

export default Clock;
