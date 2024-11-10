"use client";

import { usePathname } from "next/navigation";
import ShowHeader from "./ShowHeader";

export default function HeaderWrapper() {
  const pathname = usePathname();

  const showHeader =
    pathname === "/contact" ||
    pathname === "/about" ||
    pathname === "/singup" ||
    pathname === "/login" ||
    pathname === "about" ||
    pathname === "/Product";

  return showHeader ? <ShowHeader /> : null;
}
