import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className="flex">
        <img className='absolute w-full h-full object-cover'
        src='/hero-image.png'
        alt='woman holding a beauty product'
        />
        <div className='m-4 px-5 py-5 relative z-0 w-1/3 border-0 rounded bg-red-300'>
        <div className='flex flex-col items-center text-center gap-8'>
          <div className='font-bold text-white text-2xl'>
            Unveil Your Natural Glow <br /> with Velte Beauty
          </div>
          <div className='font-semibold text-sky-900'>
            Luxury Skincare Inspired by Nature, <br /> Perfected by Science
          </div>
          
        </div>
        <div className='w-1/3 mt-8 font-semibold text-white bg-green-400 hover:bg-green-300 border-0 shadow-sm rounded py-2 px-6 focus:outline-none'>
            <Link to='/shop'>
              <button>BUY Now</button>
            </Link>
          </div>
      </div>
    </div>
  )
}

export default Hero