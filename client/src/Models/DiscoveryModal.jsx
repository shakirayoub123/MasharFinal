import React, { useEffect } from "react";
import { X, ChevronDown } from "lucide-react";

export default function DiscoveryModal({ isOpen, onClose }) {
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "auto";
        return () => (document.body.style.overflow = "auto");
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40" onClick={onClose} />

            {/* Modal */}
            <div
                className="
          relative
          bg-white
          w-[724px]
          h-[571px]
          max-w-[95vw]
          max-h-[95vh]
          rounded-[12px]
          shadow-2xl
          flex
          flex-col
          gap-[16px]
          pt-[24px]
          pr-[12px]
          pb-[24px]
          pl-[12px]
          overflow-y-auto
        "
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="
            absolute
            top-4
            right-4
            w-9
            h-9
            rounded-full
            border-[1.5px]
            border-[#2B3476]
            flex
            items-center
            justify-center
            z-10
            hover:bg-gray-50
            transition
          "
                >
                    <X className="text-[#2B3476] w-4 h-4" strokeWidth={2.5} />
                </button>

                {/* CONTENT */}
                <div className="flex flex-col gap-4 px-4 sm:px-6">
                    {/* Heading */}
                    {/*<h2 className="text-[28px] sm:text-[32px] font-medium pr-10 leading-tight">*/}
                    {/*    <span className="text-[#2B3476]">Let's &nbsp;</span>*/}
                    {/*    <span className="text-[#F39300]">Discuss</span>*/}
                    {/*</h2>*/}

                    {/* Intro */}
                    <p className="font-poppins text-[18px] leading-[28px] text-[#2B3476] font-medium">
                        Every leader, team, and organization faces moments of complexity.
                       <br />
                        At Mashar, we start by listening.
                    </p>

                    {/* Description */}
                    <div className="font-poppins text-[14px] leading-[24px] text-black">
                        <p className="">In a 15-minute discovery conversation, you'll:</p>
                        <ul className="list-disc pl-5 ">
                            <li>Share what you're currently facing.</li>
                            <li>Gain clarity on what may be holding progress back.</li>
                            <li>Explore whether Mashar's programs or tools are right for you.</li>
                        </ul>
                        <p className="pt-2">No cost. No obligation.</p>
                        <p className="md:mt-[-5px]">Just a focused conversation to help you move forward.</p>
                    </div>

                    {/* Highlight */}
                    <p className="font-poppins text-[16px] leading-[24px] text-[#2B3476] font-medium">
                        Let's talk.
                    </p>

                    {/* Form */}
                    <form className="flex flex-col gap-4 font-poppins">
                        {/* Full Name */}
                        <input
                            type="text"
                            placeholder="Full Name*"
                            required
                            className="w-full h-[44px] sm:h-[48px] rounded-[12px] border-[1.5px] border-[#0F1C80] px-4 text-[14px]"
                        />

                        {/* Email */}
                        <input
                            type="email"
                            placeholder="Email Address*"
                            required
                            className="w-full h-[44px] sm:h-[48px] rounded-[12px] border-[1.5px] border-[#0F1C80] px-4 text-[14px]"
                        />

                        {/* Company (Optional) */}
                        <input
                            type="text"
                            required
                            placeholder="Company*"
                            className="w-full h-[44px] sm:h-[48px] rounded-[12px] border-[1.5px] border-[#0F1C80] px-4 text-[14px]"
                        />

                        {/* Select */}
                        <div className="relative">
                            <select
                                required
                                defaultValue=""
                                className="w-full h-[44px] sm:h-[48px] rounded-[12px] border-[1.5px] border-[#0F1C80] px-4 pr-10 text-[14px] text-gray-500 appearance-none cursor-pointer"
                            >
                                <option value="" disabled>
                                    How can we help you?
                                </option>
                                <option>Coaching</option>
                                <option>Training</option>
                                <option>Mentoring & Supervision</option>
                                <option>Assessments</option>
                                <option>Custom Solutions</option>
                            </select>
                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4 pointer-events-none" />
                        </div>

                        {/* Textarea */}
                        <textarea
                            rows={3}
                            placeholder="Your Biggest Challenge"
                            required
                            className="w-full rounded-[12px] border-[1.5px] border-[#0F1C80] px-4 py-3 text-[14px]"
                        />

                        {/* Checkbox (Optional) */}
                        <label className="flex items-start gap-3 text-[14px] cursor-pointer">
                            <input
                                type="checkbox"
                                className="mt-1 w-4 h-4 accent-[#0F1C80]"
                            />
                            <span>
            Yes, I'd like to receive leadership insights and updates from Mashar.
        </span>
                        </label>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 pt-2">

                            <button
                                type="submit"
                                className="flex-1 h-[46px] rounded-[999px] bg-[#14247B] text-white font-semibold text-[14px]"
                            >
                                SUBMIT
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
