import React from 'react';
import { prodSample } from '../utils/data';

const Product = () => {
  return (
      <div className="py-20 px-20">
        <div className="text-center font-bold pb-2 pt-2 text-2xl text-gray-700">
          Our Products
        </div>

        <div className="md:grid grid-cols-4 gap-3">
          {
            prodSample.map((data) => {
              const { id, img, title, subtitle, price } = data
              return (
                <div key={id} className="md:grid gap-5 rounded-md shadow-md border bg-gray-200">
                  <div className='flex flex-col'>
                  <div>
                    <img src={img} className="w-full h-full" />
                  </div>

                  <div className="text-sky-900">
                    <h1 className="font-bold mt-2 ml-4">{title}</h1>
                    <p className='ml-4'>{subtitle}</p>
                    <p className='ml-4 mb-5 font-bold'>{price}</p>
                  </div>
                </div>
                
                </div>
              )
            })
          }
        </div>
        <div className="inline-flex text-sky-500 bg-white border border-sky-500 py-2 px-8 focus:outline-none text-lg">
            <button>Show More</button>
        </div>
      </div>
  )
}

export default Product