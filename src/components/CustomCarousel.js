import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomCarousel = ({ children }) => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "10%", // Default center padding
    arrows: true,
    dots: true,
    speed: 500,
    responsive: [
      {
        breakpoint: 768, // Adjust the breakpoint as needed
        settings: {
          centerPadding: "0px", // No center padding for smaller screens
        },
      },
    ],
  };

  return (
    <div className="relative">
      <Slider {...settings}>
        {React.Children.map(children, (child) => (
          <div className="relative">
            <div className="px-4 min-h-[30rem] flex flex-col justify-center">
              {child}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CustomCarousel;
