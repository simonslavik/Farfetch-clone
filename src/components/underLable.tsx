import React, { useState } from "react";

type Label = {
  labelName: string;
  href: string;
  categories: string[];
  categoryItems: [string, string][][];
  color: string;
  image?: string;
};

interface UnderLabelProps {
  label: Label;
}

const UnderLabel: React.FC<UnderLabelProps> = ({ label }) => {
  return (
    <div className="flex flex-row gap-8 p-6 pl-13 bg-white text-black border border-gray-200 justify-between ">
      <div className="grid grid-cols-1 sm:grid-cols-2  gap-6 flex-grow">
        {label.categories.map((category: string, index: number) => (
          <div key={index} className="min-w-[150px]">
            <h4 className="font-semibold text-lg mb-2 text-gray-800">
              {category}
            </h4>
            <ul className="space-y-1">
              {label.categoryItems[index].map(
                (item: [string, string], itemIndex: number) => (
                  <li key={itemIndex}>
                    <a
                      href={item[1]}
                      className="text-gray-600 hover:text-black cursor-pointer transition-colors"
                    >
                      {item[0]}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        ))}
      </div>
      {label.image && (
        <div className="w-90 h-90 items-center justify-center hidden sm:flex">
          <img
            src={label.image}
            alt={label.labelName}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      )}
    </div>
  );
};

export default UnderLabel;
