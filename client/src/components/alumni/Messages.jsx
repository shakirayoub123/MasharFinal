import { Header } from "./CardHeader";

export default function Messages() {
  const list = [
    { name:"Khalid Al-Amoudi", text:"Can we sync next week about the supervision group?", time:"10:42 AM", unread:true, initials:"KA", color:"bg-[#EAF4F7] text-[#2A6B7C]" },
    { name:"Sara Rashidi", text:"Thanks for sharing the article! Really helpful.", time:"Yesterday", unread:true, initials:"SR", color:"bg-[#F5EDD6] text-[#7A5500]" },
    { name:"Mashar Admin", text:"Reminder: Please complete your alumni profile update.", time:"Feb 12", initials:"MA", color:"bg-purple-100 text-purple-700" }
  ];

  return (
    <div className="bg-white rounded-xl border p-6">

      <Header title="💬 Messages" link="View all" />

      <div className="space-y-4">

        {list.map((m,i)=>(
          <div key={i} className="flex gap-3 border-b last:border-none pb-4 last:pb-0">

            <div className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold ${m.color}`}>
              {m.initials}
            </div>

            <div className="flex-1">
              <p className={`text-sm ${m.unread ? "font-semibold text-black" : "text-gray-700"}`}>
                {m.name}
              </p>

              <p className="text-xs text-gray-400 truncate max-w-[200px]">
                {m.text}
              </p>
            </div>

            <div className="text-right flex flex-col items-end gap-1">
              <span className="text-[10px] text-gray-400">{m.time}</span>
              {m.unread && <span className="w-2 h-2 bg-[#2A6B7C] rounded-full" />}
            </div>

          </div>
        ))}

      </div>
    </div>
  );
}
