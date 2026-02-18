import HeroSection from "./HeroSection";
import Announcements from "./Announcements";
import Spotlight from "./Spotlight";
import Notifications from "./Notifications";
import Messages from "./Messages";
import EventsCalendar from "./EventsCalendar";
import LatestResources from "./LatestResources";

export default function AlumniDashboard() {
  return (
    <div className="space-y-6">
      {/* HERO */}
      <HeroSection />

      {/* WELCOME STRIP */}
      <section className="relative bg-white rounded-xl border-l-4 border-[#C9A84C] p-6 sm:p-8 overflow-hidden">
        <div className="absolute right-6 top-0 text-[120px] text-[#F5EDD6] font-serif select-none">
          “
        </div>

        <div className="relative z-10 max-w-3xl">
          <p className="font-serif text-lg italic text-gray-800 leading-relaxed">
            <strong className="text-teal-700 not-italic">
              Your lifelong coaching home!
            </strong>
            <br />
            "Welcome to Mashar Alumni Network — The region's most vibrant
            community of certified coaches, mentors, and professionals."
          </p>

          <p className="mt-3 text-sm text-gray-500 leading-relaxed">
            As a Mashar graduate, your journey doesn't end at certification.
            This platform is your dedicated space to continue growing, connect
            with like-minded professionals, and access exclusive resources.
          </p>
        </div>
      </section>

      {/* MAIN GRID (MATCHES HTML DESIGN) */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* LEFT SIDE */}
        <div className="lg:col-span-2 space-y-6">
          <Announcements />
          <Spotlight />
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="space-y-6">
          <Notifications />
          <Messages />
        </div>
      </div>

      {/* EVENTS + RESOURCES ROW */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* LEFT — Calendar */}
        <div className="lg:col-span-2">
          <EventsCalendar />
        </div>

        {/* RIGHT — Resources */}
        <div>
          <LatestResources />
        </div>
      </div>
    </div>
  );
}
