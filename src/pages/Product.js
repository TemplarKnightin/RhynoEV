import React from "react";
import {
  FaBatteryHalf,
  FaMotorcycle,
  FaTachometerAlt,
  FaClock,
  FaShieldAlt,
} from "react-icons/fa";
import { IoMdColorPalette } from "react-icons/io";
import image from "../assets/rhyno final.95.png";

const icons = {
  battery: <FaBatteryHalf />,
  motor: <FaMotorcycle />,
  speed: <FaTachometerAlt />,
  charging: <FaClock />,
  warranty: <FaShieldAlt />,
  color: <IoMdColorPalette />,
};

const Product = ({ title, description, specs }) => {
  return (
    <div className="product-page bg-black text-white p-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <img
              src={image}
              alt={title}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2 md:pl-10">
            <h1 className="text-4xl font-bold mb-4">{title}</h1>
            <p className="text-lg mb-6">{description}</p>
            <div className="specs mb-6">
              <h2 className="text-2xl font-semibold mb-4">Specifications</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {Object.entries(specs).map(([key, value]) => (
                  <div key={key} className="spec-item flex items-start space-x-3">
                    <div className="icon text-yellow-500 text-xl">
                      {icons[key]}
                    </div>
                    <div>
                      <strong className="block text-sm font-medium mb-1">
                        {key.replace(/([A-Z])/g, " $1").toUpperCase()}:
                      </strong>
                      {Array.isArray(value) ? (
                        <ul className="list-disc pl-5 text-sm">
                          {value.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      ) : (
                        <span className="text-sm">{value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button className="bg-yellow-500 text-black py-3 px-8 rounded-lg font-semibold hover:bg-yellow-600 transition duration-300">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
