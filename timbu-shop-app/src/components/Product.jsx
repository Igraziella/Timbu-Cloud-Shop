import React from 'react';
import { prodSample } from '../utils/data';
import { Link } from 'react-router-dom';

const Product = () => {
  return (
      <div className=" relative py-20 px-20">
        <div className="text-center font-bold pb-2 pt-2 text-2xl text-[#2C3E50]">
          Our Products
        </div>

        <div className="md:grid grid-cols-4 lg:gap-3 gap-y-10">
          {
            prodSample.map((data) => {
              const { id, img, title, subtitle, price } = data
              return (
                <div key={id} className="md:grid gap-5 rounded-md shadow-md border bg-[#ECF0F1]">
                  <div className='flex flex-col'>
                  <div>
                    <img src={img} className="w-full h-full" />
                  </div>

                  <div className="text-[#2C3E50]">
                    <h1 className="font-bold mt-2 ml-4">{title}</h1>
                    <p className='ml-4'>{subtitle}</p>
                    <p className='ml-4 mb-4 font-bold'>{price} 
                      <span className='flex justify-end px-3'>
                        <Link to="/cart">
                          <button className='font-semibold text-white bg-[#3498DB] hover:bg-[#add2eb] active:bg-[#609eca]  border border-black shadow-sm rounded p-3 w-32 justify-center focus:outline-none'>Add to Cart</button>
                        </Link>
                      </span>
                    </p>
                  </div>

                </div>
                
                </div>
              )
            })
          }
        </div>
        <div className="flex mt-4 justify-center text-[#3498DB] bg-white focus:outline-none text-lg">
            <Link to='/shop'>
              <button className='border border-[#3498DB] hover:bg-[#3498DB] hover:text-white w-48 py-3 text-base flex justify-center'>
                Show More
              </button>
            </Link>
        </div>
      </div>
  )
}

export default Product