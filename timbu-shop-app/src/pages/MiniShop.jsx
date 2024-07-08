import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { shopItems } from "../utils/data";
import { Link } from "react-router-dom";

const MiniShop = () => {
  return (
    <>
    <Navbar />

    <div>
        <img src="/shop-main-img.png" alt="cusmetic products" />
    </div>

    <div className="p-5 bg-[#2C3E50] text-white">
        <div>
            <p>Filter</p>
            <hr />
            <p>Showing 1–16 of 32 results</p>
        </div>
        <div>
            <p>Show</p>
            <button className="text-[#2C3E50] bg-white border-0 py-3 px-3 focus:outline-none">
                16
            </button>
        </div>
        <div className="inline-flex text-[#2C3E50] bg-white border py-2 px-8 focus:outline-none">
            <p>Sort by</p>
            <button>
                Default
            </button>
        </div>
    </div>

    <div className="md:grid grid-cols-4 gap-3 p-10">
          {
            shopItems.map((data) => {
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
                    <p className='ml-4 mb-5 font-bold'>{price}</p>
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
        <div className="p-10 bg-[#FAF3EA] text-white">
        </div>

    <Footer />
    </>

  )
}

export default MiniShop