import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 px-4 md:px-6 lg:px-12" ref={ref}>
      <div className="max-w-[65ch] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl lg:text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-12 text-center"
        >
          Tentang Saya
        </motion.h2>

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="text-lg leading-relaxed mb-6 text-neutral-600 dark:text-neutral-300"
          >
            Halo! Saya Aka, seorang pelajar dari sekolah SMAN 1 LEMBAH MELINTANG.
            Perjalanan saya dimulai dari rasa ingin tahu tentang bagaimana cara kerja aplikasi dan website yang sering kita gunakan sehari-hari.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-300"
          >
            Saat ini saya fokus mengembangkan bot WhatsApp dengan arsitektur modular, web applications menggunakan teknologi modern,
            dan sistem otomasi yang dapat membantu mempermudah berbagai aktivitas downloader dan sebagai fun. Saya percaya bahwa teknologi dapat menjadi
            solusi untuk masalah sehari-hari, dan terus belajar untuk menciptakan inovasi yang bermanfaat bagi banyak orang.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
