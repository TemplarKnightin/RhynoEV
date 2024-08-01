import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import { HiX } from "react-icons/hi";

const Sidebar = ({ isOpen, onClose, productLinks }) => {
  return (
    <div
      className={`fixed inset-0 z-20 bg-black bg-opacity-50 transition-opacity ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={onClose}
    >
      <div
        className={`fixed left-0 top-0 w-64 h-full bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4">
          <button
            onClick={onClose}
            className="text-black hover:text-yellow-200"
          >
            <HiX />
          </button>
          <nav className="mt-4">
            <Link
              to="/"
              className="block py-2 text-black hover:bg-yellow-200"
              onClick={onClose}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block py-2 text-black hover:bg-yellow-200"
              onClick={onClose}
            >
              About us
            </Link>
            <Dropdown
              label="Products"
              links={productLinks}
              onLinkClick={onClose}
            />
            <Link
              to="/compare"
              className="block py-2 text-black hover:bg-yellow-200"
              onClick={onClose}
            >
              Compare all
            </Link>
            <Link
              to="/contact"
              className="block py-2 text-black hover:bg-yellow-200"
              onClick={onClose}
            >
              Contact us
            </Link>
            <Link
              to="/pre-book"
              className="block py-2 text-black hover:bg-yellow-200"
              onClick={onClose}
            >
              Pre-book now
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
