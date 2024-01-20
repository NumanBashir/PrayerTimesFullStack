const express = require("express");
const unirest = require("unirest");
const cors = require("cors");
const PORT = 3000;

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  const request = unirest(
    "GET",
    "https://muslimsalat.p.rapidapi.com/copenhagen.json"
  );
  request.headers({
    "X-RapidAPI-Key": "dea0d1e227mshdef66c06d9d9811p19a79ajsnd0169e064d08",
    "X-RapidAPI-Host": "muslimsalat.p.rapidapi.com",
  });

  request.end(function (response) {
    if (response.error) {
      res.status(500).send("Error fetching prayer times");
      return;
    }
    const fajr = response.body.items[0].fajr;
    const dhuhr = response.body.items[0].dhuhr;
    const asr = response.body.items[0].asr;
    const maghrib = response.body.items[0].maghrib;
    const isha = response.body.items[0].isha;

    res.json({ fajr, dhuhr, asr, maghrib, isha }); // Send JSON response
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
