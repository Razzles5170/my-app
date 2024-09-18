"use client";
import React, { useState } from "react";
import Link from "next/link";
import AnimatedGradientText from "@/components/magicui/animated-gradient-text";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black text-white py-4 px-6 md:px-10 fixed w-full shadow-lg z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <img
            src="/PIE.png"
            alt="Logo"
            className="h-12 w-auto transition-transform duration-300 ease-in-out hover:scale-110 hover:opacity-90 hover:shadow-lg hover:filter hover:brightness-125"
          />
        </Link>

        {/* Centered Menu */}
        <div className="hidden md:flex space-x-8 items-center mx-auto">
          {["About", "Get Involved", "Community", "Resources", "Help"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase().replace(" ", "-")}`}
              className="text-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:text-gray-300"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* "Join Now" Button */}
        <Link href="/join">
          <div className="relative">
            <AnimatedGradientText
              className="text-lg font-semibold bg-gradient-to-r from-[#ffffff] to-[#cccccc] bg-clip-text text-transparent animate-gradient py-2 px-4 rounded-full transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
            >
              Join Now
            </AnimatedGradientText>
          </div>
        </Link>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={toggleMenu}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-black shadow-lg">
            <div className="flex flex-col items-center py-4">
              {["About", "Get Involved", "Community", "Resources", "Help"].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase().replace(" ", "-")}`}
                  className="py-2 text-lg hover:text-gray-300 transition-transform duration-300 ease-in-out w-full text-center"
                >
                  {item}
                </Link>
              ))}
              <Link href="/join">
                <AnimatedGradientText
                  className="text-lg font-semibold bg-gradient-to-r from-[#ffffff] to-[#cccccc] bg-clip-text text-transparent animate-gradient py-2 px-4 rounded-full transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
                >
                  Join Now
                </AnimatedGradientText>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
