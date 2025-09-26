"use client";

import { FaSearch } from "react-icons/fa";
import { League_Spartan } from "next/font/google";
import { useState } from "react";

const itemsOptions = [
  { label: "New In", href: "/newin", color: "black" },
  { label: "Brands", href: "/brands", color: "black" },
  { label: "Clothing", href: "/clothing", color: "black" },
  { label: "Shoes", href: "/shoes", color: "black" },
  { label: "Bags", href: "/bags", color: "black" },
  { label: "Accessories", href: "/accessories", color: "black" },
  { label: "Watches", href: "/watches", color: "black" },
  { label: "Homeware", href: "/homeware", color: "black" },
  { label: "Sale", href: "/sale", color: "red" },
];

const leagueSpartan = League_Spartan({
  weight: "700",
  subsets: ["latin"],
});

const BelowNavbar = () => {
  return (
    <div className="w-full h-12 bg-white text-black flex items-center justify-between ">
      {/* Items List */}
      <div className="pl-2 sm:pl-10 flex items-center relative overflow-x-auto scrollbar-hide scroll-smooth">
        <ul
          id="below-navbar-list"
          className="flex gap-1 sm:gap-0 whitespace-nowrap"
          style={{ scrollBehavior: "smooth" }}
        >
          {itemsOptions.map((option) => (
            <li key={option.href} className="inline-block p-3 flex-shrink-0">
              <a
                href={option.href}
                className={`text-sm hover:text-gray-500 ${
                  option.color === "red" ? "text-red-500" : "text-black"
                }`}
              >
                {option.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* Search Bar */}
      <div>
        <div className="relative pr-10">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="
                py-2
                pl-10
                pr-4
                text-sm
                border-b-2
                border-black
                focus:outline-none
                focus:border-black
                "
          />
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
            <FaSearch />
          </span>
        </div>
      </div>
    </div>
  );
};

export default BelowNavbar;
