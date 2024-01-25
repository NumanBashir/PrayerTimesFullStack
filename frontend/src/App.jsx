import React, { useState, useEffect } from "react";
import axios from "axios";
import Clock from "./components/Clock";
import RakatTable from "./components/RakatTable";

const App = () => {
  const [prayerTimes, setPrayerTimes] = useState({
    fajr: "",
    dhuhr: "",
    asr: "",
    maghrib: "",
    isha: "",
  });

  const [nextPrayer, setNextPrayer] = useState({ name: "", time: "" });

  useEffect(() => {
    axios
      .get("http://localhost:3000/")
      .then((response) => {
        setPrayerTimes(response.data);
        findNextPrayer(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      findNextPrayer(prayerTimes);
    }, 60000); // Update every minute

    return () => clearInterval(interval);
  }, [prayerTimes]);

  const findNextPrayer = (times) => {
    const now = new Date();
    let closestTime = Infinity;
    let closestPrayer = "";

    for (const [key, value] of Object.entries(times)) {
      const prayerTime = new Date(now.toDateString() + " " + value);
      if (prayerTime > now && prayerTime < closestTime) {
        closestTime = prayerTime;
        closestPrayer = key;
      }
    }

    if (closestTime !== Infinity) {
      setNextPrayer({
        name: closestPrayer.charAt(0).toUpperCase() + closestPrayer.slice(1),
        time: closestTime,
      });
    } else {
      // Handle next day's prayer times if needed
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-4xl my-4">Prayer Times App</h1>
      <Clock nextPrayerTime={nextPrayer.time} />
      <p>Fajr: {prayerTimes.fajr}</p>
      <p>Dhuhr: {prayerTimes.dhuhr}</p>
      <p>Asr: {prayerTimes.asr}</p>
      <p>Maghrib: {prayerTimes.maghrib}</p>
      <p>Isha: {prayerTimes.isha}</p>
      <h1 className="text-4xl my-4">Next prayer is: {nextPrayer.name}</h1>
      <RakatTable />
    </div>
  );
};

export default App;
