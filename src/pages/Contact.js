import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="p-4 sm:p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-blue-600 mb-8 sm:mb-12">
        Contact Us
      </h1>

      <div className="grid gap-6 sm:gap-12 md:grid-cols-2">
        <div className="flex items-center space-x-3 sm:space-x-4 p-4 sm:p-6 bg-dark-grey-200 rounded-lg shadow-lg">
          <div className="text-3xl sm:text-4xl text-blue-500">
            <FaEnvelope />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-1 sm:mb-2">
              Email
            </h2>
            <p className="text-sm sm:text-lg">
              <a
                href="mailto:info@rhyno.in"
                className="text-blue-400 hover:underline"
              >
                info@rhyno.in
              </a>
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-3 sm:space-x-4 p-4 sm:p-6 bg-dark-grey-200 rounded-lg shadow-lg">
          <div className="text-3xl sm:text-4xl text-green-500">
            <FaPhone />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-1 sm:mb-2">
              Phone
            </h2>
            <p className="text-sm sm:text-lg">
              <a
                href="tel:+919023987528"
                className="text-green-400 hover:underline"
              >
                +91-9023987528
              </a>
            </p>
          </div>
        </div>

        <div className="md:col-span-2 flex items-start space-x-3 sm:space-x-4 p-4 sm:p-6 bg-dark-grey-200 rounded-lg shadow-lg">
          <div className="text-3xl sm:text-4xl text-red-500">
            <FaMapMarkerAlt />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-1 sm:mb-2">
              Address
            </h2>
            <p className="text-sm sm:text-lg">
              Rhyno Wheels Private Limited, Near UG Hostel Gate #2, Behind PDEU,
              Raisan, Gandhinagar, Gujarat, India.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 sm:mt-12 text-center">
        <p className="text-sm sm:text-lg">
          We're here to help! Reach out to us with any questions, comments, or
          inquiries, and we'll get back to you as soon as possible.
        </p>
      </div>
    </div>
  );
};

export default Contact;
