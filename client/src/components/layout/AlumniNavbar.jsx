import { useState } from "react";

export default function AlumniNavbar({ toggleSidebar, openMobile, user }) {
  const [profileOpen, setProfileOpen] = useState(false);

  const logout = () => {
    localStorage.removeItem("alumni_token");
    window.location.href = "/login";
  };

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

        <button className="w-9 h-9 bg-slate-100 rounded-lg">🔔</button>
        <button className="w-9 h-9 bg-slate-100 rounded-lg">💬</button>

        <div className="w-px h-6 bg-slate-200 mx-1" />

        {/* Profile */}
        <div className="relative">
          <button
            onClick={() => setProfileOpen(!profileOpen)}
            className="flex items-center gap-2 pl-1 pr-3 py-1 rounded-full hover:bg-slate-100"
          >
            {/* Avatar */}
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-sm font-bold">
              {user.name?.charAt(0).toUpperCase()}
            </div>

            {/* Name */}
            <span className="hidden sm:block text-sm font-medium text-slate-700">
              {user.name}
            </span>

            {/* Arrow */}
            <span className={`hidden sm:block transition ${profileOpen ? "rotate-180" : ""}`}>
              ⌄
            </span>
          </button>

          {/* Dropdown */}
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

      {profileOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setProfileOpen(false)}
        />
      )}
    </header>
  );
}
