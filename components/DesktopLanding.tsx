"use client";

import ExpandableText from "./ExpandableText";

export default function DesktopLanding() {
  return (
    <div className="hidden md:flex flex-col min-h-screen h-full text-gray-800 overflow-x-hidden">

      {/* ================= HEADER ================= */}
      <header className="relative flex justify-between items-center px-16 py-3 bg-gradient-to-r from-[#332060] via-[#4b2f9a] to-[#6941C6] text-white border-b-1 border-white z-10">
        
        {/* Left: Logo */}
        <div className="flex items-center gap-3">
          <div className="bg-[#6941C6] rounded-lg">
            <img src="/delightloop_logo.svg" alt="DelightLoop Logo" className="w-12 h-12" />
          </div>
          <h1 className="text-2xl font-semibold tracking-wide">DelightLoop</h1>
        </div>

        {/* Right: Preview Mode Button */}
        <button className="bg-white hover:cursor-pointer text-[#6941C6] font-medium py-2 px-5 rounded-md shadow-md hover:bg-[#f7f3ff] transition">
          Preview Mode
        </button>
      </header>

      {/* ================= HERO (Purple Section) ================= */}
      <section className="relative flex flex-col items-center justify-center text-center px-10 pt-5 pb-56 bg-gradient-to-r from-[#332060] via-[#4b2f9a] to-[#6941C6] z-[5] min-h-[60vh]">
        
        <h1 className="text-4xl font-bold text-white mb-6">Hey Corrina,</h1>

        <div className="max-w-2xl mx-auto">
          <ExpandableText maxHeight={180}>
            You’ve been one of those rare voices in B2B marketing who doesn’t just follow trends—you shape them.
            We would like to get your help in shaping our vision.

            HyperPersonalized Physical Nudges have created 3x more opportunities in pipeline with our customers
            as they build meaningful relationships with prospects & customers through thoughtful gestures.

            DelightLoop 2.0 is our next step to build out full funnel ABX Pipeline Accelerator for Lifecycle
            Marketing Leaders & we wanted you to be the first one to see it.

            Your Insights & comments on LinkedIn will mean the world and add a whole new color to our campaign!
          </ExpandableText>
        </div>

        {/* Triangle divider */}
        <div className="absolute -bottom-[45px] left-1/2 -translate-x-1/2 w-[130vw] h-[200px] bg-white clip-triangle shadow-[0_-8px_20px_rgba(99,102,241,0.1)] z-[1]" />

        {/* Stars */}
        <img className="absolute right-0 top-0" src="/starLogo.svg" />
      </section>

      {/* ================= VIDEO ================= */}
      <div className="relative flex justify-center -mt-[180px] z-[10]">
        <div className="max-w-[700px] w-full rounded-3xl overflow-hidden ring-8 ring-white aspect-video shadow-lg">
          <video
            controls
            className="w-full h-full object-cover rounded-3xl"
            playsInline
            poster="/thumbnail.png"
          >
            <source src="https://pub-45fbd040baec4f30bc98b8fb212bab3b.r2.dev/testvideo" type="video/mp4" />
          </video>
        </div>
      </div>

      {/* ================= BUTTONS ================= */}
      <div className="flex flex-col items-center w-full justify-center gap-4 mt-10 pb-16">
        <div className="flex gap-4 w-full max-w-[75vh] justify-center">
          <button className="bg-[#6941C6] text-white font-medium hover:cursor-pointer py-3 px-8 rounded-md shadow-md w-full text-nowrap hover:bg-[#5a36ad] transition">
            DelightLoop 2.0 Intro
          </button>
          <button className="bg-[#332060] text-white font-medium py-3 hover:cursor-pointer px-8 rounded-md w-full text-nowrap shadow-md hover:bg-[#2a194e] transition">
            Book A Meeting
          </button>
        </div>

        <button className="border border-[#6941C6] text-[#6941C6] hover:cursor-pointer font-medium w-[75vh] py-3 px-8 rounded-md hover:bg-purple-50 transition">
          Leave Your Message To Host
        </button>
      </div>

    </div>
  );
}
