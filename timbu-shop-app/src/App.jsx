import React from "react";
import "tailwindcss/tailwind.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Collection from "./components/Collection";
import Product from "./components/Product";
import Featproducts from "./components/Featproducts";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="text-blue-900 bg-white body-font">
      <Navbar />
      <Home />
      <Collection />
      <Product />
      <Featproducts />
      <Testimonials />
      <Footer />
    </main>
  );
}
