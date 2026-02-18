import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";
import invertedComa from "../assets/inverted-coma.svg";

const testimonials = [
  {
    id: 1,
    text: "Mashar’s coaching programs helped me reconnect with my purpose and lead my team with clarity and confidence. Their understanding of our culture made all the difference.",
    author: "Senior Leader, Oil & Gas Sector – GCC",
  },
  {
    id: 2,
    text: "As our industry evolves rapidly, Mashar’s leadership development program gave our managers the clarity, resilience, and cultural agility they need to lead with confidence.",
    author: "HR Director, Regional Telecom Provider",
  },
  {
    id: 3,
    text: "Mashar’s coaching helped me sharpen my decision-making and align my leadership style with our organizational culture.",
    author: "Head of Risk, Leading Bank in Kuwait",
  },
    {
    id: 4,
    text: "Mashar’s team coaching sessions helped us move from fragmented efforts to real collaboration. We left with practical tools, stronger communication, and a shared sense of purpose.",
    author: "Team Leader, Government Sector",
  },
  {
    id: 5,
    text: "Mashar’s mentoring program transformed our internal culture, encouraged knowledge-sharing, and built real trust across departments. The bilingual delivery also made it accessible across our diverse teams.",
    author: "Talent Development Manager, Multinational Company",
  },
];

const TestimonialCarousel = () => {
  const [settings, setSettings] = useState(null);

  useEffect(() => {
    const updateSettings = () => {
      const width = window.innerWidth;

      // If screen width < 768px → disable centerMode
      if (width < 700) {
        setSettings({
          infinite: true,
          centerMode: false,
          centerPadding: "0px",
          slidesToShow: 1,
          autoplay: true,
          autoplaySpeed: 3000,
          speed: 600,
          arrows: false,
          pauseOnHover: false,
          focusOnSelect: true,
        });
      } else {
        // Desktop/tablet config
        setSettings({
          infinite: true,
          centerMode: true,
          centerPadding: width >= 1280 ? "25%" : width >= 1024 ? "18%" : "12%",
          slidesToShow: 1,
          autoplay: true,
          autoplaySpeed: 3000,
          speed: 600,
          arrows: false,
          pauseOnHover: false,
          focusOnSelect: true,
        });
      }
    };

    updateSettings(); // Run once on mount
    window.addEventListener("resize", updateSettings);

    return () => window.removeEventListener("resize", updateSettings);
  }, []);

  // Prevent render until settings are ready
  if (!settings) return null;

  return (
    <div className="testimonial-slider w-full mx-auto px-2 sm:px-4 md:px-0 md:pt-[84px] md:pb-[84px]">
      <Slider {...settings}>
        {testimonials.map((item) => (
          <div key={item.id} className="px-2  sm:px-4">
            <div className="testimonial-card !opacity-100   rounded-2xl text-center px-4 sm:px-6 md:px-10 flex flex-col items-center justify-center">
              {/* Quotation Icon */}
              <div className="mb-4 sm:mb-6 md:mb-10">
                <img
                  src={invertedComa}
                  alt="quote"
                  className="w-6 sm:w-8 md:w-12 text-black"
                />
              </div>

              {/* Testimonial Text */}
              <p className="mb-3 sm:mb-5 md:mb-6 text-[#625B71] leading-relaxed max-w-[90%] sm:max-w-md font-medium font-poppins text-[10px] xs:text-[11px] sm:text-[12px] md:text-[13px] tracking-[0.5px] sm:tracking-[0.9px]">
                {item.text}
              </p>

              {/* Author */}
              <h4 className="font-medium text-[#625b71] font-poppins text-[10px] xs:text-[11px] sm:text-[12px] md:text-[10px] tracking-[0.5px] sm:tracking-[0.9px] mt-1 sm:mt-2 md:mt-4">
                {item.author}
              </h4>

              {/* Avatar */}
              {/*<div className="mt-3 sm:mt-4 w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden">*/}
              {/*  <img*/}
              {/*    src={`https://i.pravatar.cc/150?u=${item.id}`}*/}
              {/*    alt={item.author}*/}
              {/*    className="w-full h-full object-cover"*/}
              {/*  />*/}
              {/*</div>*/}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialCarousel;
