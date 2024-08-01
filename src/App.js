import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Compare from "./pages/Compare";
import PreBook from "./pages/PreBook";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Rentals from "./pages/Rentals";
import Policy from "./pages/Webpolicy";
import RefundPolicy from "./pages/Refundpolicy";
import PrivacyPolicy from "./pages/Privacypolicy";

const products = [
  {
    id: "se03-lite",
    title: "SE03 Lite",
    image: "./assets/rhyno final.95.png",
    description:
      "Indulge perfect harmony of power and range with this Rhyno. Offering an exhilarating experience with its robust 2000W motor, it ensures a thrilling ride while still delivering a stable 80-100 km range on a single charge. Like its counterparts, this machine features the safety assurance of a fire-safe advanced LFP battery, along with the comprehensive benefits of owning a Rhino. Boasting a formidable combination of a 2000W motor and a 2.7kWh battery, this beast is ready to roar on the roads, providing an electrifying journey at every turn.",
    specs: {
      battery: "1.8Kwh",
      motor: "1500W",
      maxRangeAt30kmh: "100 km",
      maxSpeed: "50 km/h",
      chargingTime: "3 hours (12A)",
      batteryWarranty: "3 Years",
      maxRangeAtFullSpeed: "70 km",
      maxRangeAt45kmh: "90 km",
      warrantyOnElectronics: "1 year",
      otherBenefits: [
        "Fire-safe battery",
        "Range prediction",
        "Comfortable ride",
        "Safe",
      ],
      batteryFeatures: [
        "LFP with 1500 cycles",
        "Active Balancing",
        "Waterproof (IP67)",
      ],
    },
  },
  {
    id: "se03",
    title: "SE03",
    image: "../assets/rhyno final.95.png",
    description:
      "Indulge in the perfect harmony of power and range with this Rhyno. Offering an exhilarating experience with its robust 2000W motor, it ensures a thrilling ride while still delivering an impressive 80-100 km range on a single charge. Like its counterparts, this machine features the safety assurance of a fire-safe advanced LFP battery, along with the comprehensive benefits of owning a Rhino. Boasting a formidable combination of a 2000W motor and a 2.7kWh battery, this beast is ready to roar on the roads, providing an electrifying journey at every turn.",
    specs: {
      battery: "2.7Kwh",
      motor: "1500W",
      maxRangeAt30kmh: "150 km",
      maxSpeed: "55 km/h",
      chargingTime: "4 hours (12A)",
      batteryWarranty: "3 Years",
      maxRangeAtFullSpeed: "70 km",
      maxRangeAt45kmh: "110 km",
      warrantyOnElectronics: "1 year",
      otherBenefits: [
        "Fire-safe battery",
        "Range prediction",
        "Comfortable ride",
        "Stable and safe",
      ],
      batteryFeatures: [
        "LFP with 1500 cycles",
        "Active Balancing",
        "Waterproof (IP67)",
      ],
    },
  },
  {
    id: "se03-max",
    title: "SE03 Max",
    image: "../assets/rhyno final.95.png",
    description:
      "Indulge in the perfect harmony of power and range with this Rhyno. Offering an exhilarating experience with its robust 2000W motor, it ensures a thrilling ride while still delivering an impressive 80-100 km range on a single charge. Like its counterparts, this machine features the safety assurance of a fire-safe advanced LFP battery, along with the comprehensive benefits of owning a Rhino. Boasting a formidable combination of a 2000W motor and a 2.7kWh battery, this beast is ready to roar on the roads, providing an electrifying journey at every turn.",
    specs: {
      battery: "2.7Kwh",
      motor: "1500W",
      maxRangeAt30kmh: "150 km",
      maxSpeed: "55 km/h",
      chargingTime: "4 hours (12A)",
      batteryWarranty: "3 Years",
      maxRangeAtFullSpeed: "90 km",
      maxRangeAt45kmh: "110 km",
      warrantyOnElectronics: "1 year",
      otherBenefits: [
        "Fire-safe battery",
        "Range prediction",
        "Comfortable ride",
        "Stable and safe",
      ],
      batteryFeatures: [
        "LFP with 1500 cycles",
        "Active Balancing",
        "Waterproof (IP67)",
      ],
    },
  },
];

function App() {
  return (
    <div className="font-sans bg-black min-h-screen">
      <Router>
        <Navbar />
        <div className="sm:pt-12"></div>
        <Routes>
          <Route path="/" element={<Home />} />
          {products.map((product) => (
            <Route
              key={product.id}
              path={`/products/${product.id}`}
              element={
                <Product
                  title={product.title}
                  description={product.description}
                  specs={product.specs}
                />
              }
            />
          ))}
          <Route path="/compare" element={<Compare />} />
          <Route path="/pre-book" element={<PreBook />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/rentals" element={<Rentals />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/refundpolicy" element={<RefundPolicy />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
