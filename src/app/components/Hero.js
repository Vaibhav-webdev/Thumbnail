import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-20 bg-black/40"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-6">

          <p className="text-lg hidden lg:flex text-gray-300">
            Hello<span className="text-orange-400">.</span>
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold text-gray-200">
            I'm Vaibhav
          </h2>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Professional{" "}
            <span className="text-white">Thumbnail</span>
            <span className="text-orange-400"> Designer</span>
          </h1>

          <p className="text-gray-400 max-w-md">
            I design high-CTR YouTube thumbnails and social media graphics
            that help creators increase clicks, engagement, and audience
            growth.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4 pt-4">

            <button className="px-6 py-3 cursor-pointer rounded-lg bg-orange-400 text-white font-medium hover:bg-[#ff5430] transition-all duration-300 shadow-lg shadow-[#ff6b4a]/30">
              <a href="#contacts">Contact Us</a>
            </button>

            <button className="px-6 py-3 rounded-lg cursor-pointer border border-orange-400 text-orange-400 hover:bg-orange-600 hover:text-white transition">
              <a href="#projects">View Portfolio</a>
            </button>

          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center lg:justify-end">

          {/* Glow Circle */}
          {/* <div className="absolute w-[380px] h-[380px] rounded-full bg-gradient-to-r from-[#ff6b4a] to-[#ff3d2e] blur-3xl opacity-30"></div>

          {/* Ring */}
          {/* <div className="absolute w-[360px] h-[360px] rounded-full border-[12px] border-[#ff6b4a]/60"></div> */}

          {/* Image */}
          <div className="relative w-[90vw] h-[90vw] lg:w-[32vw] lg:h-[32vw] rounded-xl overflow-hidden">
            <Image
              src="/logo3.png"
              alt="Designer"
              fill
              className="object-cover"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
