import { Header } from "./CardHeader";

export default function Notifications() {
  const items = [
    { icon:"📅", text:"Mentoring session tomorrow at 3PM", time:"2 hours ago", bg:"bg-[#FFF3E0]" },
    { icon:"🎓", text:"Your CPD submission is due Feb 20", time:"Yesterday", bg:"bg-[#EAF4F7]" },
    { icon:"🏅", text:"Summit early bird ends in 3 days", time:"2 days ago", bg:"bg-[#F5EDD6]" }
  ];

  return (
    <div className="relative bg-white rounded-xl border p-6">

      {/* HEADER */}
      <div className="mb-5">
        <h3 className="font-serif text-lg text-[#1C1C1E]">
          🔔 Notifications
        </h3>

        <p className="text-xs text-gray-400 mt-1">
          Reminders & updates
        </p>

        {/* badge */}
        <div className="absolute top-5 right-5 bg-red-600 text-white text-[10px] font-bold px-2 py-[3px] rounded-full">
          5 new
        </div>
      </div>

      {/* LIST */}
      <div className="divide-y">

        {items.map((n,i)=>(
          <div key={i} className="flex gap-3 py-4">

            <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${n.bg}`}>
              {n.icon}
            </div>

            <div>
              <p className="text-sm text-[#1C1C1E] leading-snug">
                {n.text}
              </p>

              <p className="text-xs text-gray-400 mt-1">
                {n.time}
              </p>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
}
