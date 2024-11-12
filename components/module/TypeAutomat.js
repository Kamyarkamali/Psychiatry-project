"use client";

import Link from "next/link";
import { useState } from "react";
import { MdArrowRightAlt } from "react-icons/md";

const Accordion = () => {
  const [isOpen, setIsOpen] = useState(null);

  const toggleAccordion = (index) => {
    setIsOpen(isOpen === index ? null : index);
  };

  return (
    <div className="bg-gray-800 text-white flex flex-col justify-center items-center px-4 py-12 h-fit backdrop-blur-sm bg-opacity-30">
      <div className="flex gap-2 justify-center items-center border-b-[1px] ">
        <div className="flex items-center mb-7 ">
          <MdArrowRightAlt />
          <Link href={"/about"} className="text-sm text-blue-500">
            {" "}
            Read moore{" "}
          </Link>
        </div>
        <h1 className="text-md font-bold text-center mb-6">
          ?Why choose HuMAP
        </h1>
      </div>
      {/* Accordion 1 */}
      {/* <div className="w-full max-w-xl mb-4">
        <div
          className="bg-gray-800 text-white lg:p-4 p-2 rounded-lg cursor-pointer mb-4 hover:bg-gray-900 transition duration-300"
          onClick={() => toggleAccordion(0)}
        >
          <h2 className="lg:text-lg text-end text-sm font-semibold">
            Leveraging data science to revolutionize stress management
          </h2>
        </div>
        <div
          className={`overflow-hidden transition-all duration-300 ${
            isOpen === 0 ? "h-auto" : "h-0 opacity-0"
          }`}
        >
          <p className="lg:text-lg text-sm text-center p-4">
            Unlocking Insights & Transforming Organizations
          </p>
        </div>
      </div> */}
      {/* Accordion 2 */}
      {/* <div className="w-full max-w-xl mb-4">
        <div
          className="bg-gray-800 text-white lg:p-4 p-2  rounded-lg cursor-pointer mb-4 hover:bg-gray-900 transition duration-300"
          onClick={() => toggleAccordion(1)}
        >
          <h2 className="lg:text-lg text-end text-sm font-semibold">
            Workplace Stress: A Silent Threat
          </h2>
        </div>
        <div
          className={`overflow-hidden transition-all duration-300 ${
            isOpen === 1 ? "h-auto" : "h-0 opacity-0"
          }`}
        >
          <p className="lg:text-lg text-sm text-center p-4">
            Over half of employees experience significant work-related stress,
            leading to decreased productivity, increased absenteeism, and higher
            turnover rates. HuMAP offers a proactive solution to mitigate these
            risks and optimize workforce performance.
          </p>
          <p className="lg:text-lg text-sm text-center p-4">
            By prioritizing mental health and creating healthier, more
            productive work environments, HuMAP empowers businesses to thrive.
          </p>
        </div>
      </div> */}
      {/* Accordion 3 */}
      {/* <div className="w-full max-w-xl mb-4">
        <div
          className="bg-gray-800 text-white lg:p-4 p-2 rounded-lg cursor-pointer mb-4 hover:bg-gray-900 transition duration-300"
          onClick={() => toggleAccordion(2)}
        >
          <h2 className="lg:text-lg text-end text-sm font-semibold">
            ?What is HuMAP
          </h2>
        </div>
        <div
          className={`overflow-hidden transition-all duration-300 ${
            isOpen === 2 ? "h-auto" : "h-0 opacity-0"
          }`}
        >
          <p className="lg:text-lg text-sm text-center lg:p-4 p-2">
            HuMAP is a cutting-edge platform designed to monitor and prevent
            workplace stress. It provides HR teams, managers, and leaders with
            real-time insights into employee well-being, helping you take
            proactive steps to prevent burnout and improve productivity.
          </p>
        </div>
      </div> */}

      <div className="w-[380px] leading-10 text-xl text-center mt-5">
        <h3>
          HuMAP is a cutting-edge platform designed to monitor and prevent
          workplace stress. It provides HR teams, managers and leaders with
          real-time insights into employee well-being, helping you take
          proactive steps to prevent burnout and improve productivity
        </h3>
      </div>

      {/* Buttons for Early Access and Learn More */}
      <div className="flex justify-center mt-8 space-x-4 gap-6">
        <Link href={"/login"}>
          <button className="bg-gray-800 text-white py-2 px-6 rounded-lg hover:bg-gray-900  transition duration-300">
            Get Early Access
          </button>
        </Link>
        <Link href={"/about"}>
          <button className="bg-transparent border-2 border-gray-700 text-white py-2 px-6 rounded-lg hover:bg-gary-700 hover:text-white transition duration-300">
            → Learn more
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Accordion;
