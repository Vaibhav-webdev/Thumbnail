"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contacts", href: "#contacts" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/20 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="flex items-center justify-between h-[76px]">

          {/* Logo */}
          <div className="text-xl lg:text-3xl font-semibold tracking-wide text-white">
            Vaibhav<span className="text-orange-400"> Shukla</span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-10 font-medium">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-orange-500 after:w-0 after:transition-all after:duration-300 hover:after:w-full text-gray-300 hover:text-white transition"
              >
                {link.name}

                <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-[#ff6b4a] transition-all duration-300 hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 7h20M4 14h20M4 21h20" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-xl border-t border-white/10">
          <div className="flex flex-col items-center gap-6 py-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-gray-300 hover:text-[#ff6b4a] transition text-lg"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
