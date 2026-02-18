import { useState, useMemo } from "react";

// ─── Data ────────────────────────────────────────────────────────────────────
const alumniData = [
  {
    id: 1,
    name: "Layla Al-Rashidi",
    role: "Executive Coach",
    company: "Saudi Aramco",
    location: "Riyadh, SA",
    batch: "2021",
    industry: "Energy",
    bio: "Certified professional coach passionate about leadership development and organisational transformation across the GCC region.",
    skills: ["Executive Coaching", "Leadership", "Organisational Development"],
    avatar: "LA",
    avatarBg: "#2A6B7C",
    avatarColor: "#EAF4F7",
    isMentor: true,
    certifications: ["CPCP – Certified Professional Coach", "ICF-ACC Credential"],
    education: [{ degree: "MBA", institution: "INSEAD", year: "2018" }, { degree: "BSc Psychology", institution: "AUB", year: "2015" }],
    badges: ["Certified Graduate", "ICF Core Competencies", "Peer Coaching Circle"],
    expertise: ["Ask for Advice", "Coaching Questions"],
  },
  {
    id: 2,
    name: "Omar Al-Farsi",
    role: "Professional Mentor",
    company: "Careem",
    location: "Dubai, UAE",
    batch: "2020",
    industry: "Tech",
    bio: "Mentoring emerging tech leaders across the region. Believer in the power of structured reflection.",
    skills: ["Mentoring", "Career Coaching", "Agile Leadership"],
    avatar: "OF",
    avatarBg: "#6B21A8",
    avatarColor: "#F5F0FF",
    isMentor: false,
    certifications: ["Coach Certificate Basics Program"],
    education: [{ degree: "BSc Computer Science", institution: "KU", year: "2016" }],
    badges: ["Coach Essentials", "Peer Coaching Circle"],
    expertise: ["Job/Project Opportunities", "Ask for Advice"],
  },
  {
    id: 3,
    name: "Fatima Zahra",
    role: "Life & Career Coach",
    company: "Independent",
    location: "Manama, BH",
    batch: "2022",
    industry: "Coaching",
    bio: "Helping professionals navigate career transitions with clarity and confidence. ICF credentialed.",
    skills: ["Life Coaching", "Career Transitions", "NLP"],
    avatar: "FZ",
    avatarBg: "#B45309",
    avatarColor: "#FFF8E7",
    isMentor: true,
    certifications: ["CPCP – Certified Professional Coach", "ICF-ACC Credential", "NLP Practitioner"],
    education: [{ degree: "MA Counselling", institution: "Middlesex University", year: "2019" }],
    badges: ["Certified Graduate", "ICF-ACC", "Ethics & Standards"],
    expertise: ["Coaching Questions", "Ask for Advice"],
  },
  {
    id: 4,
    name: "Khalid Mansoor",
    role: "Team Coach",
    company: "Noon",
    location: "Dubai, UAE",
    batch: "2021",
    industry: "Tech",
    bio: "Specialising in team dynamics and collective intelligence. Creating psychologically safe workplaces.",
    skills: ["Team Coaching", "Facilitation", "Change Management"],
    avatar: "KM",
    avatarBg: "#065F46",
    avatarColor: "#ECFDF5",
    isMentor: false,
    certifications: ["Coach Certificate Basics Program", "ICF Core Competencies"],
    education: [{ degree: "BSc Business", institution: "UoB", year: "2017" }],
    badges: ["Coach Essentials", "Peer Coaching Circle"],
    expertise: ["Job/Project Opportunities"],
  },
  {
    id: 5,
    name: "Noor Al-Hassan",
    role: "Leadership Coach",
    company: "Majid Al Futtaim",
    location: "Abu Dhabi, UAE",
    batch: "2019",
    industry: "Retail",
    bio: "Advocate for women in leadership. Working at the intersection of executive coaching and organisational culture.",
    skills: ["Leadership Coaching", "Culture Change", "Women in Leadership"],
    avatar: "NH",
    avatarBg: "#9D174D",
    avatarColor: "#FFF1F2",
    isMentor: true,
    certifications: ["CPCP – Certified Professional Coach", "EMCC Practitioner"],
    education: [{ degree: "MSc Organisational Psychology", institution: "UCL", year: "2016" }, { degree: "BA Sociology", institution: "QU", year: "2013" }],
    badges: ["Certified Graduate", "EMCC Standards", "Ethics & Standards", "Mentor Badge"],
    expertise: ["Ask for Advice", "Coaching Questions", "Job/Project Opportunities"],
  },
  {
    id: 6,
    name: "Tariq Al-Jubail",
    role: "Wellbeing Coach",
    company: "NEOM",
    location: "Tabuk, SA",
    batch: "2022",
    industry: "Coaching",
    bio: "Merging neuroscience with coaching practice to help leaders perform sustainably.",
    skills: ["Wellbeing Coaching", "Neuroscience", "Mindfulness"],
    avatar: "TJ",
    avatarBg: "#1E3A5F",
    avatarColor: "#EFF6FF",
    isMentor: false,
    certifications: ["Coach Essentials Program Completion"],
    education: [{ degree: "BSc Neuroscience", institution: "KAU", year: "2018" }],
    badges: ["Coach Essentials"],
    expertise: ["Coaching Questions"],
  },
  {
    id: 7,
    name: "Aisha Bint Zayed",
    role: "Executive Coach",
    company: "ADNOC",
    location: "Abu Dhabi, UAE",
    batch: "2020",
    industry: "Energy",
    bio: "Coaching C-suite leaders to lead with purpose. Background in law and human development.",
    skills: ["Executive Coaching", "Purpose-led Leadership", "Governance"],
    avatar: "AB",
    avatarBg: "#2A6B7C",
    avatarColor: "#EAF4F7",
    isMentor: true,
    certifications: ["CPCP – Certified Professional Coach", "ICF-ACC Credential"],
    education: [{ degree: "LLM", institution: "UAE University", year: "2015" }],
    badges: ["Certified Graduate", "ICF-ACC", "Peer Coaching Circle", "Ethics & Standards"],
    expertise: ["Ask for Advice", "Coaching Questions"],
  },
  {
    id: 8,
    name: "Yousef Al-Qassem",
    role: "Business Coach",
    company: "Barakah Ventures",
    location: "Kuwait City, KW",
    batch: "2019",
    industry: "Startup",
    bio: "Founder turned coach. Helping entrepreneurs build businesses and lives they love.",
    skills: ["Business Coaching", "Entrepreneurship", "Startup Growth"],
    avatar: "YQ",
    avatarBg: "#B45309",
    avatarColor: "#FFF8E7",
    isMentor: true,
    certifications: ["CPCP – Certified Professional Coach", "ICF Core Competencies"],
    education: [{ degree: "MBA", institution: "Hult Business School", year: "2014" }],
    badges: ["Certified Graduate", "Mentor Badge", "Ethics & Standards"],
    expertise: ["Job/Project Opportunities", "Ask for Advice"],
  },
  {
    id: 9,
    name: "Maryam Khalifa",
    role: "Career Coach",
    company: "Parsons",
    location: "Doha, QA",
    batch: "2021",
    industry: "Engineering",
    bio: "Bridging the gap between technical expertise and leadership potential in engineering professionals.",
    skills: ["Career Coaching", "Engineering Leadership", "STEM Mentoring"],
    avatar: "MK",
    avatarBg: "#065F46",
    avatarColor: "#ECFDF5",
    isMentor: false,
    certifications: ["Coach Certificate Basics Program"],
    education: [{ degree: "MEng Civil Engineering", institution: "QU", year: "2017" }],
    badges: ["Coach Essentials", "Peer Coaching Circle"],
    expertise: ["Job/Project Opportunities", "Coaching Questions"],
  },
];

