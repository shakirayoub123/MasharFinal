import { useState } from "react";

const INITIAL = {
    firstName: "Fatima",
    lastName: "Al-Rashid",
    email: "fatima@email.com",
    phone: "+971 50 123 4567",
    city: "Dubai",
    country: "UAE",
    bio: "ICF-certified executive coach passionate about empowering leaders across the Gulf region. Founder of a boutique coaching firm focused on leadership presence and team dynamics.",
    coachingSpecialty: "Executive Coaching",
    certificationLevel: "ICF PCC",
    graduationYear: "2022",
    yearsExperience: "4",
    linkedin: "https://linkedin.com/in/fatima-alrashid",
    website: "https://fatima-coaching.com",
    twitter: "",
    languages: ["Arabic", "English"],
    availableForMentoring: true,
    openToCollaboration: true,
    shareStory: false,
};

const SPECIALTIES = [
    "Executive Coaching", "Life Coaching", "Career Coaching",
    "Team Coaching", "Leadership Coaching", "Business Coaching",
    "Wellbeing Coaching", "NLP Coaching",
];

const LEVELS = ["ICF ACC", "ICF PCC", "ICF MCC", "EMCC Foundation",
    "EMCC Practitioner", "EMCC Senior", "EMCC Master", "Other"];

const YEARS = Array.from({ length: 15 }, (_, i) => String(2010 + i));

const LANGUAGES_OPTIONS = ["Arabic", "English", "French", "Urdu", "Hindi", "Turkish", "Persian"];

