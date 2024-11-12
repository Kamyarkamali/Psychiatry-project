"use client";
import React, { useState } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineSchedule } from "react-icons/ai";
import { IoIosSearch } from "react-icons/io";

function HeaderDashboard() {
  const [search, setSSearch] = useState(false);

  const [open, setOpen] = useState(false);

  return (
    <div className="flex relative max-w-[1200px] mx-auto justify-around mt-5">
      <div className="flex items-center gap-5">
        <button className="bg-blue-600 p-2 rounded-md text-sm text-white">
          {" "}
          Create a Request +
        </button>
        <div className="border-[1px] p-1 rounded-md w-[60px] flex items-center justify-center">
          <AiOutlineSchedule size={20} />
        </div>

        <IoMdNotificationsOutline size={20} />

        <div
          onDoubleClick={() => setSSearch(false)}
          onClick={() => setSSearch(true)}
          className={`cursor-pointer ${
            open && "border-[1px] rounded-md overflow-hidden"
          }`}
        >
          {search ? (
            <input
              type="text"
              placeholder="...Search"
              className=" p-1 outline-none placeholder:text-left"
            />
          ) : (
            <IoIosSearch size={20} />
          )}
        </div>
      </div>

      {/* <div>2</div> */}

      <div className="flex items-center gap-2">
        <div>
          <p className="font-bold text-gray-800">amin@gmail.com</p>
          <p className="font-bold text-gray-800">Wellcome Back Mr Amin</p>
        </div>
        <img
          className="w-[60px] h-[60px] rounded-[100%] object-cover"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF2yaox2cALIq_yyd-9qEyovEsficJr7X9QQ&s"
          alt="image"
        />
      </div>
    </div>
  );
}

export default HeaderDashboard;
