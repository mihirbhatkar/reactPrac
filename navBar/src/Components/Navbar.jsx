import React, { useRef, useState } from "react";
import { AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import { FaBars } from "react-icons/fa";

export function Navbar({}) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  var animateMenu = showMobileMenu
    ? "flex origin-top animate-open-menu"
    : "flex origin-top animate-close-menu";

  useState(() => {
    // so that close animation doesn't play on initial render. could find a better solution i guess
    animateMenu = "hidden";
  }, []);

  return (
    <header className="bg-slate-200">
      <div className="flex items-stretch max-w-6xl h-[72px] mx-auto justify-between">
        <a href="" className="text-4xl p-2 flex justify-center items-center">
          🚀someLogo
        </a>
        <div className="hidden md:flex items-stretch text-lg">
          <a
            href=""
            className="flex transition-colors duration-200 items-center hover:bg-slate-100 p-4"
          >
            Home
          </a>
          <a
            href=""
            className="flex transition-colors duration-200 items-center hover:bg-slate-100 p-4"
          >
            Projects
          </a>
          <a
            href=""
            className="flex transition-colors duration-200 items-center hover:bg-slate-100 p-4"
          >
            Profile
          </a>
        </div>
        {/* <div className="hidden p-4 md:flex md:justify-center md:items-center gap-2">
          <a href="">
            <AiFillLinkedin className="text-xl text-blue-400" />
          </a>
          <a href="">
            <AiOutlineTwitter className="text-xl text-blue-400" />
          </a>
        </div> */}
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
          // display: "flex",
        }}
        className={`bg-black flex-col gap-8 text-center text-4xl absolute top-0 w-full text-white pb-[72px] ${animateMenu}`}
      >
        <button
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          className="text-7xl hover:opacity-60 text-right cursor-pointer"
        >
          &times;
        </button>
        <a href="" className="hover:opacity-60 ">
          Home
        </a>
        <a href="" className="hover:opacity-60">
          Projects
        </a>
        <a href="" className="hover:opacity-60">
          Profile
        </a>
      </div>
    </header>
  );
}
