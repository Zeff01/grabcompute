import React, { useState } from "react";

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

  return (
    <div className="p-8  h-screen bg-black  ">
      <div className="flex flex-col justify-center border-2 bg-[#dfdfdf] p-8 mt-20 gap-4">
        <p className="text-4xl font-bold mb-2">GRAB COMPUTATION ROI</p>
        <div className="mb-4">
          <label
            htmlFor="cashout"
            className="block text-md font-medium text-gray-600"
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
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="boundary"
            className="block text-md font-medium text-gray-600"
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
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="monthlyAmortization"
            className="block text-md font-medium text-gray-600"
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
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-2xl font-bold text-gray-600 underline">
            Net Profit: {netProfit}
          </p>
          <div className="flex gap-2 text-2xl font-bold text-gray-600">
            <p className=" underline">ROI: {isFinite(ROI) ? ROI : "N/A"}</p>
            <span> MONTHS</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfitCalculator;
