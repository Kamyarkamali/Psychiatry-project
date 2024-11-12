"use client";

import { menuData } from "@/app/data/menuData";
import Link from "next/link";
import React from "react";

function TitleMenu() {
  return (
    <div className="flex h-[550px]">
      <ul>
        {menuData.map((item) => (
          <li
            key={item.id}
            className="p-5 border-b-[2px] hover:scale-105 hover:duration-300 hover:border-gray-400 flex flex-col items-center"
          >
            <Link href={item.path || "#"} className="cursor-pointer text-sm">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TitleMenu;
