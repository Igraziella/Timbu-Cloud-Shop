import React from 'react';
import { testimonial } from '../utils/data';

const Testimonials = () => {
  return (
      <div className="pt-0 pb-10 mt-20 px-20 bg-[#FCF8F3]">
        <div className="text-center font-bold pb-2 pt-2 text-4xl text-[#2C3E50]">
          What Our Customers Say
        </div>
        <p className="text-center pb-2 pt-0 text-sm text-[#2C3E50]">
          Real reviews from our satisfied customers
        </p>

        <div className="md:grid grid-cols-3 gap-3">
          {
            testimonial.map((data) => {
              const { id, img, name, review, rating } = data
              return (
                <div key={id} className="md:grid gap-5 rounded-md shadow-md border bg-white py-4">
                  <div className='flex flex-col'>
                  <div>
                    <img src={img} className="ps-20 w-1/2 h-full" />
                  </div>

                  <div className="text-[#2C3E50] ml-5 py-3">
                    <h1 className="font-bold">{name} <span className='font-normal'> Mojisola</span></h1>
                    <p className='font-bold '>{review} <span className='font-normal'>After applying the <br /> lip oil, my lips are always glowing</span></p>
                    <p className='flex gap-5 font-bold mt-1'>{rating} 
                      <span>
                        <img src="/reviews.png" alt="" />
                      </span>
                    </p>
                  </div>
                </div>
                
                </div>
              )
            })
          }
        </div>
      </div>
  )
}

export default Testimonials