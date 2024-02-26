import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 w-full px-5">
      <div className="container mx-auto flex flex-col md:flex-row justify-between ">
        <div className="flex flex-col md:flex-row space-y-2 text-sm lg:text-lg md:space-y-0 md:space-x-4 items-start lg:items-center">
          <a href="#" className="hover:text-gray-300">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-gray-300">
            Terms of Service
          </a>
          <a href="#" className="hover:text-gray-300">
            Contact Us
          </a>
        </div>
        <p className="text-xs lg:text-sm mt-5 lg:mt-0 text-center">
          &copy; {new Date().getFullYear()} My Website. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
