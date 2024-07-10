import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Success = () => {
  return (
    <>
    <Navbar />

    {/* payment success msg */}
    <div className="bg-[#F9F1E7]">
      <div className="flex lg:flex-row flex-col font-normal py-20 lg:px-10 px-5">
			  <div className="md:grid grid-rows gap-5 w-[100%] border bg-white rounded p-5">
          <div className="flex justify-between text-[#3498DB]">
            <p className="lg:text-[32px] font-medium">Thank You For Your Order!</p>
            <p className="lg:text-[14px] text-[10px] font-light">Print Receipt</p>
          </div>

          <div className="lg:text-[14-px] font-[300px] text-[#2C3E50] leading-7">
            <p>Order #147258369 has been placed</p>
            <p>you will receive an email confirmation shortly (lotsofmails@email.com )</p>
          </div>        
        </div>
    </div>
    </div>
    <Footer />
    </>

  )
}

export default Success