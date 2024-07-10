import React from 'react'
import { Link } from 'react-router-dom'

const Featproducts = () => {
  return (
    <div className="container bg-[#FCF8F3] mx-auto lg:flex lg:py-10 py-2 md:flex-row">
        <div className='lg:flex space-x-4 items-center text-center lg:px-20'>
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-left md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="font-extrabold mb-8 text-2xl text-[#3A3A3A]">
            Featured Products
            </h1>
          <p className="mb-8 leading-relaxed text-base text-[#616161]">
            Our top pick for you
          </p>
          <div className="flex justify-center">
            <Link to='/shop'>
              <button className="flex justify-center w-40 text-white bg-[#3498DB] hover:bg-white hover:text-[#3498DB] hover:border-[#3498DB] border border-black rounded-md py-2 px-8 focus:outline-none text-sm font-bold">
                Add To Cart
              </button>
            </Link>
            </div>
        </div>

        <div className=" *:first-letter:flex space-x-3 lg:max-w-lg md:w-1/2">
        <img
        className="rounded w-full"
        src="./product-3.png"
        alt="image"
        />
        </div>
        
        <div className="md:w-[30%] lg:w-full border-2 py-8 px-5 ">
				  <div className="lg:relative">
					  <p className="text-left text-2xl font-bold pb-1 text-[#3498DB]">Velte Ayurvedic Hair Butter:</p>
            <p className='text-left text-base font-semibold text-[#3498DB]'>Natural Ingredients, Powerful Results</p>
            <p className="text-left text-base text-[#2C3E50]"> Introducing our Ayurvedic Hair Butter, a luxurious blend designed to transform your hair care routine with the ancient wisdom of Ayurveda. Crafted with a unique combination of natural ingredients, this hair butter promises to provide deep conditioning, strength, and luster to your hair.</p>
					
          <div className='flex justify-center'>
          <div className="lg:w-1/2 ">
          <p className="text-[#3498DB] font-bold text-left">Key Ingredients</p>
          <ul className='list-disc text-left'>
            <li>Shea Butter</li>
            <li>Fenugreek Seed</li>
            <li>Rosemary Leaves</li>
            <li>Clove Flower Bud</li>
            <li>Olive Oil</li>
            <li>Coconut Oil</li>
            <li>Avocado Oil</li>
            <li>Tea Tree Essential Oil</li>
            <li>Peppermint Essential Oil</li>
          </ul>
          </div>
				</div>
			</div>
				<p className="text-xl font-bold text-[#3498DB]">
						FOR ALL HAIR TYPES
				</p>
			</div>
        </div>
    </div>
            
  );
}

export default Featproducts