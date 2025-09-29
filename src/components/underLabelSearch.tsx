import React, { useState } from "react";
import { useAppContext } from "../utils/index";

type Category = {
  labelName: string;
  href: string;
  categories: string[];
  categoryItems: string[][];
  color: string;
  image?: string;
};

interface UnderLabelProps {
  label: Category;
}

const Category = [
  { name: "Women", href: "/women", pictures: ["", "women2.jpg"] },
  { name: "Men", href: "/men", pictures: ["men1.jpg", "men2.jpg"] },
  { name: "Kids", href: "/kids", pictures: ["kids1.jpg", "kids2.jpg"] },
  { name: "Home", href: "/home", pictures: ["home1.jpg", "home2.jpg"] },
];

const womensItems = [
  { name: "Dresses", image: "/womens/women1.webp" },
  { name: "Shoes", image: "/womens/women2.webp" },
  { name: "Bags", image: "/womens/women3.webp" },
  { name: "Accessories", image: "/womens/women4.webp" },
  { name: "Tops", image: "/womens/women5.webp" },
  { name: "Jeans", image: "/womens/women6.webp" },
  { name: "Skirts", image: "/womens/women7.webp" },

  { name: "Jumpsuits", image: "/womens/women8.webp" },
  { name: "Coats", image: "/womens/women9.webp" },
  { name: "Lingerie", image: "/womens/women10.webp" },
  { name: "Sunglasses", image: "/womens/women11.webp" },
  { name: "Hats", image: "/womens/women12.webp" },
];
const UnderLabelSearch: React.FC = () => {
  // Example items under Women's category

  return (
    <div className="overflow-x-auto px-8 ">
      <div className="flex gap-6">
        {womensItems.map((item) => (
          <div key={item.name} className="flex-shrink-0 text-center">
            <img
              src={item.image}
              alt={item.name}
              className="w-48 h-48 object-contain mx-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UnderLabelSearch;
