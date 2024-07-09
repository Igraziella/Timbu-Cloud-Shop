import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className="flex relative">
        <img className='w-full h-full object-cover'
        src='/hero-image.png'
        alt='woman holding a beauty product'
        />
        <div className='m-4 px-5 lg:py-10 py-2 w-[200px] absolute lg:right-56 lg:bottom-16 right-0 bottom-0 z-0 lg:w-1/3 border-0 rounded bg-[#C4888E]'>
        <div className='flex flex-col items-center text-center lg:gap-10 gap-2'>
          <div className='font-bold text-white lg:text-3xl text-xs'>
            Unveil Your Natural Glow with Velte Beauty
          </div>
          <div className='font-bold text-[#2C3E50] lg:text-xl text-xs'>
            Luxury Skincare Inspired by Nature, Perfected by Science
          </div>
          
        </div>
        <div className='flex justify-center lg:justify-start'>
            <Link to='/shop'>
              <button className='lg:mt-10 mt-2 mb-2 lg:font-semibold text-xs text-white bg-[#2ECC71] hover:bg-green-400 border-0 shadow-sm rounded py-2 px-6 w-32 justify-center focus:outline-none'>BUY Now</button>
            </Link>
          </div>
      </div>
    </div>
  )
}

export default Hero