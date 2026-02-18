import { Header } from "./CardHeader";

export default function Spotlight() {
  return (
    <div className="bg-white rounded-xl border p-6">

      <Header
        title="✨ Alumni Spotlight"
        desc="Celebrating the impact of our alumni community"
        link="See more"
      />

      <div className="bg-gradient-to-br from-[#1C1C1E] to-[#2C2C2E] rounded-xl p-5 text-white relative overflow-hidden">

        <div className="absolute right-3 -top-4 text-[80px] text-[#C9A84C]/10">
          ★
        </div>

        <div className="flex gap-3 items-center mb-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C9A84C] to-[#2A6B7C] flex items-center justify-center font-serif font-bold text-black">
            NM
          </div>

          <div>
            <p className="font-serif text-[#C9A84C]">
              Nour Al-Mansouri
            </p>
            <p className="text-xs text-white/50">
              Executive Coach · UAE · Mashar 2021
            </p>
          </div>
        </div>

        <p className="text-sm italic text-white/80 leading-relaxed">
          “Three years after graduation, I now lead a team of 12 coaches across the Gulf region. Mashar gave me the foundation — and this community gave me the wings.”
        </p>

      </div>
    </div>
  );
}
