"use client";
import { HiPhone } from "react-icons/hi";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Banner() {
  return (
    <div className="min-h-screen relative overflow-hidden px-4 sm:px-6 md:px-16 max-w-7xl mx-auto">
      <div className="relative z-10 max-w-6xl mx-auto py-16 sm:py-20 lg:py-24">
        <div className="mt-10 sm:mt-14 md:mt-16">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-8">
            <span className="text-black">Trusted </span>
            <span className="bg-black text-white px-3 sm:px-4 py-1 sm:py-2 rounded-lg">Partner</span>
            <span className="text-black"> for</span>
            <br />
            <span className="text-black">Your Website </span>
            <span className="bg-black text-white p-1 sm:p-2 mt-8 sm:mt-12 rounded-lg inline-block">Develop.</span>
          </h1>

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
            <div className="flex items-center space-x-4 self-start">
              <div className="writing-mode-vertical text-sm text-gray-700 font-medium tracking-wider hidden sm:block">
                @williamney
              </div>
              <div className="flex flex-col space-y-2">
                <div className="w-5 h-5 sm:w-6 sm:h-6 -rotate-90 text-black"><FaTwitter /></div>
                <div className="w-5 h-5 sm:w-6 sm:h-6 -rotate-90 text-black"><FaInstagram /></div>
                <div className="w-5 h-5 sm:w-6 sm:h-6 -rotate-90 text-black"><FaFacebook /></div>
                <div className="w-px h-10 sm:h-12 bg-black"></div>
              </div>
            </div>

            <div className="flex-1 max-w-2xl mx-auto text-center lg:text-left">
              <div className="mb-8 sm:mb-10">
                <p className="text-base sm:text-lg md:text-xl text-gray-800 font-medium mb-2">
                  Building the world's best marketing websites for over a decade
                </p>
                <p className="text-base sm:text-lg md:text-xl text-gray-800">
                  Your trusted partner for strategy, design, and dev.
                </p>
              </div>

              <button className="border-2 border-black rounded-full px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium hover:bg-black hover:text-white transition-colors duration-200">
                <div className="flex justify-center lg:justify-start gap-2 items-center">
                  <div className="border border-black rounded-full p-2">
                    <HiPhone />
                  </div>
                  <div>Schedule a Call</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .writing-mode-vertical {
          writing-mode: vertical-rl;
          text-orientation: mixed;
          transform: rotate(180deg);
        }
      `}</style>
    </div>
  );
}
