"use client";

import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

import SkillCard from "@/app/components/SkillCard";
import { IoIosArrowRoundDown } from "react-icons/io";

export default function SkillsSection() {
  return (
    <div className="min-h-screen bg-black text-white py-16 px-6 md:px-20 max-w-7xl mx-auto rounded-2xl">
      {/* Top Row: Why Choose Me and Description */}
      <div className="flex flex-col md:flex-row justify-between items-start mb-16 max-w-6xl mx-auto">
        <div>
          <div className="flex gap-2 items-center">
            <div className="border border-white rounded-full p-2">
                <IoIosArrowRoundDown className="text-xl" />
            </div>
            <button className="border border-white text-white px-4 py-2 rounded-full flex items-center gap-2">
               Why Choose me
            </button>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mt-8">
            My Extensive
            <br />
            List of Skills
          </h1>
        </div>

        <div className="mt-12 md:mt-0 max-w-md text-right">
          <p className="text-gray-300">
            Building the worlds best marketing Your
            <br />
            trusted partner for strategy, design, and dev.
          </p>
          <div className="w-full h-px bg-white mt-4 mb-6"></div>
          <div className="flex justify-end gap-4">
            <button className="w-10 h-10 border border-white rounded-full flex items-center justify-center">
              <FaArrowLeft />
            </button>
            <button className="w-10 h-10 border border-white rounded-full flex items-center justify-center">
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>

      {/* Skill Cards */}
      <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
        <SkillCard title="HTML & CSS" rotate={false} />
        <SkillCard title="Javascript" rotate={true} />
        <SkillCard title="Webflow" rotate={false} />
      </div>
    </div>
  );
}
