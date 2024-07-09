import React from 'react'

const Collection = () => {
  return (
      <div className="relative mx-auto lg:px-20 px-5 py-20 flex justify-items-center md:flex-row text-[#2C3E50]">
        <div className="lg:flex-grow md:w-1 lg:pr-24 md:pr-16 flex flex-col md:items-left mb-16 md:mb-0 items-center">
          <h1 className="font-extrabold text-4xl">Browse Our Collection</h1>
          <p className="mb-0 leading-relaxed font-bold text-xs">
            Discover the perfect products for your beauty routine
          </p>
          <div className='lg:flex flex-row justify-items-center lg:p-9 space-x-3 h-80 text-center font-bold leading-7'>
            <div>
                <img src="col-pic1.png" alt="" />
                <h3>Lip & Face Care</h3>
            </div>
            <div>
                <img className="rounded" src="col-pic2.png" alt="" />
                <h3>Hair Care</h3>
            </div>
            <div>
                <img src="col-pic3.png" alt="" />
                <h3>Bath & Body</h3>
            </div>

        </div>
        </div>
      </div>

  )
}

export default Collection