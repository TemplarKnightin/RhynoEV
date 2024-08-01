import React from "react";
import Carousel from "../components/Carousel";
import Hero from "../components/Hero";
import Products from "../components/Products";
import logo from "../assets/Copy of Black logo for B&W print.png";

const Home = () => {
  return (
    <div className="p-8 bg-black">
      <div className="flex justify-center mb-8">
        <div className="bg-white p-4 rounded-lg shadow-lg inline-block">
          <img src={logo} alt="Rhyno EV Logo" className="h-16 w-auto" />
        </div>
      </div>
      <Hero />
      <Carousel />
      <Products />
    </div>
  );
};

export default Home;
