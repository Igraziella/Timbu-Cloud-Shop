import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Info = () => {
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
                  <li>Cart</li>
                </Link>
                <Link to="/cart">
                  <li className="text-[#3498DB] font-semibold">Information</li>
                </Link>
                <Link to="/payment">
                  <li>Payment and Shipping</li>
              </Link>            
            </ul>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col font-normal gap-20 lg:px-10 p-5">
					<div className="md:grid grid-rows gap-10 lg:w-[70%] border bg-white rounded w-full">
            
            <div className="border">
              <form>
                <h2 className="flex justify-center text-[#2C3E50] font-bold py-2">Contact Information</h2>

                {/* form content */}
                <div className="relative m-4 p-1 border">
                  <label htmlFor="email"></label>
                  <input type="text" id="email" placeholder="Email" />
                </div>

                <div className="m-4">
                  <label htmlFor="checkbox"></label>
                  <input type="checkbox" id="checkbox"/> <span>Email me with news and offers</span>
                </div>

                <p className="text-[#2C3E50] text-base m-4">Delivery Method</p>
        
                <div className="flex flex-row justify-center gap-4">
                  <div>
                    <label htmlFor="radio"></label>
                    <input type="radio" /><span className="m-2 text-base font-semibold hover:text-[#3498DB]">Ship</span>
                  </div>
                  
                  <div>
                    <label htmlFor="radio"></label>
                    <input type="radio" /><span className="m-2 text-base font-semibold hover:text-[#3498DB]">Pick Up</span>
                  </div>
                </div>

                <p className="font-semibold m-4">Shipping address</p>

                <div className="m-4 border p-1">
                  <label htmlFor="firstname"></label>
                  <input type="text" placeholder="First Name" />
                </div>

                <div className="m-4 border p-1">
                  <label htmlFor="lastname"></label>
                  <input type="text" placeholder="Last Name"/>
                </div>

                <div className="m-4 border p-1">
                  <label htmlFor="country"></label>
                  <input
                    type="text"
                    placeholder="Country / Region"
                  />
                </div>

                <div className="m-4 border p-1">
                  <label htmlFor="address"></label>
                  <input type="text" placeholder="Address" />
                </div>

                <div className="m-4 border p-1">
                  <label htmlFor="apartment"></label>
                  <input type="text" placeholder="apartment, suit etc" />
                </div>

                <div className="m-4 border p-1">
                  <label htmlFor="address"></label>
                  <input type="text" placeholder="City" />
                </div>

                <div className="m-4 border p-1">
                  <label htmlFor="address"></label>
                  <input type="text" placeholder="Province" />
                </div>

                <div className="m-4 border p-1">
                  <label htmlFor="address"></label>
                  <input type="text" placeholder="Postal code" />
                </div>

                <div className="m-4 border p-1">
                  <label htmlFor="phone"></label>
                  <input type="number" placeholder="Phone" />
                </div>

                <div className="m-4">
                  <label htmlFor="checkbox"></label>
                  <input type="checkbox" /> Save this information for next time
                </div>

                <div className="lg:flex text-left gap-48 m-4">
                  <Link to="/cart">
                    <p className="text-[#3498DB]">Back to Cart</p>
                  </Link>
                
                  <div>
                  <Link to="/payment">
                    <button id="submit-btn" type="button" className="border-2 rounded px-8 py-2 border-black bg-[#3498DB] hover:bg-[#add2eb] active:bg-[#609eca] text-white font-bold w-full">
                      Continue to Shipping
                    </button>
                  </Link>
                  </div>
                </div>
          
              </form>
            </div>
          </div>

				  <div className="lg:w-[30%]">
            <div className="bg-white rounded p-5">
              <p className="flex justify-center font-semibold leading-8 border-b">Order Summary</p>
              <div className="flex flex-row gap-10 mt-2 leading-9">
                <div>
                  <p className="font-bold">Items Total (2) </p>
                  <p className="font-normal text-[14px]">Discounts</p>
                  <p className="font-semibold">Subtotal</p>
                  <p className="font-semibold">Shipping</p>
                  <p className="font-light text-[14px]">Duties & Taxes</p>
                </div>

                <div>
                  <p className="font-bold">₦10,000.00</p>
                  <p className="font-normal text-[14px]">-₦00.00</p>
                  <p className="font-semibold">₦10,000.00</p>
                  <p className="font-semibold">₦1,000.00</p>
                  <p className="font-light text-[14px]">₦100.00</p>
                </div>
              </div>

              <div className="flex justify-center gap-10 lg:space-x-6 font-bold border-t">
                <p>Total</p>
                <p>₦11,100.00</p>
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

    <Footer />
    </>
  )
}

export default Info