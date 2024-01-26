import React from "react";

const RakatTable = () => {
  return (
    <div className="mb-16">
      <h1 className="flex justify-center items-center text-4xl my-8 text-black">
        Table of Rakats
      </h1>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-black">
          <thead className="text-xs uppercase bg-gray-50 dark:bg-gray-700 dark:text-white">
            <tr>
              <th scope="col" className="px-6 py-3 text-center">
                Name of Prayer
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Sunnat
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Fardh
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Sunnat
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Nafl
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Witr
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Nafl
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Total Rakats
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 font-bold dark:text-white">
              <td className="px-6 py-4 text-center font-medium text-black dark:text-white">
                Fajr
              </td>
              <td className="px-6 py-4 text-center">2</td>
              <td className="px-6 py-4 text-center">2</td>
              <td className="px-6 py-4 text-center">-</td>
              <td className="px-6 py-4 text-center">-</td>
              <td className="px-6 py-4 text-center">-</td>
              <td className="px-6 py-4 text-center">-</td>
              <td className="px-6 py-4 text-center">4</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 font-bold dark:text-white">
              <td className="px-6 py-4 text-center font-medium text-gray-900 dark:text-white">
                Dhuhr
              </td>
              <td className="px-6 py-4 text-center">4</td>
              <td className="px-6 py-4 text-center">4</td>
              <td className="px-6 py-4 text-center">2</td>
              <td className="px-6 py-4 text-center">2</td>
              <td className="px-6 py-4 text-center">-</td>
              <td className="px-6 py-4 text-center">-</td>
              <td className="px-6 py-4 text-center">12</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 font-bold dark:text-white">
              <td className="px-6 py-4 text-center font-medium text-gray-900 dark:text-white">
                Asr
              </td>
              <td className="px-6 py-4 text-center">4</td>
              <td className="px-6 py-4 text-center">4</td>
              <td className="px-6 py-4 text-center">-</td>
              <td className="px-6 py-4 text-center">-</td>
              <td className="px-6 py-4 text-center">-</td>
              <td className="px-6 py-4 text-center">-</td>
              <td className="px-6 py-4 text-center">8</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 font-bold dark:text-white">
              <td className="px-6 py-4 text-center font-medium text-gray-900 dark:text-white">
                Maghrib
              </td>
              <td className="px-6 py-4 text-center">-</td>
              <td className="px-6 py-4 text-center">3</td>
              <td className="px-6 py-4 text-center">2</td>
              <td className="px-6 py-4 text-center">2</td>
              <td className="px-6 py-4 text-center">-</td>
              <td className="px-6 py-4 text-center">-</td>
              <td className="px-6 py-4 text-center">7</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 font-bold dark:text-white">
              <td className="px-6 py-4 text-center font-medium text-gray-900 dark:text-white">
                Isha
              </td>
              <td className="px-6 py-4 text-center">4</td>
              <td className="px-6 py-4 text-center">4</td>
              <td className="px-6 py-4 text-center">2</td>
              <td className="px-6 py-4 text-center">2</td>
              <td className="px-6 py-4 text-center">3</td>
              <td className="px-6 py-4 text-center">2</td>
              <td className="px-6 py-4 text-center">17</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 font-bold dark:text-white">
              <td className="px-6 py-4 text-center font-medium text-gray-900 dark:text-white">
                Jummah
              </td>
              <td className="px-6 py-4 text-center">4</td>
              <td className="px-6 py-4 text-center">2</td>
              <td className="px-6 py-4 text-center">4+2</td>
              <td className="px-6 py-4 text-center">-</td>
              <td className="px-6 py-4 text-center">-</td>
              <td className="px-6 py-4 text-center">2</td>
              <td className="px-6 py-4 text-center">14</td>
            </tr>
          </tbody>
        </table>
        <div class="group relative p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
          Wajib*
          <div
            class="absolute hidden group-hover:block bg-white border border-gray-200 p-2 rounded-lg text-sm shadow-lg 
            bottom-full mb-2 left-0"
          >
            The meaning of Wajib is...
          </div>
        </div>
      </div>
    </div>
  );
};

export default RakatTable;

// TODO: Wajib + Muakkadah hover over meaning
// TODO: Meaning of fardh, sunnat (two types), witr and nafl
