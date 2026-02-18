import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import OrangeAccentCircle from "../Models/OrangeAccentCircle.jsx";
import CornorGroup from "../assets/CornorGroup.png";

export default function StepsNew() {
    const steps = [
        { id: 1, title: "Assessment & Discovery", description: "Understand yourself and your team.", side: "left" },
        { id: 2, title: "Coaching & Facilitation", description: "Engage in culturally grounded, expert-led coaching.", side: "right" },
        { id: 3, title: "Learning Design", description: "Experience learning that's brain-friendly and action-focused.", side: "left" },
        { id: 4, title: "Reflection & Integration", description: "Connect insight to change through feedback and reflection.", side: "right" },
        { id: 5, title: "Sustainability & Impact", description: "Build lasting growth through systems, measurement, and support.", side: "left" },
    ];

    const [stepViews, setStepViews] = useState(new Array(steps.length).fill(false));

    const firstSegmentTop = 112;
    const distance = 218;
    const segmentHeight = 218;

    return (
        <div className="relative w-full max-w-5xl mx-auto py-10 md:py-16 px-4 md:px-0">
            <img
                src={CornorGroup}
                alt="corner decoration"
                className="hidden md:block absolute right-[-380px] top-[980px] -translate-y-1/2 w-[80px] h-[200px] pointer-events-none z-0"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none">
                <div
                    className="absolute rounded-full"
                    style={{
                        width: "138.76px",
                        height: "136.43px",
                        top: "-424px",
                        left: "-609px",
                        opacity: 0.04,
                        borderWidth: "11px",
                        borderStyle: "solid",
                        borderColor: "#f39300",
                        borderRadius: "100px",
                        boxShadow: "0px 4px 16px 0px rgb(43, 52, 118)",
                    }}
                />

                <div
                    className="absolute rounded-full"
                    style={{
                        width: "170.73px",
                        height: "126.57px",
                        top: "-504px",
                        left: "-629px",
                        transform: "rotate(-233.73deg)",
                        opacity: 0.04,
                        borderWidth: "11px",
                        borderStyle: "solid",
                        borderColor: "#f39300",
                        borderRadius: "100px",
                        boxShadow: "0px 4px 16px 0px rgb(43, 52, 118)",
                    }}
                />
            </div>

            <OrangeAccentCircle />

            {/* Timeline segments — desktop only */}
            {Array.from({ length: 4 }, (_, i) => {
                // Line is active if current step AND next step have been viewed
                const currentStepViewed = stepViews[i];
                const nextStepViewed = stepViews[i + 1];
                const isActive = currentStepViewed && nextStepViewed;
                const topPx = firstSegmentTop + i * distance;

                return (
                    <div
                        key={`segment-${i}`}
                        className="hidden md:block absolute left-1/2 -translate-x-1/2 w-1"
                        style={{ top: `${topPx}px`, height: `${segmentHeight}px` }}
                    >
                        {/* Base gray line */}
                        <div className="absolute inset-0 bg-[#E0E0E0]" />

                        {/* Animated blue line overlay */}
                        <div
                            className={`absolute top-0 left-0 right-0 bg-[#B8C5F0] transition-all duration-1000 ease-in-out ${
                                isActive ? 'h-[120%]' : 'h-0'
                            }`}
                        />
                    </div>
                );
            })}

            {steps.map((step) => {
                const index = step.id - 1;
                const { ref, inView } = useInView({ threshold: 0.4, triggerOnce: false });

                useEffect(() => {
                    setStepViews((prev) => {
                        const updated = [...prev];
                        updated[index] = inView;
                        return updated;
                    });
                }, [inView, index]);

                const isLeft = step.side === "left";

                return (
                    <div
                        key={step.id}
                        ref={ref}
                        className="group relative flex flex-col md:flex-row w-full mb-12 md:mb-16"
                    >

                    {/* STEP NUMBER */}
                        <div className="md:absolute md:left-1/2 md:-translate-x-1/2 md:top-1/2 md:-translate-y-1/2 mb-4 md:mb-0 flex justify-center z-10">
                            <div
                                className={`w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full
text-[16px] md:text-[20px] font-semibold shadow-lg transition-all duration-500
${
                                    inView
                                        ? "bg-[#E8EDF9] text-[#0F1C80]  border-[#B8C5F0]"
                                        : "bg-[#F5F5F5] text-[#666666] group-hover:bg-[#E8EDF9] group-hover:text-[#0F1C80]"
                                }`}

                            >
                                {step.id}
                            </div>
                        </div>

                        {/* LEFT CARD */}
                        {isLeft && (
                            <div className="w-full md:w-1/2 flex justify-center md:justify-end md:pr-16">
                                <StepCard step={step} inView={inView} isLeft />
                            </div>
                        )}

                        {/* SPACER FOR DESKTOP */}
                        <div className="hidden md:block w-1/2" />

                        {/* RIGHT CARD */}
                        {!isLeft && (
                            <div className="w-full md:w-1/2 flex justify-center md:justify-start md:pl-16">
                                <StepCard step={step} inView={inView} />
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
}

function StepCard({ step, inView, isLeft }) {
    return (
        <div
            className={`relative w-full min-h-[140px] md:min-h-[155px] px-6 md:px-10 py-6 md:py-10 rounded-[12px] shadow-md cursor-pointer transition-all duration-700 ease-in-out transform will-change-transform
  hover:-translate-y-2 hover:scale-[1.04] hover:shadow-[0px_18px_50px_rgba(0,0,0,0.14)] hover:bg-[linear-gradient(279.6deg,#FFFFFF_0.39%,rgba(15,28,128,0.15)_99.69%)]
  ${
                inView
                    ? "bg-[#E8EDF9] text-black"
                    : "bg-[#F0F0F0] text-black"
            }`}
        >

        {/* Arrow — desktop only */}
            <div
                className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-0 h-0 border-y-[15px] border-y-transparent transition-all duration-500 ease-in-out ${
                    isLeft
                        ? inView
                            ? "border-l-[20px] border-l-[#E8EDF9] -right-5"
                            : "border-l-[20px] border-l-[#F0F0F0] -right-5 group-hover:border-l-[#E8EDF9]"
                        : inView
                            ? "border-r-[20px] border-r-[#E8EDF9] -left-5"
                            : "border-r-[20px] border-r-[#F0F0F0] -left-5 group-hover:border-r-[#E8EDF9]"
                }`}

            />

            <h3 className="font-medium text-[#0f1c80] font-spartan text-[16px] md:text-[22px] mb-2 uppercase">
                {step.title}
            </h3>
            <p className="text-[14px] md:text-[17px] font-poppins leading-snug text-gray-800">
                {step.description}
            </p>
        </div>
    );
}