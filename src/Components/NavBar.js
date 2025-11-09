import React, { useState, useEffect } from "react";
import { Menu, X, PhoneCall, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#081031] shadow-md" : "bg-transparent"
      }`}
    >
      <div className=" mx-auto flex items-center justify-between py-3 px-6 md:px-10">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/logo.jpeg"
            alt="SMILE DENTAL CARE Logo"
            className="w-10 h-10"
          />
          <span className="text-white text-2xl font-semibold">
            SMILE DENTAL CARE
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {[
            "HOME",
            "PAGES",
            "SERVICES",
            "CASE STUDIES",
            "BLOGS",
            "CONTACT",
          ].map((item) => (
            <div key={item} className="relative group">
              <button className="text-white text-sm font-medium flex items-center gap-1 hover:text-blue-400 transition">
                {item}
                {[
                  "HOME",
                  "PAGES",
                  "SERVICES",
                  "CASE STUDIES",
                  "BLOGS",
                ].includes(item) && <span className="text-xs">▼</span>}
              </button>
            </div>
          ))}
        </nav>

        {/* Right Section */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="flex items-center text-white text-sm">
            <PhoneCall className="w-5 h-5 mr-2 text-blue-400" />
            <div>
              <p className="text-xs text-gray-300">Emergency Call:</p>
              <p className="font-semibold">(888) 4567890</p>
            </div>
          </div>

          <button className="bg-[#7367F0] hover:bg-[#6157d9] text-white px-5 py-2 rounded-xl font-medium flex items-center gap-2 transition">
            Appointment
            <ArrowRight className="w-4 h-4" />
          </button>

          <div className="bg-white/10 hover:bg-white/20 rounded-xl p-3 cursor-pointer transition">
            <div className="w-5 h-5 bg-white/70 rounded-md"></div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-[#081031] text-white flex flex-col items-start px-6 pb-4 space-y-3">
          {[
            "HOME",
            "PAGES",
            "SERVICES",
            "CASE STUDIES",
            "BLOGS",
            "CONTACT",
          ].map((item) => (
            <button
              key={item}
              className="w-full text-left font-medium py-1 hover:text-blue-400"
            >
              {item}
            </button>
          ))}
          <div className="pt-4">
            <button className="bg-[#7367F0] hover:bg-[#6157d9] text-white px-5 py-2 rounded-xl font-medium flex items-center gap-2 transition">
              Appointment
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
