import React, { useState } from "react";
import { Link } from "react-router-dom"
import Hamburger from "./Hamburger";
import { SlBasket } from "react-icons/sl";

 const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
    
    return (
    <header className="bg-[#3498DB] text-white md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap md:flex-row items-center flex-row justify-between">
        <div className="font-bold text-3xl gap-1.5 lg:ml-2 md:mb-0 flex flex-row items-center">
          <img src="velte-logo.png" alt="logo" />
          <h1 className="text-sm lg:text-3xl leading-relaxed">
            Velte Beauty
          </h1>
        </div>

        <nav className="hidden lg:block font-normal md:mr-auto md:ml-auto md:py-1 md:pl-4 md:flex flex-wrap items-center justify-center text-base">
          <Link to="/" className="mr-12 focus:font-bold active:font-bold">Home</Link>
          
          <Link to="/shop" className="mr-12 focus:font-bold active:font-bold"> Shop</Link>
        </nav>
          <Hamburger toggleMenu={toggleMenu} menuOpen={menuOpen} />

        
        <div className="lg:flex space-x-8 p-12 hidden">
          <Link to="/cart">
            <SlBasket />
          </Link>
        </div>
      
      </div>
    </header>
    );
};

export default Navbar;