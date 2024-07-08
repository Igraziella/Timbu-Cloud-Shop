import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className="flex relative">
        <img className='w-full h-full object-cover'
        src='/hero-image.png'
        alt='woman holding a beauty product'
        />
        <div className='m-4 px-5 py-10 absolute right-56 bottom-16 z-0 w-1/3 border-0 rounded bg-[#C4888E]'>
        <div className='flex flex-col items-center text-center gap-10'>
          <div className='font-bold text-white text-3xl'>
            Unveil Your Natural Glow <br /> with Velte Beauty
          </div>
          <div className='font-bold text-[#2C3E50] text-xl'>
            Luxury Skincare Inspired by Nature, <br /> Perfected by Science
          </div>
          
        </div>
        <div>
            <Link to='/shop'>
              <button className='mt-10 mb-2 font-semibold text-white bg-[#2ECC71] hover:bg-green-400 border-0 shadow-sm rounded py-2 px-6 w-32 justify-center focus:outline-none'>BUY Now</button>
            </Link>
          </div>
      </div>
    </div>
  )
}

export default Hero