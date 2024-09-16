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
    <nav className="bg-blue-600 text-white py-6 px-10 fixed w-full shadow-lg z-50">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div className="hidden md:flex space-x-8 items-center">
          <Link href="/about" className="hover:text-teal-300 text-lg">
            About
          </Link>
          <Link href="/get-involved" className="hover:text-teal-300 text-lg">
            Get Involved
          </Link>
          <Link href="/community" className="hover:text-teal-300 text-lg">
            Community
          </Link>
          <Link href="/session-resources" className="hover:text-teal-300 text-lg">
            Resources
          </Link>
          <Link href="/help" className="hover:text-teal-300 text-lg">
            Help
          </Link>

<Link href="/join">

  <SparklesButton
  
    text="Join Now"
    className="ml-3 px-3 py-2 bg-teal-400 text-blue-800 font-semibold rounded-full hover:bg-teal-500 shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
  />
</Link>

      
    
        </div>

        {/* Mobile Menu Button */}
        <button className="block md:hidden mt-4" onClick={toggleMenu}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            ></path>
          </svg>
        </button>

        {/* Mobile Links */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 flex flex-col items-center">
            <Link href="/about" className="py-2 hover:bg-blue-500 text-lg w-full text-center">
              About
            </Link>
            <Link href="/get-involved" className="py-2 hover:bg-blue-500 text-lg w-full text-center">
              Get Involved
            </Link>
            <Link href="/community" className="py-2 hover:bg-blue-500 text-lg w-full text-center">
              Community
            </Link>
            <Link href="/session-resources" className="py-2 hover:bg-blue-500 text-lg w-full text-center">
              Resources
            </Link>
            <Link href="/help" className="py-2 hover:bg-blue-500 text-lg w-full text-center">
              Help
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
