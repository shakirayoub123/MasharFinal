import React, { useState } from "react";
import { X, Download } from "lucide-react";

const EmailDownloadModal = ({ isOpen, onClose, pdf, fileName }) => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    if (!isOpen) return null;

    const handleDownload = () => {
        if (!email || !/\S+@\S+\.\S+/.test(email)) {
            setError("Please enter a valid email address");
            return;
        }

        // OPTIONAL: send email to backend / analytics here
        // fetch("/api/save-email", { method: "POST", body: JSON.stringify({ email }) });

        const link = document.createElement("a");
        link.href = pdf;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        onClose();
        setEmail("");
        setError("");
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
            <div className="bg-white rounded-2xl w-[90%] max-w-md p-6 relative">
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 text-gray-500 hover:text-black"
                >
                    <X size={20} />
                </button>

                <h3 className="text-xl font-semibold mb-4 text-[#0F1C80]">
                    Read the full article
                </h3>

                <p className="text-[14px] font-poppins leading-[30px]  mb-4">
                    Enter your email to receive the download.
                </p>

                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                        setError("");
                    }}
                    className="w-full border rounded-lg px-4 py-3 mb-2 focus:outline-none focus:ring-2 focus:ring-[#0F1C80]"
                />

                {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

                <button
                    onClick={handleDownload}
                    className="w-full mt-4 flex items-center justify-center gap-2 bg-[#0F1C80] text-white py-3 rounded-lg hover:bg-[#0F1C90] transition"
                >
                    <Download size={18} />
                    Download PDF
                </button>
            </div>
        </div>
    );
};

export default EmailDownloadModal;
