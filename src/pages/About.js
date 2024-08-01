import React from "react";
import { FaIndustry, FaBolt, FaShieldAlt, FaUserFriends } from "react-icons/fa";
import { GiElectric } from "react-icons/gi";

const About = () => {
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="mb-8 text-4xl font-bold text-center">About Us</h1>

      <div className="grid gap-12 md:grid-cols-2">
        <div className="flex items-start space-x-4">
          <div className="text-4xl text-blue-600">
            <FaIndustry />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
            <p>
              Established in 2019 by an automotive engineer with a vision for
              sustainable and robust mobility solutions, Rhyno EV is not just a
              company; it's a collective effort of a dynamic team of young
              individuals passionately driving innovation in the electric
              vehicle industry.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="text-4xl text-green-600">
            <FaBolt />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">
              Innovative Solutions
            </h2>
            <p>
              We believe in engineering solutions that solve problems. With our
              first product, we've taken a bold step to create something more
              than just a vehicle; it's a unique experience of elegance,
              comfort, and style.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="text-4xl text-red-600">
            <FaShieldAlt />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">
              Safety and Durability
            </h2>
            <p>
              Our design prioritizes safety, eliminating concerns of fires and
              ensuring a longer battery lifespan with our battery technology.
              Perfectly suited for fleet operators, especially in
              tourist-centric locations like Goa.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="text-4xl text-yellow-600">
            <FaUserFriends />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">Join Us</h2>
            <p>
              Our rugged yet aesthetically appealing scooters are engineered for
              longevity and reliability. Join us as we pioneer a new era in
              sustainable and dependable electric transportation.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <GiElectric className="mx-auto text-6xl text-blue-600 mb-4" />
        <p className="text-lg">
          Discover more about our commitment to revolutionizing electric
          mobility and how we can work together to build a better future.
        </p>
      </div>
    </div>
  );
};

export default About;