/* ══════════════════════════════════════════════════════════
   MAIN PAGE
══════════════════════════════════════════════════════════ */
export default function ProfileEdit() {
    const [form, setForm] = useState(INITIAL);
    const [activeSection, setActiveSection] = useState("personal");
    const [saved, setSaved] = useState(false);
    const [avatarInitials] = useState("FA");

    function set(key, val) {
        setForm(f => ({ ...f, [key]: val }));
        setSaved(false);
    }

    function toggleLanguage(lang) {
        setForm(f => ({
            ...f,
            languages: f.languages.includes(lang)
                ? f.languages.filter(l => l !== lang)
                : [...f.languages, lang],
        }));
        setSaved(false);
    }

    function handleSave() {
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
    }

    const sections = [
        { id: "personal",     label: "Personal Info",     icon: <UserIcon className="w-4 h-4" /> },
        { id: "coaching",     label: "Coaching Profile",  icon: <BriefcaseIcon className="w-4 h-4" /> },
        { id: "social",       label: "Social & Links",    icon: <LinkIcon className="w-4 h-4" /> },
        { id: "preferences",  label: "Preferences",       icon: <ToggleIcon className="w-4 h-4" /> },
    ];

    return (
        <div className="space-y-6">

            {/* ── Page header ── */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="font-serif text-2xl font-bold text-[#1C1C1E]">Edit Profile</h1>
                    <p className="text-sm text-[#8E8E8E] mt-0.5">
                        Keep your alumni profile up to date
                    </p>
                </div>

                <button
                    onClick={handleSave}
                    className={`
                        flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200
                        ${saved
                        ? "bg-emerald-500 text-white"
                        : "bg-[#1C1C1E] text-white hover:bg-[#2A6B7C]"
                    }
                    `}
                >
                    {saved ? <CheckIcon className="w-4 h-4" /> : <SaveIcon className="w-4 h-4" />}
                    {saved ? "Saved!" : "Save Changes"}
                </button>
            </div>

            <div className="grid lg:grid-cols-[240px_1fr] gap-6 items-start">

                {/* ── LEFT: Avatar + nav ── */}
                <div className="space-y-4">

                    {/* Avatar card */}
                    <div className="bg-white rounded-2xl border border-black/5 p-6 flex flex-col items-center gap-4">
                        <div className="relative">
                            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#C9A84C] to-[#8B5E00] flex items-center justify-center text-2xl font-bold text-black">
                                {avatarInitials}
                            </div>
                            <button className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-[#1C1C1E] flex items-center justify-center border-2 border-white hover:bg-[#2A6B7C] transition-colors">
                                <CameraIcon className="w-3.5 h-3.5 text-white" />
                            </button>
                        </div>
                        <div className="text-center">
                            <p className="font-semibold text-[#1C1C1E]">
                                {form.firstName} {form.lastName}
                            </p>
                            <p className="text-xs text-[#C9A84C] mt-0.5">
                                {form.certificationLevel} · {form.graduationYear}
                            </p>
                        </div>
                        <button className="text-xs text-[#2A6B7C] hover:underline font-medium">
                            Change photo
                        </button>
                    </div>

                    {/* Section nav */}
                    <nav className="bg-white rounded-2xl border border-black/5 p-2 space-y-0.5">
                        {sections.map(s => (
                            <button
                                key={s.id}
                                onClick={() => setActiveSection(s.id)}
                                className={`
                                    w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors
                                    ${activeSection === s.id
                                    ? "bg-[#1C1C1E] text-white"
                                    : "text-[#555] hover:bg-[#F9F4EC]"
                                }
                                `}
                            >
                                {s.icon}
                                {s.label}
                            </button>
                        ))}
                    </nav>

                    {/* Profile completeness */}
                    <div className="bg-white rounded-2xl border border-black/5 p-5">
                        <p className="text-xs font-semibold text-[#1C1C1E] mb-2">Profile Completeness</p>
                        <div className="w-full h-2 bg-[#F0E8D5] rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-[#C9A84C] to-[#8B5E00] rounded-full" style={{ width: "78%" }} />
                        </div>
                        <p className="text-xs text-[#8E8E8E] mt-2">78% — Add your website to reach 85%</p>
                    </div>
                </div>

                {/* ── RIGHT: Form sections ── */}
                <div className="bg-white rounded-2xl border border-black/5 overflow-hidden">

                    {/* Section title bar */}
                    <div className="px-6 py-5 border-b border-black/5 bg-[#FDFAF5]">
                        <h2 className="font-serif text-lg font-semibold text-[#1C1C1E]">
                            {sections.find(s => s.id === activeSection)?.label}
                        </h2>
                    </div>

                    <div className="p-6 space-y-6">

                        {/* ── PERSONAL INFO ── */}
                        {activeSection === "personal" && (
                            <>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <Field label="First Name">
                                        <Input value={form.firstName} onChange={v => set("firstName", v)} placeholder="First name" />
                                    </Field>
                                    <Field label="Last Name">
                                        <Input value={form.lastName} onChange={v => set("lastName", v)} placeholder="Last name" />
                                    </Field>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-4">
                                    <Field label="Email Address">
                                        <Input value={form.email} onChange={v => set("email", v)} placeholder="you@email.com" type="email" />
                                    </Field>
                                    <Field label="Phone Number">
                                        <Input value={form.phone} onChange={v => set("phone", v)} placeholder="+971 …" type="tel" />
                                    </Field>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-4">
                                    <Field label="City">
                                        <Input value={form.city} onChange={v => set("city", v)} placeholder="City" />
                                    </Field>
                                    <Field label="Country">
                                        <Input value={form.country} onChange={v => set("country", v)} placeholder="Country" />
                                    </Field>
                                </div>

                                <Field label="Bio" hint="Tell the community about yourself (max 300 chars)">
                                    <textarea
                                        value={form.bio}
                                        onChange={e => set("bio", e.target.value)}
                                        maxLength={300}
                                        rows={4}
                                        placeholder="Your professional bio…"
                                        className="w-full border border-black/15 rounded-xl px-4 py-3 text-sm text-[#1C1C1E] placeholder-[#ABABAB] focus:outline-none focus:border-[#2A6B7C] resize-none transition-colors"
                                    />
                                    <p className="text-[11px] text-[#8E8E8E] text-right mt-1">
                                        {form.bio.length}/300
                                    </p>
                                </Field>

                                <Field label="Languages Spoken">
                                    <div className="flex flex-wrap gap-2 mt-1">
                                        {LANGUAGES_OPTIONS.map(lang => (
                                            <button
                                                key={lang}
                                                onClick={() => toggleLanguage(lang)}
                                                className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                                                    form.languages.includes(lang)
                                                        ? "bg-[#1C1C1E] text-white border-[#1C1C1E]"
                                                        : "bg-white text-[#555] border-black/15 hover:border-[#C9A84C]"
                                                }`}
                                            >
                                                {lang}
                                            </button>
                                        ))}
                                    </div>
                                </Field>
                            </>
                        )}

                        {/* ── COACHING PROFILE ── */}
                        {activeSection === "coaching" && (
                            <>
                                <Field label="Coaching Specialty">
                                    <select
                                        value={form.coachingSpecialty}
                                        onChange={e => set("coachingSpecialty", e.target.value)}
                                        className="w-full border border-black/15 rounded-xl px-4 py-3 text-sm text-[#1C1C1E] focus:outline-none focus:border-[#2A6B7C] bg-white transition-colors"
                                    >
                                        {SPECIALTIES.map(s => <option key={s}>{s}</option>)}
                                    </select>
                                </Field>

                                <div className="grid sm:grid-cols-2 gap-4">
                                    <Field label="Certification Level">
                                        <select
                                            value={form.certificationLevel}
                                            onChange={e => set("certificationLevel", e.target.value)}
                                            className="w-full border border-black/15 rounded-xl px-4 py-3 text-sm text-[#1C1C1E] focus:outline-none focus:border-[#2A6B7C] bg-white transition-colors"
                                        >
                                            {LEVELS.map(l => <option key={l}>{l}</option>)}
                                        </select>
                                    </Field>

                                    <Field label="Graduation Year">
                                        <select
                                            value={form.graduationYear}
                                            onChange={e => set("graduationYear", e.target.value)}
                                            className="w-full border border-black/15 rounded-xl px-4 py-3 text-sm text-[#1C1C1E] focus:outline-none focus:border-[#2A6B7C] bg-white transition-colors"
                                        >
                                            {YEARS.map(y => <option key={y}>{y}</option>)}
                                        </select>
                                    </Field>
                                </div>

                                <Field label="Years of Coaching Experience">
                                    <div className="flex items-center gap-3 mt-1">
                                        {["1","2","3","4","5","6","7","8","9","10+"].map(y => (
                                            <button
                                                key={y}
                                                onClick={() => set("yearsExperience", y)}
                                                className={`w-10 h-10 rounded-xl text-sm font-semibold border transition-colors ${
                                                    form.yearsExperience === y
                                                        ? "bg-[#1C1C1E] text-white border-[#1C1C1E]"
                                                        : "bg-white text-[#555] border-black/15 hover:border-[#C9A84C]"
                                                }`}
                                            >
                                                {y}
                                            </button>
                                        ))}
                                    </div>
                                </Field>

                                {/* Certifications / badges */}
                                <Field label="Certifications & Achievements">
                                    <div className="space-y-2 mt-1">
                                        {[
                                            { label: "ICF PCC Certified", year: "2022", active: true },
                                            { label: "Positive Intelligence (PQ) Coach", year: "2023", active: true },
                                            { label: "SAFETY™ Assessment Practitioner", year: "2024", active: false },
                                        ].map((cert, i) => (
                                            <div
                                                key={i}
                                                className={`flex items-center justify-between px-4 py-3 rounded-xl border text-sm ${
                                                    cert.active
                                                        ? "bg-[#F5EDD6] border-[#C9A84C]/30 text-[#7A5500]"
                                                        : "bg-[#F9F4EC] border-black/8 text-[#8E8E8E]"
                                                }`}
                                            >
                                                <span className="flex items-center gap-2">
                                                    <MedalIcon className="w-4 h-4" />
                                                    {cert.label}
                                                </span>
                                                <span className="text-xs opacity-70">{cert.year}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <button className="mt-2 text-xs text-[#2A6B7C] font-medium hover:underline flex items-center gap-1">
                                        <PlusIcon className="w-3.5 h-3.5" /> Add certification
                                    </button>
                                </Field>
                            </>
                        )}

                        {/* ── SOCIAL & LINKS ── */}
                        {activeSection === "social" && (
                            <>
                                <Field label="LinkedIn Profile" hint="Full URL">
                                    <div className="flex items-center gap-2">
                                        <div className="w-10 h-10 rounded-xl bg-[#EAF4F7] flex items-center justify-center flex-shrink-0">
                                            <LinkedInIcon className="w-4 h-4 text-[#2A6B7C]" />
                                        </div>
                                        <Input
                                            value={form.linkedin}
                                            onChange={v => set("linkedin", v)}
                                            placeholder="https://linkedin.com/in/yourname"
                                        />
                                    </div>
                                </Field>

                                <Field label="Personal Website">
                                    <div className="flex items-center gap-2">
                                        <div className="w-10 h-10 rounded-xl bg-[#F5EDD6] flex items-center justify-center flex-shrink-0">
                                            <GlobeIcon className="w-4 h-4 text-[#7A5500]" />
                                        </div>
                                        <Input
                                            value={form.website}
                                            onChange={v => set("website", v)}
                                            placeholder="https://yourwebsite.com"
                                        />
                                    </div>
                                </Field>

                                <Field label="X / Twitter">
                                    <div className="flex items-center gap-2">
                                        <div className="w-10 h-10 rounded-xl bg-[#F1F1F1] flex items-center justify-center flex-shrink-0">
                                            <XIcon className="w-4 h-4 text-[#555]" />
                                        </div>
                                        <Input
                                            value={form.twitter}
                                            onChange={v => set("twitter", v)}
                                            placeholder="https://x.com/yourhandle"
                                        />
                                    </div>
                                </Field>

                                <div className="bg-[#F9F4EC] rounded-xl p-4 text-sm text-[#555] border border-black/5">
                                    <p className="font-medium text-[#1C1C1E] mb-1">Visibility tip</p>
                                    <p className="text-xs leading-relaxed">
                                        Adding your LinkedIn increases profile views by 3× among fellow alumni. Your contact details are only visible to verified Mashar members.
                                    </p>
                                </div>
                            </>
                        )}

                        {/* ── PREFERENCES ── */}
                        {activeSection === "preferences" && (
                            <>
                                <div className="space-y-4">
                                    {[
                                        {
                                            key: "availableForMentoring",
                                            label: "Available for Mentoring",
                                            desc: "Allow junior coaches to request mentoring sessions with you",
                                            color: "teal",
                                        },
                                        {
                                            key: "openToCollaboration",
                                            label: "Open to Collaboration",
                                            desc: "Show up in collaboration searches across the network",
                                            color: "gold",
                                        },
                                        {
                                            key: "shareStory",
                                            label: "Feature My Story",
                                            desc: "Allow Mashar to feature your coaching journey on the platform",
                                            color: "purple",
                                        },
                                    ].map(({ key, label, desc, color }) => {
                                        const active = form[key];
                                        const trackColor =
                                            color === "teal"   ? "bg-[#2A6B7C]"   :
                                                color === "gold"   ? "bg-[#C9A84C]"   :
                                                    "bg-purple-500";
                                        return (
                                            <div
                                                key={key}
                                                className={`flex items-start justify-between gap-4 p-4 rounded-xl border transition-colors ${
                                                    active ? "bg-[#FDFAF5] border-[#C9A84C]/25" : "bg-white border-black/8"
                                                }`}
                                            >
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-sm font-semibold text-[#1C1C1E]">{label}</p>
                                                    <p className="text-xs text-[#8E8E8E] mt-0.5 leading-relaxed">{desc}</p>
                                                </div>
                                                <button
                                                    onClick={() => set(key, !active)}
                                                    className={`relative w-11 h-6 rounded-full transition-colors duration-200 flex-shrink-0 mt-0.5 ${active ? trackColor : "bg-black/15"}`}
                                                >
                                                    <span className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow transition-all duration-200 ${active ? "left-6" : "left-1"}`} />
                                                </button>
                                            </div>
                                        );
                                    })}
                                </div>

                                <div className="pt-2 border-t border-black/5 space-y-3">
                                    <p className="text-xs font-semibold text-[#1C1C1E] uppercase tracking-widest">
                                        Danger Zone
                                    </p>
                                    <button className="w-full py-2.5 rounded-xl border border-red-200 text-sm font-medium text-red-600 hover:bg-red-50 transition-colors">
                                        Deactivate Account
                                    </button>
                                </div>
                            </>
                        )}
                    </div>

                    {/* Form footer */}
                    <div className="px-6 py-4 border-t border-black/5 bg-[#FDFAF5] flex items-center justify-between gap-3">
                        <p className="text-xs text-[#8E8E8E]">
                            {saved ? "All changes saved." : "Unsaved changes"}
                        </p>
                        <div className="flex gap-2">
                            <button
                                onClick={() => setForm(INITIAL)}
                                className="px-4 py-2 rounded-xl text-sm font-medium text-[#555] border border-black/10 hover:bg-white transition-colors"
                            >
                                Discard
                            </button>
                            <button
                                onClick={handleSave}
                                className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                                    saved
                                        ? "bg-emerald-500 text-white"
                                        : "bg-[#1C1C1E] text-white hover:bg-[#2A6B7C]"
                                }`}
                            >
                                {saved ? "Saved!" : "Save Changes"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

/* ── Reusable field wrapper ── */
function Field({ label, hint, children }) {
    return (
        <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-[#1C1C1E] uppercase tracking-wide">
                {label}
            </label>
            {hint && <p className="text-[11px] text-[#8E8E8E] -mt-1">{hint}</p>}
            {children}
        </div>
    );
}

/* ── Reusable text input ── */
function Input({ value, onChange, placeholder, type = "text" }) {
    return (
        <input
            type={type}
            value={value}
            onChange={e => onChange(e.target.value)}
            placeholder={placeholder}
            className="w-full border border-black/15 rounded-xl px-4 py-3 text-sm text-[#1C1C1E] placeholder-[#ABABAB] focus:outline-none focus:border-[#2A6B7C] transition-colors"
        />
    );
}

/* ══════════════════════════════════════════════════════════
   SVG ICONS
══════════════════════════════════════════════════════════ */
function UserIcon({ className }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
    );
}
function BriefcaseIcon({ className }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
    );
}
function LinkIcon({ className }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.1-1.1m-.757-4.9a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
    );
}
function ToggleIcon({ className }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
    );
}
function SaveIcon({ className }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
        </svg>
    );
}
function CheckIcon({ className }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
    );
}
function CameraIcon({ className }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
            <circle cx="12" cy="13" r="3" />
        </svg>
    );
}
function MedalIcon({ className }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <circle cx="12" cy="15" r="5" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 4h7l1 5H7.5l1-5z" />
        </svg>
    );
}
function PlusIcon({ className }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
    );
}
function LinkedInIcon({ className }) {
    return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
            <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
            <circle cx="4" cy="4" r="2" />
        </svg>
    );
}
function GlobeIcon({ className }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <circle cx="12" cy="12" r="10" />
            <path strokeLinecap="round" d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
        </svg>
    );
}
function XIcon({ className }) {
    return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.23H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
    );
}