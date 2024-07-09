import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { SlArrowRight } from "react-icons/sl";
import { Link } from "react-router-dom";


const Cart = () => {
  return (
    <>
    <Navbar />

    <div className="bg-[#FAF3EA]">
      <div>
        <img src="/shop-main-img.png" alt="cusmetic products" />
      </div>

      <div className="flex flex-col m-6">
          <div className="">
            <ul className="flex gap-5 p-0">
              <li className="text-[#3498DB] font-semibold">Cart</li>
              <Link to="/info">
                <li>Information</li>
              </Link>

              <Link to="/payment">
                <li>Payment and Shipping </li>
              </Link>

            </ul>
          </div>
      
        <div className="bg-white m-2 p-2">
          <h1>Shopping Cart</h1>
          <p>Deselect all items</p>
        </div>

        <div className="bg-white m-8">
          Cart (1)
          <table>
            <th>Product</th>
            <td>hgdhgd</td>

            <th>Name Product</th>
            <td>dddd</td>

            <th>Quantity</th>
            <td>hghdgh</td>

            <th>Price</th>
            <td>hsgd</td>
          </table>
        </div>

        <div>
          <div className="bg-white m-8">
            <h3>Order Summary</h3>
            <h4>Items Total <span>₦10,000.00</span></h4>
            <p>Discounts <span>- ₦00,00</span></p>
            <p>Subtotal <span>₦10,000.00</span></p>
            <p>Shipping <span>₦1,000.00</span></p>
            <p>Duties & Taxes <span>₦100.00</span></p> <hr />
            <p>Total <span>₦11,000.00</span></p>
            <button>Proceed To Checkout</button>          
          </div>
      </div>
      </div>


    </div>

    <Footer />
    </>
  )
}

export default Cart