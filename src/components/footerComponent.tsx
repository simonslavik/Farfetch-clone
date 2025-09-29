"use client";

import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";
import { FaPinterest, FaSnapchat } from "react-icons/fa";

interface FooterSection {
  title: string;
  links: { text: string; href: string }[];
}

const footerSections: FooterSection[] = [
  {
    title: "Customer Service",
    links: [
      { text: "Contact us", href: "/contact" },
      { text: "FAQs", href: "/faqs" },
      { text: "Orders and delivery", href: "/orders-delivery" },
      { text: "Returns and refunds", href: "/returns-refunds" },
      { text: "Payment and pricing", href: "/payment-pricing" },
      { text: "Cryptocurrency payments", href: "/crypto-payments" },
      { text: "Promotion terms and conditions", href: "/promotion-terms" },
      { text: "FARFETCH Customer Promise", href: "/customer-promise" },
    ],
  },
  {
    title: "About FARFETCH",
    links: [
      { text: "About us", href: "/about" },
      { text: "FARFETCH partner boutiques", href: "/partner-boutiques" },
      { text: "Careers", href: "/careers" },
      { text: "FARFETCH app", href: "/app" },
      { text: "Modern slavery statement", href: "/modern-slavery" },
      { text: "FARFETCH Advertising", href: "/advertising" },
    ],
  },
  {
    title: "Discounts and membership",
    links: [
      { text: "Affiliate program", href: "/affiliate" },
      { text: "Refer a friend", href: "/refer-friend" },
      { text: "FARFETCH membership", href: "/membership" },
      { text: "Student discount UNiDAYS", href: "/student-discount-unidays" },
      { text: "Student Beans and Graduates", href: "/student-beans" },
      { text: "Student and Youth discount", href: "/student-youth-discount" },
      { text: "Donate and save", href: "/donate-save" },
    ],
  },
  {
    title: "FARFETCH Sustainable Services",
    links: [
      { text: "Second Life: sell your designer bags", href: "/second-life" },
    ],
  },
];

const socialLinks = [
  {
    icon: <Instagram size={20} />,
    href: "https://instagram.com/farfetch",
    label: "Instagram",
  },
  {
    icon: <Facebook size={20} />,
    href: "https://facebook.com/farfetch",
    label: "Facebook",
  },
  {
    icon: <FaPinterest size={20} />,
    href: "https://pinterest.com/farfetch",
    label: "Pinterest",
  },
  {
    icon: <Twitter size={20} />,
    href: "https://twitter.com/farfetch",
    label: "Twitter",
  },
  {
    icon: <FaSnapchat size={20} />,
    href: "https://snapchat.com/add/farfetch",
    label: "Snapchat",
  },
  {
    icon: <Youtube size={20} />,
    href: "https://youtube.com/farfetch",
    label: "YouTube",
  },
];

const legalLinks = [
  { text: "Privacy policy", href: "/privacy-policy" },
  { text: "Terms and conditions", href: "/terms-conditions" },
  { text: "Accessibility", href: "/accessibility" },
  {
    text: "Protection of Intellectual Property",
    href: "/intellectual-property",
  },
  { text: "Cookie settings", href: "/cookie-settings" },
];

const FooterComponent = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 pt-6 w-full m-0">
      {/* Main Footer Content */}
      <div className="w-full">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-20 px-4 md:px-8 lg:px-16 max-w-none">
          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-black font-medium mb-6 text-sm tracking-wide">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-600 text-sm hover:text-black transition-colors duration-200"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Media Section */}
        <div className="my-12 pt-8 border-t border-gray-300 w-full px-4 md:px-8 lg:px-16">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="mb-6 lg:mb-0">
              <h3 className="text-black font-medium mb-4 text-sm tracking-wide">
                Follow us
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-black transition-colors duration-200"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal Section */}
      <div className="border-t border-gray-300 bg-gray-50 w-full">
        <div className="w-full px-4 md:px-8 lg:px-16 py-6">
          {/* Legal Links */}
          <div className="flex flex-wrap gap-6 mb-4">
            {legalLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-600 text-xs hover:text-black transition-colors duration-200 underline"
              >
                {link.text}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-xs text-gray-600 leading-relaxed">
            <p className="mb-2">
              'FARFETCH' and the 'FARFETCH' logo are trade marks of FARFETCH UK
              Limited and are registered in numerous jurisdictions around the
              world.
            </p>
            <p>© Copyright 2025 FARFETCH UK Limited. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
