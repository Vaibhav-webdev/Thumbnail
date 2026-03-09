import Image from "next/image";

export default function Projects() {

  const projects = [
    {
      title: "Gaming YouTube Thumbnails",
      desc: "High-CTR gaming thumbnails designed to attract viewers and increase engagement.",
      image: "/Thumbnail/1.jpg",
      tags: ["YouTube", "Photoshop", "Design"]
    },
    {
      title: "Movie Reaction Channel",
      desc: "Creative thumbnails for movie reaction content focusing on strong emotional impact.",
      image: "/Thumbnail/2.jpg",
      tags: ["YouTube", "Branding", "Design"]
    },
    {
      title: "Educational Series",
      desc: "Clean and informative thumbnail series for educational YouTube channels.",
      image: "/Thumbnail/4.jpg",
      tags: ["Content", "Illustrator", "Design"]
    },
    {
      title: "Social Media Campaign",
      desc: "Eye-catching graphics for marketing campaigns across multiple social platforms.",
      image: "/Thumbnail/5.jpg",
      tags: ["Marketing", "Branding", "Graphics"]
    },
    {
      title: "Social Media Campaign",
      desc: "Eye-catching graphics for marketing campaigns across multiple social platforms.",
      image: "/Thumbnail/24.png",
      tags: ["Marketing", "Branding", "Graphics"]
    },
    {
      title: "Social Media Campaign",
      desc: "Eye-catching graphics for marketing campaigns across multiple social platforms.",
      image: "/Thumbnail/23.jpg",
      tags: ["Marketing", "Branding", "Graphics"]
    },
    {
      title: "Social Media Campaign",
      desc: "Eye-catching graphics for marketing campaigns across multiple social platforms.",
      image: "/Thumbnail/25.jpg",
      tags: ["Marketing", "Branding", "Graphics"]
    },
    {
      title: "Social Media Campaign",
      desc: "Eye-catching graphics for marketing campaigns across multiple social platforms.",
      image: "/Thumbnail/9.jpg",
      tags: ["Marketing", "Branding", "Graphics"]
    },
    {
      title: "Social Media Campaign",
      desc: "Eye-catching graphics for marketing campaigns across multiple social platforms.",
      image: "/Thumbnail/10.jpg",
      tags: ["Marketing", "Branding", "Graphics"]
    },
    {
      title: "Social Media Campaign",
      desc: "Eye-catching graphics for marketing campaigns across multiple social platforms.",
      image: "/Thumbnail/11.jpg",
      tags: ["Marketing", "Branding", "Graphics"]
    },
    {
      title: "Social Media Campaign",
      desc: "Eye-catching graphics for marketing campaigns across multiple social platforms.",
      image: "/Thumbnail/12.jpg",
      tags: ["Marketing", "Branding", "Graphics"]
    },
    {
      title: "Social Media Campaign",
      desc: "Eye-catching graphics for marketing campaigns across multiple social platforms.",
      image: "/Thumbnail/13.jpg",
      tags: ["Marketing", "Branding", "Graphics"]
    },
    {
      title: "Social Media Campaign",
      desc: "Eye-catching graphics for marketing campaigns across multiple social platforms.",
      image: "/Thumbnail/14.jpg",
      tags: ["Marketing", "Branding", "Graphics"]
    },
    {
      title: "Social Media Campaign",
      desc: "Eye-catching graphics for marketing campaigns across multiple social platforms.",
      image: "/Thumbnail/15.jpg",
      tags: ["Marketing", "Branding", "Graphics"]
    },
    {
      title: "Social Media Campaign",
      desc: "Eye-catching graphics for marketing campaigns across multiple social platforms.",
      image: "/Thumbnail/16.jpg",
      tags: ["Marketing", "Branding", "Graphics"]
    }
  ];

  return (
    <section id="projects" className="py-18 bg-[#0b0f17]">

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex">
          <div className="text-center mb-20 border-b-4 border-[#ff6b4a] hover:w-full transition-all duration-500 cursor-default pb-6 w-10">
            <h2 className="text-4xl font-bold">
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
