"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const LINKS = [
  { name: "Home",     href: "#home"     },
  { name: "About",    href: "#about"    },
  { name: "Projects", href: "#projects" },
  { name: "Contacts", href: "#contacts" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Google Font: Cinzel (used for logo) */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700&display=swap');
        .font-cinzel { font-family: 'Cinzel', serif; }
      `}</style>

      <motion.header
        initial={{ y: -90, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? "border-b border-amber-400/10 bg-[#050c1a]/90 backdrop-blur-2xl shadow-2xl shadow-black/40"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="flex h-20 items-center justify-between">

            {/* ── LOGO ── */}
            <motion.a
              href="#home"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="font-cinzel select-none text-2xl lg:text-[1.7rem] font-bold tracking-widest uppercase"
            >
              <span className="text-white">Vaibhav </span>
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #fbbf24 0%, #f97316 55%, #fbbf24 100%)",
                }}
              >
                Shukla
              </span>
            </motion.a>

            {/* ── DESKTOP NAV ── */}
            <nav className="hidden md:flex items-center gap-10">
              {LINKS.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: -14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.12 * i + 0.25,
                    duration: 0.45,
                    ease: "easeOut",
                  }}
                  className="group relative text-[11px] font-bold tracking-[0.22em] uppercase text-gray-400 hover:text-white transition-colors duration-250"
                >
                  {link.name}
                  {/* Animated underline */}
                  <span className="absolute -bottom-1 left-0 h-[1.5px] w-0 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 transition-all duration-350 group-hover:w-full" />
                </motion.a>
              ))}
            </nav>

            {/* ── MOBILE BURGER ── */}
            <button
              onClick={() => setMenuOpen((o) => !o)}
              className="relative md:hidden p-1 text-white"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                {menuOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="block"
                  >
                    <X size={26} className="text-amber-400" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="open"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="block"
                  >
                    <Menu size={26} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* ── MOBILE MENU ── */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden border-t border-amber-400/10 bg-[#050c1a]/97 backdrop-blur-2xl md:hidden"
            >
              <div className="flex flex-col items-center gap-7 py-10">
                {LINKS.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ x: -28, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.075, ease: "easeOut" }}
                    onClick={() => setMenuOpen(false)}
                    className="text-base font-bold tracking-[0.22em] uppercase text-gray-300 hover:text-amber-300 transition-colors duration-200"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
