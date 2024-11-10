"use client";
import { menuData } from "@/app/data/menuData";
import { useAppContext } from "@/context/AppContext";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

function HamburgerMenu() {
  const { hamburger, setHamburger } = useAppContext();

  return (
    <div className="cursor-pointer relative">
      <GiHamburgerMenu
        color="white"
        size={30}
        onClick={() => setHamburger(!hamburger)}
      />
      <div
        className={`absolute transition-all duration-300 ease-in-out left-0 right-[-33px] z-40 bg-slate-100 w-[107.3%] h-[100vh]  ${
          hamburger ? "top-[-37px]" : "top-[-3100%]"
        } `}
      >
        <ul className="flex flex-col relative items-center justify-center h-[500px]">
          {menuData.map((item) => (
            <Link
              className="cursor-pointer hover:scale-105 hover:duration-300 hover:font-bold mt-5 p-5 flex flex-col items-center"
              key={item.id}
              href={item.path}
            >
              <li>{item.name}</li>
            </Link>
          ))}
          <div
            onClick={() => setHamburger(!hamburger)}
            className="absolute top-5 right-5 cursor-pointer"
          >
            <IoMdClose size={33} />
          </div>
        </ul>
      </div>
    </div>
  );
}

export default HamburgerMenu;
