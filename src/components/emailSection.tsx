"use client";

import { useState } from "react";

const EmailSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Email submitted:", email);
      setEmail("");
      setIsSubmitting(false);
      // You can add success notification here
    }, 1000);
  };

  return (
    <section className="w-full py-8 ">
      <div className=" ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Section - Title and Description */}
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl text-black mb-6">
              Never miss a thing
            </h2>
            <p className="text-gray-700 text-base leading-relaxed">
              Sign up for promotions, tailored new arrivals, stock updates and
              more – straight to your inbox
            </p>
          </div>

          {/* Right Section - Email Signup Form */}
          <div className="flex flex-col justify-center">
            <div className="mb-6">
              <h3 className="text-sm text-black mb-4 tracking-wide">
                GET UPDATES BY
              </h3>
              <p className="text-sm text-gray-600 mb-6">Email</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-sm"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || !email}
                  className="bg-black text-white px-8 py-3 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Signing Up..." : "Sign Up"}
                </button>
              </form>
            </div>

            {/* Privacy Policy Text */}
            <div className="text-xs text-gray-600 leading-relaxed">
              <p>
                By signing up, you consent to receiving marketing by email
                and/or SMS and acknowledge you have read our{" "}
                <a
                  href="/privacy-policy"
                  className="text-black underline hover:no-underline"
                >
                  Privacy Policy
                </a>
                . Unsubscribe anytime at the bottom of our emails or by replying
                STOP to any of our SMS.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
