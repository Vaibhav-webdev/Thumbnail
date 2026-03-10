"use client";

import React from "react";
import { useState } from "react";
import { Mail, Github, Linkedin, Instagram, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const data = new FormData(form);

        const response = await fetch("https://formspree.io/f/mjkyyeoa", {
            method: "POST",
            body: data,
            headers: {
                Accept: "application/json",
            },
        });

        if (response.ok) {
            setSubmitted(true);
            form.reset();
        } else {
            alert("Error sending message. Try again!");
        }
    };

  return (
    <section id="contacts" className="py-28 bg-[#0b0f17]">

      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-20 items-start">

        {/* LEFT SIDE */}
        <div>

          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Have a project? <br />
            <span className="text-[#ff6b4a]">Let's talk!</span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-md leading-relaxed">
            I'm always open to working with creators, brands and businesses.
            If you need high-CTR thumbnails or creative graphics, feel free
            to reach out and let's build something amazing together.
          </p>

        </div>


        {/* RIGHT FORM */}
        <form className="space-y-6" onSubmit={handleSubmit}>

          {/* NAME */}
          <div>
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="w-full px-5 py-3 rounded-lg bg-[#0b0f17] border border-white/10
              text-white placeholder-gray-500
              focus:outline-none focus:border-[#ff6b4a]
              focus:shadow-[0_0_10px_rgba(255,107,74,0.4)]
              transition"
            />
          </div>

          {/* EMAIL */}
          <div>
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="w-full px-5 py-3 rounded-lg bg-[#0b0f17] border border-white/10
              text-white placeholder-gray-500
              focus:outline-none focus:border-[#ff6b4a]
              focus:shadow-[0_0_10px_rgba(255,107,74,0.4)]
              transition"
            />
          </div>

          {/* MESSAGE */}
          <div>
            <textarea
              rows="5"
              placeholder="Message"
              name="message"
              className="w-full px-5 py-3 rounded-lg bg-[#0b0f17] border border-white/10
              text-white placeholder-gray-500
              focus:outline-none focus:border-[#ff6b4a]
              focus:shadow-[0_0_10px_rgba(255,107,74,0.4)]
              transition resize-none"
            ></textarea>
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="px-7 py-3 rounded-lg bg-[#ff6b4a] text-white font-medium
            hover:bg-[#ff5430]
            shadow-lg shadow-[#ff6b4a]/30
            transition"
          >
            Submit Message
          </button>

        </form>

      </div>

    </section>
  );
}
