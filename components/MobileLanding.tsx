export default function Home() {
  return (
    <div className=" md:hidden min-h-screen bg-white overflow-x-hidden">
      {/* Header with gradient and real triangle div */}
      <header className="relative bg-gradient-to-r from-[#332060] to-[#6941C6] text-white min-h-[420px] sm:h-[50vh]">
  <div className="max-w-sm mx-auto pt-8 pb-20 px-4 text-center">  {/* increased bottom padding */}
    {/* Logo */}
    <div className="bg-">
    <img
      src="/delightloop_logo.svg"
      alt="logo"
      className="w-14 h-14 mx-auto mb-4"
      />
      </div>

    <h1 className="text-3xl font-bold mb-3">Hello Shashwat!</h1>
    <p className="text-purple-100 text-sm leading-relaxed">
      Every Color Tells A Story — And So Does Every Connection. This Color Astrology
      Book Is Our Way Of Letting You Feel What A Truly Personal Gift Can Be —
      The Kind DelightLoop Helps You Create.
    </p>
  </div>

  {/* Actual triangle div */}
  <div className="absolute -bottom-[10px] left-1/2 -translate-x-1/2 w-[130vw] h-[110px] bg-white clip-triangle z-10"></div>
  {/* stars */}
  <img
        className="absolute right-0 top-0 w-[20vh]"
        src={"/starLogo.svg"}
        />
</header>


      {/* Main content */}
      <main className="relative -mt-24 px-8 pb-16 z-[100]">
        <div className="max-w-sm mx-auto w-full box-border">
          {/* Video card */}
          <div className="rounded-2xl overflow-hidden shadow-lg mb-6 ring-8 ring-white/95">
            <video
              controls
              className="w-full h-auto block rounded-2xl"
              playsInline
              poster="/thumbnail.png"
            >
              <source src="/pinkesh-intro.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Buttons vertical on mobile */}
          <div className="flex flex-col gap-3">
            <button className="bg-[#6941C6] text-white font-medium py-3 rounded-md w-full">
              DelightLoop 2.0 Intro
            </button>
            <button className="bg-[#332060] text-white font-medium py-3 rounded-md w-full">
              Book A Meeting
            </button>
            <button className="border border-[#6941C6] text-[#6941C6] font-medium py-3 rounded-md hover:bg-purple-50 w-full">
              Leave Your Message To Host
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
