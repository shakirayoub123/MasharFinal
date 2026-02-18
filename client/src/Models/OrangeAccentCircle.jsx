export default function OrangeAccentCircle() {
    return (
        <div className="absolute left-[350px] top-[30%] -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none">
            <div className="relative w-[186px] h-[186px] rounded-full">
                {/* Soft ring */}
                <div
                    className="absolute inset-0 rounded-full"
                    style={{
                        border: "14px solid rgba(243,147,0,0.12)",
                    }}
                />

                {/* Dotted texture */}
                <div
                    className="absolute inset-[18px] rounded-full"
                    style={{
                        backgroundImage:
                            "radial-gradient(rgba(243,147,0,0.18) 1px, transparent 1px)",
                        backgroundSize: "18px 18px",
                        opacity: 0.25,
                    }}
                />
            </div>
        </div>
    );
}
