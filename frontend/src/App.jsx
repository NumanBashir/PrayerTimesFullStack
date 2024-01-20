import React, { useState, useEffect } from "react";
import axios from "axios";

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

  return (
    <div className="bg-green-400">
      <p>Fajr: {prayerTimes.fajr}</p>
      <p>Dhuhr: {prayerTimes.dhuhr}</p>
      <p>Asr: {prayerTimes.asr}</p>
      <p>Maghrib: {prayerTimes.maghrib}</p>
      <p>Isha: {prayerTimes.isha}</p>
    </div>
  );
};

export default App;
