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
      description: "Bot WhatsApp dengan arsitektur modular yang mendukung berbagai fitur otomasi dan integrasi dengan berbagai layanan.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=200",
      tech: ["Node.js", "WhatsApp API", "MongoDB"],
      link: "https://github.com/akahost",
      techColors: ["bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400", "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400", "bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-400"]
    },
    {
      id: 2,
      title: "Modern Web Dashboard",
      description: "Dashboard modern dengan antarmuka yang bersih dan responsif untuk mengelola data dan analitik real-time.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=200",
      tech: ["React", "Tailwind", "Next.js"],
      link: "https://github.com/akahost",
      techColors: ["bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400", "bg-cyan-100 dark:bg-cyan-900/30 text-cyan-800 dark:text-cyan-400", "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400"]
    },
    {
      id: 3,
      title: "Sistem Otomasi",
      description: "Sistem otomasi yang dapat mengintegrasikan berbagai layanan dan melakukan tugas-tugas berulang secara otomatis.",
      image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=200",
      tech: ["Python", "FastAPI", "Docker"],
      link: "https://github.com/akahost",
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
