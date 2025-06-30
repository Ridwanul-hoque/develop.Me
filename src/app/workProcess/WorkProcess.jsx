"use client"
import React, { useState } from 'react';

export default function ProcessPage () {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="bg-black text-white px-6 py-16 font-sans max-w-7xl mx-auto">
      <div className="flex justify-start mb-10">
        <button className="border border-white rounded-full px-4 py-1 text-sm flex items-center gap-2">
          <span>←</span> Work Process
        </button>
      </div>

      <h1 className="text-3xl font-bold text-center mb-10">My Work Process</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Discovery Card */}
        <div className="bg-zinc-900 rounded-xl p-6 relative">
          <div className="inline-block bg-teal-300 text-black text-sm font-bold rounded-full px-3 py-1 mb-4">Discovery</div>
          <a href="#" className="absolute top-6 right-6 text-sm text-white">Read More →</a>
          <p className="mt-6 text-sm text-gray-300">
            We start every new client interaction with an in-depth discovery call where we get to know each other, discuss your current and future objectives, and recommend the best course of action.
          </p>
        </div>

        {/* Strategy Card */}
        <div
          className={`rounded-xl p-6 relative transform transition-all duration-300 ${hovered ? 'rotate-0 scale-105 bg-lime-300 text-black' : 'rotate-[-2deg] bg-lime-300 text-black'}`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div className="inline-block bg-black/10 text-black text-sm font-bold rounded-full px-3 py-1 mb-4">Strategy</div>
          <a href="#" className="absolute top-6 right-6 text-sm text-black">Read More →</a>
          <p className="mt-6 text-sm">
            Every end-to-end project of ours begins with a bespoke pre-build strategy. From brand ID consultation to in-depth code reviews we’re here to set the stage for success.
          </p>
        </div>

        {/* Design Card */}
        <div className="bg-zinc-900 rounded-xl p-6 relative">
          <div className="inline-block bg-cyan-400 text-black text-sm font-bold rounded-full px-3 py-1 mb-4">Design</div>
          <a href="#" className="absolute top-6 right-6 text-sm text-white">Read More →</a>
          <p className="mt-6 text-sm text-gray-300">
            After we have a comprehensive understanding of your brand, we’ll be ready to move onto design. Each page or will be designed, reviewed, and given your stamp of approval.
          </p>
        </div>

        {/* Build Card */}
        <div className="bg-zinc-900 rounded-xl p-6 relative">
          <div className="inline-block bg-teal-300 text-black text-sm font-bold rounded-full px-3 py-1 mb-4">Build</div>
          <a href="#" className="absolute top-6 right-6 text-sm text-white">Read More →</a>
          <p className="mt-6 text-sm text-gray-300">
            Whether we’ve just finished designing your new site or you’re handing off finished designs for us to develop in Webflow, we’re here to apply our trusted development process to your project.
          </p>
        </div>
      </div>
    </div>
  );
};

