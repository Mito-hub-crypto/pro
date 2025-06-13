import { motion } from "framer-motion";
import { Github, Youtube, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

export function Hero() {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = ["Pelajar", "Newbie", "Developer"];
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = texts[currentIndex];
      
      if (isDeleting) {
        setCurrentText(prev => prev.slice(0, -1));
      } else {
        setCurrentText(prev => current.slice(0, prev.length + 1));
      }
      
      if (!isDeleting && currentText === current) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentIndex(prev => (prev + 1) % texts.length);
      }
    }, isDeleting ? 100 : 150);
    
    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentIndex, texts]);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 md:px-6 lg:px-12">
      <div className="max-w-[65ch] mx-auto text-center">
        {/* Profile Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="mb-8"
        >
          <img
            src="https://files.catbox.moe/qfamnx.jpg"
            alt="Aka Profile Photo"
            className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-neutral-200 dark:border-neutral-700 shadow-lg"
            loading="eager"
            width="96"
            height="96"
          />
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl lg:text-6xl font-bold text-neutral-900 dark:text-neutral-100 mb-4"
        >
          aka
        </motion.h1>

        {/* Age and Location */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="text-lg text-neutral-600 dark:text-neutral-400 mb-2"
        >
          15 tahun • Sumatera Barat
        </motion.p>

        {/* Typing Effect Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="text-xl lg:text-2xl text-neutral-600 dark:text-neutral-400 mb-6 h-8"
        >
          <span>{currentText}</span>
          <span className="animate-pulse">|</span>
        </motion.div>

        {/* Quote */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="text-lg italic text-neutral-500 dark:text-neutral-400 mb-8"
        >
          "gw hanya pemula 🗿"
        </motion.p>

        {/* WhatsApp Contact Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          className="mb-8"
        >
          <a
            href="https://wa.me/6281266950382"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Hubungi via WhatsApp
          </a>
        </motion.div>

        {/* Social Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          className="flex justify-center space-x-4"
        >
          <a
            href="https://github.com/akaanakbaik"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700 hover:scale-110 transition-all duration-300"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.youtube.com/@always-aka"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700 hover:scale-110 transition-all duration-300"
          >
            <Youtube className="w-6 h-6" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
