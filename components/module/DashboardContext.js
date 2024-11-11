"use client";
import React from "react";
import { Bar, Line, Doughnut } from "react-chartjs-2";
import GaugeChart from "react-gauge-chart";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// ثبت اسکیل‌ها و اجزای لازم
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

function DashboardContent() {
  const barData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Monthly Sales",
        data: [30, 20, 50, 40, 60, 70],
        backgroundColor: "rgba(54, 162, 235, 0.6)",
      },
    ],
  };

  const lineData = {
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    datasets: [
      {
        label: "Weekly Traffic",
        data: [150, 200, 180, 220, 260, 300],
        borderColor: "rgba(75, 192, 192, 1)",
        fill: false,
      },
    ],
  };

  const doughnutData = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "Population",
        data: [300, 50, 100],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  return (
    <div className="p-8 min-h-screen">
      <div className="grid gap-6 md:grid-cols-2 justify-center">
        {/* بخش نظرات کاربران */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col">
          <h2 className="text-xl font-bold text-gray-700 mb-4">
            User Comments
          </h2>
          <div className="overflow-y-auto h-48 space-y-4">
            <div className="flex items-center space-x-4 p-3 border-b border-gray-200">
              <img
                src="https://via.placeholder.com/40"
                alt="User Avatar"
                className="w-10 h-10 rounded-full"
              />
              <div className="flex-1">
                <p className="text-gray-800 font-medium">Jane Doe</p>
                <p className="text-gray-600 text-sm">Awesome job!</p>
              </div>
              <span className="px-2 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-500">
                Sent
              </span>
            </div>
            <div className="flex items-center space-x-4 p-3 border-b border-gray-200">
              <img
                src="https://via.placeholder.com/40"
                alt="User Avatar"
                className="w-10 h-10 rounded-full"
              />
              <div className="flex-1">
                <p className="text-gray-800 font-medium">Alex Johnson</p>
                <p className="text-gray-600 text-sm">Can you update this?</p>
              </div>
              <span className="px-2 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-500">
                Received
              </span>
            </div>
          </div>
        </div>

        {/* نمودار میله‌ای */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
          <h2 className="text-xl font-bold text-gray-700 mb-4">
            Monthly Sales
          </h2>
          <div className="w-full h-full max-w-md">
            <Bar data={barData} />
          </div>
        </div>

        {/* نمودار خطی */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
          <h2 className="text-xl font-bold text-gray-700 mb-4">
            Weekly Traffic
          </h2>
          <div className="w-full h-full max-w-md">
            <Line data={lineData} />
          </div>
        </div>

        {/* نمودار دایره‌ای */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
          <h2 className="text-xl font-bold text-gray-700 mb-4">
            Population Distribution
          </h2>
          <div className="w-full h-full max-w-md">
            <Doughnut data={doughnutData} />
          </div>
        </div>

        {/* نمودار عقربه‌ای */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
          <h2 className="text-xl font-bold text-gray-700 mb-4">
            Vehicle Speed
          </h2>
          <div className="w-full max-w-md">
            <GaugeChart
              id="gauge-chart"
              nrOfLevels={30}
              colors={["#FF5F6D", "#FFC371"]}
              arcWidth={0.3}
              percent={0.6}
              textColor="#555"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardContent;
