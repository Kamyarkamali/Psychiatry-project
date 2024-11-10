"use client";
import Link from "next/link";
import React from "react";

function BtnLogin() {
  return (
    <div>
      <Link href={"/login"}>
        <button className="bg-blue-500 hover:bg-blue-700 transition-all duration-300 text-white font-bold py-2 px-4 rounded">
          Login
        </button>
      </Link>
    </div>
  );
}

export default BtnLogin;
