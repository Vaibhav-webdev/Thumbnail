import { Mail, Instagram, Linkedin, Youtube, Dribbble } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0b0f17] border-t border-white/10 py-12">

      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">

        {/* NAME */}
        <h3 className="text-3xl font-semibold text-white">
          Vaibhav<span className="text-[#ff6b4a]"> Shukla</span>
        </h3>

        {/* TAGLINE */}
        <p className="text-gray-400 mt-3">
          Designed with passion for creative content.
        </p>

        {/* COPYRIGHT */}
        <p className="text-gray-500 text-sm mt-10">
          © {new Date().getFullYear()} Vaibhav Studio. All rights reserved.
        </p>

      </div>

    </footer>
  );
}