const INDUSTRIES = ["All", "Coaching", "Tech", "Energy", "Retail", "Startup", "Engineering"];
const BADGE_COLORS = {
  "Certified Graduate": { bg: "#FFF8E7", color: "#B45309" },
  "ICF-ACC": { bg: "#EAF4F7", color: "#2A6B7C" },
  "ICF-ACC Credential": { bg: "#EAF4F7", color: "#2A6B7C" },
  "ICF Core Competencies": { bg: "#EAF4F7", color: "#2A6B7C" },
  "EMCC Standards": { bg: "#F5F0FF", color: "#6B21A8" },
  "Ethics & Standards": { bg: "#FFF1F2", color: "#9D174D" },
  "Mentor Badge": { bg: "#FFF8E7", color: "#B45309" },
  "Peer Coaching Circle": { bg: "#ECFDF5", color: "#065F46" },
  "Coach Essentials": { bg: "#EFF6FF", color: "#1E3A5F" },
};

// ─── Components ──────────────────────────────────────────────────────────────
function Avatar({ initials, bg, color, size = 48 }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: "50%",
      background: bg, color: color, flexShrink: 0,
      display: "flex", alignItems: "center", justifyContent: "center",
      fontSize: size * 0.31, fontWeight: 800, letterSpacing: "0.5px",
    }}>
      {initials}
    </div>
  );
}

