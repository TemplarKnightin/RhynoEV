import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import Sidebar from "./Sidebar";
import { HiMenuAlt2 } from "react-icons/hi";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const productLinks = [
    { name: "SE03 Lite", path: "/products/se03-lite" },
    { name: "SE03", path: "/products/se03" },
    { name: "SE03 Max", path: "/products/se03-max" },
  ];

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <>
      <nav className="sm:fixed py-4 px-8 flex justify-between items-center w-full z-10 backdrop-blur-sm">
        <Link
          to="/"
          className="text-white hover:text-yellow-200 text-lg font-semibold"
        >
          Home
        </Link>
        <div className="hidden sm:flex gap-4">
          <Link to="/about" className="text-white hover:text-yellow-200">
            About us
          </Link>
          <Dropdown label="Products" links={productLinks} />
          <Link to="/compare" className="text-white hover:text-yellow-200">
            Compare all
          </Link>
          <Link to="/contact" className="text-white hover:text-yellow-200">
            Contact us
          </Link>
          <Link to="/pre-book" className="text-white hover:text-yellow-200">
            Pre-book now
          </Link>
        </div>
        <button
          className="sm:hidden text-white hover:text-yellow-200"
          onClick={toggleSidebar}
        >
          <HiMenuAlt2 size={25} />
        </button>
      </nav>
      <Sidebar
        isOpen={sidebarOpen}
        onClose={closeSidebar}
        productLinks={productLinks}
      />
    </>
  );
};

export default Navbar;
