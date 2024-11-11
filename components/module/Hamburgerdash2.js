"use client";

import DashboardContext from "@/components/module/DashboardContext";
import HamburgerMenudash from "@/components/module/HamburgerMenudash";
import HeaderDashboard from "@/components/module/HeaderDashboard";
import LeftMenuDashboard from "@/components/module/LeftMenuDashboard";
import RighDashboard from "@/components/module/RighDashboard";
import { useAppContext } from "@/context/AppContext";
import { RxHamburgerMenu } from "react-icons/rx";

function Hamburgerdash2() {
  const { open2, setOpen2 } = useAppContext();

  return (
    <>
      <div className="z-30 relative  top-[1rem] right-[1rem] lg:hidden">
        <RxHamburgerMenu
          onClick={() => setOpen2(true)}
          size={30}
          className="cursor-pointer"
        />
        <div
          className={`absolute transition-all duration-300 ease-out top-[-33px] ${
            !open2 ? "right-[-100%]" : "right-[-10px]"
          }`}
        >
          <HamburgerMenudash open2={open2} setOpen2={setOpen2} />
        </div>
      </div>

      {/* نمایش فقط در سایز موبایل */}
      <div className="lg:hidden block p-5">
        <DashboardContext />
      </div>

      {/* نمایش فقط در سایز‌های بزرگ‌تر از موبایل */}
      <div className="hidden lg:block">
        <HeaderDashboard />
      </div>
      <div className="lg:flex hidden justify-between min-h-screen p-5">
        {/* نوار کناری سمت چپ */}
        <div className="w-[340px] p-5 rounded-lg text-left">
          <RighDashboard />
        </div>

        {/* محتوای مرکزی */}
        <div className="w-3/5 bg-white p-5 rounded-lg text-center">
          <DashboardContext />
        </div>

        {/* نوار کناری سمت راست */}
        <div className="w-1/5 hidden lg:block shadow-md border-r-2 p-5 rounded-lg text-right">
          <LeftMenuDashboard />
        </div>
      </div>
    </>
  );
}

export default Hamburgerdash2;
