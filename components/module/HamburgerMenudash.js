"use client";
import { dataDashboard } from "@/app/data/menuData";
import React from "react";
import { IoMdClose } from "react-icons/io";

function HamburgerMenudash({ open, setOpen }) {
  return (
    <div className="w-[300px] h-[100vh] bg-slate-100 rounded-md shadow-md shadow-gray-300 relative">
      <div
        className="absolute left-0 cursor-pointer"
        onClick={() => setOpen(false)}
      >
        <IoMdClose size={30} />
      </div>
      {dataDashboard.map((item) => (
        <ul className="flex items-center gap-4 mt-5 p-2">
          <li className="hover:font-bold hover:scale-105 transition-all duration-300 cursor-pointer">
            {item.icon}
          </li>
          <li className="hover:font-bold hover:scale-105 transition-all duration-300 cursor-pointer">
            {item.title}
          </li>
        </ul>
      ))}
    </div>
  );
}

export default HamburgerMenudash;
