import React from "react";

const comparisonData = {
  headers: ["Specification", "Rhyno SE03 Lite", "Rhyno SE03", "Rhyno SE03 Max"],
  rows: [
    ["Battery", "1.8Kwh", "2.7Kwh", "2.7Kwh"],
    [
      "Battery features",
      "LFP with 1500 cycles, Active Balancing, Waterproof (IP67)",
      "LFP with 1500 cycles, Active Balancing, Waterproof (IP67)",
      "LFP with 1500 cycles, Active Balancing, Waterproof (IP67)",
    ],
    ["Battery warranty", "3 years", "3 years", "3 years"],
    ["Charging time", "3 hours (12A)", "4 hours (12A)", "4 hours (12A)"],
    ["Motor", "1500W", "1500W", "2000W"],
    ["Max speed", "55 km/h", "55 km/h", "65 km/h"],
    ["Max range (@30km/h)", "100 km", "150 km", "120 km"],
    ["Max range (@45km/h)", "90 km", "110 km", "100 km"],
    ["Max range (@full speed)", "60 km", "90 km", "80 km"],
    [
      "Other key benefits",
      "Fire-safe battery, Range prediction, Comfortable ride, Stable and safe",
      "Fire-safe battery, Range prediction, Comfortable ride, Stable and safe",
      "Fire-safe battery, Range prediction, Comfortable ride, Stable and safe",
    ],
  ],
};

const Compare = () => {
  return (
    <div className="p-4 sm:p-8 overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            {comparisonData.headers.map((header, index) => (
              <th
                key={index}
                className="bg-[#424242] text-white p-4"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {comparisonData.rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="bg-[#2C2A2A] text-white p-4 hover:bg-[#F9ED32] hover:backdrop-blur-sm transition-all duration-300 ease-in-out hover:scale-105 hover:text-black"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Compare;