function BadgePill({ label }) {
  const style = BADGE_COLORS[label] || { bg: "#F3F4F6", color: "#555" };
  return (
    <span style={{
      fontSize: "11px", fontWeight: 700, borderRadius: "20px",
      padding: "4px 11px", background: style.bg, color: style.color,
      whiteSpace: "nowrap",
    }}>
      {label}
    </span>
  );
}

function AlumniCard({ alumni, onClick }) {
  return (
    <div
      onClick={() => onClick(alumni)}
      style={{
        background: "#fff", borderRadius: "16px", padding: "20px",
        boxShadow: "0 1px 6px rgba(0,0,0,0.07)", cursor: "pointer",
        display: "flex", flexDirection: "column", gap: "12px",
        transition: "box-shadow 0.18s, transform 0.18s",
        position: "relative", overflow: "hidden",
        borderTop: `3px solid ${alumni.avatarBg}`,
      }}
      onMouseEnter={e => {
        e.currentTarget.style.boxShadow = "0 6px 22px rgba(0,0,0,0.11)";
        e.currentTarget.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.boxShadow = "0 1px 6px rgba(0,0,0,0.07)";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      {alumni.isMentor && (
        <div style={{
          position: "absolute", top: "12px", right: "12px",
          background: "#FFF8E7", color: "#B45309",
          fontSize: "10px", fontWeight: 800, letterSpacing: "0.4px",
          padding: "3px 10px", borderRadius: "20px",
        }}>🎯 Mentor</div>
      )}

      <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
        <Avatar initials={alumni.avatar} bg={alumni.avatarBg} color={alumni.avatarColor} />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontWeight: 800, fontSize: "15px", color: "#1a1a2e", lineHeight: 1.2 }}>{alumni.name}</div>
          <div style={{ fontSize: "12.5px", color: alumni.avatarBg, fontWeight: 600, marginTop: "2px" }}>{alumni.role}</div>
          <div style={{ fontSize: "12px", color: "#888", marginTop: "1px" }}>{alumni.company}</div>
        </div>
      </div>

      <div style={{ display: "flex", gap: "12px", fontSize: "12px", color: "#aaa" }}>
        <span>📍 {alumni.location}</span>
        <span>🎓 Batch '{alumni.batch.slice(2)}</span>
      </div>

      <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
        {alumni.skills.slice(0, 3).map(s => (
          <span key={s} style={{ fontSize: "11px", fontWeight: 600, background: "#F3F4F6", color: "#666", borderRadius: "20px", padding: "3px 10px" }}>
            {s}
          </span>
        ))}
      </div>

      <div style={{ fontSize: "12px", color: "#bbb", fontWeight: 500, marginTop: "2px" }}>
        View full profile →
      </div>
    </div>
  );
}

function SectionLabel({ children }) {
  return (
    <div style={{ fontSize: "10.5px", fontWeight: 800, color: "#bbb", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "10px" }}>
      {children}
    </div>
  );
}

