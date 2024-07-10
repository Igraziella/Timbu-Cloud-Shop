import React from "react"
import "tailwindcss/tailwind.css"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import Info from "./pages/Info"
import Cart from "./pages/Cart"
import MiniShop from "./pages/MiniShop"
import Payment from "./pages/Payment"
import Success from "./pages/Success"
import { Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <div className="text-blue-900 bg-white body-font">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/info" element={<Info />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/minishop" element={<MiniShop />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/success" element={<Success />} />

      </Routes>
    
    </div>
  );
}

export default App