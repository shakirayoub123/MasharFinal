import { useState } from "react";
import { useNavigate } from "react-router-dom";

const notifications = [
  { id: 1, icon: "🎉", title: "Event Reminder", desc: "Alumni Meetup 2025 is tomorrow!", time: "2m ago", unread: true },
  { id: 2, icon: "📢", title: "Announcement", desc: "New scholarship applications are open.", time: "1h ago", unread: true },
  { id: 3, icon: "✅", title: "Profile Approved", desc: "Your alumni profile has been verified.", time: "3h ago", unread: false },
  { id: 4, icon: "🏆", title: "Achievement Unlocked", desc: "You completed your profile 100%!", time: "1d ago", unread: false },
];

const messages = [
  { id: 1, name: "Priya Sharma", avatar: "P", msg: "Hey! Are you coming to the reunion?", time: "5m ago", unread: true },
  { id: 2, name: "Rahul Mehta", avatar: "R", msg: "Thanks for connecting! Let's catch up.", time: "30m ago", unread: true },
  { id: 3, name: "Alumni Admin", avatar: "A", msg: "Welcome to the alumni network 🎓", time: "2h ago", unread: false },
];

function Popup({ children, onClose }) {
  return (
    <>
      <div className="fixed inset-0 z-40" onClick={onClose} />
      <div
        className="absolute right-0 top-full mt-2 z-50 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden"
        style={{ width: 340, animation: "popIn 0.18s cubic-bezier(.34,1.56,.64,1)" }}
      >
        {children}
      </div>
      <style>{`
        @keyframes popIn {
          from { opacity: 0; transform: scale(0.93) translateY(-8px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </>
  );
}

export default function AlumniNavbar({ toggleSidebar, openMobile, user }) {
  const [profileOpen, setProfileOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const [msgOpen, setMsgOpen] = useState(false);
  const navigate = useNavigate();

  const closeAll = () => {
    setProfileOpen(false);
    setNotifOpen(false);
    setMsgOpen(false);
  };

  const toggleNotif = () => {
    setMsgOpen(false);
    setProfileOpen(false);
    setNotifOpen((v) => !v);
  };

  const toggleMsg = () => {
    setNotifOpen(false);
    setProfileOpen(false);
    setMsgOpen((v) => !v);
  };

  const toggleProfile = () => {
    setNotifOpen(false);
    setMsgOpen(false);
    setProfileOpen((v) => !v);
  };

  const logout = () => {
    localStorage.removeItem("alumni_token");
    navigate("/alumni-login");
  };

  const unreadNotifs = notifications.filter((n) => n.unread).length;
  const unreadMsgs = messages.filter((m) => m.unread).length;

  if (!user) return null;

  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-6 relative">

      {/* Left */}
      <div className="flex items-center gap-3">
        <button
          onClick={openMobile}
          className="lg:hidden w-9 h-9 bg-slate-100 rounded-lg flex items-center justify-center"
        >
          ☰
        </button>
        <button
          onClick={toggleSidebar}
          className="hidden lg:flex w-9 h-9 bg-slate-100 rounded-lg items-center justify-center"
        >
          ⇆
        </button>
        <h2 className="font-serif text-lg font-semibold text-slate-800">
          Welcome back 👋
        </h2>
      </div>

      {/* Right */}
      <div className="flex items-center gap-2">

        {/* Notification Button */}
        <div className="relative">
          <button
            onClick={toggleNotif}
            className={`w-9 h-9 rounded-lg flex items-center justify-center relative transition ${notifOpen ? "bg-indigo-100" : "bg-slate-100 hover:bg-slate-200"}`}
          >
            🔔
            {unreadNotifs > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                {unreadNotifs}
              </span>
            )}
          </button>

          {notifOpen && (
            <Popup onClose={() => setNotifOpen(false)}>
              <div className="px-4 py-3 border-b flex items-center justify-between">
                <span className="font-semibold text-slate-800 text-sm">Notifications</span>
                <span className="text-xs text-indigo-500 cursor-pointer hover:underline">Mark all read</span>
              </div>
              <div className="max-h-72 overflow-y-auto divide-y divide-slate-50">
                {notifications.map((n) => (
                  <div
                    key={n.id}
                    className={`flex items-start gap-3 px-4 py-3 cursor-pointer transition hover:bg-slate-50 ${n.unread ? "bg-indigo-50/40" : ""}`}
                  >
                    <div className="w-9 h-9 rounded-xl bg-white border border-slate-100 shadow-sm flex items-center justify-center text-lg flex-shrink-0">
                      {n.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-slate-800">{n.title}</p>
                      <p className="text-xs text-slate-500 truncate">{n.desc}</p>
                      <p className="text-[10px] text-slate-400 mt-0.5">{n.time}</p>
                    </div>
                    {n.unread && <div className="w-2 h-2 bg-indigo-500 rounded-full mt-1 flex-shrink-0" />}
                  </div>
                ))}
              </div>
              <div className="border-t px-4 py-2 text-center">
                <button
                  onClick={() => { setNotifOpen(false); navigate("/alumni/notifications"); }}
                  className="text-xs text-indigo-600 hover:underline font-medium"
                >View all notifications</button>
              </div>
            </Popup>
          )}
        </div>

        {/* Messages Button */}
        <div className="relative">
          <button
            onClick={toggleMsg}
            className={`w-9 h-9 rounded-lg flex items-center justify-center relative transition ${msgOpen ? "bg-indigo-100" : "bg-slate-100 hover:bg-slate-200"}`}
          >
            💬
            {unreadMsgs > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                {unreadMsgs}
              </span>
            )}
          </button>

          {msgOpen && (
            <Popup onClose={() => setMsgOpen(false)}>
              <div className="px-4 py-3 border-b flex items-center justify-between">
                <span className="font-semibold text-slate-800 text-sm">Messages</span>
                <span className="text-xs text-emerald-500 cursor-pointer hover:underline">New message</span>
              </div>
              <div className="max-h-72 overflow-y-auto divide-y divide-slate-50">
                {messages.map((m) => (
                  <div
                    key={m.id}
                    className={`flex items-center gap-3 px-4 py-3 cursor-pointer transition hover:bg-slate-50 ${m.unread ? "bg-emerald-50/40" : ""}`}
                  >
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                      {m.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-semibold text-slate-800">{m.name}</p>
                        <span className="text-[10px] text-slate-400">{m.time}</span>
                      </div>
                      <p className="text-xs text-slate-500 truncate">{m.msg}</p>
                    </div>
                    {m.unread && <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0" />}
                  </div>
                ))}
              </div>
              <div className="border-t px-4 py-2 text-center">
                <button
                  onClick={() => { setMsgOpen(false); navigate("/alumni/messages"); }}
                  className="text-xs text-emerald-600 hover:underline font-medium"
                >View all messages</button>
              </div>
            </Popup>
          )}
        </div>

        <div className="w-px h-6 bg-slate-200 mx-1" />

        {/* Profile */}
        <div className="relative">
          <button
            onClick={toggleProfile}
            className="flex items-center gap-2 pl-1 pr-3 py-1 rounded-full hover:bg-slate-100"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-sm font-bold">
              {user.name?.charAt(0).toUpperCase()}
            </div>
            <span className="hidden sm:block text-sm font-medium text-slate-700">
              {user.name}
            </span>
            <span className={`hidden sm:block transition ${profileOpen ? "rotate-180" : ""}`}>
              ⌄
            </span>
          </button>

          {profileOpen && (
            <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-xl shadow-lg border z-50">
              <div className="px-4 py-3 border-b">
                <p className="text-sm font-semibold">{user.name}</p>
                <p className="text-xs text-slate-500">{user.email}</p>
              </div>
              <div className="py-1">
                <button className="w-full px-4 py-2 text-left hover:bg-slate-50">👤 Profile</button>
                <button className="w-full px-4 py-2 text-left hover:bg-slate-50">⚙️ Settings</button>
                <button className="w-full px-4 py-2 text-left hover:bg-slate-50">🎓 Alumni Card</button>
                <button className="w-full px-4 py-2 text-left hover:bg-slate-50">❓ Help</button>
              </div>
              <div className="border-t">
                <button
                  onClick={logout}
                  className="w-full px-4 py-2 text-left text-red-500 hover:bg-red-50"
                >
                  🚪 Sign Out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {(profileOpen || notifOpen || msgOpen) && (
        <div className="fixed inset-0 z-40" onClick={closeAll} />
      )}
    </header>
  );
}