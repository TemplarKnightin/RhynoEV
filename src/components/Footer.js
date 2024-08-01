import React from "react";
import { RiInstagramFill, RiLinkedinFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white-400 p-4 flex flex-wrap justify-between">
      <div className="flex flex-wrap gap-4 mb-4">
        <Link to="/privacypolicy" className="hover:text-yellow-200">
          Privacy policy
        </Link>
        <Link to="/refundpolicy" className="hover:text-yellow-200">
          Refund policy
        </Link>
        <Link to="/policy" className="hover:text-yellow-200">
          Website policy
        </Link>
        <Link to="/contact" className="hover:text-yellow-200">
          Contact us
        </Link>
        <Link to="/rentals" className="hover:text-yellow-200">
          Rentals
        </Link>
        <a
          href="https://www.linkedin.com/company/rhyno-wheels/?originalSubdomain=in"
          className="hover:text-yellow-200"
        >
          Career
        </a>
      </div>
      <div className="flex gap-4">
        <a
          href="https://www.instagram.com/rhyno.in/"
          className="hover:text-yellow-200"
          aria-label="Follow us on Instagram"
        >
          <RiInstagramFill size={25} />
        </a>
        <a
          href="https://www.linkedin.com/company/rhyno-wheels/?originalSubdomain=in"
          className="hover:text-yellow-200"
          aria-label="Follow us on LinkedIn"
        >
          <RiLinkedinFill size={25} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
