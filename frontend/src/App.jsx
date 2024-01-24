import React, { useState, useEffect } from "react";
import axios from "axios";
import Clock from "./components/Clock";

const App = () => {
  const [prayerTimes, setPrayerTimes] = useState({
    fajr: "",
    dhuhr: "",
    asr: "",
    maghrib: "",
    isha: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:3000/")
      .then((response) => {
        setPrayerTimes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const fajr = prayerTimes.fajr;
  const dhuhr = prayerTimes.dhuhr;
  const asr = prayerTimes.asr;
  const maghrib = prayerTimes.maghrib;
  const isha = prayerTimes.isha;

  const convertToDateTime = (timeString) => {
    const [hours, minutes] = timeString.split(":").map(Number);
    const date = new Date();
    date.setHours(hours, minutes, 0);
    return date;
  };

  const newTime = convertToDateTime(fajr);
  console.log(newTime);

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-4xl my-4">Prayer Times App</h1>
      <Clock />
      <p>Fajr: {fajr}</p>
      <p>Dhuhr: {dhuhr}</p>
      <p>Asr: {asr}</p>
      <p>Maghrib: {maghrib}</p>
      <p>Isha: {isha}</p>
      <h1 className="text-4xl my-4">Next prayer is: {maghrib}</h1>
    </div>
  );
};

export default App;

// TODO: Show next prayer
// TODO: Time until next prayer (count down)
