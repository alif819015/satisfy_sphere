"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import icon from "../../../../public/Mahmud Hasan.jpg";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black py-4 ">
      <div className="container mx-auto flex justify-between items-center px-5">
        <Link href="/" className="text-white text-xl font-bold">
          SatisfySphere
        </Link>

        <div className="hidden md:flex items-center space-x-4">
          <Link href="/" className="text-white hover:text-gray-300">
            Home
          </Link>
          <Link href="/about" className="text-white hover:text-gray-300">
            About
          </Link>

          <Link href="#" className="text-white hover:text-gray-300">
            Services
          </Link>
          <Link href="#" className="text-white hover:text-gray-300">
            Contact
          </Link>
          <div className="hidden lg:block">
            <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
              <Image src={icon} className="rounded-full" alt="Online avater" />
            </div>
          </div>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute z-50 top-16 right-0 bg-black mt-2 py-2 w-48 rounded-md shadow-lg">
              <Link
                href="/"
                className="block px-4 py-2 text-white hover:text-gray-300"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block px-4 py-2 text-white hover:text-gray-300"
              >
                About
              </Link>
              <Link
                href="#"
                className="block px-4 py-2 text-white hover:text-gray-300"
              >
                Services
              </Link>
              <Link
                href="#"
                className="block px-4 py-2 text-white hover:text-gray-300"
              >
                Contact
              </Link>
              <div className="flex items-center">
                <div className="w-12 h-12 mx-auto mt-5 rounded-full bg-green-500 flex items-center justify-center">
                  <Image
                    src={icon}
                    className="rounded-full"
                    alt="Online avater"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;