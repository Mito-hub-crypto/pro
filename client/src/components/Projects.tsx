import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      id: 1,
      title: "WhatsApp Bot Modular",
      description: "Bot WhatsApp yg bernama furina ai yg memiliki beragam fitur dan hal keren lainya.",
      image: "https://files.catbox.moe/iiw1sj.jpg",
      tech: ["Node.js", "WhatsApp API", "Javascript"],
      link: "https://wa.me/6289524703618",
      techColors: ["bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400", "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400", "bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-400"]
    },
    {
      id: 2,
      title: "portofolio",
      description: "Website portofolio yang menggunakan framework vite dan dapat di hosting vercel",
      image: "https://files.catbox.moe/3f4pfx.jpg",
      tech: ["React", "Tailwind", "Vite"],
      link: "https://pro-topaz-six.vercel.app/",
      techColors: ["bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400", "bg-cyan-100 dark:bg-cyan-900/30 text-cyan-800 dark:text-cyan-400", "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400"]
    },
    {
      id: 3,
      title: "kabox",
      description: "Website cdn atau tourl all media",
      image: "https://files.catbox.moe/n7hblc.jpg",
      tech: ["Python", "FastAPI", "Tailwand"],
      link: "https://comingsoonytdl.carrd.co/",
      techColors: ["bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400", "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400", "bg-gray-100 dark:bg-gray-900/30 text-gray-800 dark:text-gray-400"]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 md:px-6 lg:px-12" ref={ref}>
      <div className="max-w-[65ch] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl lg:text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-12 text-center"
        >
          Proyek Unggulan
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 * index }}
              className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <img
                src={project.image}
                alt={`${project.title} Project`}
                className="w-full h-48 object-cover"
                loading="lazy"
                width="400"
                height="200"
              />

              <div className="p-6">
                <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
                  {project.title}
                </h3>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={tech}
                      className={`px-2 py-1 text-xs font-medium rounded-full ${project.techColors[techIndex]}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4">
                  {project.description}
                </p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-500 hover:text-blue-600 transition-colors duration-300"
                >
                  <span className="text-sm font-medium">Lihat Project</span>
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
