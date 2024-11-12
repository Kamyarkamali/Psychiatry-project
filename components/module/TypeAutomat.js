"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { MdArrowRightAlt } from "react-icons/md";

const Accordion = () => {
  // لیست کامل متون برای نمایش در اسلایدر
  const texts = [
    "Why choose HuMAP? Leveraging data science to revolutionize stress management",
    "Unlocking Insights & Transforming Organizations",
    "Get Early Access",
    "Workplace Stress: A Silent Threat - Over half of employees experience significant work-related stress, leading to decreased productivity, increased absenteeism, and higher turnover rates HuMAP offers a proactive solution to mitigate these risks and optimize workforce performance",
    "By prioritizing mental health and creating healthier, more productive work environments, HuMAP empowers businesses to thrive",
    "What is HuMAP? HuMAP is a cutting-edge platform designed to monitor and prevent workplace stress It provides HR teams, managers, and leaders with real-time insights into employee well-being, helping you take proactive steps to prevent burnout and improve productivity",
    "Tailor-Made Solutions: Identify the right mix of data sources to assess the collective stress level of your human capital",
    "Business Intelligence: Data-driven strategies for effective decision-making",
    "Proven Expertise: Experienced professionals ensuring top-notch guidance on translating collective stress insights into actionable process improvements",
  ];

  const [currentText, setCurrentText] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // تغییر به متن بعدی با فید افکت
      setFade(false); // شروع انیمیشن فید-اوت
      setTimeout(() => {
        setCurrentText((prev) => (prev + 1) % texts.length);
        setFade(true); // شروع انیمیشن فید-این
      }, 500); // تأخیر برای هماهنگی با انیمیشن فید-اوت
    }, 3500);

    return () => clearInterval(interval); // پاک کردن تایمر در زمان حذف کامپوننت
  }, []);

  return (
    <div className="bg-gray-800 lg:w-fit rounded-md text-white flex flex-col justify-center items-center px-4 py-12 h-fit backdrop-blur-sm bg-opacity-30">
      {/* عنوان اصلی و دکمه خواندن بیشتر */}
      <div className="flex gap-2 justify-center items-center border-[1px] rounded-lg border-gray-500 mb-6 p-3">
        <div className="flex items-center">
          <MdArrowRightAlt />
          <Link href={"/about"} className="text-sm text-blue-500 ml-2">
            Read more
          </Link>
        </div>
        <h1 className="text-md font-bold text-center"> ? Why choose HuMAP</h1>
      </div>

      {/* بخش متنی اسلایدر */}
      <div
        className={`w-[380px] leading-10 text-lg text-center mt-5 transition-opacity duration-500 ease-in-out ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      >
        <p>{texts[currentText]}</p>
      </div>

      {/* دکمه‌ها برای Early Access و Learn More */}
      <div className="flex justify-center mt-8 gap-6">
        <Link href={"/about"}>
          <button className="bg-transparent border-2 border-gray-700 text-white py-2 px-6 rounded-lg hover:bg-gray-700 hover:text-white transition duration-300">
            → Learn more
          </button>
        </Link>
        <Link href={"/login"}>
          <button className="bg-gray-800 text-white py-2 px-6 rounded-lg hover:bg-gray-900 transition duration-300">
            Get Early Access
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Accordion;
