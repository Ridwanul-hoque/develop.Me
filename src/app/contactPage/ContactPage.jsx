"use client";

import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import { FiPhone } from "react-icons/fi";

const ContactSection = () => {
  return (
    <div className="bg-gradient-to-br from-white via-white to-lime-200 to-80% md:to-lime-300 px-16 py-12 font-sans flex flex-col md:flex-row justify-between items-start gap-10 max-w-7xl mx-auto">
      {/* Left Content */}
      <div className="flex-1">
        <button className="border border-black rounded-full px-4 py-1 text-sm mb-6">
          + Contact
        </button>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Interested in <br />
          <span className="bg-black text-white px-2">work</span> together?
        </h1>
        <p className="text-base text-gray-700 mb-6 max-w-md">
          We start every new client interaction with an in-depth discovery call where we get to know each other
        </p>
        <button className="flex items-center gap-2 border border-black px-4 py-2 rounded-full text-sm font-medium">
          <FiPhone className="text-lg" /> Schedule a Call
        </button>
      </div>

      {/* Right Form Card */}
      <div className="bg-black text-white rounded-3xl p-6 md:p-8 w-full md:w-[400px] shadow-xl">
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Enter your name"
            className="bg-transparent border-b border-gray-600 placeholder:text-gray-400 text-sm py-2 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your email address"
            className="bg-transparent border-b border-gray-600 placeholder:text-gray-400 text-sm py-2 focus:outline-none"
          />
          <textarea
            placeholder="Describe your project"
            className="bg-transparent border-b border-gray-600 placeholder:text-gray-400 text-sm py-2 focus:outline-none resize-none"
            rows="3"
          ></textarea>

          <div className="flex items-center gap-4 mt-4 flex-wrap">
            <button
              type="submit"
              className="flex items-center gap-2 bg-white text-black font-medium px-4 py-2 rounded-full text-sm"
            >
              <IoMdSend /> Send
            </button>
            <button className="border border-white px-4 py-2 rounded-full text-sm">
              Contact me
            </button>
          </div>
        </form>

        {/* Social and footer */}
        <div className="mt-8 text-sm text-gray-400 flex justify-between items-center flex-wrap gap-4">
          <span>@williamrey</span>
          <div className="flex gap-4 text-white">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;