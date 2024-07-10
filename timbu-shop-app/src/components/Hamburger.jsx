import React from "react";
import { Link } from "react-router-dom";

const Hamburger = ({ toggleMenu, menuOpen }) => {
  return (
    <>
      <button
        onClick={toggleMenu}
        className="md:hidden inline-flex items-center bg-[#2C3E50] border-0 py-1 px-2 rounded-lg focus:outline-none hover:bg-[#2C3E50] top-7 right-5 p-4 md:mt:0 mb-3 mr-0 absolute z-20"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>
      <div
        className={`h-4/6 w-full bg-white md:hidden fixed top-0 right-0 z-10 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-all`}
      >
        <nav className="font-bold md:mr-auto md:ml-auto md:py-1 md:pl-4 md:border-[#2C3E50] mt-5 flex flex-col items-center justify-center text-base">
          <Link to="/" className="mr-12 focus:font-bold active:font-bold">Home</Link>
          
          <Link to="/shop" className="mr-12 focus:font-bold active:font-bold">Shop</Link>
          
        </nav>
      </div>
    </>
  );
};

export default Hamburger;
