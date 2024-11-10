"use client";

import { menuData } from "@/app/data/menuData";
import Link from "next/link";
import React, { useState } from "react";

function TitleMenu() {
  const [open, setOpen] = useState(false);

  // تابعی برای باز و بسته کردن زیرمنوی Product
  const toggleProductMenu = () => {
    setOpen(!open);
  };

  return (
    <div className="flex h-[500px]">
      <ul>
        {menuData.map((item) => (
          <li
            key={item.id}
            className="p-5 border-b-[2px] hover:scale-105 hover:duration-300 hover:border-gray-400 flex flex-col items-center"
          >
            {item.name === "Product" ? (
              <div
                onClick={toggleProductMenu}
                className="cursor-pointer text-sm flex items-center flex-col"
              >
                {item.name}
                {/* نمایش زیرمنو برای Product */}
                {open && (
                  <ul className="mt- flex flex-col items-center text-center transition-all duration-300">
                    <li className="py-1 text-gray-600 text-sm text-center">
                      <Link href="/product/real-time-monitoring">
                        Real-time Monitoring
                      </Link>
                    </li>
                    <li className="py-1 text-gray-600 text-sm">
                      <Link href="/product/analytics">
                        Data-Driven Insights
                      </Link>
                    </li>
                    <li className="py-1 text-gray-600 text-">
                      <Link href="/product/reports">
                        Personalized Recommendations
                      </Link>
                    </li>
                    <li className="py-1 text-gray-600 text-">
                      <Link href="/product/reports">Actionable Insights</Link>
                    </li>
                  </ul>
                )}
              </div>
            ) : (
              <Link href={item.path || "#"} className="cursor-pointer text-sm">
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TitleMenu;
