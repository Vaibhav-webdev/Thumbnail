"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Code,
  Palette,
  Server,
  Database,
  Braces,
  Cpu,
} from "lucide-react";

export default function Skills() {

  const skills = [
    "YouTube Thumbnails",
    "Photoshop",
    "Illustrator",
    "After Effects",
    "Social Media Graphics",
    "Branding",
    "Content Design"
  ];

  return (
    <section className="w-full border-y border-white/5 bg-[#0c1320]">
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">

        <div className="flex flex-wrap justify-center gap-6">

          {skills.map((skill, index) => (
            <div
              key={index}
              className="px-6 cursor-default py-2 rounded-full border border-white/10 text-gray-300 text-sm
              hover:border-[#ff6b4a] hover:text-white
              hover:shadow-[0_0_12px_rgba(255,107,74,0.6)]
              transition duration-300"
            >
              {skill}
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}
