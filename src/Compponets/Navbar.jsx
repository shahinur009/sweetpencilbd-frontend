import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import logo from "../../public/sweetpencilbdlogo.png";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for hamburger menu

  return (
    <>
      <div className="flex items-center justify-between shadow-md bg-[#dc590d] px-2 py-2 fixed z-50 right-0 left-0 h-20">
        {/* Logo Section */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="logo" className="w-12 h-12 md:w-24 md:h-24" />
          <h1 className="text-white font-bold text-sm md:text-xl">
            Sweet PencilBD
          </h1>
        </Link>

        {/* Search Bar Section */}
        <div className="hidden md:flex items-center flex-grow max-w-[70%] mx-4">
          <div className="relative flex items-center w-full">
            <input
              type="search"
              name="Search"
              placeholder="Search what you want"
              className="w-full py-2 pl-10 text-sm md:text-xl rounded-l-md focus:outline-none dark:bg-gray-100 dark:text-gray-800 focus:dark:bg-gray-50 focus:dark:border-violet-600"
            />
            <button
              type="button"
              className="px-4 py-[10px] bg-[#ffe1d2] rounded-r-md border-l border-gray-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-600"
            >
              <CiSearch className="text-[#f57224] text-xl md:text-2xl" />
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="hidden md:flex items-center space-x-5">
          <Link to="/login" className="btn btn-warning">
            Login
          </Link>
        </div>

        {/* Hamburger Menu for Small Screens */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <FaBars className="text-white text-2xl" />
          </button>
        </div>
      </div>

      {/* Hamburger Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute top-14 right-4 bg-white shadow-md rounded-md z-50 w-48">
          <ul className="flex flex-col items-start p-4 space-y-2">
            <li>
              <Link
                to="/add-card"
                className="flex items-center text-gray-800 hover:text-[#dc590d] space-x-2"
              >
                <PiShoppingCartSimpleBold className="text-[#dc590d] text-2xl" />
                <span>Add to Cart</span>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;
