import React from "react";

const RakatTable = () => {
  return (
    <div>
      <h1 className="flex flex-col justify-center items-center text-4xl my-8">
        Table of Rakats
      </h1>
      <div>
        <table>
          <tr>
            <th>Name of Prayer</th>
            <th>Sunnat</th>
            <th>Fardh</th>
            <th>Sunnat</th>
            <th>Nafl</th>
            <th>Witr</th>
            <th>Nafl</th>
            <th>Total Rakats</th>
          </tr>
          <tr>
            <th>Fajr</th>
            <th>2</th>
            <th>2</th>
            <th>-</th>
            <th>-</th>
            <th>-</th>
            <th>-</th>
            <th>4</th>
          </tr>
          <tr>
            <th>Dhuhr</th>
            <th>4</th>
            <th>4</th>
            <th>2</th>
            <th>2</th>
            <th>-</th>
            <th>-</th>
            <th>12</th>
          </tr>
          <tr>
            <th>Asr</th>
            <th>4</th>
            <th>4</th>
            <th>-</th>
            <th>-</th>
            <th>-</th>
            <th>-</th>
            <th>8</th>
          </tr>
          <tr>
            <th>Maghrib</th>
            <th>-</th>
            <th>3</th>
            <th>2</th>
            <th>2</th>
            <th>-</th>
            <th>-</th>
            <th>7</th>
          </tr>
          <tr>
            <th>Isha</th>
            <th>4</th>
            <th>4</th>
            <th>2</th>
            <th>2</th>
            <th>3</th>
            <th>2</th>
            <th>17</th>
          </tr>
          <tr>
            <th>Jummah</th>
            <th>4</th>
            <th>2</th>
            <th>4+2</th>
            <th>-</th>
            <th>-</th>
            <th>2</th>
            <th>14</th>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default RakatTable;
