export const menuData = [
  { id: 1, name: "Home Page", path: "/" },
  { id: 2, name: "SingUp / Login", path: "/singup" },
  { id: 5, name: "Product", path: "/Product" },
  { id: 3, name: "About Us", path: "/about" },
  { id: 4, name: "Contact Us", path: "/contact" },
  { id: 5, name: "dashboard  test", path: "/dashboard" },
  { id: 6, name: "Our Story  test", path: "/OurStory" },
];

import { IoCalendarNumberOutline } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
import { IoMdTime } from "react-icons/io";
import { GoProjectSymlink } from "react-icons/go";
import { RiTeamLine } from "react-icons/ri";
import { FaRegNoteSticky } from "react-icons/fa6";
import { IoIosStarOutline } from "react-icons/io";
import { IoDocumentsOutline } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";

export const dataDashboard = [
  { id: 9, title: "Home", icon: <IoHomeOutline />, path: "/" },
  { id: 1, title: "Dashboard", icon: <RxDashboard /> },
  { id: 2, title: "Calendar", icon: <IoCalendarNumberOutline /> },
  { id: 3, title: "Time Off", icon: <IoMdTime /> },
  { id: 4, title: "Projects", icon: <GoProjectSymlink /> },
  { id: 5, title: "Team", icon: <RiTeamLine /> },
  { id: 6, title: "Notes", icon: <FaRegNoteSticky /> },
  { id: 7, title: "Benefits", icon: <IoIosStarOutline />, desc: "New" },
  { id: 8, title: "Documents", icon: <IoDocumentsOutline /> },
];
