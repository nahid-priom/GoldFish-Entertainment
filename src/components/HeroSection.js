import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from "../assets/banner1.png"
import banner2 from "../assets/banner2.png"



const HeroSection = () => {
  // Settings for react-slick slider
  const sliderSettings = {
   
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <section className="max-w-7xl pt-24 lg:pt-32 py-8 lg:py-12 mx-auto">
      <div className="h-[200px] lg:h-[500px]">
        <Slider {...sliderSettings} className="h-full">
          {/* Slide 1 */}
          <div>
            <img
              src={banner2}
              alt="Featured Cartoon Poster 1"
              className="h-[200px] md:h-[500px] w-full object-fill rounded-lg shadow-lg"
            />
          </div>
          {/* Slide 2 */}
          <div>
            <img
              src={banner1}
              alt="Featured Cartoon Poster 2"
              className="h-[200px] md:h-[500px] w-full object-fill rounded-lg shadow-lg"
            />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default HeroSection;
