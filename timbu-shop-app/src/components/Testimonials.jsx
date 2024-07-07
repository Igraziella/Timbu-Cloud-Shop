import React from 'react';
import { testimonial } from '../utils/data';

const Testimonials = () => {
  return (
      <div className="py-10 mt-20 px-20 bg-yellow-50">
        <div className="text-center font-bold pb-2 pt-2 text-4xl text-sky-900">
          What Our Customers Say
        </div>
        <p className="text-center pb-2 pt-0 text-sm text-sky-900">
          Real reviews from our satisfied customers
        </p>

        <div className="md:grid grid-cols-3 gap-3">
          {
            testimonial.map((data) => {
              const { id, img, name, review, rating } = data
              return (
                <div key={id} className="md:grid gap-5 rounded-md shadow-md border bg-white">
                  <div className='flex flex-col'>
                  <div>
                    <img src={img} className="ps-20 w-1/2 h-full" />
                  </div>

                  <div className="text-sky-900">
                    <h1 className="font-bold mt-2 ml-4">{name}</h1>
                    <p className='ml-4'>{review}</p>
                    <p className='ml-4 mb-5 font-semibold text-base'>{rating}</p>
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