import React, { useState } from "react";
import teamMashar from "../assets/CustomFinal.jpeg";
import DiscoveryModal from "../Models/DiscoveryModal.jsx";
import ArrowButton from "./Arrowbutton.jsx";
import CurvedLine from "../assets/CurvedLine.png";
import CornorGroup from "../assets/CornorGroup.png";

const CustomSolutions = () => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <section className="
            bg-white
px-6 sm:px-10 lg:px-16 xl:px-[150px]
mt-6 sm:mt-0
pt-[100px] sm:pt-[100px] lg:pt-[140px]
pb-[40px] lg:pb-[100px]
relative overflow-hidden

            ">

                {/* corner decoration */}
                <img
                    src={CornorGroup}
                    alt="corner decoration"
                    className="absolute right-0 top-1/2 -translate-y-1/2 w-[80px] h-[200px] pointer-events-none z-0"
                />

                <div className="max-w-7xl mx-auto relative z-10">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

                        {/* LEFT IMAGE — UNCHANGED */}
                        {/* LEFT IMAGE — RESPONSIVE */}
                        <div className="relative w-full min-w-0">
                            <img
                                src={teamMashar}
                                alt="Custom Events"
                                className="
      w-full
      h-[260px] sm:h-[360px] lg:h-[517px]
      object-cover
      rounded-2xl
    "
                            />
                        </div>


                        {/* RIGHT CONTENT — UNCHANGED */}
                        <div className="flex flex-col justify-center w-full max-w-[560px] min-w-0">

                            <h2 className="font-spartan font-medium leading-[1.15] text-[clamp(28px,4.5vw,52px)] sm:mb-8 lg:mb-10 relative z-10 mb-8">
                                <span className="text-black">Custom </span>
                                <span className="relative inline-block text-secondary pb-4">
            Solutions
            <img
                src={CurvedLine}
                alt="curve"
                className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[190px]"
            />
          </span>
                            </h2>

                            <h3 className="text-[#0F1C80] text-[18px] font-poppins font-medium mb-6">
                                Designed Around You. Built for Lasting Change.
                            </h3>

                            <p className="text-[14px] font-poppins leading-[28px] text-black mb-10">
                                Every organization is unique, so are our solutions. From leadership
                                capacity to culture alignment, we design tailored programs that are
                                relevant, interactive, and sustainable.
                            </p>

                            <p className="text-[14px] font-poppins leading-[28px] text-black mb-10">
                                Whether you're building leadership capacity, aligning teams, or
                                enhancing emotional agility, we create experiences that prepare you
                                for tomorrow's challenges and opportunities.
                            </p>

                            <ArrowButton
                                text="Request a Custom Workshop"
                                textSize="text-[clamp(11px,1.4vw,16px)]"
                                className="!px-6 sm:!px-8 lg:!px-10 !py-3 sm:!py-3.5 lg:!py-4 w-fit max-w-full"
                                onClick={() => setOpenModal(true)}
                            />
                        </div>

                    </div>
                </div>
            </section>


            {/* MODAL */}
            <DiscoveryModal
                isOpen={openModal}
                onClose={() => setOpenModal(false)}
            />
        </>
    );
};

export default CustomSolutions;
