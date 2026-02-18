import { useState } from "react";

const eventsData = [
  {
    title: "Alumni Peer Supervision Circle",
    date: "2026-02-16",
    time: "3:00 PM — 5:00 PM GST",
    location: "Online",
    type: "Webinar",
    color: "#2A6B7C",
    bg: "#EAF4F7",
    icon: "🎙️"
  },
  {
    title: "Positive Intelligence Workshop",
    date: "2026-02-19",
    time: "10:00 AM",
    location: "Riyadh",
    type: "Workshop",
    color: "#B45309",
    bg: "#FFF8E7",
    icon: "🧠"
  },
  {
    title: "Networking Gathering",
    date: "2026-02-24",
    time: "6:00 PM",
    location: "Dubai",
    type: "Social",
    color: "#6B21A8",
    bg: "#F5F0FF",
    icon: "🤝"
  },
  {
    title: "Leadership Summit",
    date: "2026-03-03",
    time: "All Day",
    location: "Abu Dhabi",
    type: "Summit",
    color: "#B45309",
    bg: "#FFF8E7",
    icon: "🏆"
  }
];

const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const DAYS = ["Su","Mo","Tu","We","Th","Fr","Sa"];

const navBtn = {
  border: "none", background: "#f5f5f5", borderRadius: "9px",
  width: "32px", height: "32px", cursor: "pointer",
  fontSize: "17px", color: "#666",
  display: "flex", alignItems: "center", justifyContent: "center",
  fontWeight: "bold", lineHeight: 1, flexShrink: 0
};

function MiniCalendar({ selectedDate, onSelect, events }) {
  const today = new Date();
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());

  const eventDates = new Set(events.map(e => e.date));

  const firstDay = new Date(viewYear, viewMonth, 1).getDay();
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  const cells = Array(firstDay).fill(null).concat(
    Array.from({ length: daysInMonth }, (_, i) => i + 1)
  );

  const toDateStr = (d) => {
    const mm = String(viewMonth + 1).padStart(2, "0");
    const dd = String(d).padStart(2, "0");
    return `${viewYear}-${mm}-${dd}`;
  };

  const prevMonth = () => {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y - 1); }
    else setViewMonth(m => m - 1);
  };
  const nextMonth = () => {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y + 1); }
    else setViewMonth(m => m + 1);
  };

  return (
    <div style={{
      background: "#fff",
      borderRadius: "20px",
      padding: "24px",
      boxShadow: "0 1px 8px rgba(0,0,0,0.08)",
      width: "340px",
      flexShrink: 0,
      fontFamily: "'DM Sans', sans-serif",
      alignSelf: "flex-start",
    }}>
      {/* Nav */}
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:"20px" }}>
        <button onClick={prevMonth} style={navBtn}>‹</button>
        <span style={{ fontWeight: 700, fontSize:"15px", color:"#1a1a2e" }}>
          {MONTHS[viewMonth]} {viewYear}
        </span>
        <button onClick={nextMonth} style={navBtn}>›</button>
      </div>

      {/* Day headers */}
      <div style={{ display:"grid", gridTemplateColumns:"repeat(7,1fr)", marginBottom:"8px" }}>
        {DAYS.map(d => (
          <div key={d} style={{ textAlign:"center", fontSize:"11px", fontWeight:700, color:"#bbb", padding:"4px 0", letterSpacing:"0.3px" }}>{d}</div>
        ))}
      </div>

      {/* Cells */}
      <div style={{ display:"grid", gridTemplateColumns:"repeat(7,1fr)", gap:"3px" }}>
        {cells.map((d, i) => {
          if (!d) return <div key={i} />;
          const dateStr = toDateStr(d);
          const hasEvent = eventDates.has(dateStr);
          const isSelected = selectedDate === dateStr;
          const isToday = dateStr === today.toISOString().slice(0,10);

          return (
            <button
              key={i}
              onClick={() => onSelect(isSelected ? null : dateStr)}
              style={{
                position: "relative",
                border: "none",
                borderRadius: "10px",
                padding: "8px 2px",
                cursor: "pointer",
                fontSize: "13px",
                fontWeight: isToday || isSelected ? 700 : 400,
                background: isSelected ? "#1a1a2e" : isToday ? "#EAF4F7" : "transparent",
                color: isSelected ? "#fff" : isToday ? "#2A6B7C" : "#444",
                transition: "all 0.15s",
              }}
              onMouseEnter={e => { if (!isSelected) e.currentTarget.style.background = "#f3f4f6"; }}
              onMouseLeave={e => { if (!isSelected) e.currentTarget.style.background = isToday ? "#EAF4F7" : "transparent"; }}
            >
              {d}
              {hasEvent && (
                <span style={{
                  position:"absolute", bottom:"4px", left:"50%", transform:"translateX(-50%)",
                  width:"4px", height:"4px", borderRadius:"50%",
                  background: isSelected ? "#7dd3fc" : "#2A6B7C",
                  display:"block"
                }} />
              )}
            </button>
          );
        })}
      </div>

      {selectedDate && (
        <button
          onClick={() => onSelect(null)}
          style={{
            marginTop:"16px", width:"100%", border:"1.5px solid #e5e7eb",
            borderRadius:"10px", padding:"9px", background:"transparent",
            color:"#888", fontSize:"12px", cursor:"pointer", fontWeight: 600,
            transition: "all 0.15s",
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = "#aaa"; e.currentTarget.style.color = "#555"; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = "#e5e7eb"; e.currentTarget.style.color = "#888"; }}
        >
          ✕ Clear filter
        </button>
      )}
    </div>
  );
}

