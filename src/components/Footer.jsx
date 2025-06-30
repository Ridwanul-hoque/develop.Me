import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black text-white p-8 md:p-12 lg:p-16 rounded-lg m-4 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row mb-10 md:mb-20">
        {/* Left column: DEVLOP.ME */}
        <div className="md:w-1/2 flex items-start md:mb-0 mb-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">DEVLOP.ME</h1>
        </div>

        {/* Right column: As you can and the subsequent sections */}
        <div className="md:w-1/2">
          {/* As you can - centered within this right column */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-10 md:mb-20 md:text-center">As you can</h2>

          {/* Middle section: Say hello, Menu, Social - right-aligned and below "As you can" */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-20">
            {/* Say hello */}
            <div className="md:text-right">
              <h3 className="text-gray-400 text-lg font-semibold mb-4">Say hello</h3>
              <ul>
                <li className="mb-2"><a href="mailto:HELLO@DEVLOP.ME.COM" className="text-white hover:underline">HELLO@DEVLOP.ME.COM</a></li>
                <li className="mb-4"><a href="mailto:MAHBUBUL@ME.COM" className="text-white hover:underline">MAHBUBUL@ME.COM</a></li>
              </ul>
              <h3 className="text-gray-400 text-lg font-semibold mb-4">Call</h3>
              <ul>
                <li className="mb-2">+784549 4981 00</li>
                <li>+8845 0100 211</li>
              </ul>
            </div>

            {/* Menu */}
            <div className="md:text-right">
              <h3 className="text-gray-400 text-lg font-semibold mb-4">Menu</h3>
              <ul>
                <li className="mb-2"><a href="#" className="text-white hover:underline">HOME</a></li>
                <li className="mb-2"><a href="#" className="text-white hover:underline">ABOUT</a></li>
                <li className="mb-2"><a href="#" className="text-white hover:underline">PORTFOLIO</a></li>
                <li className="mb-2"><a href="#" className="text-white hover:underline">BLOG</a></li>
              </ul>
            </div>

            {/* Social */}
            <div className="md:text-right">
              <h3 className="text-gray-400 text-lg font-semibold mb-4">Social</h3>
              <ul>
                <li className="mb-2"><a href="#" className="text-white hover:underline">TWITTER</a></li>
                <li className="mb-2"><a href="#" className="text-white hover:underline">INSTAGRAM</a></li>
                <li className="mb-2"><a href="#" className="text-white hover:underline">FACEBOOK</a></li>
                <li className="mb-2"><a href="#" className="text-white hover:underline">BEHANDE</a></li>
                <li className="mb-2"><a href="#" className="text-white hover:underline">DRIBBBLE</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section: BESNIK, develop.me 2022, PRIVACY - TERMS */}
      <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm mt-10">
        <div className="mb-4 md:mb-0">BESNIK</div>
        {/* Removed the border classes */}
        <div className="mb-4 md:mb-0">
          &copy; develop.me 2022
        </div>
        <div>PRIVACY - TERMS</div>
      </div>
    </footer>
  );
};


