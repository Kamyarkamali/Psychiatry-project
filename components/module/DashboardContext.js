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
import { HiOutlineStatusOnline } from "react-icons/hi";
import { IoMdTime } from "react-icons/io";
import { MdComputer } from "react-icons/md";
import { MdAccessTimeFilled } from "react-icons/md";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { MdOutlineError } from "react-icons/md";

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
        label: "Time Off",
        data: [30, 20, 50, 40, 60, 70],
        backgroundColor: "rgba(54, 162, 235, 0.6)", // رنگ پس‌زمینه میله‌ها
        borderColor: "rgba(54, 162, 235, 1)", // رنگ حاشیه میله‌ها
        borderWidth: 1, // ضخامت حاشیه
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

  const comboData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Traffic",
        data: [120, 150, 180, 220, 170, 250, 300],
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.2)",
        fill: true,
        tension: 0.4,
        yAxisID: "y",
      },
      {
        label: "Bounce Rate",
        data: [30, 40, 45, 50, 48, 55, 60],
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        type: "bar",
        yAxisID: "y1",
      },
    ],
  };

  // Options for combo chart
  const comboOptions = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        position: "left",
      },
      y1: {
        beginAtZero: true,
        position: "right",
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };

  return (
    <div className="p-8 min-h-screen">
      <div className="grid gap-6 md:grid-cols-2 justify-center">
        {/* بخش نظرات کاربران */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col">
          <div className="flex justify-between items-center">
            <p className="border-[1px] p-[2px] rounded-md  text-sm cursor-pointer">
              See All
            </p>

            <h2 className="text-xl font-bold text-gray-700 mb-4">
              User Comments
            </h2>
          </div>
          <div className="overflow-y-auto h-48 space-y-4">
            <div className="flex items-center space-x-4 p-3 border-b border-gray-200">
              <img
                src="data:image/jpeg;base64,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"
                alt="User Avatar"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="flex-1">
                <p className="text-gray-800 font-medium">Jane Doe</p>
                <p className="text-gray-600 text-sm">
                  The consultation plan has been sent to you.
                </p>
              </div>
              <span className="px-2 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-500">
                Sent
              </span>
            </div>
            <div className="flex items-center space-x-4 p-3 border-b border-gray-200">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgVYd6q1T9Il62coymzbJK6UUb7anXxfracQ&s"
                alt="User Avatar"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="flex-1">
                <p className="text-gray-800 font-medium">Ethan Collins</p>
                <p className="text-gray-600 text-sm">
                  Your consultation appointment has been rescheduled to Monday.
                </p>
              </div>
              <span className="px-2 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-500">
                Sent
              </span>
            </div>
            <div className="flex items-center space-x-4 p-3 border-b border-gray-200">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS20Y8ey-KpwhT6yewd8Q3TxGyozYQp45iADA&s"
                alt="User Avatar"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="flex-1">
                <p className="text-gray-800 font-medium">Make dag</p>
                <p className="text-gray-600 text-sm">
                  The consultation schedule has been sent.
                </p>
              </div>
              <span className="px-2 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-500">
                Sent
              </span>
            </div>
            <div className="flex items-center space-x-4 p-3 border-b border-gray-200">
              <img
                src="data:image/jpeg;base64,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"
                alt="User Avatar"
                className="w-10 h-10 rounded-full object-cover"
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

          <div className="mt-9 flex border-t-[1px] p-1 flex-col items-end mb-3">
            <p>Team</p>
          </div>
          <div className="flex items-center justify-end w-full ">
            <img
              className="w-[40px] h-[40px] rounded-[100%] object-cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdV4GQ3Wc4Vm_ADvfDik3AXjPk9_wKTrfjaA&s"
              alt="/"
            />
            <img
              className="w-[40px] h-[40px] rounded-[100%] object-cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwNpoWSi1dRcZYTrlzbPb0zmfhh5SBbG2fFg&s"
              alt="/"
            />
            <img
              className="w-[40px] h-[40px] rounded-[100%] object-cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU_WRr1FzP_e2-O_2DZpRqEbGZCGl0M9FLfw&s"
              alt="/"
            />
            <img
              className="w-[40px] rounded-[100%] h-[40px] object-cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQzrYqjExBTXlmrBa-ssALbXQn_To4tUlXgg&s"
              alt="/"
            />
          </div>

          <div className="border-t-[1px] p-2 mt-11 flex justify-center flex-col items-center h-[130px]">
            <p className="text-sm">Time Line</p>
            <p>12/10/2023 - 01/04/2024</p>
          </div>
        </div>

        {/* نمودار میله‌ای (Column Chart) */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
          <div className="flex justify-between items-center w-full">
            <div className="border-[1px] p-[3px] rounded-md border-gray-300 cursor-pointer">
              <p className="text-sm">See All</p>
            </div>
            <div className="flex gap-2">
              <h2 className="text-xl w-full font-bold text-gray-700 mb-4">
                Time Off
              </h2>
              <IoMdTime size={30} />
            </div>
          </div>
          <div className="w-full h-full max-w-md">
            <Bar data={barData} options={{ maintainAspectRatio: false }} />
          </div>

          <div className="border-t-[1px] border-gray-300 w-full p-1 mt-11">
            <div className="flex justify-between">
              <div className="bg-yellow-400 w-[70px] p-[1px] text-[10px] rounded-md">
                <p className="text-sm">success</p>
              </div>

              <div className="flex items-center gap-2">
                <p className="text-sm font-bold">Agust 11 ,2024</p>
                <AiOutlineCheckCircle color="green" />
              </div>
            </div>
          </div>

          <div className="border-t-[1px] border-gray-300 w-full p-1 mt-7">
            <div className="flex justify-between">
              <div className="bg-yellow-400 w-[70px] p-[1px] text-[10px] rounded-md">
                <p className="text-[13px]">Pemding</p>
              </div>

              <div className="flex items-center gap-2">
                <p className="text-sm font-bold">Agust 11 ,2024</p>
                <MdAccessTimeFilled color="orange" />
              </div>
            </div>
          </div>

          <div className="border-t-[1px] border-gray-300 w-full p-1 mt-7">
            <div className="flex justify-between">
              <div className="bg-yellow-400 w-[70px] p-[1px] text-[10px] rounded-md">
                <p className="text-sm">Error</p>
              </div>

              <div className="flex items-center gap-2">
                <p className="text-sm font-bold">Agust 11 ,2024</p>
                <MdOutlineError color="red" />
              </div>
            </div>
          </div>
        </div>

        {/* نمودار خطی */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center w-full  max-w-full">
          <h2 className="text-xl font-bold text-gray-700 mb-4">
            Weekly Traffic
          </h2>
          <div className="w-full h-full max-w-md flex justify-center items-center">
            <Line data={comboData} options={comboOptions} />
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
              className="flex justify-center items-center"
              id="gauge-chart"
              nrOfLevels={30}
              colors={["#FF5F6D", "#FFC371"]}
              arcWidth={0.3}
              percent={0.6}
              textColor="#555"
            />
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
          <div className="flex justify-between w-full">
            <p className="text-sm border-[1px] p-1 rounded-md cursor-pointer border-gray-300">
              See All
            </p>
            <div className="flex items-center gap-2">
              <MdComputer size={20} />
              <p>Status Brown</p>
            </div>
          </div>
          <p className="text-end w-full text-[13px] mt-2 text-gray-700">
            Absent
          </p>

          <div className="flex  flex-col items-end w-full ">
            <div className="relative flex items-center justify-between w-full border-b-2 p-2">
              <p className="bg-gray-500 w-[70px] text-white mt-4 text-center  items-center flex justify-center h-[20px] p-[1px] text-[10px] rounded-md">
                OFFLINE
              </p>
              <div className="flex flex-col ml-3">
                <p>James Brown</p>
                <p className="text-sm text-white bg-red-400 rounded-sm">
                  OFFLINE
                </p>
              </div>
              <img
                className="w-[40px] h-[40px] object-cover rounded-[100%] "
                src="data:image/jpeg;base64,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"
              />
            </div>

            <div className="relative flex items-center justify-between w-full border-b-2 p-2">
              <p className="bg-gray-500 w-[70px] text-white mt-4 text-center  items-center flex justify-center h-[20px] p-[1px] text-[10px] rounded-md">
                ONLINE
              </p>
              <div className="flex flex-col ml-3">
                <p>Jack light</p>
                <p className="text-sm text-white w-[90px] bg-green-400 rounded-sm">
                  ONLINE
                </p>
              </div>
              <img
                className="w-[40px] h-[40px] object-cover rounded-[100%] "
                src="data:image/jpeg;base64,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"
              />
            </div>

            <div className="relative flex items-center justify-between w-full border-b-2 p-2">
              <p className="bg-green-500 w-[70px] text-white mt-4 text-center  items-center flex justify-center h-[20px] p-[1px] text-[10px] rounded-md">
                ONLINE
              </p>
              <div className="flex flex-col ml-3">
                <p>Sophia Smith</p>
                <p className="text-sm text-white bg-green-400 rounded-sm">
                  ONLINE
                </p>
              </div>
              <img
                className="w-[40px] h-[40px] object-cover rounded-[100%] "
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTTjVt1iGeP3jLf_bKKY2-t1Aiy3qAbhI4BQ&s"
              />
            </div>

            <div className="relative flex items-center justify-between w-full border-b-2 p-2">
              <p className="bg-green-500 w-[70px] text-white mt-4 text-center  items-center flex justify-center h-[20px] p-[1px] text-[10px] rounded-md">
                ONLINE
              </p>
              <div className="flex flex-col ml-3">
                <p>Emily Johnson</p>
                <p className="text-sm text-white bg-green-400 rounded-sm">
                  ONLINE
                </p>
              </div>
              <img
                className="w-[40px] h-[40px] object-cover rounded-[100%] "
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyOH3HA565Xl8gRLuT8th2C7ZiPrUafKxejQ&s"
              />
            </div>

            <div className="relative flex items-center justify-between w-full border-b-2 p-2">
              <p className="bg-green-500 w-[70px] text-white mt-4 text-center  items-center flex justify-center h-[20px] p-[1px] text-[10px] rounded-md">
                ONLINE
              </p>
              <div className="flex flex-col ml-3">
                <p>Olivia Davis</p>
                <p className="text-sm text-white bg-green-400 rounded-sm">
                  ONLINE
                </p>
              </div>
              <img
                className="w-[40px] h-[40px] object-cover rounded-[100%] "
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGieTkacqCHxsIIR8hP_A5U2nmUOUtioe3LTWfTb6jWKiboEiTeGj7sx1XICuoBuJpNOo&usqp=CAU"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardContent;
