"use client";

import { FaSearch } from "react-icons/fa";
import { League_Spartan } from "next/font/google";
import { useState } from "react";
import UnderLabel from "./underLable";
import { useAppContext } from "../utils/index";
import { motion } from "framer-motion";

const itemsOptions = [
  {
    labelName: "New In",
    href: "/new-in",
    categories: ["WHAT'S NEW", "TRENDING NOW"],
    categoryItems: [
      ["New in today", "New clothing", "New shoes", "New bags & accessories"],
      ["Relaxed tailoring", "Chunky boots", "Logo mania", "Neon"],
    ],
    color: "black",
    image: "/welcome-page-image-mw.png",
  },
  {
    labelName: "Brands",
    href: "/brands",
    categories: ["FEATURED BRANDS", "ALL BRANDS"],
    categoryItems: [
      ["Gucci", "Prada", "Balenciaga", "Saint Laurent"],
      ["A-Z Brands"],
    ],
    color: "black",
    image: "/Screenshot-2023-12-21-at-8.webp",
  },
  {
    labelName: "Clothing",
    href: "/clothing",
    categories: ["CLOTHING", "FEATURED"],
    categoryItems: [
      ["T-Shirts", "Shirts", "Jackets", "Jeans", "Trousers", "Shorts"],
      ["Essentials", "New Arrivals", "Designer Denim"],
    ],
    color: "black",
    image: "/welcome-page-image-ww.png",
  },
  {
    labelName: "Shoes",
    href: "/shoes",
    categories: ["SHOES", "FEATURED"],
    categoryItems: [
      ["Sneakers", "Boots", "Loafers", "Sandals", "Formal Shoes"],
      ["New Arrivals", "Exclusive Styles"],
    ],
    color: "black",
  },
  {
    labelName: "Bags",
    href: "/bags",
    categories: ["BAGS", "FEATURED"],
    categoryItems: [
      ["Tote Bags", "Backpacks", "Crossbody Bags", "Clutches"],
      ["New Arrivals", "Mini Bags"],
    ],
    color: "black",
  },
  {
    labelName: "Accessories",
    href: "/accessories",
    categories: ["ACCESSORIES", "FEATURED"],
    categoryItems: [
      ["Belts", "Hats", "Sunglasses", "Wallets", "Scarves"],
      ["New Arrivals", "Statement Pieces"],
    ],
    color: "black",
  },
  {
    labelName: "Watches",
    href: "/watches",
    categories: ["WATCHES", "FEATURED"],
    categoryItems: [
      ["Luxury Watches", "Smart Watches", "Classic Watches"],
      ["New Arrivals", "Limited Editions"],
    ],
    color: "black",
  },
  {
    labelName: "Homeware",
    href: "/homeware",
    categories: ["HOMEWARE", "FEATURED"],
    categoryItems: [
      ["Decor", "Kitchenware", "Bedding", "Candles"],
      ["New Arrivals", "Designer Home"],
    ],
    color: "black",
  },
  {
    labelName: "Sale",
    href: "/sale",
    categories: ["SALE", "TOP PICKS"],
    categoryItems: [
      ["Clothing Sale", "Shoes Sale", "Bags Sale", "Accessories Sale"],
      ["Best Deals", "Last Chance"],
    ],
    color: "red",
  },
];

const leagueSpartan = League_Spartan({
  weight: "700",
  subsets: ["latin"],
});

const BelowNavbar = () => {
  const { searchActive, setSearchActive } = useAppContext();

  return (
    <div className="w-full h-12 bg-white text-black flex items-center justify-between">
      {!searchActive ? (
        <>
          {/* Items List */}
          <div className="pl-2 sm:pl-10 flex items-center relative overflow-x-auto sm:overflow-x-visible scrollbar-hide scroll-smooth">
            <ul
              id="below-navbar-list"
              className="flex gap-1 sm:gap-0 "
              style={{ scrollBehavior: "smooth" }}
            >
              {itemsOptions.map((option) => (
                <li
                  key={option.href}
                  className="inline-block p-3 flex-shrink-0 relative group"
                >
                  <a
                    href={option.href}
                    className={`text-sm hover:text-gray-500 ${
                      option.color === "red" ? "text-red-500" : "text-black"
                    }`}
                  >
                    {option.labelName}
                  </a>
                  {/* UnderLabel shown on hover */}
                  <div
                    className="fixed hidden group-hover:block top-35 left-0 w-screen z-20 p-0 m-0"
                    tabIndex={-1}
                    onFocus={(e) => {
                      e.currentTarget.scrollIntoView({
                        behavior: "smooth",
                        block: "nearest",
                      });
                    }}
                  >
                    <UnderLabel label={option} />
                  </div>
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
                onFocus={() =>
                  setSearchActive(searchActive === "true" ? null : "true")
                }
              />
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
                <FaSearch />
              </span>
            </div>
          </div>
        </>
      ) : (
        <motion.div
          className="w-full flex items-center justify-between pl-13 pr-13"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
        >
          {/* Category Links with slide-down animation */}
          <motion.div
            className="flex justify-center gap-8 pb-2"
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <a href="/womenswear" className="text-sm hover:underline">
              WOMENSWEAR
            </a>
            <a href="/menswear" className="text-sm hover:underline">
              MENSWEAR
            </a>
            <a href="/kids" className="text-sm hover:underline">
              KIDS
            </a>
          </motion.div>
          {/* Search Bar with slide-in from left animation */}
          <motion.div
            className="flex justify-center w-full max-w-lg"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              delay: 0.1,
            }}
          >
            <div className="relative w-full max-w-md">
              <input
                autoFocus
                type="text"
                placeholder="What are you looking for?"
                className="
              py-2
              pl-10
              pr-10
              text-sm
              border-b-2
              border-black
              focus:outline-none
              focus:border-black
              w-full
            "
                onBlur={() => setSearchActive(null)}
              />
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
                <FaSearch />
              </span>
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-black focus:outline-none"
                onClick={() => setSearchActive(null)}
                tabIndex={-1}
                aria-label="Close search"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default BelowNavbar;
