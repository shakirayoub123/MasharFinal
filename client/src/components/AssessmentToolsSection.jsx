import ArrowButton from "./Arrowbutton";
import assessmentImg from "../assets/AssessmenFinal.jpeg";
import group1851 from "../assets/GroupBG.png";
import React, { useState } from "react";
import DiscoveryModal from "../Models/DiscoveryModal.jsx";
import netwotkgif from "../assets/netwotkgif.gif";
import CurvedLine from "../assets/CurvedLine.png";

const openCalendly = () => {
    window.open(
        "https://calendly.com/raja-20/15min?month=2026-01",
        "_blank",
        "noopener,noreferrer"
    );
};

const AssessmentToolsSection = () => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            {/* ================= SECTION ================= */}
            <section className="relative bg-white px-6 lg:px-[220px] mt-[20px] pt-[80px] pb-[140px] overflow-hidden">
                {/* TOP GRID */}
                <img
                    src={netwotkgif}
                    alt=""
                    className="w-[80px]  opacity-80"
                />
                <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-10 xl:gap-12 items-start">

                    {/* LEFT CONTENT */}
                    <div className="relative px-4 sm:px-6 lg:pt-[50px] lg:px-0 min-w-0">

                        {/* Decorative element */}
                        <img
                            src={group1851}
                            alt=""
                            className="hidden lg:block absolute -top-12 sm:-top-16 lg:-top-20 xl:-top-24 right-0 sm:right-[10%] lg:left-[55%] xl:left-[60%] w-28 sm:w-36 lg:w-40 xl:w-48 opacity-80 pointer-events-none"
                        />

                        {/* Heading */}
                        <h2 className="font-spartan font-medium leading-[1.15] text-[clamp(36px,4.5vw,52px)] mb-10 relative z-10">
      <span className="relative inline-block text-black">
        Assessment&nbsp;
          <img
              src={CurvedLine}
              alt="curve"
              className="absolute left-1/2 -translate-x-1/2 -bottom-4 w-[clamp(160px,40vw,210px)] max-w-none"
          />
      </span>
                            <span className="relative inline-block text-secondary">
        Tools
      </span>
                        </h2>

                        <h3 className="text-[#0F1C80] text-[clamp(15px,1.8vw,18px)] font-poppins font-medium lg:pb-[8px] mb-3 sm:mb-4 leading-snug max-w-[90%] lg:max-w-full">
                            Where Insight Becomes Clarity. Where Teams Unlock Potential.
                        </h3>

                        <p className="text-[14px] font-poppins leading-[28px] text-black mb-1">
                            Research backed tools for today’s fast moving organizations giving you
                            the clarity to take intentional action. We help you see the whole
                            picture, uncovering what often goes unseen: team dynamics, communication
                            patterns, and leadership blind spots that shape culture and performance.
                        </p>

                        <p className="text-[16px] font-medium font-poppins mb-10 leading-[30px] text-black">
                            Reveal what drives your people. Rethink how your teams work.
                        </p>

                        <ArrowButton
                            text="Book a Discovery Call"
                            textSize="12px sm:16px"
                            className="!px-10 mb-6 sm:mb-0"
                            onClick={openCalendly}
                        />
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="flex mt-6 sm:mt-10 lg:mt-0 justify-center lg:justify-end px-4 sm:px-6 lg:px-0 min-w-0">
                        <div className="w-full max-w-[340px] sm:max-w-[440px] md:max-w-[500px] lg:max-w-[560px] aspect-[560/520] rounded-2xl sm:rounded-3xl lg:rounded-[28px] overflow-hidden shadow-lg">
                            <img
                                src={assessmentImg}
                                alt="Assessment Tools"
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                    </div>

                </div>

                {/* ================= CARDS ================= */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 mt-20 sm:mt-28">
                    {/* GEDI */}
                    <div className="bg-[#f4f5f8] rounded-[22px] p-6 sm:p-9 flex flex-col justify-between hover:-translate-y-2 transition-all">
                        <div>
                            {/*<img src={brainIcon} alt="" className="w-[60px] mb-5" />*/}
                            <h4 className="text-xl sm:text-[22px] leading-relaxed font-bold mb-3">
                                GEDI – Global Executive Dynamics  Inventory
                                (20 minutes)
                            </h4>
                            <p className="text-[#0f1c80] text-[18px] font-semibold mb-4">
                                Understand how your executive team engages, leads, and performs.
                            </p>
                            <p className="text-[16px] font-poppins leading-[28px] mb-6">
                                This 20 minute, research based group assessment delivers actionable
                                insights into how senior teams function,
                                spanning engagement, power dynamics, adaptability, strategic
                                alignment, and decision making.
                            </p>

                            <ul className="space-y-2 mb-6 ">
                                <li className="flex gap-3 text-[16px] font-poppins">
                                    <span className="text-[#0f1c80] font-bold">✓</span>
                                    For: Executives, senior leadership teams
                                </li>
                                <li className="flex gap-3 text-[16px] font-poppins">
                                    <span className="text-[#0f1c80] font-bold">✓</span>
                                    You’ll gain: Actionable intelligence on influence patterns,
                                    adaptability, and team alignment
                                </li>
                            </ul>
                        </div>

                        <ArrowButton
                            text="Book Your Executive Team Debfief"
                            textSize={window.innerWidth < 640 ? "12px" : "16px"}
                            className="12px sm:16p"
                            onClick={() => setOpenModal(true)}
                        />
                    </div>

                    {/* TAWDI */}
                    <div className="bg-[#f4f5f8] rounded-[22px] p-6 sm:p-9 flex flex-col justify-between hover:-translate-y-2 transition-all">
                        <div>
                            {/*<img src={dnaIcon} alt="" className="w-[60px] mb-5" />*/}
                            <h4 className="text-xl sm:text-[22px] leading-relaxed font-bold mb-3">
                                TAWDI – Team & Workplace Dynamics Inventory (10 minutes)
                            </h4>
                            <p className="text-[#0f1c80] text-[18px] font-semibold mb-9">
                                Unlock the behavioral blueprint of your teams.
                            </p>
                            <p className="text-[16px] font-poppins leading-[28px] mb-6">
                                In just 10 minutes, this assessment uncovers how your people
                                collaborate, communicate, and show up in teams. Combined with a
                                coaching debrief, TAWDI provides deep awareness into what drives or
                                drains team performance.
                            </p>

                            <ul className="space-y-3 mb-6 text-[15px]">
                                <li className="flex gap-3 text-[16px] font-poppins">
                                    <span className="text-[#0f1c80] font-bold">✓</span>
                                    For: Cross functional teams at all levels
                                </li>
                                <li className="flex gap-3 text-[16px] font-poppins">
                                    <span className="text-[#0f1c80] font-bold">✓</span>
                                    You’ll gain: Personal and group profiles, clarity on team
                                    strengths, cohesion, and behavioral dynamics
                                </li>
                            </ul>
                        </div>

                        <ArrowButton
                            text="Get Your Team Assessed"
                            textSize="16px"
                            className="12px sm:16p mt-4"
                            onClick={() => setOpenModal(true)}
                        />
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

export default AssessmentToolsSection;
