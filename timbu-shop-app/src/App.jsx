import React from "react"
import "tailwindcss/tailwind.css"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import About from "./pages/About"
import Checkout from "./pages/Checkout"
import Cart from "./pages/Cart"
import Contact from "./pages/Contact"
import MiniShop from "./pages/MiniShop"
import { Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <div className="text-blue-900 bg-white body-font">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/minishop" element={<MiniShop />} />

      </Routes>
    
    </div>
  );
}

export default App