import React from 'react'

const Featproducts = () => {
  return (
    <div className="container bg-yellow-50 mx-auto flex py-10 md:flex-row text-sky-900">
        <div className='flex items-center text-center px-20 space-x-3'>
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-left md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="font-extrabold mb-8 text-2xl text-gray-700">
            Featured Products
            </h1>
          <p className="mb-8 leading-relaxed text-base">
            Our top pick for you
          </p>
          <div className="flex justify-center">
            <a
              href="#shop"
              className="inline-flex text-white bg-sky-500 border-0 py-2 px-8 focus:outline-none text-lg"
            >
              Explore More
            </a>
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