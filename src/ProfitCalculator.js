import React, { useState } from "react";
import Car from "./assets/car.png";
import black from "./assets/black.png";

const ProfitCalculator = () => {
  const [cashout, setCashout] = useState("");
  const [boundary, setBoundary] = useState("");
  const [monthlyAmortization, setMonthlyAmortization] = useState("");

  const parsedCashout = parseFloat(cashout.replace(/,/g, ""));
  const parsedBoundary = parseFloat(boundary.replace(/,/g, ""));
  const parsedMonthlyAmortization = parseFloat(
    monthlyAmortization.replace(/,/g, "")
  );

  const formatNumber = (value) => {
    return value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  const netProfit = parsedBoundary * 26 - parsedMonthlyAmortization;
  const ROI = (parsedCashout / netProfit).toFixed(2);
  const handleInputChange = (value, setter) => {
    // Remove commas, then check if the input is a valid number with up to 2 decimal places
    if (/^\d*\.?\d{0,2}$/.test(value.replace(/,/g, ""))) {
      setter(formatNumber(value.replace(/,/g, "")));
    }
  };

  return (
    <>
      <div className=" h-auto  bg-[#E4E4E4] con p-10  relative  flex flex-col justify-center items-center px-5 lg:h-screen ">
        <img src={Car} className="z-10 w-[700px]" />
        <div className="flex flex-col bg p-8  container  gap-4 rounded-xl lg:flex-row lg:items-center lg:justify-center lg:gap-10">
          <p className="text-xl font-bold mb-2 text-white text-center lg:text-2xl">
            GRAB COMPUTATION ROI
          </p>
          <div className="mb-4 ">
            <label
              htmlFor="cashout"
              className="block text-md font-medium text-white "
            >
              Cashout
            </label>
            <input
              type="text"
              id="cashout"
              value={cashout}
              onChange={(e) => handleInputChange(e.target.value, setCashout)}
              className="mt-1 p-2 w-full text-white rounded-md bg-[#676767] outline-none"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="boundary"
              className="block text-md font-medium text-white "
            >
              Driver's Boundary per day
            </label>
            <input
              type="text"
              id="boundary"
              value={boundary}
              onChange={(e) => handleInputChange(e.target.value, setBoundary)}
              className="mt-1 p-2 w-full  rounded-md bg-[#676767] text-white outline-none"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="monthlyAmortization"
              className="block text-md font-medium text-white "
            >
              Monthly Amortization
            </label>
            <input
              type="text"
              id="monthlyAmortization"
              value={monthlyAmortization}
              onChange={(e) =>
                handleInputChange(e.target.value, setMonthlyAmortization)
              }
              className="mt-1 p-2 w-full  rounded-md bg-[#676767] text-white outline-none"
            />
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-md font-medium text-white  ">
              Monthly Net Profit: {netProfit}
            </p>

            <div className="flex gap-2 text-md lg:text-xl font-medium text-white ">
              <p className=" ">ROI: {isFinite(ROI) ? ROI : "N/A"} Months</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfitCalculator;
