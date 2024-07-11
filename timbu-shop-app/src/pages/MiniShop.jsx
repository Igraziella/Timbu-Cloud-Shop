import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { miniProduct } from "../utils/data";
import { Link } from "react-router-dom";

const MiniShop = () => {
  return (
    <>
    <Navbar />
    
    <div>
        <img src="/shop-main-img.png" alt="cusmetic products" />
    </div>

    {/* filter section */}
    <div className="lg:flex justify-between p-5 bg-[#2C3E50] text-white px-10">
      <div className="lg:flex lg:flex-row gap-3 font-bold">
        <img src="/filter.png" alt="" /><p>Filter</p>
        <hr />
        <img src="/grid.png" alt="" />
        <img src="/bi_view-list.png" alt="" />
        <p className="font-normal text-base">Showing 1–16 of 32 results</p>
      </div>
        
      <div className="flex gap-5 lg:*:first-letter:first-line:font-bold lg:text-[20px]">
        <p>Show</p>
        <button className="text-[#2C3E50] bg-white border-0 py-1 px-2 focus:outline-none">
          16
        </button>
        
        <p>Sort by</p>
        <button className="text-[#2C3E50] bg-white border-0 py-1 lg:px-8 px-2 focus:outline-none">
        Default
        </button>
      </div>
    </div>

    <div className="md:grid grid-cols-4 gap-3 space-y-4 lg:space-y-4 lg:p-10 p-5">
      {
      miniProduct.map((data) => {
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
              <p className='ml-4 mb-5 font-bold'>{price}
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

    <div className="flex justify-center space-x-3 mb-8"> 
      <div className="text-white bg-[#D9D9D9] hover:bg-[#3498DB] border-0 py-3 px-6 focus:outline-none rounded">
        <Link to='/shop'>
          <button>1</button>
        </Link>
      </div>

      <div className="text-bg-800 bg-[#3498DB] hover:bg-[#D9D9D9] border-0 py-3 px-6 focus:outline-none rounded">
        <button>2</button>
      </div>
    </div> 

    <div className="flex flex-row justify-between p-10 bg-[#FAF3EA]">
      <div className="flex gap-2">
        <img src="/trophy.png" alt="" />
        <h3 className="text-[#2C3E50]">High Quality</h3>
        <p className="text-[#898989]">crafted from top materials</p>
      </div>

      <div className="flex">
        <img src="/warranty.png" alt="" />
        <h3 className="text-[#2C3E50]">Warranty Protection</h3>
        <p className="text-[#898989]">Over 2 years</p>
      </div>

      <div className="flex">
        <img src="/shipping.png" alt="" />
        <h3 className="text-[#2C3E50]">Free Shipping</h3>
        <p className="text-[#898989]">Order over ₦20,000 </p>
      </div>

      <div className="flex">
        <img src="/customer-support.png" alt="" />
        <h3 className="text-[#2C3E50]">24/7 Support</h3>
        <p className="text-[#898989]">Dedicated support</p>
      </div>
    </div>

    <Footer />
    </>

  )
}

export default MiniShop