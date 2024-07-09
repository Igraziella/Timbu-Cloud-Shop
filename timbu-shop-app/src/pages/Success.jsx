import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Success = () => {
  return (
    <>
    <Navbar />

    {/* payment success msg */}
    <div className="bg-[#F9F1E7]">
      <div className="flex lg:flex-row flex-col font-normal gap-20 px-10">
			  <div className="md:grid grid-rows-2 gap-10 w-[70%] border bg-white rounded">
        
        <p>Thank You For Your Order!</p>
        <p>Print Receipt</p>
        </div>

        <p>Order #147258369 has ben placed</p>
        <p>you will receive an email confirmation shortly (lotsofmails@email.com )</p>

    </div>
    </div>
    <Footer />
    </>

  )
}

export default Success