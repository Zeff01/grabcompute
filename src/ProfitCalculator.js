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
  const ROI = parsedCashout / netProfit;

  // bg-[url('./assets/car.png')]  bg-cover bg-no-repeat
  return (
    <>
      <div className=" h-auto  bg-[#E4E4E4] con p-10  relative  flex flex-col justify-center items-center px-5 lg:h-screen ">
        <img src={Car} className="z-10 w-[700px]" />
        {/* <img src={black} className="absolute -top-[50px] left-0 z-1" />
        <img src={black} className="absolute  " /> */}
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
              onChange={(e) =>
                setCashout(formatNumber(e.target.value.replace(/,/g, "")))
              }
              className="mt-1 p-2 w-full text-white rounded-md bg-[#676767] outline-none"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="boundary"
              className="block text-md font-medium text-white "
            >
              Boundary
            </label>
            <input
              type="text"
              id="boundary"
              value={boundary}
              onChange={(e) =>
                setBoundary(formatNumber(e.target.value.replace(/,/g, "")))
              }
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
                setMonthlyAmortization(
                  formatNumber(e.target.value.replace(/,/g, ""))
                )
              }
              className="mt-1 p-2 w-full  rounded-md bg-[#676767] text-white outline-none"
            />
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-xl font-bold text-white underline ">
              Net Profit: {netProfit}
            </p>
            <div className="flex gap-2 text-xl lg:text-xl font-bold text-white">
              <p className=" underline">
                ROI: {isFinite(ROI) ? ROI : "N/A"} Months
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfitCalculator;
