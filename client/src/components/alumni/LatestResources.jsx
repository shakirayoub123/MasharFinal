export default function LatestResources() {

  const resources = [
    {
      icon: "📄",
      title: "ICF Core Competencies — Updated 2026 Guide",
      type: "PDF · 18 pages",
      bg: "bg-red-100"
    },
    {
      icon: "🎬",
      title: "Coaching Through Crisis: A Masterclass",
      type: "Video · 52 min",
      bg: "bg-green-100"
    },
    {
      icon: "🛠️",
      title: "Coaching Session Planner Template (2026)",
      type: "Template · Editable",
      bg: "bg-[#EAF4F7]"
    },
    {
      icon: "✍️",
      title: "The Science of Listening in Executive Coaching",
      type: "Article · 8 min read",
      bg: "bg-[#F5EDD6]"
    }
  ];

  return (
    <div className="bg-white rounded-xl border p-6">

      {/* HEADER */}
      <div className="flex justify-between mb-5">
        <div>
          <h3 className="font-serif text-lg text-[#1C1C1E]">
            📚 Latest Resources
          </h3>
          <p className="text-xs text-gray-400 mt-1">
            Newly added tools, articles & templates
          </p>
        </div>

        <button className="text-xs text-[#2A6B7C] hover:underline">
          Library →
        </button>
      </div>


      {/* LIST */}
      <div className="divide-y">

        {resources.map((r,i)=>(
          <div
            key={i}
            className="flex items-center gap-4 py-4 cursor-pointer hover:bg-gray-50 rounded-lg transition"
          >

            {/* ICON */}
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${r.bg}`}>
              {r.icon}
            </div>

            {/* TEXT */}
            <div>
              <p className="text-sm text-[#1C1C1E] leading-snug">
                {r.title}
              </p>
              <p className="text-xs text-gray-400 mt-1">
                {r.type}
              </p>
            </div>

            {/* ARROW */}
            <span className="ml-auto text-gray-400 text-sm">
              →
            </span>

          </div>
        ))}

      </div>
    </div>
  );
}
