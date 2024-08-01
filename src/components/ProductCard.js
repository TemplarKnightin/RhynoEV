import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ image, title, link, reverse }) => {
  return (
    <div
      className={`hover:bg-dark-grey-300 transition-all duration-200 ease-in-out relative isolate shadow-2xl rounded-lg sm:rounded-3xl flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } w-full`}
    >
      <div className="relative flex-shrink-0 w-full md:w-2/3 h-80">
        <img
          alt={title}
          src={image}
          className="w-full h-full object-cover rounded-t-lg md:rounded-l-none md:rounded-r-lg"
        />
      </div>
      <div className="flex flex-col items-center justify-center p-6 text-center md:text-left md:w-1/3">
        <h3 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
          {title}
        </h3>
        <div>
          <Link
            to={link}
            className="block rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Buy now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
