"use client";
import React, { useState } from "react";
import { IoCallOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { AiOutlineMessage } from "react-icons/ai";

function CallBtn() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleList = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-5  right-5 flex items-center">
      {/* لیست شماره تماس‌ها */}
      {isOpen && (
        <div
          className="mr-4 ml-3 bg-white flex flex-col gap-3 shadow-lg rounded-lg p-2 transition-opacity duration-500 opacity-100"
          style={{
            animation: "fadeIn 0.5s ease-in-out",
          }}
        >
          <a
            href="tel:09120000000"
            className="block text-end border-b-[1px] border-gray-500 py-1 px-2 text-gray-800"
          >
            09122000000
          </a>
          <a
            href="tel:02130000000"
            className="block text-end py-1 px-2 text-gray-800"
          >
            09120000000
          </a>
        </div>
      )}

      {/* دکمه اصلی تماس */}
      <div
        className={`p-3 rounded-full cursor-pointer bg-green-500 transition-transform  duration-300 ${
          isOpen ? "rotate-180" : "rotate-0"
        }`}
        onClick={toggleList}
      >
        <div>
          {isOpen ? (
            <AiOutlineMessage
              size={30}
              color="white"
              className={`${isOpen ? "hidden" : "block"}`}
            />
          ) : (
            <AiOutlineMessage size={30} color="white" />
          )}
          <IoMdClose
            size={30}
            color="white"
            className={`${!isOpen ? "hidden" : "block"}`}
          />
        </div>
      </div>

      {/* استایل‌های انیمیشن */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateX(10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}

export default CallBtn;
