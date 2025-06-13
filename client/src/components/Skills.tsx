import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Server, Database, Wind, GitBranch, Terminal } from "lucide-react";

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    { name: "React", icon: Code, color: "text-blue-500", hoverColor: "hover:ring-blue-500/20" },
    { name: "Node.js", icon: Server, color: "text-green-500", hoverColor: "hover:ring-green-500/20" },
    { name: "MongoDB", icon: Database, color: "text-green-600", hoverColor: "hover:ring-green-600/20" },
    { name: "Tailwind", icon: Wind, color: "text-cyan-500", hoverColor: "hover:ring-cyan-500/20" },
    { name: "Git", icon: GitBranch, color: "text-orange-500", hoverColor: "hover:ring-orange-500/20" },
    { name: "TypeScript", icon: Terminal, color: "text-purple-500", hoverColor: "hover:ring-purple-500/20" },
  ];

  return (
    <section id="skills" className="py-20 px-4 md:px-6 lg:px-12 bg-neutral-50 dark:bg-neutral-800/50" ref={ref}>
      <div className="max-w-[65ch] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl lg:text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-12 text-center"
        >
          Keahlian
        </motion.h2>

        {/* Skill Progress Bars */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-lg font-medium text-neutral-700 dark:text-neutral-300">Frontend Development</span>
              <span className="text-sm text-neutral-500 dark:text-neutral-400">70%</span>
            </div>
            <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-3">
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: "70%" } : { width: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                className="bg-blue-500 h-3 rounded-full"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-lg font-medium text-neutral-700 dark:text-neutral-300">Backend Development</span>
              <span className="text-sm text-neutral-500 dark:text-neutral-400">85%</span>
            </div>
            <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-3">
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: "85%" } : { width: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                className="bg-green-500 h-3 rounded-full"
              />
            </div>
          </motion.div>
        </div>

        {/* Tech Stack Icons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 * index }}
              className={`flex flex-col items-center p-4 rounded-lg bg-white dark:bg-neutral-800 shadow-sm hover:shadow-lg hover:scale-105 hover:ring-2 ${skill.hoverColor} transition-all duration-300 cursor-pointer`}
            >
              <div className={`w-12 h-12 mb-2 flex items-center justify-center ${skill.color}`}>
                <skill.icon className="w-8 h-8" />
              </div>
              <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
