"use client";
import React, { useEffect, useState } from "react";
import { NavOption, NavOption2 } from "./NavMenu";

const styles = "flex justify-between items-center py-3 px-5 fixed z-10";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let timer;

    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(timer);
      timer = setTimeout(() => setIsScrolling(false), 1000);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const styles2 = `container mx-auto bg-black ${styles} lg:transition-colors lg:duration-500 bg-${
    isScrolling ? "gray-700 opacity-60" : ""
  } bg-scroll`;
  return (
    <nav className="">
      <div className={styles2}>
        {NavOption}
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
              {NavOption2}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
