import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Success = () => {
  return (
    <>
    <Navbar />

    {/* payment success msg */}
    <div className="bg-[#F9F1E7]">
        <div>
        <p>Thank You For Your Order!</p>
        <p>Print Receipt</p>
        </div>

        <p>Order #147258369 has ben placed</p>
        <p>you will receive an email confirmation shortly (lotsofmails@email.com )</p>
    </div>
    <Footer />
    </>

  )
}

export default Success