import React from 'react';

export default function AboutPage() {
  return (
    <main className=" bg-gradient-to-bl from-lime-300 via-white to-white text-black font-sans px-6 pt-16 relative overflow-hidden max-w-7xl mx-auto">
      {/* Top Right About Button */}
      <div className="absolute top-6 right-6 mt-16">
        <button className="border border-black rounded-full px-4 py-1 text-sm font-medium hover:bg-black hover:text-white transition duration-300">
          About
        </button>
      </div>

      {/* Main Heading */}
      <section className="text-center max-w-4xl mx-auto mt-16">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          I’ve been <span className="bg-black text-white px-2">Developing</span><br />
          Websites since <span className="bg-black text-white px-2">2013</span>
        </h1>
        <p className="text-lg mt-6 text-gray-800">
          We start every new client interaction with an in-depth discovery call where we get
          to know each other and recommend the best course of action.
        </p>
      </section>

      {/* Previously Worked On Section */}
      <section className="mt-20 max-w-6xl mx-auto">
        <h2 className="text-left font-bold text-sm tracking-widest mb-6">PREVIOUSLY WORKED ON</h2>
        <div className="flex flex-wrap gap-4 justify-center items-center">
          <div className="bg-black text-white px-6 py-2 rotate-[-6deg] rounded-full font-semibold text-sm shadow-md">
            awwwards.
          </div>
          <div className="border border-black px-6 py-2 rotate-[5deg] rounded-full font-semibold text-sm shadow-md">
            facebook
          </div>
          <div className="border border-black px-6 py-2 rotate-[-3deg] rounded-full font-semibold text-sm shadow-md">
            CSSDesignAwards
          </div>
          <div className="border border-black px-6 py-2 rotate-[8deg] rounded-full font-semibold text-sm shadow-md">
            CSS♥WINNER
          </div>
          <div className="border border-black px-6 py-2 rotate-[-5deg] rounded-full font-semibold text-sm shadow-md">
            /thoughtworks
          </div>
          <div className="border border-black px-6 py-2 rotate-[4deg] rounded-full font-semibold text-sm shadow-md">
            AUTODESK
          </div>
        </div>
      </section>
    </main>
  );
}
