import Image from "next/image";

export default function Projects() {

  const projects = [
  {
    title: "Educational YouTube Thumbnails",
    desc: "High-CTR educational thumbnails crafted to attract viewers and boost engagement through clear visuals and compelling design.",
    image: "/Thumbnail/Thumbnail/1.jpg",
    tags: ["YouTube", "Photoshop", "Design"]
  },
  {
    title: "Money & Earning Niche Thumbnails",
    desc: "Creative thumbnails designed for money-making and online earning content, focused on strong emotional triggers and high click potential.",
    image: "/Thumbnail/Thumbnail/2.jpg",
    tags: ["YouTube", "Branding", "Design"]
  },
  {
    title: "Educational Series Thumbnail Design",
    desc: "A clean and consistent thumbnail series created for educational YouTube channels to maintain visual identity and clarity.",
    image: "/Thumbnail/Thumbnail/4.jpg",
    tags: ["Content", "Illustrator", "Design"]
  },
  {
    title: "Future of AI – Educational Thumbnail",
    desc: "Eye-catching thumbnail graphics designed for AI-focused educational content, highlighting modern technology and innovation.",
    image: "/Thumbnail/Thumbnail/5.jpg",
    tags: ["Marketing", "Branding", "Graphics"]
  },
  {
    title: "AI Tools Comparison Thumbnail",
    desc: "Bold and engaging design comparing two AI tools, using strong visual contrast to grab attention instantly.",
    image: "/Thumbnail/Thumbnail/24.png",
    tags: ["Marketing", "Branding", "Graphics"]
  },
  {
    title: "Print on Demand Guide Thumbnail",
    desc: "Engaging thumbnail design created for content explaining how to start and succeed with print-on-demand businesses.",
    image: "/Thumbnail/Thumbnail/23.jpg",
    tags: ["Marketing", "Branding", "Graphics"]
  },
  {
    title: "Client Closing Strategy Thumbnail",
    desc: "Attention-grabbing thumbnail designed for content teaching strategies on how to close clients effectively.",
    image: "/Thumbnail/Thumbnail/25.jpg",
    tags: ["Marketing", "Branding", "Graphics"]
  },
  {
    title: "E-commerce Business Starter Thumbnail",
    desc: "Clean and modern thumbnail design explaining how beginners can start and scale an e-commerce business.",
    image: "/Thumbnail/Thumbnail/9.jpg",
    tags: ["Marketing", "Branding", "Graphics"]
  },
  {
    title: "Student Earning Guide Thumbnail",
    desc: "Engaging thumbnail for videos explaining practical ways students can earn money online or offline.",
    image: "/Thumbnail/Thumbnail/10.jpg",
    tags: ["Marketing", "Branding", "Graphics"]
  },
  {
    title: "Youtube Script Writing Guide Thumbnail",
    desc: "A clear and impactful thumbnail designed for tutorials on writing high-converting youtube script.",
    image: "/Thumbnail/Thumbnail/image thumbnail.png",
    tags: ["Marketing", "Branding", "Graphics"]
  },
  {
    title: "Documentary Style Video Thumbnail",
    desc: "Professional documentary-style thumbnail designed to create curiosity and encourage viewers to explore the story.",
    image: "/Thumbnail/Thumbnail/12.jpg",
    tags: ["Marketing", "Branding", "Graphics"]
  },
  {
    title: "Biography Video Thumbnail",
    desc: "A visually compelling thumbnail designed for biography videos to highlight the subject and spark viewer interest.",
    image: "/Thumbnail/Thumbnail/13.jpg",
    tags: ["Marketing", "Branding", "Graphics"]
  },
  {
    title: "YouTube Subscriber Growth Thumbnail",
    desc: "Strategic thumbnail design focused on attracting creators looking to increase their YouTube subscriber count.",
    image: "/Thumbnail/Thumbnail/14.jpg",
    tags: ["Marketing", "Branding", "Graphics"]
  },
  {
    title: "YouTube Growth Strategy Thumbnail",
    desc: "A bold and engaging thumbnail designed for content focused on growing and optimizing YouTube channels.",
    image: "/Thumbnail/Thumbnail/15.jpg",
    tags: ["Marketing", "Branding", "Graphics"]
  },
  {
    title: "Lifestyle Vlog Thumbnail",
    desc: "High-quality vlog thumbnail with realistic visuals and balanced composition to highlight the main moment of the video.",
    image: "/Thumbnail/Thumbnail/16.jpg",
    tags: ["Marketing", "Branding", "Graphics"]
  }
];


  return (
    <section id="projects" className="py-18 bg-[#0b0f17]">

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex">
          <div className="text-center mb-20 border-b-4 border-[#ff6b4a] hover:w-full transition-all duration-500 cursor-default pb-6 w-10">
            <h2 className="text-4xl font-bold text-white">
              Projects
            </h2>
          </div>
        </div>
        {/* SECTION TITLE */}


        {/* PROJECT GRID */}
        <div className="grid md:grid-cols-3 gap-14">

          {projects.map((project, index) => (

            <div
              key={index}
              className="group border border-white/10 rounded-xl p-6
              hover:border-[#ff6b4a]/50 hover:scale-105 transition duration-300
              hover:shadow-[0_0_20px_rgba(255,107,74,0.15)]"
            >

              {/* IMAGE */}
              <div className="relative w-full h-[140px] lg:h-[180px] rounded-lg overflow-hidden mb-6">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* TAGS */}
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 hover:shadow-[0_0_20px_rgba(255,107,74,0.15)] hover:text-white hover:bg-[#ff5e3a] cursor-pointer transition-all duration-400 rounded-full border border-white/10 text-gray-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* TITLE */}
              <h3 className="text-lg font-semibold text-white">
                {project.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                {project.desc}
              </p>

              {/* BUTTONS */}
              

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}
