"use client";
import Image from "next/image";
import { useState } from "react";

const menuItems = [
  {
    id: 1,
    title: "Real-time Monitoring",
    description:
      "Track key metrics like stress levels, burnout risk, and employee engagement.",
    imageUrl: "/images/real-time-monitoring.jpg",
  },
  {
    id: 2,
    title: "Data-Driven Insights",
    description:
      "Leverage advanced analytics to identify trends and patterns in employee data.",
    imageUrl: "/images/data-driven-insights.jpg",
  },
  {
    id: 3,
    title: "Personalized Recommendations",
    description:
      "Receive tailored recommendations to improve individual and team well-being.",
    imageUrl: "/images/personalized-recommendations.jpg",
  },
  {
    id: 4,
    title: "Actionable Insights",
    description:
      "Implement practical strategies to reduce stress and enhance workplace culture.",
    imageUrl: "/images/actionable-insights.jpg",
  },
];

export default function ProductMenu() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="relative">
      <button className="text-xl font-semibold py-3 px-5 bg-gradient-to-r from-blue-500 to-teal-400 text-white rounded-lg hover:bg-blue-600 focus:outline-none mb-4">
        Product
      </button>
      <div className="bg-white border rounded-lg shadow-lg mt-2 w-full lg:w-96">
        {menuItems.map((item, index) => (
          <div
            key={item.id}
            className="border-b last:border-none p-4 transition duration-300 ease-in-out hover:bg-gray-50"
          >
            <button
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
              className="flex justify-between items-center w-full"
            >
              <span className="text-lg font-medium text-blue-700">
                {item.title}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className={`w-5 h-5 text-blue-500 transform transition-transform ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {activeIndex === index && (
              <div className="mt-3 flex flex-col items-start">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  width={300}
                  height={200}
                  className="rounded-lg mb-2"
                />
                <p className="text-gray-600">{item.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
