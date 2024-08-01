import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

const Dropdown = ({ label, links }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="text-white hover:text-yellow-200 focus:outline-none flex flex-row items-center gap-2"
      >
        {label} {isOpen ? <IoChevronUp /> : <IoChevronDown />}
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg">
          {links.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="block px-4 py-2 text-black hover:bg-yellow-200"
              onClick={toggleDropdown}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
