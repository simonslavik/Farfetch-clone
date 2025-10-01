"use client";

import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import { League_Spartan } from "next/font/google";
import { useState, useEffect } from "react";
import BelowNavbar from "./belowNavBar";
import { useAppContext } from "../utils/index";
import { motion } from "framer-motion";
import EventComponent from "./eventComponent";

const menuOptions = [
  { label: "Womenswear", href: "/women", id: "womenswear" },
  { label: "Menswear", href: "/men", id: "menswear" },
  { label: "Kidswear", href: "/kids", id: "kidswear" },
];

const leagueSpartan = League_Spartan({
  weight: "700",
  subsets: ["latin"],
});

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const { searchActive, setSearchActive, typeWear, setTypeWear } =
    useAppContext();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`w-full fixed left-0 z-50 bg-white transition-all duration-200 top-0`}
    >
      {searchActive ? (
        <div className="absolute top-0 left-0 w-full bg-white  z-50">
          {/* Logo */}
          <div className="flex justify-center items-center pt-8 pl-8">
            <h1
              className={`${leagueSpartan.className} text-2xl sm:text-3xl md:text-4xl uppercase tracking-[.09em] text-black`}
            >
              <a href="/" className="">
                FARFETCH
              </a>
            </h1>
          </div>
          {/* BelowNavbar as dropdown */}
          <div className="w-full mt-4">
            <BelowNavbar />
          </div>
        </div>
      ) : (
        <>
          <div className="w-full h-10 text-white flex items-center justify-between pl-10 pr-10 pt-13 pb-10">
            <div className="relative">
              <ul className="flex sm:flex-row sm:static bg-white sm:bg-transparent left-0 top-10 sm:top-0 w-full sm:w-auto z-10">
                {/* Smaller screen Dropdown */}
                <li className="sm:hidden mr-4 ">
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
                      {menuOptions.map((option, idx) => {
                        return (
                          <li key={option.href}>
                            <button
                              className={`block text-left w-full text-black text-sm hover:text-gray hover:bg-gray-100 transition-all duration-200 px-3 py-2 rounded-md ${
                                option.id === typeWear ? "font-bold" : ""
                              }`}
                              onClick={() => {
                                setSelectedIndex(idx);
                                setShowDropdown(false);
                                // Set the typeWear based on selection
                                setTypeWear(option.id);
                                window.location.href = option.href;
                              }}
                            >
                              {option.label}
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
                {/* Full screen Menu */}
                {menuOptions.map((option, idx) => {
                  return (
                    <li key={option.href} className="hidden sm:block">
                      <a
                        href={option.href}
                        className={`text-black text-sm hover:text-gray hover:bg-gray-100 transition-all duration-200 px-3 py-2 rounded-md ${
                          option.id === typeWear ? "font-bold" : ""
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          setTypeWear(option.id);
                          window.location.href = option.href;
                        }}
                      >
                        {option.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            {/* Logo*/}
            <h1
              className={`${leagueSpartan.className} text-2xl sm:text-3xl md:text-4xl uppercase tracking-[.09em] text-black`}
            >
              <a href="/" className="">
                FARFETCH
              </a>
            </h1>
            {/* Icons */}
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
          {/* Categories and Clothing Search Bar */}
          <BelowNavbar />
        </>
      )}
    </div>
  );
};

export default Navbar;
