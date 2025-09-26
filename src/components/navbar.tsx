"use client";

import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { League_Spartan } from "next/font/google";
import { useState } from "react";

const menuOptions = [
  { label: "Women", href: "/women" },
  { label: "Men", href: "/men" },
  { label: "Kids", href: "/kids" },
  { label: "Home", href: "/home" },
];

const leagueSpartan = League_Spartan({
  weight: "700",
  subsets: ["latin"],
});

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="w-full h-16 text-white flex items-center justify-between absolute top-0 pl-10 pr-10 pt-13 pb-13">
      <div className="relative">
        <ul className="flex sm:flex-row sm:static bg-white sm:bg-transparent left-0 top-10 sm:top-0 w-full sm:w-auto z-10">
          {/* Mobile Dropdown */}
          <li className="sm:hidden mr-5">
            <button
              type="button"
              className="flex text-black text-sm hover:text-gray hover:bg-gray-100 transition-all duration-200  rounded-md"
              onClick={() => setShowDropdown((prev) => !prev)}
            >
              {menuOptions[selectedIndex].label}
              <span className="ml-2">{showDropdown ? "▲" : "▼"}</span>
            </button>
            {showDropdown && (
              <ul className="absolute left-0 top-full bg-white shadow-md rounded-md w-full">
                {menuOptions.map((option, idx) => (
                  <li key={option.href}>
                    <button
                      className={`block text-left w-full text-black text-sm hover:text-gray hover:bg-gray-100 transition-all duration-200 px-3 py-2 rounded-md ${
                        idx === selectedIndex ? "font-bold" : ""
                      }`}
                      onClick={() => {
                        setSelectedIndex(idx);
                        setShowDropdown(false);
                        window.location.href = option.href;
                      }}
                    >
                      {option.label}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </li>
          {/* Desktop Menu */}
          {menuOptions.map((option, idx) => (
            <li key={option.href} className="hidden sm:block">
              <a
                href={option.href}
                className="text-black text-sm hover:text-gray hover:bg-gray-100 transition-all duration-200 px-3 py-2 rounded-md"
              >
                {option.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <h1
        className={`${leagueSpartan.className} text-2xl sm:text-3xl md:text-4xl uppercase tracking-[.09em] text-black`}
      >
        <a href="/" className="">
          FARFETCH
        </a>
      </h1>
      <div className="flex">
        <div className="text-black hover:text-gray hover:bg-gray-100 cursor-pointer transition-all duration-200 p-3 rounded-md">
          <FaGlobe size={20} />
        </div>
        <div className="text-black hover:text-gray hover:bg-gray-100 cursor-pointer transition-all duration-200 p-3 rounded-md">
          <FaUser size={20} />
        </div>
        <div className="text-black hover:text-gray hover:bg-gray-100 cursor-pointer transition-all duration-200 p-3 rounded-md">
          <FaHeart size={20} />
        </div>
        <div className="text-black hover:text-gray hover:bg-gray-100 cursor-pointer transition-all duration-200 p-3 rounded-md">
          <FaShoppingCart size={20} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
