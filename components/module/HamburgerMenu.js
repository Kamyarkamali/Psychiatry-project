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
        className={`absolute transition-all duration-500 ease-in-out left-0 right-[-33px] z-40 w-[107.3%] h-[100vh] rounded-lg shadow-lg transform overflow-hidden ${
          hamburger ? "top-[-37px] opacity-100" : "top-[-3100%] opacity-0"
        } wave-background`}
      >
        <ul className="flex flex-col relative items-center justify-center ml-6 h-[500px]">
          {menuData.map((item) => (
            <Link
              className="cursor-pointer hover:scale-105 hover:duration-300 hover:font-semibold text-[#333333] text-lg mt-5 p-5 flex flex-col items-center transform transition-transform duration-300"
              key={item.id}
              href={item.path}
            >
              <li>{item.name}</li>
            </Link>
          ))}
          <div
            onClick={() => setHamburger(!hamburger)}
            className="absolute top-5 right-5 cursor-pointer text-white"
          >
            <IoMdClose size={33} />
          </div>
        </ul>

        {/* بخش فوتر زیبا */}
        <div className="absolute bottom-10 w-full flex flex-col items-center justify-center space-y-4 text-center text-[#222222]">
          <p className="text-base font-semibold">ارتباط با ما</p>
          <div className="flex gap-3 space-x-6 mt-2">
            <a
              href="tel:+98912222222222"
              className=" transition-colors duration-300"
            >
              09122222222
            </a>
            <a
              href="mailto:email@example.com"
              className="hover:text-blue-300 transition-colors duration-300"
            >
              email@example.com
            </a>
          </div>

          <p className="text-xs mt-6 text-[#333333]">&copy; 2024 روان‌پزشک</p>
        </div>
      </div>
    </div>
  );
}

export default HamburgerMenu;
