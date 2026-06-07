import Image from "next/image";

export default function Projects() {

  const projects = [
  {
    title: "Educational YouTube Thumbnails",
    desc: "High-CTR educational thumbnails crafted with clear visuals and compelling design to attract viewers and boost engagement rates.",
    image: "/Thumbnail/Thumbnail/1.jpg",
    tags: ["YouTube", "Photoshop", "Design"]
  },
  {
    title: "Print on Demand Guide Thumbnail",
    desc: "Engaging thumbnail design created for content explaining print-on-demand business fundamentals, strategies, and scaling techniques for aspiring entrepreneurs.",
    image: "/Thumbnail/Thumbnail/23.jpg",
    tags: ["Marketing", "Branding", "Graphics"]
  },
  {
    title: "Client Closing Strategy Thumbnail",
    desc: "Attention-grabbing thumbnail designed for sales training content, featuring proven strategies and techniques for closing client deals effectively.",
    image: "/Thumbnail/Thumbnail/25.jpg",
    tags: ["Marketing", "Branding", "Graphics"]
  },
  {
    title: "Money & Earning Niche Thumbnails",
    desc: "Creative thumbnails designed for money-making and online earning content, strategically using emotional triggers and strong visual hierarchy to maximize click-through potential.",
    image: "/Thumbnail/Thumbnail/2.jpg",
    tags: ["YouTube", "Branding", "Design"]
  },
  {
    title: "Personal Lifestyle Improvement",
    desc: "Professional self-improvement thumbnail design featuring motivational elements and personal development themes to inspire viewer engagement and click-through.",
    image: "/Thumbnail/Thumbnail/Demo Thumbnail.png",
    tags: ["Self-Improvement", "Lifestyle", "Design"]
  },
  {
    title: "How to Choose Best Typography for Video",
    desc: "Educational thumbnail guiding content creators on selecting optimal typography for videos, balancing readability, aesthetics, and brand consistency.",
    image: "/Thumbnail/Thumbnail/Thumbnail Demo.png",
    tags: ["Design", "Typography", "Tutorial"]
  },
  {
    title: "10 Proven Ways to Earn Money from AI",
    desc: "Professional thumbnail showcasing practical AI monetization strategies and income opportunities, designed to attract viewers interested in tech-based earnings.",
    image: "/Thumbnail/Thumbnail/thumbnail_demo.png",
    tags: ["AI", "Earning", "Tutorial"]
  },
  {
    title: "Educational Series Thumbnail Design",
    desc: "A clean and consistent thumbnail series created for educational YouTube channels, maintaining visual identity and clarity across multiple videos.",
    image: "/Thumbnail/Thumbnail/4.jpg",
    tags: ["Content", "Illustrator", "Design"]
  },
  {
    title: "Future of AI – Educational Thumbnail",
    desc: "Eye-catching thumbnail graphics designed for AI-focused educational content, highlighting modern technology trends and innovation through bold visual elements.",
    image: "/Thumbnail/Thumbnail/5.jpg",
    tags: ["Marketing", "Branding", "Graphics"]
  },
  {
    title: "AI Tools Comparison Thumbnail",
    desc: "Bold and engaging comparison design showcasing two AI tools side-by-side, using strong visual contrast and color theory to grab viewer attention instantly.",
    image: "/Thumbnail/Thumbnail/24.png",
    tags: ["Marketing", "Branding", "Graphics"]
  },
  {
    title: "E-commerce Business Starter Thumbnail",
    desc: "Clean and modern thumbnail design crafted for beginner entrepreneurs, explaining how to launch and scale an e-commerce business from the ground up.",
    image: "/Thumbnail/Thumbnail/9.jpg",
    tags: ["Marketing", "Branding", "Graphics"]
  },
  {
    title: "Student Earning Guide Thumbnail",
    desc: "Engaging thumbnail for educational content on practical income opportunities for students, covering both online and offline earning methods.",
    image: "/Thumbnail/Thumbnail/10.jpg",
    tags: ["Marketing", "Branding", "Graphics"]
  },
  {
    title: "YouTube Script Writing Guide Thumbnail",
    desc: "Clear and impactful thumbnail designed for tutorials teaching the craft of writing high-converting YouTube scripts that engage and retain viewers.",
    image: "/Thumbnail/Thumbnail/image thumbnail.png",
    tags: ["Marketing", "Branding", "Graphics"]
  },
  {
    title: "Documentary Style Video Thumbnail",
    desc: "Professional documentary-style thumbnail designed to create intrigue and curiosity, encouraging viewers to explore compelling visual storytelling.",
    image: "/Thumbnail/Thumbnail/12.jpg",
    tags: ["Marketing", "Branding", "Graphics"]
  },
  {
    title: "Biography Video Thumbnail",
    desc: "Visually compelling thumbnail designed for biography and documentary content, strategically highlighting the subject to spark viewer interest and curiosity.",
    image: "/Thumbnail/Thumbnail/13.jpg",
    tags: ["Marketing", "Branding", "Graphics"]
  },
  {
    title: "YouTube Subscriber Growth Thumbnail",
    desc: "Strategic thumbnail design focused on attracting content creators seeking actionable strategies to increase their YouTube subscriber base and channel growth.",
    image: "/Thumbnail/Thumbnail/14.jpg",
    tags: ["Marketing", "Branding", "Graphics"]
  },
  {
    title: "YouTube Growth Strategy Thumbnail",
    desc: "Bold and engaging thumbnail designed for comprehensive content on optimizing YouTube channels, covering algorithms, content strategy, and audience retention.",
    image: "/Thumbnail/Thumbnail/15.jpg",
    tags: ["Marketing", "Branding", "Graphics"]
  },
  {
    title: "Lifestyle Vlog Thumbnail",
    desc: "High-quality vlog thumbnail featuring realistic visuals and balanced composition, effectively highlighting the key moment and emotion of the video content.",
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
