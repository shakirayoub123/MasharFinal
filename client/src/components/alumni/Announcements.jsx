import { Header } from "./CardHeader";

export default function Announcements() {
  const data = [
    { tag: "New Event", title: "Alumni Leadership Summit 2026 — Registration Now Open", date: "Feb 14, 2026", color: "bg-[#C9A84C]" },
    { tag: "Resource", title: "New ICF Competency Framework resources added", date: "Feb 10, 2026", color: "bg-[#2A6B7C]" },
    { tag: "Platform", title: "Mentorship Program Q1 2026 — Apply now", date: "Feb 5, 2026", color: "bg-[#C9A84C]" },
    { tag: "Community", title: "Peer Supervision Groups now forming", date: "Jan 29, 2026", color: "bg-gray-300" }
  ];

  return (
    <div className="bg-white rounded-xl border p-6">

      <Header
        title="📢 Announcements & Updates"
        desc="Stay informed — never miss an update from Mashar"
        link="View all"
      />

      <div className="space-y-4">
        {data.map((item, i) => (
          <div key={i} className="flex gap-4 border-b last:border-none pb-4 last:pb-0">

            <div className={`w-2 h-2 mt-2 rounded-full ${item.color}`} />

            <div>
              <p className="text-[10px] tracking-widest uppercase font-semibold text-[#C9A84C]">
                {item.tag}
              </p>

              <p className="text-sm text-[#1C1C1E] leading-snug">
                {item.title}
              </p>

              <p className="text-xs text-gray-400 mt-1">
                {item.date}
              </p>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
