import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
import {
  Mail,
  Phone,
  MapPin,
  Search,
  ChevronDown,
  ChevronRight,
  Check,
  Star,
  ArrowRight,
} from "lucide-react";

export default function Index() {
  const [activeTab, setActiveTab] = useState("assessment");

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="w-full h-[123px] flex items-center px-[84px] gap-[86px]">
        <div className="w-[180px] p-2.5">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/23745e4a7604d75f3132f33d80725f2ff91e747c?width=320"
            alt="Mashar Logo"
            className="h-[103px] w-full object-contain"
          />
        </div>

        <nav className="flex items-center gap-2 pt-8">
          <a
            href="#"
            className="font-poppins text-xl text-black py-2.5 px-2.5 tracking-[0.5px]"
          >
            Home
          </a>
          <a
            href="#"
            className="font-poppins text-xl text-black py-2.5 px-2.5 tracking-[0.5px]"
          >
            Why Mashar
          </a>
          <a
            href="#"
            className="font-poppins text-xl text-black py-2.5 px-2.5 tracking-[0.5px]"
          >
            Our Signature
          </a>
          <a
            href="#"
            className="font-poppins text-xl text-mashar-orange py-2.5 px-2.5 tracking-[0.5px] border-b border-mashar-orange"
          >
            Explore Programs
          </a>
          <div className="flex items-center gap-2">
            <a
              href="#"
              className="font-poppins text-xl text-black py-2.5 px-2.5 tracking-[0.5px]"
            >
              Leadership Hub
            </a>
            <ChevronDown className="w-7 h-6 text-black" />
          </div>
          <a
            href="#"
            className="font-poppins text-xl text-black py-2.5 px-2.5 tracking-[0.5px]"
          >
            Let's Talk
          </a>
        </nav>

        <div className="flex items-center gap-1 pt-8 ml-auto">
          <Search className="w-10 h-10 p-2.5 text-mashar-blue" />
          <div className="flex flex-col gap-2">
            <div className="bg-white border border-mashar-blue rounded-3xl px-4 py-1 h-8 flex items-center">
              <span className="text-mashar-blue font-roboto text-sm tracking-[0.5px]">
                English
              </span>
              <ChevronDown className="w-3 h-3 ml-1 text-mashar-blue" />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative w-full h-[500px] bg-cover bg-center bg-black/60 flex flex-col justify-end px-2.5"
        style={{
          backgroundImage:
            "url('https://api.builder.io/api/v1/image/assets/TEMP/4c641eaf32da00de0119d4f89faae88c7b1f9ec8?width=3094')",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="flex justify-center mb-[137px]">
          <div className="text-center px-2.5 py-[22px]">
            <h1 className="text-white font-spartan text-[46px] font-semibold leading-[64px] tracking-[0.5px] w-[631px]">
              Explore Our Programs
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-[18px] absolute bottom-[116px] right-[623px]">
          <span className="text-white font-spartan text-lg font-semibold leading-[64px] tracking-[0.5px]">
            Home
          </span>
          <ChevronRight className="w-[22px] h-[30px] text-white" />
          <span className="text-white font-spartan text-lg font-semibold leading-[64px] tracking-[0.5px]">
            Explore Programs
          </span>
        </div>
      </section>

      {/* Program Tabs */}
      <section className="py-2.5 px-2.5 pb-32">
        <div className="w-full flex flex-col items-center">
          <div className="bg-mashar-blue rounded-lg h-[110px] flex items-center justify-center gap-0.5">
            {/* <Button
              variant={activeTab === "training" ? "default" : "ghost"}
              className={`font-spartan text-xl font-semibold py-3 px-6 rounded-lg tracking-[0.5px] ${
                activeTab === "training"
                  ? "bg-mashar-orange text-white"
                  : "text-white"
              }`}
              onClick={() => setActiveTab("training")}
            >
              TRAINING PROGRAMS
            </Button> */}
            {/* <Button
              variant={activeTab === "coaching" ? "default" : "ghost"}
              className={`font-spartan text-xl font-semibold py-3 px-6 rounded-lg tracking-[0.5px] ${
                activeTab === "coaching"
                  ? "bg-mashar-orange text-white"
                  : "text-white"
              }`}
              onClick={() => setActiveTab("coaching")}
            >
              COACHING PROGRAMS
            </Button>
            <Button
              variant={activeTab === "mentoring" ? "default" : "ghost"}
              className={`font-spartan text-xl font-semibold py-3 px-6 rounded-lg tracking-[0.5px] ${
                activeTab === "mentoring"
                  ? "bg-mashar-orange text-white"
                  : "text-white"
              }`}
              onClick={() => setActiveTab("mentoring")}
            >
              MENTORING & SUPERVISION
            </Button>
            <Button
              variant={activeTab === "assessment" ? "default" : "ghost"}
              className={`font-spartan text-xl font-semibold py-3 px-6 rounded-lg tracking-[0.5px] ${
                activeTab === "assessment"
                  ? "bg-mashar-orange text-white"
                  : "text-white"
              }`}
              onClick={() => setActiveTab("assessment")}
            >
              ASSESSMENT TOOLS
            </Button> */}
          </div>

          {/* Assessment Tools Content */}
          <div className="w-full bg-white relative">
            <div className="absolute left-[241px] top-[79px] opacity-80">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/c8690d7b5b52490c76b1dc34c416a6a6b21a1605?width=292"
                alt="Growth icon"
                className="w-[146px] h-[120px]"
              />
            </div>

            <div className="h-[730px] py-[116px] px-[84px] flex justify-center items-center gap-[221px]">
              <div className="w-[1379px] flex items-center gap-10">
                <div className="w-[534px] h-[326px] flex flex-col justify-center items-start gap-8">
                  <div className="w-[534px] flex flex-col items-start gap-4">
                    <h2 className="font-spartan text-[46px] font-semibold leading-[71.8px] tracking-[0.5px]">
                      <span className="text-black">Assessment </span>
                      <span className="text-mashar-orange">Tools</span>
                    </h2>
                    <div className="flex flex-col items-start gap-1">
                      <svg
                        className="w-[429px] h-[33px]"
                        viewBox="0 0 429 33"
                        fill="none"
                      >
                        <path
                          d="M100 22.5C177.882 5.85298 251.119 7.16037 329 22.5"
                          stroke="url(#paint0_linear)"
                          strokeWidth="7"
                          strokeLinecap="round"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear"
                            x1="212.309"
                            y1="10.5"
                            x2="212.309"
                            y2="22.5"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0.547977" stopColor="#2B3476" />
                            <stop offset="0.548077" stopColor="#f39300" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>

                  <div className="h-[224px] flex flex-col items-center gap-[14px] w-full">
                    <p className="text-black font-poppins text-base font-normal leading-6 tracking-[0.5px] w-full">
                      Research-backed tools for today's fast-moving
                      organizations — giving you the clarity to take intentional
                      action. We help you see the whole picture, uncovering what
                      often goes unseen: team dynamics, communication patterns,
                      and leadership blind spots that shape culture and
                      performance. Reveal what drives your people. Rethink how
                      your team's work.
                    </p>

                    <div className="h-14 flex items-center">
                      {/* <Button className="bg-mashar-blue text-white font-spartan text-base font-semibold tracking-[0.5px] rounded-xl border border-white px-3 h-14">
                        Book a Discovery Call
                        <ArrowRight className="w-[18px] h-[19px] ml-2" />
                      </Button> */}
                    </div>
                  </div>
                </div>

                <div className="w-[718px] h-[548px] relative">
                  <div className="absolute left-[119px] top-0 w-[599px] h-[548px]">
                    <div className="relative w-[599px] h-[548px]">
                      <div className="absolute left-[30px] top-0 w-[569px] h-[517px] rounded-[32px] border border-black bg-mashar-gradient"></div>
                      <img
                        src="https://api.builder.io/api/v1/image/assets/TEMP/f8417a0af2c6c0e50fcad6493c15884e099665f2?width=1138"
                        alt="Team meeting"
                        className="absolute left-0 top-[30px] w-[569px] h-[517px] rounded-[32px]"
                      />
                    </div>
                  </div>
                  <div className="absolute left-0 top-[161px] w-[298px] h-[199px]">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/14b4f8fed654eecb27c727fd915cd6caf340d7f6?width=596"
                      alt="Assessment tools"
                      className="w-[298px] h-[199px] rounded-[14px] border-4 border-mashar-orange shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Assessment Cards */}
            {/* <div className="w-full h-[639px] px-[34px] flex justify-center items-center gap-[43px] flex-wrap">
              <Card className="w-[659px] h-[592px] p-6 rounded-xl bg-white shadow-lg">
                <CardContent className="w-[627px] h-[500px] p-3 flex flex-col justify-between items-center">
                  <div className="flex flex-col items-start gap-[34px] w-full">
                    <div className="w-[581px] px-3 flex flex-col items-center gap-[17px]">
                      <h3 className="w-[579px] text-black font-poppins text-2xl font-medium leading-9 tracking-[0.5px]">
                        GEDI – Global Executive Dynamics Inventory (20 minutes)
                      </h3>
                      <div className="flex flex-col items-start gap-[25px] w-full">
                        <div className="flex justify-center items-center gap-2.5 w-full">
                          <p className="w-[579px] text-mashar-blue font-poppins text-xl font-medium leading-8 tracking-[0.5px]">
                            Understand how your executive team engages, leads,
                            and performs.
                          </p>
                        </div>
                        <div className="w-[608px] flex justify-center items-center gap-2.5">
                          <p className="w-[614px] text-black font-poppins text-base font-normal leading-8 tracking-[0.5px]">
                            This 20-minute, research-based group assessment
                            provides powerful, actionable insights into how
                            senior teams truly function—spanning engagement
                            levels, power dynamics, adaptive behavior, strategic
                            alignment, and bold decision-making.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-start w-full">
                      <div className="flex h-[63px] items-center gap-2.5 w-full">
                        <Check className="w-[42px] h-[42px] text-mashar-orange" />
                        <p className="w-[553px] h-[42px] text-black font-poppins text-base font-medium leading-8 tracking-[0.5px]">
                          <span className="text-mashar-orange">For: </span>
                          <span>Executives, senior leadership teams</span>
                        </p>
                      </div>
                      <div className="flex h-[63px] items-center gap-2.5 w-full">
                        <Check className="w-[42px] h-[42px] text-mashar-orange" />
                        <p className="w-[553px] text-black font-poppins text-base font-medium leading-8 tracking-[0.5px]">
                          <span className="text-mashar-orange">
                            You'll gain:{" "}
                          </span>
                          <span>
                            Actionable intelligence on influence patterns,
                            adaptability, and team alignment
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="w-[659px] h-[592px] p-6 rounded-xl bg-white shadow-lg">
                <CardContent className="w-[627px] h-[500px] p-3 flex flex-col justify-between items-center">
                  <div className="flex flex-col items-start gap-[34px] w-full">
                    <div className="w-[581px] px-3 flex flex-col items-center gap-[17px]">
                      <h3 className="w-[579px] text-black font-poppins text-2xl font-medium leading-9 tracking-[0.5px]">
                        TAWDI – Team & Workplace Dynamics Inventory (10 minutes)
                      </h3>
                      <div className="flex flex-col items-start gap-[25px] w-full">
                        <div className="flex justify-center items-center gap-2.5 w-full">
                          <p className="w-[579px] text-mashar-blue font-poppins text-xl font-medium leading-8 tracking-[0.5px]">
                            Unlock the behavioral blueprint of your teams.
                          </p>
                        </div>
                        <div className="w-[608px] flex justify-center items-center gap-2.5">
                          <p className="w-[614px] text-black font-poppins text-base font-normal leading-8 tracking-[0.5px]">
                            In just 10 minutes, this assessment uncovers how
                            your people collaborate, communicate, and show up in
                            teams. Combined with a coaching debrief, TAWDI
                            provides deep awareness into what drives, or drains
                            team performance.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-start w-full">
                      <div className="flex h-[63px] items-center gap-2.5 w-full">
                        <Check className="w-[42px] h-[42px] text-mashar-orange" />
                        <p className="w-[553px] h-[42px] text-black font-poppins text-base font-medium leading-8 tracking-[0.5px]">
                          <span className="text-mashar-orange">For: </span>
                          <span>Cross-functional teams at all levels</span>
                        </p>
                      </div>
                      <div className="flex h-[63px] items-center gap-2.5 w-full">
                        <Check className="w-[42px] h-[42px] text-mashar-orange" />
                        <p className="w-[553px] text-black font-poppins text-base font-medium leading-8 tracking-[0.5px]">
                          <span className="text-mashar-orange">
                            You'll gain:{" "}
                          </span>
                          <span>
                            Personal and group profiles, clarity on team
                            strengths, cohesion, and behavioral dynamics
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div> */}
          </div>
        </div>
      </section>

      {/* Custom Solutions Section */}
      <section className="py-[33px] bg-mashar-gradient">
        <div className="w-[1360px] mx-auto px-[21px] py-[34px] flex flex-col items-center gap-8">
          <div className="flex flex-col items-center gap-[18px] w-full">
            <div className="flex flex-col items-center gap-3 w-full">
              <div className="flex flex-col items-center gap-3">
                <h2 className="font-spartan text-[46px] font-semibold leading-[71.8px] tracking-[0.5px]">
                  <span className="text-gray-300">Custom </span>
                  <span className="text-mashar-orange">Solutions</span>
                </h2>
                <svg width="237" height="20" viewBox="0 0 237 20" fill="none">
                  <path
                    d="M4 16C81.8819 -0.647022 155.119 0.66037 233 16"
                    stroke="url(#paint0_linear_custom)"
                    strokeWidth="7"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_custom"
                      x1="4"
                      y1="10"
                      x2="233"
                      y2="10"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0.7" stopColor="#EB8F03" />
                      <stop offset="0.71" stopColor="#D9D9D9" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="py-2.5 flex justify-center items-center gap-2.5 w-full">
                <p className="flex-1 text-white text-center font-poppins text-2xl font-normal leading-6 tracking-[0.5px]">
                  <span className="text-white">Designed </span>
                  <span className="text-mashar-orange">Around You. </span>
                  <span className="text-white">Built for Lasting Change.</span>
                </p>
              </div>
            </div>
            <p className="w-[1047px] text-white text-center font-poppins text-2xl font-normal leading-[42px] tracking-[0.5px]">
              Every organization is unique — so are our solutions. From
              leadership capacity to culture alignment, we design tailored
              programs that are relevant, interactive, and sustainable.
            </p>
          </div>

          <div className="flex flex-col items-center gap-2 w-full">
            <div className="px-[79px] flex flex-col items-center gap-2.5 w-full">
              {/* <Button className="bg-mashar-blue text-white font-poppins text-base font-semibold tracking-[0.5px] uppercase rounded-xl border border-white px-3 h-14">
                → Request a Custom Workshop
                <ArrowRight className="w-[18px] h-[18px] ml-2" />
              </Button> */}
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-[75px] flex flex-col items-center gap-[133px] w-full">
        <div className="w-[1367px] flex justify-center items-center">
          <div className="w-[1367px] px-2.5 flex flex-col items-start gap-2.5 h-[196px]">
            <div className="flex flex-col justify-center items-center w-full">
              <div className="w-[1327px] flex flex-col items-center">
                <div className="flex flex-col justify-center items-center gap-2.5 w-full">
                  <h2 className="text-center font-spartan text-[46px] font-semibold leading-[71.8px] tracking-[0.5px] w-full">
                    <span className="text-black">What </span>
                    <span className="text-mashar-orange">Clients Say</span>
                  </h2>
                  <svg width="237" height="20" viewBox="0 0 237 20" fill="none">
                    <path
                      d="M4 16C81.8819 -0.647022 155.119 0.66037 233 16"
                      stroke="url(#paint0_linear_clients)"
                      strokeWidth="7"
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_clients"
                        x1="116.309"
                        y1="4"
                        x2="116.309"
                        y2="16"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0.547977" />
                        <stop offset="0.548077" stopColor="#0f1c80" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="flex justify-center items-center gap-2.5 w-full">
                <p className="flex h-[82px] flex-col justify-center flex-1 text-black text-center font-poppins text-base font-normal leading-6 tracking-[0.5px]">
                  Real results. Real voices.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Card */}
        {/* <div className="w-[1440px] h-[719px] py-2.5 flex justify-end items-center">
          <div className="w-[808px] h-[679px] py-[123px] px-2.5 flex flex-col items-center gap-2.5">
            <Card className="h-[473px] w-full rounded-3xl bg-mashar-blue">
              <CardContent className="relative h-full p-[70px]">
                <svg
                  className="absolute left-[361px] top-[48px] w-[66px] h-[52px]"
                  viewBox="0 0 67 53"
                  fill="none"
                >
                  <path
                    d="M22.5 24.75H6.3025C6.81359 21.3464 8.02892 18.0869 9.87087 15.1795C11.7128 12.2722 14.1409 9.78097 17 7.865L21.9225 4.565L18.8975 0L13.975 3.3C9.83151 6.06121 6.4337 9.80254 4.08306 14.192C1.73243 18.5814 0.501669 23.4833 0.5 28.4625V46.75C0.5 48.2087 1.07946 49.6076 2.11091 50.6391C3.14236 51.6705 4.54131 52.25 6 52.25H22.5C23.9587 52.25 25.3576 51.6705 26.3891 50.6391C27.4205 49.6076 28 48.2087 28 46.75V30.25C28 28.7913 27.4205 27.3924 26.3891 26.3609C25.3576 25.3295 23.9587 24.75 22.5 24.75Z"
                    fill="white"
                  />
                  <path
                    d="M61 24.75H44.8025C45.3136 21.3464 46.5289 18.0869 48.3709 15.1795C50.2128 12.2722 52.6409 9.78097 55.5 7.865L60.4225 4.565L57.425 0L52.475 3.3C48.3315 6.06121 44.9337 9.80254 42.5831 14.192C40.2324 18.5814 39.0017 23.4833 39 28.4625V46.75C39 48.2087 39.5795 49.6076 40.6109 50.6391C41.6424 51.6705 43.0413 52.25 44.5 52.25H61C62.4587 52.25 63.8576 51.6705 64.8891 50.6391C65.9205 49.6076 66.5 48.2087 66.5 46.75V30.25C66.5 28.7913 65.9205 27.3924 64.8891 26.3609C63.8576 25.3295 62.4587 24.75 61 24.75Z"
                    fill="white"
                  />
                </svg>

                <p className="w-[638px] h-[194px] flex flex-col justify-center text-white text-justify font-poppins text-base font-normal leading-6 tracking-[0.5px] absolute left-[70px] top-[100px]">
                  Mashar's coaching helped me reconnect with my purpose and lead
                  my team with clarity and confidence. Their understanding of
                  our culture made all the difference.
                </p>

                <p className="absolute left-[235px] top-[299px] w-[319px] h-6 text-white text-justify font-poppins text-base font-normal leading-6 tracking-[0.5px]">
                  Senior Leader, Oil & Gas Sector – GCC
                </p>

                <div className="absolute left-[349px] top-[337px] w-[90px] h-[90px] rounded-full border border-gray-300">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/7d3133ac142e4565d9a7fbb5cdb8a2aa44ebcc57?width=128"
                    alt="Client"
                    className="w-16 h-16 rounded-full mx-auto mt-3"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div> */}
      </section>
    </div>
  );
}

{
  /* Company Logos */
}
{
  /* <section className="w-[1547px] px-[49px] pb-[100px] flex flex-col justify-center items-center gap-[35px]">
        <div className="w-[1717px] h-[220px] py-2.5 px-2.5 bg-white flex justify-end items-center">
          <div className="w-[4412px] h-[200px] flex justify-center items-start gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="w-[230px] h-[200px] p-2.5 bg-white flex justify-center items-center gap-2.5">
                <img 
                  src="https://api.builder.io/ap */
}

// nav bar
