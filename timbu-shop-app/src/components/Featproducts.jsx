import React from 'react'
import { Link } from 'react-router-dom'

const Featproducts = () => {
  return (
    <div className="container bg-[#FCF8F3] mx-auto flex py-10 md:flex-row">
        <div className='flex items-center text-center px-20 space-x-3'>
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-left md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="font-extrabold mb-8 text-2xl text-[#3A3A3A]">
            Featured Products
            </h1>
          <p className="mb-8 leading-relaxed text-base text-[#616161]">
            Our top pick for you
          </p>
          <div className="flex justify-center">
            <Link to='/shop'>
              <button className="flex justify-center w-40 text-white bg-[#3498DB] hover:bg-white hover:text-[#3498DB] hover:border-[#3498DB] border py-2 px-8 focus:outline-none text-sm font-bold">
                Add To Cart
              </button>
            </Link>
            </div>
        </div>
        <div className="flex space-x-3 lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img
        className="rounded"
        src="./product-3.png"
        alt="image"
        />
        </div>
        </div>
    </div>
            
  );
}

export default Featproducts