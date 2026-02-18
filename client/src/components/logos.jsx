import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import logo1 from "../assets/frame-1.svg";
import logo2 from "../assets/frame-2.svg";
import logo3 from "../assets/frame-1000002345-1-(1).svg";
import logo4 from "../assets/frame-1000002345-1.svg";

import logo5 from "../assets/frame-1000002349.svg";
import logo6 from "../assets/frame-1000002347.svg";
import logo7 from "../assets/gulf-bank-logo-EC3E102E69-seeklogo.com 1.svg";

export default function LeadersSection() {
  const logos = [logo1, logo2,  logo4, logo5, logo6, logo7, logo3];

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 2000,
    cssEase: "linear",
    slidesToShow: 6,
    slidesToScroll: 1,
    centerMode: false,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <section className="mt-[-50px]">
      <div className="logo-slider">
        <Slider {...settings}>
          {logos.map((logo, index) => (
            <div key={index} className="flex md:pt-[100px] justify-center">
                <img
                    src={logo}
                    alt={`logo-${index}`}
                    className="w-[140px] h-[130px] object-contain opacity-100 transition"
                />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
