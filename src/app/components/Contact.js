"use client";

import React, { useState } from "react";
import { Mail, Github, Linkedin, Instagram, Send, Loader2, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mjkyyeoa", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset(); // Ab ye smoothly kaam karega!
        
        // 5 second baad success message hatane ke liye
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        alert("Error sending message. Try again!");
      }
    } catch (error) {
      alert("Something went wrong. Please check your network connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacts" className="py-28 bg-[#0b0f17] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-20 items-center">
        
        {/* LEFT SIDE - Animated from Left */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Have a project? <br />
            <span className="text-[#ff6b4a]">Let's talk!</span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-md leading-relaxed text-lg">
            I'm always open to working with creators, brands and businesses.
            If you need high-CTR thumbnails or creative graphics, feel free
            to reach out and let's build something amazing together.
          </p>
        </motion.div>

        {/* RIGHT FORM - Animated from Right */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="relative"
        >
          <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
            
            {/* NAME */}
            <div>
              <input
                type="text"
                placeholder="Name"
                name="name"
                required
                className="w-full px-5 py-4 rounded-xl bg-[#131924] border border-white/5 text-white placeholder-gray-500 focus:outline-none focus:border-[#ff6b4a] focus:shadow-[0_0_15px_rgba(255,107,74,0.2)] transition-all"
              />
            </div>

            {/* EMAIL */}
            <div>
              <input
                type="email"
                placeholder="Email"
                name="email"
                required
                className="w-full px-5 py-4 rounded-xl bg-[#131924] border border-white/5 text-white placeholder-gray-500 focus:outline-none focus:border-[#ff6b4a] focus:shadow-[0_0_15px_rgba(255,107,74,0.2)] transition-all"
              />
            </div>

            {/* MESSAGE */}
            <div>
              <textarea
                rows="5"
                placeholder="Message"
                name="message"
                required
                className="w-full px-5 py-4 rounded-xl bg-[#131924] border border-white/5 text-white placeholder-gray-500 focus:outline-none focus:border-[#ff6b4a] focus:shadow-[0_0_15px_rgba(255,107,74,0.2)] transition-all resize-none"
              ></textarea>
            </div>

            {/* BUTTON */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitting}
              type="submit"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#ff6b4a] text-white font-medium flex items-center justify-center gap-2 hover:bg-[#ff5430] shadow-lg shadow-[#ff6b4a]/20 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Submit Message
                  <Send className="w-4 h-4 ml-1" />
                </>
              )}
            </motion.button>
          </form>

          {/* SUCCESS MESSAGE OVERLAY / ANIMATION */}
          <AnimatePresence>
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.9 }}
                transition={{ duration: 0.4, type: "spring" }}
                className="absolute top-0 left-0 w-full p-4 mt-[-80px] bg-[#22c55e]/10 border border-[#22c55e]/30 rounded-xl flex items-center gap-3 text-[#22c55e]"
              >
                <CheckCircle className="w-6 h-6" />
                <div>
                  <h4 className="font-semibold text-white">Message Sent!</h4>
                  <p className="text-sm text-green-400">I will get back to you shortly.</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </motion.div>
      </div>
    </section>
  );
}
