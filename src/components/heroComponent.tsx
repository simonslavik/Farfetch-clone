import React from "react";

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center md:items-stretch pt-20 w-full">
      {/* Left Column */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center px-8 py-12">
        <h1 className="text-4xl md:text-4xl font-medium mb-6">
          The utility uniform
        </h1>
        <p className="text-gray-700 mb-6 max-w-md mx-auto">
          You work hard, these pieces work harder — shop denim shirts, plaid
          separates and more
        </p>
        <button className="px-6 py-2 border border-black rounded hover:bg-black hover:text-white transition">
          Shop Now
        </button>
      </div>

      {/* Right Column */}
      <div className="w-full md:w-1/2">
        <img
          src="/heroComponent/hero1.jpeg"
          alt="Model wearing utility uniform"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default HeroSection;
