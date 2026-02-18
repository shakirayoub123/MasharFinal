import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Hero image
import heroImg from "../assets/heroEvents.jpg";

// Temp images for carousel
import img1 from "../assets/article1.jpg";
import img2 from "../assets/article2.jpg";
import img3 from "../assets/article3.jpg";
import img4 from "../assets/article4.jpg";
import img5 from "../assets/article5.jpg";

const heroImages = [heroImg, img1, img2, img3, img4, img5];

const sections = [
    { label: "ARTICLES", path: "/articles" },
    { label: "BOOKS", path: "/books" },
    { label: "VIDEOS", path: "/videos" },
    { label: "EVENTS", path: "/events" },
];

const Events = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [currentHero, setCurrentHero] = useState(0);

    /* ================= ROUTE INDEX ================= */
    const currentIndex = sections.findIndex(
        (s) => s.path === location.pathname
    );

    /* ================= HERO IMAGE ================= */
    const prevHeroImage = () => {
        setCurrentHero((prev) =>
            prev === 0 ? heroImages.length - 1 : prev - 1
        );
    };

    const nextHeroImage = () => {
        setCurrentHero((prev) =>
            prev === heroImages.length - 1 ? 0 : prev + 1
        );
    };

    /* ================= ROUTE NAV ================= */
    const goPrev = () => {
        const prev =
            currentIndex === 0 ? sections.length - 1 : currentIndex - 1;

        navigate(sections[prev].path);
        prevHeroImage();
    };

    const goNext = () => {
        const next =
            currentIndex === sections.length - 1 ? 0 : currentIndex + 1;

        navigate(sections[next].path);
        nextHeroImage();
    };

    return (
        <div className="bg-white font-spartan">

            {/* ================= HERO ================= */}
            <header className="relative h-[200px]  sm:min-h-[400px] lg:min-h-[500px] flex flex-col justify-center items-center text-white text-center p-8">

                <img
                    src={heroImages[currentHero]}
                    alt="Events Hero"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/40" />

                <h1 className="relative z-10 text-5xl font-semibold tracking-wide">
                    {sections[currentIndex]?.label || "EVENTS"}
                </h1>

                <button
                    onClick={goPrev}
                    className="absolute left-6 z-20 bg-black/40 hover:bg-black/60 p-3 rounded-full transition"
                >
                    <ChevronLeft size={28} />
                </button>

                <button
                    onClick={goNext}
                    className="absolute right-6 z-20 bg-black/40 hover:bg-black/60 p-3 rounded-full transition"
                >
                    <ChevronRight size={28} />
                </button>
            </header>

            {/* ================= COMING SOON ================= */}
            <section className="pt-16 pb-20 sm:pt-24 sm:pb-28 lg:pt-28 lg:pb-32 text-center px-6">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium">
                    COMING SOON
                </h2>

                <div className="flex justify-center mt-2">
                    <svg width="240" height="20" viewBox="0 0 240 20">
                        <defs>
                            <linearGradient id="articlesCurveGradient">
                                <stop offset="0%" stopColor="#1E40FF" />
                                <stop offset="12%" stopColor="#000" />
                                <stop offset="88%" stopColor="#000" />
                                <stop offset="100%" stopColor="#1E40FF" />
                            </linearGradient>
                        </defs>
                        <path
                            d="M4 14 C80 2 160 2 236 14"
                            stroke="url(#articlesCurveGradient)"
                            strokeWidth="7"
                            strokeLinecap="round"
                            fill="none"
                        />
                    </svg>
                </div>

                <p className="text-gray-700 text-[15px] max-w-[520px] mt-10 mx-auto leading-[28px]">
                    Sessions will be added as we begin our monthly webinar series.
                </p>

            </section>
        </div>
    );
};

export default Events;
