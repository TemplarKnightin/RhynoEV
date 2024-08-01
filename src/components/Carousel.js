import React from "react";
import CustomCarousel from "./CustomCarousel";
import FeatureCard from "./FeatureCard";

const Carousel = () => {
  const items = [
    {
      title: "LFP Battery",
      description: `Rhyno is equipped with Lithium Iron Phosphate (LFP) batteries, renowned for their safety features—eliminating the risk of fire associated with other Lithium batteries. These batteries boast a broader temperature range, ideal for the diverse Indian climate. Our technology enhances Rhyno's longevity, complemented by an Active Balancing Smart Battery Management System (BMS) for extended life and reduced maintenance. Each battery undergoes rigorous waterproofing tests according to IP76 standards. But it doesn't stop there—our technology goes the extra mile in ensuring the battery's lasting durability. Connect with us to discover the thoughtful engineering behind our batteries!`,
      iconType: "battery",
    },
    {
      title: "Wider Tyres",
      description: `Now, say goodbye to skidding and embrace the leaning turns! Featuring first-of-its-kind, 9.5-inch wider tyres that make this machine an enormous beast that ensures stability on different terrains such as wet roads, mud, and sand.`,
      iconType: "tyres",
    },
    {
      title: "Range Prediction",
      description: `Many budget-friendly electric scooters overlook this crucial feature, causing riders to experience range anxiety. With Rhyno, you can ride with peace of mind, thanks to the scooter providing precise information about the remaining battery.`,
      iconType: "range",
    },
    {
      title: "Extraordinary Experience",
      description: `Rhyno is more than just a mode of transportation. It is an experience of sheer comfort and style! A seamless fusion of minimalism, sophistication, and a touch of masculinity!`,
      iconType: "experience",
    },
    {
      title: "Rugged and Simple Design",
      description: `We've had enough of the EVs looking and feeling like fragile plastic toys. Often fading out and shamelessly breaking in minor accidents, ending up spending weeks and months at service stations for complex repairs. We took a bold step of making something raw, rugged, and practical. We kept it so simple that even your trusted local mechanic can understand and repair most of it. If you have reached this far, why not to take a test ride? Click here to locate your nearest dealership or book a test ride at your home!`,
      iconType: "design",
    },
  ];

  return (
    <section className="my-16">
      <CustomCarousel>
        {items.map((item, index) => (
          <FeatureCard
            key={index}
            title={item.title}
            description={item.description}
            iconType={item.iconType}
          />
        ))}
      </CustomCarousel>
    </section>
  );
};

export default Carousel;
