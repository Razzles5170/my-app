"use client";
import React, { useState } from "react";
import Link from "next/link";
import SparklesButton from "@/components/magicui/sparkles-text"; 


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-100 text-black py-4 px-6 md:px-10 fixed w-full shadow-lg z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo or Brand Name (if you have one) */}
        <Link href="/">
            <img src="/PIE.png" alt="Logo" className="h-9 w-auto" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link href="/about" className="hover:text-black transition-transform duration-300 ease-in-out transform hover:scale-105 text-lg">
            About
          </Link>
          <Link href="/get-involved" className="hover:text-black transition-transform duration-300 ease-in-out transform hover:scale-105 text-lg">
            Get Involved
          </Link>
          <Link href="/community" className="hover:text-black transition-transform duration-300 ease-in-out transform hover:scale-105 text-lg">
            Community
          </Link>
          <Link href="/session-resources" className="hover:text-black transition-transform duration-300 ease-in-out transform hover:scale-105 text-lg">
            Resources
          </Link>
          <Link href="/help" className="hover:text-black transition-transform duration-300 ease-in-out transform hover:scale-105 text-lg">
            Help
          </Link>

          <Link href="/join">
            <SparklesButton
              text="Join Now"
              className="ml-2 px-4 py-2 bg-gray-100 text-black font-semibold hover:bg-gray-200 transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-black" onClick={toggleMenu}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            ></path>
          </svg>
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-gray-100 shadow-lg">
            <div className="flex flex-col items-center py-4">
              <Link href="/about" className="py-2 text-lg hover:text-black transition-transform duration-300 ease-in-out transform hover:scale-105 w-full text-center">
                About
              </Link>
              <Link href="/get-involved" className="py-2 text-lg hover:text-black transition-transform duration-300 ease-in-out transform hover:scale-105 w-full text-center">
                Get Involved
              </Link>
              <Link href="/community" className="py-2 text-lg hover:text-black transition-transform duration-300 ease-in-out transform hover:scale-105 w-full text-center">
                Community
              </Link>
              <Link href="/session-resources" className="py-2 text-lg hover:text-black transition-transform duration-300 ease-in-out transform hover:scale-105 w-full text-center">
                Resources
              </Link>
              <Link href="/help" className="py-2 text-lg hover:text-black transition-transform duration-300 ease-in-out transform hover:scale-105 w-full text-center">
                Help
              </Link>
              <Link href="/join">
                <SparklesButton
                  text="Join Now"
                  className="mt-4 px-4 py-2 bg-gray-100 text-black font-semibold hover:bg-gray-200 transition-transform duration-300 ease-in-out transform hover:scale-105"
                />
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
