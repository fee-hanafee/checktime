'use client'

import Link from "next/link";
import React from "react";
import useAuth from "../context/AuthContextProvider";

const menubar = [
  { page: "home", id: 1, part: "/" },
  { page: "departments", id: 4 },
  { page: "report", id: 5 },
];

export default function Navbar() {
  const { user, userLogout } = useAuth();
  return (
    <nav className="grid grid-cols-12 px-4   h-[3.5rem] items-center bg-[#333] text-white ">
      <div className="col-span-2">
        <Link href={"/"} className="hover:text-red-500 transition duration-150">
          Logo
        </Link>
      </div>
      <div className="col-span-8">
        <div className="flex  gap-4">
          {menubar.map((menu) => (
            <Link
              key={menu.id}
              href={menu?.part || menu.page}
              className="hover:text-red-500 transition duration-150"
            >
              {menu.page.toUpperCase()}
            </Link>
          ))}
        </div>
      </div>
      <div className="col-span-2">
        {user ? (
          <Link href={"/login"} onClick={userLogout}>
            Logout
          </Link>
        ) : (
          <Link href={"/login"}>Login</Link>
        )}
      </div>
    </nav>
  );
}
