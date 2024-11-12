// components/OurStory.js

"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const OurStory = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center p-6 lg:p-12">
      {/* Header */}
      <div className="flex flex-col items-center space-y-4 text-center">
        <Link href="/">
          <Image
            src={"/images/logo.jpg"}
            alt="HuMAP Logo"
            width={120}
            height={120}
            className="animate-pulse"
          />
        </Link>
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-100 mt-4">
          Our Story
        </h1>
        <p className="text-lg lg:text-xl text-gray-400 max-w-2xl mt-2">
          Founded on the belief that a healthy and happy workforce is a
          productive one, HuMAP is dedicated to transforming workplace culture
        </p>
      </div>

      {/* Story Content */}
      <div
        className={`transition-opacity duration-1000 ${
          fadeIn ? "opacity-100" : "opacity-0"
        } mt-10 space-y-12 lg:space-y-16`}
      >
        <div className="max-w-4xl text-center mx-auto">
          <h2 className="text-3xl font-semibold text-gray-200">Our Vision</h2>
          <p className="text-lg text-gray-400 mt-4 leading-relaxed">
            At HuMAP, we envision a world where workplace stress is managed
            proactively Our mission is to provide organizations with the tools
            and insights to foster healthier, more productive work environments
          </p>
        </div>

        <div className="max-w-4xl text-center mx-auto">
          <h2 className="text-3xl font-semibold text-gray-200">Our Approach</h2>
          <p className="text-lg text-gray-400 mt-4 leading-relaxed">
            Using advanced analytics and data science, we identify stress
            triggers and provide actionable recommendations tailored to each
            organization’s needs We believe in a human-centered approach that
            prioritizes mental well-being and organizational growth
          </p>
        </div>
      </div>

      {/* Key Features */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl w-full mt-16 lg:mt-20">
        <div className="flex flex-col items-center bg-gray-800 bg-opacity-70 p-6 rounded-lg transition-transform transform hover:scale-105 hover:bg-gray-700">
          <h3 className="text-xl font-semibold mb-2">
            Identify Stress Triggers
          </h3>
          <p className="text-gray-400 text-center">
            Real-time monitoring to identify the causes of workplace stress and
            take proactive action
          </p>
        </div>
        <div className="flex flex-col items-center bg-gray-800 bg-opacity-70 p-6 rounded-lg transition-transform transform hover:scale-105 hover:bg-gray-700">
          <h3 className="text-xl font-semibold mb-2">Data-Driven Insights</h3>
          <p className="text-gray-400 text-center">
            Leverage advanced analytics to discover trends, enhance
            productivity, and improve employee satisfaction
          </p>
        </div>
        <div className="flex flex-col items-center bg-gray-800 bg-opacity-70 p-6 rounded-lg transition-transform transform hover:scale-105 hover:bg-gray-700">
          <h3 className="text-xl font-semibold mb-2">Personalized Solutions</h3>
          <p className="text-gray-400 text-center">
            Receive actionable insights tailored to the unique needs of each
            organization
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-16 gap-4 lg:mt-20 flex justify-center space-x-6">
        <Link
          href="/about"
          className="border-2 border-blue-600 hover:border-blue-700 text-blue-500 hover:text-blue-600 py-3 px-6 rounded-lg transition-transform transform hover:scale-105 text-lg font-medium"
        >
          Learn More
        </Link>
        <Link
          href="/contact"
          className="bg-blue-600 hover:bg-blue-700 py-3 px-6 rounded-lg transition-transform transform hover:scale-105 text-lg font-medium"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default OurStory;
