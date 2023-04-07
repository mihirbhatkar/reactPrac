import React, { useEffect, useRef, useState } from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  var animateMenu = showMobileMenu
    ? "flex origin-top animate-open-menu"
    : "hidden";

  return (
    <header className="bg-[#19A7CE] rounded-b-xl text-white relative z-50">
      <div className="flex items-stretch max-w-6xl h-[72px] mx-auto justify-between">
        <a href="/" className="text-4xl p-2 flex justify-center items-center">
          🍾rDrinks
        </a>
        <div className="hidden md:flex items-stretch text-lg">
          <a
            href="/"
            className="flex transition-colors duration-200 items-center hover:bg-[#146C94] p-4"
          >
            Home
          </a>
          <a
            href="/about"
            className="flex transition-colors duration-200 items-center hover:bg-[#146C94] p-4"
          >
            About
          </a>
        </div>
        <button
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          className="cursor-pointer py-4 px-2 md:hidden text-2xl hover:opacity-80"
        >
          <FaBars />
        </button>
      </div>
      <div
        id="mobile-menu"
        style={{
          transition: "all 1s ease-in-out",
        }}
        className={`bg-black flex-col gap-8 text-center text-4xl absolute top-0 w-full text-white pb-[72px] ${animateMenu}`}
      >
        <button
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          className="text-7xl hover:opacity-60 text-right cursor-pointer"
        >
          &times;
        </button>
        <a href="/" className="hover:opacity-60 ">
          Home
        </a>
        <a href="/about" className="hover:opacity-60">
          About
        </a>
      </div>
    </header>
  );
};
export default Navbar;
