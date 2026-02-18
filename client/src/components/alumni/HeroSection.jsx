export default function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-2xl px-6 sm:px-8 lg:px-10 py-8 lg:py-10 bg-gradient-to-r from-[#1C1C1E] via-[#2C2C2E] to-[#2A6B7C] text-white flex flex-col lg:flex-row items-center">

      {/* glow circles */}
      <div className="absolute -top-20 -right-20 w-60 h-60 bg-yellow-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 left-1/3 w-60 h-60 bg-teal-400/10 rounded-full blur-3xl" />

      {/* LEFT CONTENT */}
      <div className="relative z-10 max-w-xl text-center lg:text-left">

        <p className="text-[10px] tracking-[3px] uppercase text-[#C9A84C] mb-2">
          ✦ Mashar Alumni Network
        </p>

        <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
          Connect with Your <br className="hidden sm:block" />
          <span className="text-[#C9A84C] italic">
            Coaching Network
          </span>
        </h1>

        <p className="mt-3 text-xs sm:text-sm text-white/70 leading-relaxed">
          Stay connected. Keep growing. Contribute to the profession.
        </p>

        {/* buttons */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-5">
          <button className="px-5 py-2 rounded-lg text-xs sm:text-sm font-semibold bg-gradient-to-r from-[#C9A84C] to-yellow-700 text-black">
            Explore Community
          </button>

          <button className="px-5 py-2 rounded-lg border border-white/30 text-xs sm:text-sm hover:border-[#C9A84C] hover:text-[#C9A84C] transition">
            View Events →
          </button>
        </div>
      </div>

      {/* RIGHT STATS */}
      <div className="relative z-10 flex flex-row lg:flex-col gap-8 lg:gap-5 mt-7 lg:mt-0 lg:ml-auto text-center lg:text-right">

        <Stat num="1,240+" label="Members" />
        <Divider />
        <Stat num="18" label="Countries" />
        <Divider />
        <Stat num="96%" label="Certified" />

      </div>

    </section>
  );
}


/* ---------- helpers ---------- */

function Stat({ num, label }) {
  return (
    <div>
      <p className="font-serif text-xl sm:text-2xl font-bold text-[#C9A84C]">
        {num}
      </p>
      <p className="text-[9px] sm:text-[10px] tracking-[2px] uppercase text-white/50">
        {label}
      </p>
    </div>
  );
}

function Divider() {
  return (
    <div className="hidden lg:block w-px h-8 bg-white/20 ml-auto" />
  );
}
