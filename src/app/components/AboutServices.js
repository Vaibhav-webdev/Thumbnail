export default function AboutServices() {
  const services = [
    {
      title: "YouTube Thumbnail Design",
      desc: "High-CTR thumbnails designed for viral content and stronger viewer engagement."
    },
    {
      title: "Social Media Graphics",
      desc: "Creative visuals for Instagram, YouTube and marketing campaigns."
    },
    {
      title: "Brand Visual Design",
      desc: "Consistent brand visuals including thumbnails, banners and channel identity."
    }
  ];

  return (
    <section id="about" className="py-18 bg-[#0b0f17]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16">

        {/* LEFT TIMELINE SERVICES */}
        <div className="relative pl-10">

          {/* Vertical Line */}
          <div className="absolute left-2 top-0 h-full w-[2px] bg-[#ff6b4a]/40"></div>

          <div className="space-y-2 pt-4">

            {services.map((service, index) => (
              <div key={index} className="relative hover:bg-orange-300/20 rounded-xl transition-all duration-300 p-4">

                {/* Dot */}
                <div className="absolute -left-[14px] w-4 h-4 rounded-full bg-[#ff6b4a] shadow-lg shadow-[#ff6b4a]/50"></div>

                <h3 className="text-lg font-semibold text-white">
                  {service.title}
                </h3>

                <p className="text-gray-400 mt-2 ml-1 text-sm leading-relaxed">
                  {service.desc}
                </p>

              </div>
            ))}

          </div>
        </div>

        {/* RIGHT ABOUT */}
        <div className="space-y-8">

          <h2 className="text-4xl font-bold text-white">
            About <span className="text-[#ff6b4a]">Me</span>
          </h2>

          <p className="text-gray-400 leading-relaxed max-w-lg">
            I started my creative journey designing thumbnails for small
            creators and quickly discovered the impact powerful visuals have
            on audience engagement. My goal is to create high-click designs
            that help creators grow faster and build strong brand identities.
          </p>

          {/* STATS */}
          <div className="flex gap-10 pt-4">

            <div>
              <h3 className="text-3xl font-bold text-white">120+</h3>
              <p className="text-gray-400 text-sm">Completed Projects</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">95%</h3>
              <p className="text-gray-400 text-sm">Client Satisfaction</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">5+</h3>
              <p className="text-gray-400 text-sm">Years Experience</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
