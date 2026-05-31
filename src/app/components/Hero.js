"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";

// ─────────────────────────────────────────
//  CONSTELLATION BACKGROUND
//  Gold network lines drawn behind the image
// ─────────────────────────────────────────
const NODES = [
  { x: 55,  y: 80  }, { x: 190, y: 35  }, { x: 340, y: 120 },
  { x: 488, y: 52  }, { x: 432, y: 220 }, { x: 258, y: 272 },
  { x: 118, y: 332 }, { x: 374, y: 388 }, { x: 522, y: 312 },
  { x: 552, y: 152 }, { x: 72,  y: 192 }, { x: 284, y: 178 },
  { x: 162, y: 68  }, { x: 472, y: 412 }, { x: 32,  y: 418 },
  { x: 310, y: 48  }, { x: 144, y: 448 }, { x: 504, y: 460 },
];

function ConstellationBg() {
  // Auto-connect nodes within distance threshold
  const edges = [];
  for (let i = 0; i < NODES.length; i++) {
    for (let j = i + 1; j < NODES.length; j++) {
      const dx = NODES[i].x - NODES[j].x;
      const dy = NODES[i].y - NODES[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 220) {
        edges.push({
          d: `M ${NODES[i].x} ${NODES[i].y} L ${NODES[j].x} ${NODES[j].y}`,
          delay: (i + j) * 0.065,
        });
      }
    }
  }

  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 600 500"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        {/* Glow filter for the dots */}
        <filter id="dotGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        {/* Line gradient – gold fades at endpoints */}
        <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#b45309" stopOpacity="0.15" />
          <stop offset="45%"  stopColor="#f59e0b" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#ea580c" stopOpacity="0.15" />
        </linearGradient>
      </defs>

      {/* Lines – drawn in with pathLength animation */}
      {edges.map((edge, i) => (
        <motion.path
          key={`e-${i}`}
          d={edge.d}
          stroke="url(#lineGrad)"
          strokeWidth="0.75"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            duration: 1.6,
            delay: edge.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Dots – fade in + subtle twinkle on every 3rd dot */}
      {NODES.map((node, i) => (
        <motion.circle
          key={`n-${i}`}
          cx={node.x}
          cy={node.y}
          r="2.8"
          fill="#fbbf24"
          filter="url(#dotGlow)"
          initial={{ opacity: 0 }}
          animate={
            i % 3 === 0
              ? { opacity: [0, 1, 0.45, 1, 0.7, 1] }
              : { opacity: [0, 0.9, 0.6] }
          }
          transition={{
            duration: i % 3 === 0 ? 4 : 1.2,
            delay: i * 0.1,
            repeat: i % 3 === 0 ? Infinity : 0,
            repeatDelay: 2 + i * 0.4,
          }}
        />
      ))}
    </svg>
  );
}

// ─────────────────────────────────────────
//  FRAMER-MOTION VARIANTS
// ─────────────────────────────────────────
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

// ─────────────────────────────────────────
//  HERO COMPONENT
// ─────────────────────────────────────────
export default function Hero() {
  return (
    <>
      {/* Google Fonts — Oswald (display headings) + Cinzel (badge) */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@600;700;800&family=Cinzel:wght@600&display=swap');
        .font-oswald  { font-family: 'Oswald',  sans-serif; }
        .font-cinzel  { font-family: 'Cinzel',  serif;      }
      `}</style>

      <section
        id="home"
        className="relative min-h-screen overflow-hidden bg-[#050c1a] flex items-center"
      >
        {/* ── BACKGROUND GLOW ORBS ── */}
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-[560px] w-[560px] rounded-full bg-orange-700/10 blur-[140px]" />
        <div className="pointer-events-none absolute -bottom-16 -right-16 h-[420px] w-[420px] rounded-full bg-amber-600/8 blur-[110px]" />
        <div className="pointer-events-none absolute top-[30%] left-[28%] h-[220px] w-[220px] rounded-full bg-amber-400/5 blur-[90px]" />

        {/* ── MAIN GRID ── */}
        <div className="relative z-10 mx-auto max-w-7xl w-full px-6 lg:px-12 grid lg:grid-cols-2 gap-10 items-center min-h-screen py-32 lg:py-0">

          {/* ────────── LEFT CONTENT ────────── */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="space-y-7"
          >

            {/* Badge */}
            <motion.div variants={fadeUp} className="hidden md:block"> 
  {/* 'hidden' se mobile par chip jayega, 'md:block' se tablet/desktop par dikhega */}
  <span className="font-cinzel inline-flex items-center gap-2 rounded-[2px] border border-amber-500/30 bg-amber-400/5 px-4 py-1.5 text-[10px] font-semibold tracking-[0.25em] uppercase text-amber-400">
    <Sparkles size={10} strokeWidth={2.5} />
    Premium Design Partner
  </span>
</motion.div>

            {/* Heading */}
            <motion.div variants={fadeUp} className="leading-none">
              <h1 className="font-oswald text-[clamp(2.6rem,7vw,5.4rem)] font-extrabold uppercase leading-[1.06] tracking-tight">
                <span className="text-white">Maximize Your </span>
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(120deg,#fcd34d 0%,#f97316 55%,#fbbf24 100%)",
                  }}
                >
                  Clicks.
                </span>
              </h1>
              <h1 className="font-oswald text-[clamp(2.6rem,7vw,5.4rem)] font-extrabold uppercase leading-[1.06] tracking-tight">
                <span className="text-white">Elevate Your </span>
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(120deg,#fcd34d 0%,#f97316 55%,#fbbf24 100%)",
                  }}
                >
                  Vision.
                </span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="max-w-[480px] text-[15px] leading-[1.75] text-gray-400"
            >
              Hello. I&apos;m{" "}
              <span className="font-semibold text-white">Vaibhav Shukla</span>, a
              professional{" "}
              <span className="font-semibold text-amber-300">
                Thumbnail &amp; Social Graphic Specialist
              </span>{" "}
              dedicated to transforming content into high-CTR performance assets.
              I partner with creators and brands to dominate the feed and
              accelerate growth through strategic, high-retention design.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 pt-1">

              {/* Primary */}
              <motion.a
                href="#contacts"
                whileHover={{
                  scale: 1.045,
                  boxShadow: "0 0 40px rgba(245,158,11,0.42)",
                }}
                whileTap={{ scale: 0.97 }}
                className="inline-block rounded-[3px] px-7 py-3.5 text-[11px] font-bold tracking-[0.18em] uppercase text-white shadow-lg shadow-amber-600/20"
                style={{
                  background:
                    "linear-gradient(135deg, #f59e0b 0%, #ea580c 100%)",
                }}
              >
                Book a Consultation
              </motion.a>

              {/* Secondary */}
              <motion.a
                href="#projects"
                whileHover={{
                  scale: 1.045,
                  borderColor: "#f59e0b",
                  color: "#fbbf24",
                }}
                whileTap={{ scale: 0.97 }}
                className="inline-block rounded-[3px] border border-white/25 px-7 py-3.5 text-[11px] font-bold tracking-[0.18em] uppercase text-white transition-all duration-250"
              >
                Explore My Portfolio
              </motion.a>

            </motion.div>
          </motion.div>

          {/* ────────── RIGHT — IMAGE + CONSTELLATION ────────── */}
          <motion.div
            initial={{ opacity: 0, x: 64 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.95, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center lg:justify-end"
          >

            {/* Constellation SVG — positioned behind image */}
            <div className="pointer-events-none absolute inset-0 -inset-x-10">
              <ConstellationBg />
            </div>

            {/* Ambient glow bloom behind person */}
            <div
              className="pointer-events-none absolute inset-0 flex items-center justify-center lg:justify-end"
              aria-hidden="true"
            >
              <div className="h-[440px] w-[340px] max-w-full rounded-xl blur-3xl"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(234,88,12,0.12) 0%, rgba(180,83,9,0.06) 60%, transparent 100%)",
                }} />
            </div>

            {/* Person image frame */}
            <motion.div
              whileHover={{ scale: 1.025 }}
              transition={{ type: "spring", stiffness: 280, damping: 24 }}
              className="relative z-10 w-[72vw] h-[72vw] sm:w-[320px] sm:h-[420px] lg:w-[34vw] lg:h-[74vh] max-w-[440px] max-h-[660px]"
            >
              {/* Thin amber border ring */}
              <div className="absolute inset-0 z-20 rounded-xl ring-1 ring-amber-400/22 pointer-events-none" />

              {/* Subtle bottom gradient fade (blends person into bg) */}
              <div className="absolute bottom-0 left-0 right-0 z-20 h-1/4 rounded-b-xl bg-gradient-to-t from-[#050c1a] via-[#050c1a]/60 to-transparent pointer-events-none" />

              <Image
                src="/logo3.png"
                alt="Vaibhav Shukla — Professional Thumbnail Designer"
                fill
                className="rounded-xl object-cover object-top"
                priority
              />
            </motion.div>
          </motion.div>

        </div>

        {/* ── SCROLL INDICATOR ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.0, duration: 0.8 }}
          className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-2 select-none"
        >
          <span className="font-cinzel text-[9px] font-semibold tracking-[0.3em] uppercase text-gray-600">
            Scroll for Projects
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.7, ease: "easeInOut" }}
          >
            <ArrowDown size={15} className="text-amber-500/35" />
          </motion.div>
        </motion.div>

      </section>
    </>
  );
}
