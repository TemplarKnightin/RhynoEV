import React from "react";
import { MdBatteryChargingFull } from "react-icons/md";
import { FaCarSide, FaTachometerAlt, FaCogs } from "react-icons/fa";
import { IoMdStats } from "react-icons/io";

const iconMap = {
  battery: (
    <MdBatteryChargingFull size={100} className="text-black md:text-5xl" />
  ),
  tyres: <FaCarSide size={100} className="text-black md:text-5xl" />,
  range: <IoMdStats size={100} className="text-black md:text-5xl" />,
  experience: <FaTachometerAlt size={100} className="text-black md:text-5xl" />,
  design: <FaCogs size={100} className="text-black md:text-5xl" />,
};

const FeatureCard = ({ title, description, iconType, isActive }) => {
  const activeStyle = isActive ? { backgroundColor: "#F59E0B" } : {};

  return (
    <div
      className="feature-card relative bg-white opacity-10 p-6 rounded-lg min-h-80 flex flex-col md:flex-row items-center justify-center gap-4"
      style={activeStyle}
    >
      {/* Render the appropriate icon based on iconType */}
      <div className="mb-4 md:mb-0 md:mr-4 flex-shrink-0">
        {iconMap[iconType] || null}
      </div>
      <div className="text-center md:text-left">
        <h3 className="text-2xl md:text-5xl font-bold mb-4 text-black-100">
          {title}
        </h3>
        <p className="hidden md:block text-black-300 text-justify max-w-2xl">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
