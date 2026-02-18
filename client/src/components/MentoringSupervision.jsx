import ArrowButton from "./Arrowbutton";
import mentoringImg from "../assets/MentoringFinal.jpeg";
import icfIcon from "../assets/icfIcon.png";
import eqaIcon from "../assets/eqa.svg";
import group1851 from "../assets/GroupBG.png";
import React, { useState } from "react";
import DiscoveryModal from "../Models/DiscoveryModal.jsx";
import CurvedLine from "../assets/CurvedLine.png";

const openCalendly = () => {
    window.open(
        "https://calendly.com/raja-20/15min?month=2026-01",
        "_blank",
        "noopener,noreferrer"
    );
};

const MentoringSupervision = () => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            {/* ================= SECTION ================= */}
            <section className="relative bg-white px-6 py-20 lg:py-24 overflow-hidden">

                {/* ✅ CENTERED CONTAINER */}
                <div className="max-w-[1300px] mx-auto">

                    {/* ================= HERO ================= */}
                    <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center">

                        {/* LEFT */}
                        <div className="relative pt-12 lg:pt-16 px-4 sm:px-6 lg:px-0">

                            <img
                                src={group1851}
                                alt=""
                                className="absolute -top-20 right-0 lg:left-[55%] w-36 lg:w-44 opacity-80 pointer-events-none"
                            />

                            <h2 className="font-spartan font-medium leading-[1.15] text-[clamp(28px,4.5vw,52px)] mb-8 relative z-10">
                                <span className="text-black">Mentoring & </span>
                                <span className="relative inline-block text-secondary">
                                    Supervision
                                    <img
                                        src={CurvedLine}
                                        alt="curve"
                                        className="absolute left-1/2 -translate-x-1/2 -bottom-4 w-[clamp(160px,40vw,210px)]"
                                    />
                                </span>
                            </h2>

                            <h3 className="text-[#0F1C80] text-[clamp(15px,1.8vw,18px)] font-poppins font-medium mb-4 max-w-[520px]">
                                Where Reflection Fuels Mastery. Where Coaches Thrive.
                            </h3>

                            <p className="text-[14px] font-poppins leading-[28px] text-black mb-4 max-w-[520px]">
                                Accredited programs for coaches and mentors pursuing certification
                                or mastery.
                            </p>

                            <p className="text-[16px] font-poppins font-medium leading-[30px] text-black  mb-8 max-w-[520px]">
                                Shape the future, yours and theirs, with mentoring that matters.
                            </p>

                            <ArrowButton
                                text="Book a Discovery Call"
                                textSize="text-[clamp(12px,1.4vw,16px)]"
                                className="!px-8 !py-3.5"
                                onClick={openCalendly}
                            />
                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="flex justify-center px-4 sm:px-6 lg:px-0">
                            <div className="w-full max-w-[560px] aspect-[560/520] rounded-[28px] overflow-hidden shadow-lg">
                                <img
                                    src={mentoringImg}
                                    alt="Mentoring"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* ================= CARDS ================= */}
                    <div className="mt-16 lg:mt-20 flex justify-center">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-[36px] mt-[110px]">
                            {/* CPCP */}
                            <div className="bg-[#f2f2f2] rounded-[22px] p-[36px] flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-[0px_18px_50px_rgba(0,0,0,0.12)]">
                                <div>
                                    <img src={icfIcon} alt="ICF" className="w-16 mb-6" />
                                    <h4 className="text-[22px] font-bold mb-3">
                                        Certified Professional Coach Program
                                    </h4>
                                    <p className="text-[#0f1c80] font-semibold mb-2">ICF-accredited</p>
                                    <p className="text-[#0f1c80] font-semibold mb-5">
                                        10-day training + 10-hour supervision
                                    </p>
                                    <p className="text-gray-700 leading-[26px] mb-6">
                                        Advance your coaching with theory, practice, and reflective
                                        supervision. Designed to sharpen your coaching competencies,
                                        boost confidence, and prepare you for certification.
                                    </p>

                                    <ul className="space-y-3 mb-6 text-[15px]">
                                        <li className="flex gap-3">
                                            <span className="text-[#0f1c80] font-bold">✓</span>
                                            Internal coaches, consultants, professionals seeking
                                            certification
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="text-[#0f1c80] font-bold">✓</span>
                                            ICF competencies, advanced tools, certification-ready hours
                                        </li>
                                    </ul>
                                </div>

                                <ArrowButton
                                    text="Start Your Coaching Journey"
                                    textSize={window.innerWidth < 640 ? "12px" : "16px"}
                                    className="!px-6 w-fit max-w-full"
                                    onClick={() => setOpenModal(true)}
                                />
                            </div>

                            {/* MENTORING */}
                            <div className="bg-[#f2f2f2] rounded-[22px] p-[36px] flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-[0px_18px_50px_rgba(0,0,0,0.12)]">
                                <div>
                                    <img src={eqaIcon} alt="EQA" className="w-20 mb-6" />
                                    <h4 className="text-[22px] font-bold mb-3">
                                        Certified Professional Mentoring Program
                                    </h4>
                                    <p className="text-[#0f1c80] font-semibold mb-2">
                                        EMCC-accredited
                                    </p>
                                    <p className="text-[#0f1c80] font-semibold mb-5">
                                        Foundation + Practitioner Levels + Supervision
                                    </p>
                                    <p className="text-gray-700 leading-[26px] mb-6">
                                        Grow as a mentor through reflective dialogue and ethical
                                        guidance. Build your mentoring capabilities while gaining
                                        internationally recognized credentials.
                                    </p>

                                    <ul className="space-y-3 mb-6 text-[15px]">
                                        <li className="flex gap-3">
                                            <span className="text-[#0f1c80] font-bold">✓</span>
                                            Mentors and coaches at any stage of their professional practice
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="text-[#0f1c80] font-bold">✓</span>
                                            Mentoring mastery, supervision, international credentials
                                        </li>
                                    </ul>
                                </div>

                                <ArrowButton
                                    text="Start Your IFC Coaching Journey"
                                    textSize={window.innerWidth < 640 ? "12px" : "16px"}
                                    className="!px-6 w-fit max-w-full"
                                    onClick={() => setOpenModal(true)}
                                />
                            </div>
                        </div>
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

export default MentoringSupervision;
