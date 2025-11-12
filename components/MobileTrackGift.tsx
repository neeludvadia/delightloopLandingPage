"use client";

export default function MobileGiftTracking() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Header with purple gradient and triangle divider */}
      <header className="relative bg-gradient-to-r from-[#332060] via-[#4b2f9a] to-[#6941C6] text-white pb-20">
        <div className="max-w-sm mx-auto pt-10 px-4 text-center">
          <img
            src="/delightloop_logo.svg"
            alt="logo"
            className="w-14 h-14 mx-auto mb-4"
          />
          <h1 className="text-3xl font-bold">Track Gift Status</h1>
          <p className="text-purple-100 text-sm mt-2">
            Real-Time Update Of Your Sent Gift
          </p>
        </div>

        {/* Triangle divider */}
        <div className="absolute -bottom-[10px] left-1/2 -translate-x-1/2 w-[130vw] h-[110px] bg-white clip-triangle shadow-[0_-8px_20px_rgba(99,102,241,0.1)]"></div>
      </header>

      {/* Main Content */}
      <main className="relative -mt-[60px] px-5 pb-20">
        <div className="max-w-sm mx-auto space-y-6">
          {/* Gift Tracking Section */}
          <section className="bg-white shadow-md rounded-xl p-5 border border-gray-100">
            <h2 className="font-bold text-lg mb-4 text-center">Gift Tracking</h2>

            {/* Progress indicator */}
            <div className="flex items-center justify-between relative">
              <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gray-200 -z-10" />
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white">
                  ✓
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white">
                  📦
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-white">
                  🚚
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-white">
                  🎁
                </div>
              </div>
            </div>

            <div className="mt-6 bg-purple-50 border border-purple-100 rounded-lg p-3">
              <h3 className="text-purple-700 font-medium mb-1">
                Processing Your Gift
              </h3>
              <p className="text-sm text-gray-600">
                We are preparing your gift for shipment. You will receive tracking information once it ships.
              </p>
            </div>
          </section>

          {/* Recipient & Gift Summary */}
          <section className="bg-white shadow-md rounded-xl p-5 border border-gray-100">
            <div className="flex justify-between items-center mb-3">
              <h2 className="font-bold text-md">Recipient & Gift Summary</h2>
              <button className="text-sm text-purple-700 font-medium">Details</button>
            </div>

            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-purple-200 text-purple-700 rounded-full flex items-center justify-center font-semibold">
                SG
              </div>
              <div>
                <p className="font-medium">Shashwat Ghosh</p>
                <p className="text-sm text-gray-500">pshah@delightloop.com</p>
                <p className="text-xs text-gray-400">Sent By: DelightLoop</p>
              </div>
            </div>

            <div className="border-t pt-3">
              <div className="flex gap-3 items-start">
                <img
                  src="/colorbook-thumb.png"
                  alt="Gift"
                  className="w-14 h-14 rounded-md"
                />
                <div>
                  <p className="font-medium">Colorstrology Book (Paperback)</p>
                  <p className="text-sm text-gray-600 leading-snug">
                    Discover every vibrant aspect of your personality with this fascinating blend of astrology, numerology, and color theory.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Delivery Info */}
          <section className="bg-white shadow-md rounded-xl p-5 border border-gray-100">
            <div className="flex justify-between items-center mb-3">
              <h2 className="font-bold text-md">Delivery Information</h2>
              <button className="text-sm text-purple-700 font-medium">
                Carrier
              </button>
            </div>

            <div className="space-y-3 text-sm">
              <div>
                <p className="text-gray-500">Tracking Number</p>
                <p className="font-medium text-gray-800">To be determined</p>
              </div>
              <div>
                <p className="text-gray-500">Last Updated</p>
                <p className="font-medium text-gray-800">Oct 30, 2025, 3:33 PM</p>
              </div>
              <div className="bg-purple-50 border border-purple-100 rounded-lg p-2">
                <p className="text-gray-500 text-sm">Estimated Delivery</p>
                <p className="font-semibold text-[#6941C6]">To be determined</p>
              </div>
            </div>
          </section>

          {/* Footer CTA */}
          <section className="bg-[#332060] text-white text-center rounded-2xl p-6">
            <h3 className="text-lg font-semibold mb-2">
              Want to send gifts like this?
            </h3>
            <p className="text-sm text-purple-200 mb-4">
              Join thousands of marketing teams using DelightLoop
            </p>
            <div className="text-xs text-purple-300 mb-4">
              <a href="#" className="underline mr-2">Privacy Policy</a>|
              <a href="#" className="underline ml-2">Terms of Service</a>
            </div>
            <button className="bg-white text-[#6941C6] font-medium py-3 px-5 rounded-md shadow-md hover:bg-purple-50 transition">
              Contact Support ↗
            </button>
          </section>
        </div>
      </main>
    </div>
  );
}
