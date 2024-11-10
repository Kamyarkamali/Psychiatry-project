import { menuData } from "@/app/data/menuData";
import Link from "next/link";
import React from "react";

function TitleMenu() {
  return (
    <div className="flex h-[400px]">
      <ul>
        {menuData.map((item) => (
          <Link key={item.id} href={item.path}>
            <li className="cursor-pointer p-5 flex border-b-[2px] hover:scale-105 hover:duration-300 hover:border-gray-400 flex-col items-center">
              {item.name}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default TitleMenu;
