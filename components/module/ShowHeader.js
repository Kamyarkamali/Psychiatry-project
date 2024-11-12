"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-[#242424] text-white shadow-md fixed top-0 left-0 right-0 z-10">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* لوگو */}
        <div className="text-2xl font-bold">
          <Link className="hover:text-yellow-400 duration-300" href="/">
            <img
              className="w-[90px] h-[80px] rounded-[100%]"
              src="/images/logo.jpg"
            />
          </Link>
        </div>

        <nav className="hidden md:flex gap-9 text-lg ">
          <Link className="hover:text-yellow-400 duration-300" href="/">
            Home Page
          </Link>
          <Link className="hover:text-yellow-400 duration-300" href="/about">
            About Us
          </Link>
          <Link className="hover:text-yellow-400 duration-300" href="/contact">
            Contact Us
          </Link>
          <Link
            className="hover:text-yellow-400 duration-300"
            href={"/OurStory"}
          >
            OurStory
          </Link>
        </nav>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-3xl focus:outline-none">
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* منوی همبرگری - برای موبایل */}
      {isOpen && (
        <div className="md:hidden text-center p-4">
          <Link
            className="block p-1 text-lg hover:text-yellow-400"
            onClick={toggleMenu}
            href="/"
          >
            Home Page
          </Link>
          <Link
            className="block py-2 text-lg hover:text-yellow-400"
            onClick={toggleMenu}
            href="/about"
          >
            About Us
          </Link>

          <Link
            className="block py-2 text-lg hover:text-yellow-400"
            onClick={toggleMenu}
            href="/contact"
          >
            Contact Us
          </Link>
          <Link
            className="block py-2 text-lg hover:text-yellow-400"
            href={"/OurStory"}
          >
            OurStory
          </Link>
        </div>
      )}
    </header>
  );
}
