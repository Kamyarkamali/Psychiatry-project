"use client";

import { useAppContext } from "@/context/AppContext";

//react-icons
import { RiMenu3Line } from "react-icons/ri";
import { GrClose } from "react-icons/gr";
import TitleMenu from "./TitleMenu";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { BsTelegram } from "react-icons/bs";

function LeftMenu() {
  const { open, setOpen } = useAppContext();

  return (
    <div
      className={`transition-all ease-in-out duration-300 relative border-r-[5px] z-30 border-gray-500 bg-gray-50 h-full ${
        !open ? "w-[150px]" : "w-[80px]"
      }`}
    >
      <div className="cursor-pointer relative flex justify-center items-center h-[600px]">
        {open ? (
          <RiMenu3Line size={35} color="gray" onClick={() => setOpen(!open)} />
        ) : (
          <div>
            <div>
              <GrClose
                className="absolute right-[55px] top-4"
                size={25}
                color="gray"
                onClick={() => setOpen(!open)}
              />
              <TitleMenu />
            </div>
          </div>
        )}
      </div>

      <div
        className={`absolute ${
          !open ? "block" : "hidden"
        } bottom-20 w-full flex flex-col items-center gap-5`}
      >
        <h1 className="text-center">"Social Media"</h1>
        <div className="flex gap-5">
          <FaLinkedin size={20} className="cursor-pointer" />
          <IoLogoInstagram size={20} className="cursor-pointer" />
          <BsTelegram size={20} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default LeftMenu;
