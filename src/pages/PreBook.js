import React from "react";
import { FaCar, FaStar, FaMoneyBillWave } from "react-icons/fa";

const PreBook = () => {
  return (
    <div className="prebook-page text-white p-8 rounded-lg shadow-lg">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">Pre-book Your Rhyno EV</h1>
        <p className="text-lg mb-8">
          Be among the first to drive the future with Rhyno EV. Reserve your
          vehicle today to guarantee your spot and experience innovation like
          never before.
        </p>

        <div className="features mb-8 flex flex-col md:flex-row justify-center gap-6">
          <div className="feature-item flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-md">
            <FaCar className="text-yellow-200 text-4xl mb-4" />
            <h2 className="text-xl font-semibold mb-2">Exclusive Access</h2>
            <p className="text-center">
              Be the first to own and experience the groundbreaking Rhyno EV.
            </p>
          </div>
          <div className="feature-item flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-md">
            <FaStar className="text-yellow-200 text-4xl mb-4" />
            <h2 className="text-xl font-semibold mb-2">Premium Benefits</h2>
            <p className="text-center">
              Enjoy exclusive benefits, including special offers and priority
              service.
            </p>
          </div>
          <div className="feature-item flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-md">
            <FaMoneyBillWave className="text-yellow-200 text-4xl mb-4" />
            <h2 className="text-xl font-semibold mb-2">Secure Your Spot</h2>
            <p className="text-center">
              Ensure your place with a pre-booking payment and be ready for an
              electrifying journey.
            </p>
          </div>
        </div>

        <button className="bg-yellow-200 text-black py-3 px-6 text-lg font-semibold rounded-lg shadow-md hover:bg-yellow-200 transition duration-300">
          Pre-book Now
        </button>
      </div>
    </div>
  );
};

export default PreBook;
