import { dataDashboard } from "@/app/data/menuData";
import Image from "next/image";
import React from "react";

import { IoIosArrowDown } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import Link from "next/link";

function LeftMenuDashboard() {
  return (
    <div className="flex items-center flex-col">
      <div className="flex justify-between items-center w-full border-b-2 p-2">
        <div className="border-[1px] cursor-pointer p-1 rounded-md border-gray-400">
          <IoIosArrowDown />
        </div>
        <div className="flex flex-col items-center">
          <Image
            className="w-[60px] rounded-md"
            src={"/images/logo.jpg"}
            width={200}
            height={200}
            alt="logo"
          />
          <p className="text-sm text-gray-500 mt-3">Hr Manegement</p>
        </div>
      </div>

      {/* main */}
      <div className="flex justify-end w-full">
        <ul>
          <p className="text-end w-full text-[13px] mt-2 text-gray-700 font-bold">
            Main
          </p>
          {dataDashboard.map((item) => (
            <div
              key={item.id}
              className={`flex transition-all duration-300 ease-linear ${
                item.id === item.id && "hover:bg-gray-200"
              } w-[230px] rounded-md p-2 justify-end gap-3 mt-1 text-sm cursor-pointer text-gray-800 items-center`}
            >
              <div className="flex justify-between w-[130px]">
                <li
                  className={`${
                    item.desc && "bg-yellow-200"
                  } text-[10px] p-[2px] w-[50px] text-center justify-center rounded-md`}
                >
                  {item?.desc}
                </li>
                <Link href={item.title === "Home" ? "/" : ""}>
                  <li>{item.title}</li>
                </Link>
              </div>
              <Link href={item.title === "Home" ? "/" : ""}>
                <li>{item.icon}</li>
              </Link>
            </div>
          ))}
        </ul>
      </div>
      {/* main */}

      {/* faiveritse */}

      <div className="flex flex-col gap-3 items-end w-full ml-4 mt-6">
        {/* faiveritse */}
        <div className="flex items-center gap-5">
          <p className="text-sm">Synergy Team</p>
          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
        </div>

        <div className="flex items-center gap-5">
          <p className="text-sm">Monday Redesing</p>
          <div className="w-2 h-2 bg-red-600 rounded-full"></div>
        </div>

        <div className="flex items-center gap-5">
          <p className="text-sm">Udemy Courses</p>
          <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
        </div>
      </div>

      {/* faiveritse */}

      {/* settings */}
      <div className="flex flex-col gap-3 items-end w-full ml-3 mt-5">
        <div className="flex items-center gap-3">
          <p className="text-sm">Settings</p>
          <IoSettingsOutline />
        </div>

        <div className="flex items-center gap-3">
          <p className="text-sm">Support</p>
          <BiSupport />
        </div>
      </div>
      {/* settings */}

      {/* proffile */}

      <div className="mt-16 border-t-2 w-full py-6">
        <div className="flex flex-row-reverse text-sm">
          <img
            className="w-[50px] h-[50px] object-cover rounded-[100%]"
            alt="image"
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF2yaox2cALIq_yyd-9qEyovEsficJr7X9QQ&s"
            }
          />
          <div className="flex flex-col items-center ml-4">
            <p>Dr Nima</p>
            <p>nima@gmail.com</p>
          </div>
        </div>
      </div>

      {/* proffile */}
    </div>
  );
}

export default LeftMenuDashboard;
