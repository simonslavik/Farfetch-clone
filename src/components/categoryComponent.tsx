"use client";

import { useState } from "react";
import { ChevronDown, Filter } from "lucide-react";
import ProductCard from "./productCard";

interface CategoryComponentProps {
  categoryTitle?: string;
  products?: {
    id: number;
    brand: string;
    season: string;
    name: string;
    price: string;
    image: string;
    imageSecondary: string;
  }[];
}

const filterOptions = [
  "All Filters",
  "Clothing",
  "Shoes",
  "Bags",
  "Accessories",
  "Jewelry",
  "Lingerie & Nightwear",
  "Activewear",
  "Homeware",
];

const sortOptions = [
  "Newest",
  "Price: Low to High",
  "Price: High to Low",
  "Popular",
  "Brand A-Z",
];

const CategoryComponent = ({
  categoryTitle = "Women Home",
  products = [],
}: CategoryComponentProps) => {
  const [activeTab, setActiveTab] = useState("Shop Women");
  const [activeFilter, setActiveFilter] = useState("All Filters");
  const [sortBy, setSortBy] = useState("Newest");
  const [showSortDropdown, setShowSortDropdown] = useState(false);

  return (
    <div className="w-full max-w-7xl mx-auto py-16">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-4">
        <span className="hover:text-black cursor-pointer">Women</span>
        <span className="mx-2">Home</span>
      </div>

      {/* Page Title */}
      <h1 className="text-4xl md:text-5xl font-light text-black mb-12">
        {categoryTitle}
      </h1>

      {/* Shop Tabs */}
      <div className="flex gap-8 mb-8 border-b border-gray-200">
        {["Shop Women", "Shop Men"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-4 text-sm font-medium transition-colors duration-200 ${
              activeTab === tab
                ? "text-black border-b-2 border-black"
                : "text-gray-500 hover:text-black"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Filters and Sort */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3">
          {filterOptions.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 text-sm border rounded-full transition-all duration-200 flex items-center gap-2 ${
                activeFilter === filter
                  ? "bg-black text-white border-black"
                  : "bg-white text-black border-gray-300 hover:border-gray-400"
              }`}
            >
              {filter === "All Filters" && <Filter size={16} />}
              {filter}
            </button>
          ))}
        </div>

        {/* Sort Dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowSortDropdown(!showSortDropdown)}
            className="flex items-center gap-2 px-4 py-2 text-sm border border-gray-300 rounded-md hover:border-gray-400 transition-colors duration-200"
          >
            <span>Sort by</span>
            <ChevronDown
              size={16}
              className={`transition-transform duration-200 ${
                showSortDropdown ? "rotate-180" : ""
              }`}
            />
          </button>

          {showSortDropdown && (
            <div className="absolute right-0 top-full mt-2 bg-white border border-gray-200 rounded-md shadow-lg z-10 min-w-[200px]">
              {sortOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => {
                    setSortBy(option);
                    setShowSortDropdown(false);
                  }}
                  className={`w-full text-left px-4 py-3 text-sm hover:bg-gray-50 transition-colors duration-200 ${
                    sortBy === option ? "font-medium" : ""
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Products Grid */}
      {products.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-gray-500">
            No products found for the selected filters.
          </p>
        </div>
      )}
    </div>
  );
};

export default CategoryComponent;
