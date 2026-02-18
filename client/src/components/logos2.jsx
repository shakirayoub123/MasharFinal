import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import logo1 from "../assets/log1.svg";
import logo2 from "../assets/log2.svg";
import logo3 from "../assets/log3.svg";
import logo4 from "../assets/log4.svg";
import logo5 from "../assets/log5.svg";
import logo6 from "../assets/log6.svg";
import logo7 from "../assets/log7.svg";
import logo8 from "../assets/log8.svg";
import logo9 from "../assets/log9.svg";
import CornorGroup from "../assets/CornorGroup.png";
import React from "react";

export default function GlobalSection() {
    const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo9, logo8];

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 2000,
        cssEase: "linear",
        slidesToShow: 7,
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
        <section className="">
            <div className="relative logo-slider">
                <img
                    src={CornorGroup}
                    alt="corner decoration"
                    className="absolute right-0 top-[100px] -translate-y-1/2 w-[80px] h-[200px] pointer-events-none z-0"
                />
                <Slider {...settings}>
                    {logos.map((logo, index) => (
                        <div key={index} className="flex justify-center my-12">
                            <img
                                src={logo}
                                alt={`logo-${index}`}
                                className="w-[143px] h-[115px] object-contain transition"
                            />

                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}
