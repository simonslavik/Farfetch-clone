"use client";

import { FaSearch } from "react-icons/fa";
import { League_Spartan } from "next/font/google";
import { useState, useEffect } from "react";
import UnderLabel from "./underLable";
import { useAppContext } from "../utils/index";
import { motion } from "framer-motion";
import UnderLabelSearch from "./underLabelSearch";

const itemsOptions: Array<{
  labelName: string;
  href: string;
  categories: string[];
  categoryItems: [string, string][][];
  color: string;
  image?: string;
}> = [
  {
    labelName: "New In",
    href: "/new-in",
    categories: ["WHAT'S NEW", "TRENDING NOW"],
    categoryItems: [
      [
        ["New in today", "/category"],
        ["New clothing", "/new-clothing"],
        ["New shoes", "/new-shoes"],
        ["New bags & accessories", "/new-accessories"],
      ],
      [
        ["Relaxed tailoring", "/relaxed-tailoring"],
        ["Chunky boots", "/chunky-boots"],
        ["Logo mania", "/logo-mania"],
        ["Neon", "/neon"],
      ],
    ],
    color: "black",
    image: "/welcome-page-image-mw.png",
  },
  {
    labelName: "Brands",
    href: "/brands",
    categories: ["FEATURED BRANDS", "ALL BRANDS"],
    categoryItems: [
      [
        ["Gucci", "/brands/gucci"],
        ["Prada", "/brands/prada"],
        ["Balenciaga", "/brands/balenciaga"],
        ["Saint Laurent", "/brands/saint-laurent"],
      ],
      [["A-Z Brands", "/brands/all"]],
    ],
    color: "black",
    image: "/Screenshot-2023-12-21-at-8.webp",
  },
  {
    labelName: "Clothing",
    href: "/clothing",
    categories: ["CLOTHING", "FEATURED"],
    categoryItems: [
      [
        ["T-Shirts", "/clothing/t-shirts"],
        ["Shirts", "/clothing/shirts"],
        ["Jackets", "/clothing/jackets"],
        ["Jeans", "/clothing/jeans"],
        ["Trousers", "/clothing/trousers"],
        ["Shorts", "/clothing/shorts"],
      ],
      [
        ["Essentials", "/clothing/essentials"],
        ["New Arrivals", "/clothing/new"],
        ["Designer Denim", "/clothing/designer-denim"],
      ],
    ],
    color: "black",
    image: "/welcome-page-image-ww.png",
  },
  {
    labelName: "Shoes",
    href: "/shoes",
    categories: ["SHOES", "FEATURED"],
    categoryItems: [
      [
        ["Sneakers", "/shoes/sneakers"],
        ["Boots", "/shoes/boots"],
        ["Loafers", "/shoes/loafers"],
        ["Sandals", "/shoes/sandals"],
        ["Formal Shoes", "/shoes/formal"],
      ],
      [
        ["New Arrivals", "/shoes/new"],
        ["Exclusive Styles", "/shoes/exclusive"],
      ],
    ],
    color: "black",
  },
  {
    labelName: "Bags",
    href: "/bags",
    categories: ["BAGS", "FEATURED"],
    categoryItems: [
      [
        ["Tote Bags", "/bags/tote"],
        ["Backpacks", "/bags/backpacks"],
        ["Crossbody Bags", "/bags/crossbody"],
        ["Clutches", "/bags/clutches"],
      ],
      [
        ["New Arrivals", "/bags/new"],
        ["Mini Bags", "/bags/mini"],
      ],
    ],
    color: "black",
  },
  {
    labelName: "Accessories",
    href: "/accessories",
    categories: ["ACCESSORIES", "FEATURED"],
    categoryItems: [
      [
        ["Belts", "/accessories/belts"],
        ["Hats", "/accessories/hats"],
        ["Sunglasses", "/accessories/sunglasses"],
        ["Wallets", "/accessories/wallets"],
        ["Scarves", "/accessories/scarves"],
      ],
      [
        ["New Arrivals", "/accessories/new"],
        ["Statement Pieces", "/accessories/statement"],
      ],
    ],
    color: "black",
  },
  {
    labelName: "Watches",
    href: "/watches",
    categories: ["WATCHES", "FEATURED"],
    categoryItems: [
      [
        ["Luxury Watches", "/watches/luxury"],
        ["Smart Watches", "/watches/smart"],
        ["Classic Watches", "/watches/classic"],
      ],
      [
        ["New Arrivals", "/watches/new"],
        ["Limited Editions", "/watches/limited"],
      ],
    ],
    color: "black",
  },
  {
    labelName: "Homeware",
    href: "/homeware",
    categories: ["HOMEWARE", "FEATURED"],
    categoryItems: [
      [
        ["Decor", "/homeware/decor"],
        ["Kitchenware", "/homeware/kitchen"],
        ["Bedding", "/homeware/bedding"],
        ["Candles", "/homeware/candles"],
      ],
      [
        ["New Arrivals", "/homeware/new"],
        ["Designer Home", "/homeware/designer"],
      ],
    ],
    color: "black",
  },
  {
    labelName: "Sale",
    href: "/sale",
    categories: ["SALE", "TOP PICKS"],
    categoryItems: [
      [
        ["Clothing Sale", "/clothing-sale"],
        ["Shoes Sale", "/shoes-sale"],
        ["Bags Sale", "/bags-sale"],
        ["Accessories Sale", "/accessories-sale"],
      ],
      [
        ["Best Deals", "/best-deals"],
        ["Last Chance", "/last-chance"],
      ],
    ],
    color: "red",
  },
];

const categories = [
  {
    label: "WOMENSWEAR",
    href: "/womenswear",
  },
  {
    label: "MENSWEAR",
    href: "/menswear",
  },
  {
    label: "KIDS",
    href: "/kids",
  },
];

const leagueSpartan = League_Spartan({
  weight: "700",
  subsets: ["latin"],
});

const BelowNavbar = () => {
  const { searchActive, setSearchActive } = useAppContext();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Prevent hydration mismatch by showing a consistent state during SSR
  if (!isClient) {
    return (
      <div className="w-full h-12 bg-white text-black flex items-center justify-between">
        {/* Default state during SSR - no search active */}
        <motion.div
          className="pl-2 sm:pl-10 flex items-center relative overflow-x-auto sm:overflow-x-visible scrollbar-hide scroll-smooth"
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
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
              </li>
            ))}
          </ul>
        </motion.div>
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
  }

  return (
    <div className="w-full h-12 bg-white text-black flex items-center justify-between">
      {!searchActive ? (
        <>
          {/* Items List with slide-up animation */}
          <motion.div
            className="pl-2 sm:pl-10 flex items-center relative overflow-x-auto sm:overflow-x-visible scrollbar-hide scroll-smooth"
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
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
          </motion.div>
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
        <div className="w-full flex items-center justify-between pl-13 pr-13">
          {/* Category Links with slide-down animation */}
          <motion.div className="flex justify-center gap-8 pb-2">
            {categories.map((category) => (
              <div key={category.href} className="flex items-center">
                <a className="text-sm hover:text-gray-400 cursor-pointer">
                  {category.label}
                </a>
                <div className="absolute  bg-white top-33 left-0 w-screen z-20 p-0 m-0">
                  <div className="p-10">
                    <div className="pl-3 text-gray-500">
                      <h1>Trending</h1>
                    </div>
                    <UnderLabelSearch />
                  </div>
                </div>
              </div>
            ))}
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
        </div>
      )}
    </div>
  );
};

export default BelowNavbar;