function EventCard({ event, index }) {
  const d = new Date(event.date + "T00:00:00");
  return (
    <div
      style={{
        display: "flex",
        gap: "14px",
        alignItems: "stretch",
        background: "#fff",
        borderRadius: "16px",
        padding: "16px 18px",
        boxShadow: "0 1px 6px rgba(0,0,0,0.06)",
        animation: `slideIn 0.25s ease both`,
        animationDelay: `${index * 50}ms`,
        borderLeft: `4px solid ${event.color}`,
        transition: "box-shadow 0.15s, transform 0.15s",
        cursor: "default",
        boxSizing: "border-box",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.1)";
        e.currentTarget.style.transform = "translateY(-1px)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.boxShadow = "0 1px 6px rgba(0,0,0,0.06)";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      {/* Date bubble */}
      <div style={{
        flexShrink: 0,
        background: event.bg,
        borderRadius: "12px",
        width: "54px",
        textAlign: "center",
        padding: "10px 6px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}>
        <div style={{ fontSize: "21px", fontWeight: 800, color: event.color, lineHeight: 1.1 }}>
          {d.getDate()}
        </div>
        <div style={{ fontSize: "10px", fontWeight: 700, color: event.color, textTransform:"uppercase", letterSpacing:"0.6px", marginTop: "2px" }}>
          {MONTHS[d.getMonth()]}
        </div>
      </div>

      {/* Content */}
      <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", justifyContent: "center", gap: "5px" }}>
        <div style={{ display:"flex", alignItems:"center", gap:"6px" }}>
          <span style={{ fontSize:"14px", lineHeight: 1 }}>{event.icon}</span>
          <span style={{
            fontSize: "11px", fontWeight: 700,
            background: event.bg, color: event.color,
            borderRadius: "20px", padding: "3px 10px",
            letterSpacing: "0.2px",
          }}>
            {event.type}
          </span>
        </div>

        <div style={{ fontWeight: 700, fontSize: "14px", color: "#1a1a2e", lineHeight: "1.3" }}>
          {event.title}
        </div>

        <div style={{ fontSize: "12px", color: "#999", display: "flex", alignItems: "center", gap: "4px", flexWrap: "wrap" }}>
          <span>🕐</span>
          <span>{event.time}</span>
          <span style={{ color: "#ddd" }}>·</span>
          <span>📍</span>
          <span>{event.location}</span>
        </div>
      </div>
    </div>
  );
}

export default function EventsCalendar() {
  const [selectedDate, setSelectedDate] = useState(null);

  const filtered = selectedDate
    ? eventsData.filter(e => e.date === selectedDate)
    : eventsData;

  const selectedLabel = selectedDate
    ? new Date(selectedDate + "T00:00:00").toLocaleDateString("en-US", { weekday:"long", month:"long", day:"numeric" })
    : null;

  const VISIBLE = 2;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;600;700;800&display=swap');
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .events-scroll::-webkit-scrollbar {
          width: 5px;
        }
        .events-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
        .events-scroll::-webkit-scrollbar-thumb {
          background: #e0e0e0;
          border-radius: 99px;
        }
        .events-scroll::-webkit-scrollbar-thumb:hover {
          background: #ccc;
        }
      `}</style>

      <div style={{
        fontFamily: "'DM Sans', sans-serif",
        background: "transparent",
      }}>
        <div style={{
          display: "flex",
          gap: "20px",
          alignItems: "flex-start",
          flexWrap: "wrap",
        }}>

          {/* Mini Calendar */}
          <MiniCalendar
            selectedDate={selectedDate}
            onSelect={setSelectedDate}
            events={eventsData}
          />

          {/* Events Panel */}
          <div style={{ flex: 1, minWidth: "260px" }}>

            {/* Panel header */}
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "14px",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <h2 style={{ fontSize: "16px", fontWeight: 700, color: "#1a1a2e", margin: 0 }}>
                  {selectedLabel ? `Events — ${selectedLabel}` : "All Upcoming Events"}
                </h2>
                <span style={{
                  background: "#1a1a2e", color: "#fff",
                  borderRadius: "20px", padding: "2px 9px",
                  fontSize: "11px", fontWeight: 700,
                }}>
                  {filtered.length}
                </span>
              </div>

              {filtered.length > VISIBLE && (
                <span style={{ fontSize: "12px", color: "#bbb", fontWeight: 500, whiteSpace: "nowrap" }}>
                  scroll for more ↓
                </span>
              )}
            </div>

            {/* Scroll container — shows exactly 2 cards */}
            <div style={{ position: "relative" }}>
              <div
                className="events-scroll"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  maxHeight: "250px",   /* ~2 cards × 96px + 12px gap + padding */
                  overflowY: "auto",
                  paddingRight: "10px",
                  paddingBottom: "6px",
                  scrollbarWidth: "thin",
                  scrollbarColor: "#e0e0e0 transparent",
                }}
              >
                {filtered.length > 0 ? (
                  filtered.map((e, i) => (
                    <EventCard key={e.title} event={e} index={i} />
                  ))
                ) : (
                  <div style={{
                    textAlign: "center",
                    padding: "36px 20px",
                    background: "#fff",
                    borderRadius: "16px",
                    color: "#bbb",
                    fontSize: "14px",
                    boxShadow: "0 1px 6px rgba(0,0,0,0.05)",
                  }}>
                    <div style={{ fontSize: "30px", marginBottom: "8px" }}>🗓️</div>
                    No events on this date
                  </div>
                )}
              </div>

              {/* Fade gradient at bottom to hint scroll */}
              {filtered.length > VISIBLE && (
                <div style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: "10px",
                  height: "40px",
                  background: "linear-gradient(to top, rgba(247,248,252,0.95) 30%, transparent)",
                  pointerEvents: "none",
                  borderRadius: "0 0 12px 12px",
                }} />
              )}
            </div>

          </div>
        </div>
      </div>
    </>
  );
}