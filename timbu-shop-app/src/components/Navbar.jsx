import React from "react";

 const Navbar = () => {
    
    return (
    <header className="bg-sky-500 text-white md:sticky top-0 w">
      <div className="container mx-auto flex flex-wrap p-2 md:flex-row items-center flex-row justify-between">
        <div className="title-font font-bold mb-4 ml-5 md:mb-0 flex-col">
          <img src="velte-logo.png" alt="" />
          <a href="about" className="text-white">
            Velte Beauty
          </a>
        </div>
        <nav className="font-semibold md:mr-auto md:ml-auto md:py-1 md:pl-4 hidden md:flex flex-wrap items-center justify-center text-base">
          <a href="#home" className="mr-12">
            Home
          </a>
          <a href="#shop" className=" mr-12">
            Shop
          </a>
          <a href="#about" className="mr-12">
            About
          </a>
          <a href="#contact" className="mr-12">
            Contact
          </a>
        </nav>
        <a
          href="#contact"
          className="items-center bg-yellow-800 border-0 py-1 px-3 rounded-lg focus:outline-none hover:bg-white hover:text-yellow-500 mt-3 md:mt:0 mb-3 mr-2 hidden md:flex"
        >
          Let's Meet
        </a>
      </div>
    </header>
    );
};

export default Navbar;