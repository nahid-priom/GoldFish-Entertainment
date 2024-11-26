import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSection = () => {
  // Settings for react-slick slider
  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  return (
    <section className="max-w-7xl pt-24 lg:pt-32 py-4  lg:py-12 mx-auto">
      <div className="h-[240px] lg:h-[500px]">
        <Slider {...sliderSettings} className="h-full">
          {/* Slide 1 - YouTube Video */}
          <div>
            <iframe
              src="https://www.youtube.com/embed/BUnuNrlhx2Y"
              className="h-[240px] md:h-[500px] w-full object-fill rounded-lg shadow-lg"
              title="YouTube Video 1"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          {/* Slide 2 - YouTube Video */}
          <div>
            <iframe
              src="https://www.youtube.com/embed/yjIpzHSdGPc"
              className="h-[240px] md:h-[500px] w-full object-fill rounded-lg shadow-lg"
              title="YouTube Video 2"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default HeroSection;
