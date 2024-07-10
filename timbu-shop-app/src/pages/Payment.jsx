import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Payment = () => {
  return (
    <>
    <Navbar />

      <div className="bg-[#FAF3EA] text-[#2C3E50]">
    
      <div className="flex">
          <div className="lg:p-10 p-5">
            <ul className="flex gap-5">
                <Link to="/cart">
                  <li>Cart</li>
                </Link>
                <Link to="/cart">
                  <li>Information</li>
                </Link>
                <Link to="/payment">
                  <li className="text-[#3498DB] font-semibold">Payment and Shipping</li>
              </Link>            
            </ul>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col font-normal gap-20 lg:px-10 px-5">
					<div className="md:grid grid-rows-2 gap-10 lg:w-[70%] bg-white rounded">
            
            <div className="border">
              <form>
             
              {/* form content */}
             
              <div className="relative m-6 p-2 font-semibold leading-9 border">
                  <p>Contact</p>
                  <hr />
                  <p>Ship to </p>
              </div>

                <p className="text-[#2C3E50] font-bold mx-8">Shipping method</p>
        
                <div className="m-4 p-3 leading-10 border rounded ">
                <div>
                  <label htmlFor="radio"></label>
                  <input type="radio" /><span className="m-2 text-base hover:text-[#3498DB]">Free Shipping</span>
                  <hr />
                </div>

                <div>
                  <label htmlFor="radio"></label>
                  <input type="radio" /><span className="m-2 text-base hover:text-[#3498DB]">Regular Shipping (7 days)</span>
                  <hr />
                </div>

                <div>
                  <label htmlFor="radio"></label>
                  <input type="radio" /><span className="m-2 text-base hover:text-[#3498DB]">Regular Shipping (7 days)</span>
                </div>
              </div>

              <div className="relative leading-9 m-6 p-2 border">
                  <p>Contact</p>
                  <hr />
                  <p>Ship to </p>
                  <hr />
                  <p>Method</p>
              </div>

                <p className="text-[#2C3E50] font-bold p-4">Payment</p>
                <p className="flex justify-end mr-8 text-[#3498DB] font-semibold">Add a new card</p>
              
              <div className="flex p-4">
                <img src="/visa.png" alt="" />
                <img src="/mastercard.png" alt="" />
              </div>

              <div className="m-4 border p-1">
          <label htmlFor="phone"></label>
          <input type="number" placeholder="Card Number" />
        </div>

        <div className="m-4 border p-1">
          <label htmlFor="cardholder"></label>
          <input type="text" placeholder="Cardholder Name" />
        </div>

        <div className="m-4 border p-1">
          <label htmlFor="date"></label>
          <input type="date" placeholder="Expiration Date(MM / YY)" />
        </div>

        <div className="m-4 border p-1">
          <label htmlFor="code"></label>
          <input type="number" placeholder="Security Code" />
        </div>

        <div className="m-4">
          <label htmlFor="checkbox"></label>
          <input type="checkbox" /> Save this information for next time
        </div>

        <div className="flex m-4">
          <img src="/file-exclamation.png" alt="" />
          Your order will be processed in Naira(₦)
        </div>

        <div className="lg:flex gap-48 m-4 text-[#3498DB]">
          <Link to="/info">
            <p>Return To Information</p>
          </Link>

          <div>
          <Link to="/success">
            <button id="submit-btn" type="button" className="border-2 border-black rounded px-8 py-2 bg-[#3498DB] text-white font-bold w-full">
              Pay Now
            </button>
          </Link>
        </div>
        </div>

        </form>
        </div>
        </div>

				<div className="lg:w-[30%]">
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

export default Payment