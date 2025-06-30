"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [theme, setTheme] = useState("light");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex flex-wrap justify-between items-center px-4 sm:px-6 md:px-16 py-4 max-w-7xl mx-auto relative">
      <h1 className="font-bold text-xl sm:text-2xl">DEVLOP.ME</h1>

      {/* Desktop Nav */}
      <div className="hidden md:flex space-x-6">
        <Link href="#" className="hover:text-gray-500">Home</Link>
        <Link href="#" className="hover:text-gray-500">About</Link>
        <Link href="#" className="hover:text-gray-500">Portfolio</Link>
        <Link href="#" className="hover:text-gray-500">Blog</Link>
      </div>

      {/* Right Side */}
      <div className="flex items-center space-x-2 sm:space-x-4">
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          aria-label="Toggle Theme"
        >
          {theme === "light" ? (
            <MoonIcon className="h-5 w-5" />
          ) : (
            <SunIcon className="h-5 w-5 text-yellow-400" />
          )}
        </button>

        {/* Start Project Button */}
        <button className="hidden sm:flex border border-black px-3 sm:px-4 py-2 rounded-full items-center space-x-2 hover:bg-gray-100 transition">
          <span>➜</span>
          <span>Start Project</span>
        </button>

        {/* Hamburger Icon (Mobile only) */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          {isMenuOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white dark:bg-green-200 shadow-md mt-2 z-50 flex flex-col px-4 py-4 space-y-2 md:hidden">
          <Link href="#" className="hover:text-gray-500">Home</Link>
          <Link href="#" className="hover:text-gray-500">About</Link>
          <Link href="#" className="hover:text-gray-500">Portfolio</Link>
          <Link href="#" className="hover:text-gray-500">Blog</Link>
          <button className="border border-black px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-gray-100 transition mt-2 sm:hidden">
            <span>➜</span>
            <span>Start Project</span>
          </button>
        </div>
      )}
    </nav>
  );
}
