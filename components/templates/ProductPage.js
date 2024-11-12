"use client";

import React from "react";
import Link from "next/link";

function ProductPage() {
  const features = [
    {
      title: "Real-time Monitoring",
      description:
        "Stay updated with real-time data and monitor all metrics effectively.",
      link: "/product/real-time-monitoring",
    },
    {
      title: "Data-Driven Insights",
      description:
        "Gain valuable insights with data-driven analytics to improve your decisions.",
      link: "/product/analytics",
    },
    {
      title: "Personalized Recommendations",
      description:
        "Receive suggestions tailored to your unique needs and preferences.",
      link: "/product/reports",
    },
    {
      title: "Actionable Insights",
      description:
        "Make informed decisions with insights that drive action and growth.",
      link: "/product/reports",
    },
  ];

  return (
    <div className="container mx-auto p-4 lg:mt-48 text-center mt-32 grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
      {features.map((feature, index) => (
        <div
          key={index}
          className="rounded-lg shadow-lg p-5 transition-all transform hover:scale-105 hover:shadow-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white border border-gray-300"
        >
          <h2 className="text-2xl font-bold mb-3 tracking-wide">
            {feature.title}
          </h2>
          <p className="text-sm mb-4 opacity-90">{feature.description}</p>
          <a className="text-sm font-semibold hover:underline bg-white text-blue-800 px-3 py-1 rounded-lg shadow-md hover:bg-blue-700 hover:text-white transition duration-300">
            Learn More
          </a>
        </div>
      ))}
    </div>
  );
}

export default ProductPage;
