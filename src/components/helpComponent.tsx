"use client";

import { User, HelpCircle, MessageCircle } from "lucide-react";

interface HelpItem {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

const helpItems: HelpItem[] = [
  {
    id: 1,
    icon: <User size={24} />,
    title: "HOW TO SHOP",
    description: "Your guide to shopping and placing orders",
    link: "/help/how-to-shop",
  },
  {
    id: 2,
    icon: <HelpCircle size={24} />,
    title: "FAQS",
    description: "Your questions answered",
    link: "/help/faqs",
  },
  {
    id: 3,
    icon: <MessageCircle size={24} />,
    title: "NEED HELP?",
    description: "Contact our global Customer Service team",
    link: "/help/contact",
  },
];

const HelpComponent = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="mx-auto">
        {/* Grid of help items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {helpItems.map((item) => (
            <div
              key={item.id}
              className="border border-gray-300 rounded-lg p-4 cursor-pointer hover:border-gray-400"
            >
              <a href={item.link} className="block">
                {/* Icon */}
                <div className="text-black mb-2">{item.icon}</div>

                {/* Title */}
                <h3 className="text-lg  text-black mb-2 tracking-wide">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HelpComponent;
