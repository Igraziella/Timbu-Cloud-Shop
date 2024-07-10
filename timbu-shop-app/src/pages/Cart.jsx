import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Link } from "react-router-dom";
import { recommend } from "../utils/data";


const Cart = () => {
  return (
    <>
    <Navbar />

    <div className="bg-[#FAF3EA] text-[#2C3E50]">
      <div>
        <img src="/shop-main-img.png" alt="cosmetic products" />
      </div>

      <div className="flex flex-col lg:m-10 m-5">
          <div>
            <ul className="flex gap-5">
                <Link to="/cart">
                  <li className="text-[#3498DB] font-semibold">Cart</li>
                </Link>
                <Link to="/info">
                  <li>Information</li>
                </Link>
                <Link to="/payment">
                  <li>Payment and Shipping</li>
              </Link>            
            </ul>
          </div>
        </div>

        <div className="flex lg:flex-col flex-col font-normal gap-5 px-10">
					<div className="md:grid grid-rows gap-10 lg:w-[70%] border bg-white rounded">
            
            <div className="m-5 space-y-4">
              <p className="text-[#3498DB] font-bold">Shopping Cart</p>
              <p className="underline">Deselect all Items</p>
            </div>
          </div>
        

        {/* <div className="flex lg:flex-row flex-col font-normal gap-20 px-10 mt-5"> */}
					<div className="lg:w-[70%] border bg-white rounded p-5">
            
            <div>
              Shopping Cart
              <p>Deselect all Items</p>
            </div>
          </div>

          <div className="lg:w-[30%] p-5">
          <div className="bg-white rounded p-4">
            <p className="flex justify-center font-semibold leading-8">Order Summary</p>
            <hr />
            <div className="flex flex-col gap-2 mt-2">
              <p>Items Total (2) <span>₦10,000.00</span></p>
              <p>Discounts <span>-₦00.00</span></p>
              <p>Subtotal <span>₦10,000.00</span></p>
              <p>Shipping <span>₦1,000.00</span></p>
              <hr />
              <p>Total <span>₦11,100.00</span></p>
            </div>

            <div>
              <Link to="/info">
              <button type="button" className="rounded px-8 py-2 mt-4 bg-[#3498DB] hover:bg-[#5da9d9] active:bg-[#5bacde] text-white border-black border-2 font-bold w-full">
                Proceed to Checkout
              </button>
              </Link>
            </div>          
          </div>

          <div className="bg-white mt-4 rounded">
          <div className="p-4 mx-10">
            <p>Payment methods</p>
            <div className="flex">
            <img src="/visa.png" alt="visa card" />
            <img src="/mastercard.png" alt="master card" />
            </div>
          </div>   
        </div>

        <div className="bg-white mt-4 p-4 rounded">
          <div className="flex gap-3">
            <img src="/protect-icon.png" alt="" />
           <p className="text-[#2ECC71]">Buyer Protection</p>
          </div>
           <p className="text-[#011432] font-normal text-sm mt-2">Get full refund if the item is not as described or
            <br />if is not delivered</p>
        </div> 
				</div>
        </div>
      </div>

      {/* recommended products */}
      <p className="flex justify-center lg:text-3xl font-medium text-black py-5">Recommended Products</p>
      <div className="lg:grid grid-cols-4 lg:gap-3 space-y-4 lg:space-y-0 p-5">
          {
            recommend.map((data) => {
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
                    <p className='ml-4 mb-4 font-bold'>{price} </p>
                  </div>
                  

                </div>
                
                </div>
              )
            })
          }
          <div className="flex justify-center mt-4 text-[#3498DB] bg-white focus:outline-none text-lg">
            <Link to='/shop'>
              <button className='border border-[#3498DB] hover:bg-[#3498DB] hover:text-white w-48 py-3 text-base font-bold flex justify-center'>
                Show More
              </button>
            </Link>
        </div>
        </div>

                

    <Footer />
    </>
  )
}

export default Cart