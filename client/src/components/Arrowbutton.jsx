import React from "react";
import { ArrowRight } from "lucide-react";

const ArrowButton = ({
                         text,
                         textSize = "16px",
                         fontWeight = "400",
                         className = "",
                         arrowColor = "#0f1c80",
                         onClick,
                         type = "button",
                     }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`group relative inline-flex w-fit items-center gap-2 sm:gap-4 px-4 py-2 sm:px-6 sm:py-3 rounded-full text-white bg-[#0f1c80] overflow-hidden transition-all duration-300 shadow-md ${className}`}
        >
            {/* Hover Gradient Overlay */}
            <div className="absolute right-0 top-0 h-full w-[100px] sm:w-[120px] bg-gradient-to-r from-transparent to-[#C05600] opacity-0 group-hover:opacity-100 transition-opacity" />

            {/* Text */}
            <span
                className="relative z-10 font-spartan whitespace-nowrap text-[14px] sm:text-[16px]"
                style={{ fontWeight }}
            >
        {text}
      </span>

            {/* Arrow */}
            <div className="relative z-10 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white flex items-center justify-center transition-all duration-500 rotate-[-45deg] group-hover:rotate-0">
                <ArrowRight
                    size={18}
                    strokeWidth={2.5}
                    className="text-[#0f1c80] group-hover:text-[#EB8F03] transition-colors duration-500"
                />
            </div>
        </button>
    );
};

export default ArrowButton;
