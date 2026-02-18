import React, { useState } from "react";
import ArrowButton from "./Arrowbutton";
import coachingImg from "../assets/CoachingFinal.jpeg";
import teamIcon from "../assets/Teamlogo.png";
import executiveIcon from "../assets/exective.png";
import groupIcon from "../assets/grouplogo.png";
import group1851 from "../assets/GroupBG.png";
import DiscoveryModal from "../Models/DiscoveryModal.jsx";
import CurvedLine from "../assets/CurvedLine.png";

const openCalendly = () => {
    window.open(
        "https://calendly.com/raja-20/15min?month=2026-01",
        "_blank",
        "noopener,noreferrer"
    );
};

const CoachingProgramsSection = () => {
    const [openModal, setOpenModal] = useState(false);

    const cards = [
        {
            icon: teamIcon,
            title: "Team Coaching",
            subtitle: "Ready to unlock high-performing teams?",
            description:
                "Unify teams around shared, purpose-driven goals and stronger collaboration and performance.",
            points: [
                "Functional or cross-functional teams",
                "Alignment, shared purpose, real accountability",
            ],
            footer:
                "Unleash collective strengths and align purpose so your people thrive together.",
            button: "Book a Team Program",
        },
        {
            icon: executiveIcon,
            title: "Executive Leadership Coaching",
            subtitle: "Ready to unlock the true leader within?",
            description:
                "One on one transformational coaching for leaders to strengthen influence, clarity, and purpose.",
            points: [
                "Executives, senior managers, rising stars",
                "Strategic clarity, emotional intelligence",
            ],
            footer:
                "Discover how we can help you become a more mindful and inspiring leader.",
            button: "Book a Team Coaching",
        },
        {
            icon: groupIcon,
            title: "Group Coaching",
            subtitle: "Ready to grow through group coaching?",
            description:
                "Discover peer powered learning through a collective coaching experience tailored around shared growth goals.",
            points: [
                "Personal growth in a shared journey",
                "Insight, reflection, enhanced communication",
            ],
            footer:
                "Experience powerful coaching within a group accelerating personal growth.",
            button: "Join a Group Session",
        },
    ];

    return (
        <>
            {/* ================= SECTION ================= */}
            <section className="relative bg-white px-6 py-20  lg:py-24 overflow-hidden">

                {/* ✅ CENTERED CONTAINER */}
                <div className="max-w-[1300px] mt-[45px] mx-auto">

                    {/* ================= TOP ================= */}
                    <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center">

                        {/* LEFT */}
                        <div className="relative px-4 sm:px-6 lg:px-0">

                            <img
                                src={group1851}
                                alt=""
                                className="absolute -top-20 left-[55%] w-40 opacity-80 pointer-events-none hidden lg:block"
                            />

                            <h2 className="font-spartan font-medium leading-[1.15] text-[clamp(28px,4.5vw,52px)] mb-8 relative z-10">
                                <span className="text-black">Coaching </span>
                                <span className="relative inline-block text-secondary">
                                    Programs
                                    <img
                                        src={CurvedLine}
                                        alt="curve"
                                        className="absolute left-1/2 -translate-x-1/2 -bottom-4 w-[clamp(160px,40vw,210px)]"
                                    />
                                </span>
                            </h2>

                            <h3 className="text-[#0F1C80] text-[clamp(15px,1.8vw,18px)] font-poppins font-medium mb-4 max-w-[520px]">
                                Where Insight Meets Action. Where Leaders Evolve.
                            </h3>

                            <p className="text-[16px] font-medium font-poppins mb-2 max-w-[520px]">
                                Culturally attuned coaching to sharpen clarity, purpose, and authentic impact.
                            </p>

                            <p className="text-[14px] font-poppins leading-relaxed mb-8 max-w-[520px]">
                                Transform how you lead, connect, and grow, with coaching programs
                                that understand your context, your challenges, and your potential.
                            </p>

                            <ArrowButton
                                text="Book a Discovery Call"
                                className="!px-8 !py-3.5"
                                onClick={openCalendly}
                            />
                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="flex justify-center px-4 sm:px-6 lg:px-0">
                            <div className="w-full max-w-[560px] aspect-[560/520] rounded-[28px] overflow-hidden shadow-lg">
                                <img
                                    src={coachingImg}
                                    alt="Coaching Programs"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* ================= CARDS ================= */}
                </div>
                <div className="mt-16 lg:mt-20">
                    <div className="flex flex-wrap justify-center gap-5">

                        {cards.map((card, idx) => (
                            <div
                                key={idx}
                                className="bg-[#f4f5f8]  w-[430px] rounded-[28px] p-8 sm:p-9 xl:p-10 flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-[0px_18px_50px_rgba(0,0,0,0.12)]"
                            >
                                {/* Icon */}
                                <img
                                    src={card.icon}
                                    alt=""
                                    className="w-[72px] h-[72px] object-contain mb-5"
                                />

                                <h4 className="text-[24px] font-spartan font-semibold mb-3">
                                    {card.title}
                                </h4>

                                <p className="text-[#0f1c80] font-poppins font-semibold text-[14px] mb-3">
                                    {card.subtitle}
                                </p>

                                <p className="text-[#444] font-poppins text-[14px] leading-[1.75] mb-5">
                                    {card.description}
                                </p>

                                <ul className="space-y-1 mb-6">
                                    {card.points.map((point, i) => (
                                        <li key={i} className="flex gap-3">
                                            <span className="text-[#0f1c80] font-bold">✓</span>
                                            <span className="text-[14px]">{point}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex-1" />

                                <p className="text-[#0f1c80] text-[14px] mb-6">
                                    {card.footer}
                                </p>

                                <ArrowButton
                                    text={card.button}
                                    className="!px-7 !py-[14px] w-fit"
                                    onClick={() => setOpenModal(true)}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= MODAL ================= */}
            <DiscoveryModal
                isOpen={openModal}
                onClose={() => setOpenModal(false)}
            />
        </>
    );
};

export default CoachingProgramsSection;