function DetailPanel({ alumni, onClose }) {
  if (!alumni) return null;
  return (
    <>
      <div onClick={onClose} style={{
        position: "fixed", inset: 0, background: "rgba(10,10,30,0.3)",
        zIndex: 100, backdropFilter: "blur(3px)", animation: "fadeIn 0.2s ease",
      }} />
      <div style={{
        position: "fixed", right: 0, top: 0, bottom: 0, width: "400px",
        background: "#fff", zIndex: 101, overflowY: "auto",
        boxShadow: "-6px 0 40px rgba(0,0,0,0.13)",
        animation: "slideInRight 0.25s cubic-bezier(.4,0,.2,1)",
        fontFamily: "'DM Sans', sans-serif", display: "flex", flexDirection: "column",
      }}>
        {/* Header band */}
        <div style={{ background: alumni.avatarBg, padding: "28px 28px 24px", position: "relative" }}>
          <button onClick={onClose} style={{
            position: "absolute", top: "16px", right: "16px",
            border: "none", background: "rgba(255,255,255,0.2)", borderRadius: "50%",
            width: "32px", height: "32px", cursor: "pointer", color: "#fff",
            fontSize: "16px", display: "flex", alignItems: "center", justifyContent: "center",
          }}>✕</button>

          <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            <Avatar initials={alumni.avatar} bg="rgba(255,255,255,0.2)" color="#fff" size={64} />
            <div>
              <div style={{ fontWeight: 800, fontSize: "19px", color: "#fff" }}>{alumni.name}</div>
              <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.8)", marginTop: "3px", fontWeight: 500 }}>{alumni.role}</div>
              <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.65)", marginTop: "1px" }}>{alumni.company}</div>
            </div>
          </div>

          {alumni.isMentor && (
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "5px",
              marginTop: "14px", background: "rgba(255,255,255,0.15)", borderRadius: "20px",
              padding: "4px 12px", fontSize: "11px", fontWeight: 700, color: "#fff",
            }}>🎯 Program Mentor</div>
          )}
        </div>

        {/* Body */}
        <div style={{ padding: "24px 28px", display: "flex", flexDirection: "column", gap: "24px" }}>

          {/* Quick info */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
            {[
              { icon: "📍", label: "Location", val: alumni.location },
              { icon: "🎓", label: "Batch", val: alumni.batch },
              { icon: "🏢", label: "Industry", val: alumni.industry },
              { icon: "💼", label: "Expertise", val: alumni.expertise.join(", ") },
            ].map(({ icon, label, val }) => (
              <div key={label} style={{ background: "#F8F9FA", borderRadius: "12px", padding: "12px 14px" }}>
                <div style={{ fontSize: "10px", color: "#bbb", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.5px" }}>{icon} {label}</div>
                <div style={{ fontSize: "13px", color: "#1a1a2e", fontWeight: 600, marginTop: "4px", lineHeight: 1.3 }}>{val}</div>
              </div>
            ))}
          </div>

          <div style={{ height: "1px", background: "#F0F0F0" }} />

          {/* Bio */}
          <div>
            <SectionLabel>About</SectionLabel>
            <p style={{ fontSize: "13.5px", color: "#555", lineHeight: 1.75, margin: 0 }}>{alumni.bio}</p>
          </div>

          <div style={{ height: "1px", background: "#F0F0F0" }} />

          {/* Certifications */}
          <div>
            <SectionLabel>Certifications & Credentials</SectionLabel>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {alumni.certifications.map(c => (
                <div key={c} style={{ display: "flex", alignItems: "center", gap: "10px", background: "#F8F9FA", borderRadius: "10px", padding: "10px 14px" }}>
                  <span style={{ fontSize: "16px" }}>🏅</span>
                  <span style={{ fontSize: "13px", color: "#1a1a2e", fontWeight: 600 }}>{c}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ height: "1px", background: "#F0F0F0" }} />

          {/* Education */}
          <div>
            <SectionLabel>Education Record</SectionLabel>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {alumni.education.map((e, i) => (
                <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 14px", background: "#F8F9FA", borderRadius: "10px" }}>
                  <div>
                    <div style={{ fontSize: "13px", fontWeight: 700, color: "#1a1a2e" }}>{e.degree}</div>
                    <div style={{ fontSize: "12px", color: "#888", marginTop: "1px" }}>{e.institution}</div>
                  </div>
                  <span style={{ fontSize: "12px", color: "#bbb", fontWeight: 600 }}>{e.year}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ height: "1px", background: "#F0F0F0" }} />

          {/* Badges Wall */}
          <div>
            <SectionLabel>My Badges Wall</SectionLabel>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {alumni.badges.map(b => (
                <BadgePill key={b} label={b} />
              ))}
            </div>
          </div>

          <div style={{ height: "1px", background: "#F0F0F0" }} />

          {/* Skills */}
          <div>
            <SectionLabel>Skills & Expertise</SectionLabel>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {alumni.skills.map(s => (
                <span key={s} style={{ fontSize: "12.5px", fontWeight: 600, background: alumni.avatarColor, color: alumni.avatarBg, borderRadius: "20px", padding: "5px 14px" }}>
                  {s}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function AlumniDirectory() {
  const [search, setSearch] = useState("");
  const [industry, setIndustry] = useState("All");
  const [mentorOnly, setMentorOnly] = useState(false);
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return alumniData.filter(a => {
      const matchSearch = !q ||
        a.name.toLowerCase().includes(q) ||
        a.role.toLowerCase().includes(q) ||
        a.company.toLowerCase().includes(q) ||
        a.location.toLowerCase().includes(q) ||
        a.skills.some(s => s.toLowerCase().includes(q)) ||
        a.certifications.some(c => c.toLowerCase().includes(q));
      return matchSearch &&
        (industry === "All" || a.industry === industry) &&
        (!mentorOnly || a.isMentor);
    });
  }, [search, industry, mentorOnly]);

  const hasFilters = search || industry !== "All" || mentorOnly;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');
        @keyframes fadeUp { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:translateY(0)} }
        @keyframes fadeIn { from{opacity:0} to{opacity:1} }
        @keyframes slideInRight { from{transform:translateX(100%)} to{transform:translateX(0)} }
        .ac { animation: fadeUp 0.25s ease both; }
        .si:focus { outline: none; border-color: #2A6B7C !important; box-shadow: 0 0 0 3px rgba(42,107,124,0.12); }
        .si::placeholder { color: #ccc; }
      `}</style>

      <div style={{ fontFamily: "'DM Sans', sans-serif" }}>

        {/* Page header */}
        <div style={{ marginBottom: "24px" }}>
          <h1 style={{ fontSize: "26px", fontWeight: 800, color: "#1a1a2e", margin: 0, marginBottom: "5px" }}>
            👥 Alumni Directory
          </h1>
          <p style={{ color: "#999", fontSize: "14px", margin: 0 }}>
            Search and explore {alumniData.length} Mashar alumni · Click a profile for full details
          </p>
        </div>

        {/* Search bar */}
        <div style={{ position: "relative", marginBottom: "14px" }}>
          <span style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)", fontSize: "15px", pointerEvents: "none" }}>🔍</span>
          <input
            className="si"
            type="text"
            placeholder="Search by name, role, company, location or certification…"
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{
              width: "100%", padding: "11px 16px 11px 40px",
              border: "1.5px solid #e5e7eb", borderRadius: "12px",
              fontSize: "13.5px", background: "#fff", color: "#1a1a2e",
              boxSizing: "border-box", transition: "border-color 0.15s, box-shadow 0.15s",
              fontFamily: "'DM Sans', sans-serif",
            }}
          />
        </div>

        {/* Filters row */}
        <div style={{ display: "flex", gap: "8px", marginBottom: "10px", flexWrap: "wrap", alignItems: "center" }}>
          {/* Industry chips */}
          {INDUSTRIES.map(ind => (
            <button key={ind} onClick={() => setIndustry(ind)} style={{
              border: "none", borderRadius: "20px", padding: "6px 15px",
              fontSize: "12.5px", fontWeight: 600, cursor: "pointer",
              background: industry === ind ? "#1a1a2e" : "#fff",
              color: industry === ind ? "#fff" : "#666",
              boxShadow: industry === ind ? "none" : "0 1px 4px rgba(0,0,0,0.08)",
              fontFamily: "'DM Sans', sans-serif", transition: "all 0.15s",
            }}>
              {ind}
            </button>
          ))}

          {/* Separator */}
          <div style={{ width: "1px", height: "24px", background: "#e5e7eb", margin: "0 4px" }} />

          {/* Mentor toggle */}
          <button onClick={() => setMentorOnly(v => !v)} style={{
            border: mentorOnly ? "none" : "1.5px solid #e5e7eb",
            borderRadius: "20px", padding: "6px 15px",
            fontSize: "12.5px", fontWeight: 700, cursor: "pointer",
            background: mentorOnly ? "#B45309" : "#fff",
            color: mentorOnly ? "#FFF8E7" : "#888",
            fontFamily: "'DM Sans', sans-serif", transition: "all 0.15s",
          }}>
            🎯 Mentors Only
          </button>
        </div>

        {/* Results bar */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "18px" }}>
          <span style={{ fontSize: "13px", color: "#999" }}>
            Showing <strong style={{ color: "#1a1a2e" }}>{filtered.length}</strong> of {alumniData.length} alumni
          </span>
          {hasFilters && (
            <button onClick={() => { setSearch(""); setIndustry("All"); setMentorOnly(false); }} style={{
              border: "none", background: "none", color: "#2A6B7C",
              fontSize: "12px", fontWeight: 700, cursor: "pointer",
              fontFamily: "'DM Sans', sans-serif",
            }}>
              Clear all ✕
            </button>
          )}
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "14px",
          }}>
            {filtered.map((a, i) => (
              <div key={a.id} className="ac" style={{ animationDelay: `${i * 35}ms` }}>
                <AlumniCard alumni={a} onClick={setSelected} />
              </div>
            ))}
          </div>
        ) : (
          <div style={{
            textAlign: "center", padding: "60px 20px",
            background: "#fff", borderRadius: "18px",
            boxShadow: "0 1px 6px rgba(0,0,0,0.06)",
          }}>
            <div style={{ fontSize: "36px", marginBottom: "10px" }}>🔍</div>
            <div style={{ fontWeight: 700, fontSize: "15px", color: "#1a1a2e", marginBottom: "5px" }}>No alumni found</div>
            <div style={{ fontSize: "13px", color: "#bbb" }}>Try a different search or filter</div>
          </div>
        )}

        {/* Detail panel */}
        <DetailPanel alumni={selected} onClose={() => setSelected(null)} />
      </div>
    </>
  );
}