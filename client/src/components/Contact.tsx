import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MessageCircle, Github, Youtube, Send, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Pesan Terkirim!",
      description: "Terima kasih! Pesan Anda telah terkirim.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      name: "WhatsApp",
      icon: MessageCircle,
      detail: "aka",
      link: "https://wa.me/6281266950382",
      bgColor: "bg-green-100 dark:bg-green-900/30",
      iconColor: "text-green-600 dark:text-green-400"
    },
    {
      name: "GitHub",
      icon: Github,
      detail: "@akaanakbaik",
      link: "https://github.com/akaanakbaik",
      bgColor: "bg-gray-100 dark:bg-gray-900/30",
      iconColor: "text-gray-600 dark:text-gray-400"
    },
    {
      name: "YouTube",
      icon: Youtube,
      detail: "@always-aka",
      link: "https://www.youtube.com/@always-aka",
      bgColor: "bg-red-100 dark:bg-red-900/30",
      iconColor: "text-red-600 dark:text-red-400"
    },
    {
      name: "Telegram",
      icon: Send,
      detail: "@aka",
      link: "https://t.me/akamodebaik",
      bgColor: "bg-blue-100 dark:bg-blue-900/30",
      iconColor: "text-blue-600 dark:text-blue-400"
    },
    {
      name: "Email",
      icon: Mail,
      detail: "aka",
      link: "mailto:furinabyaka@gmail.com",
      bgColor: "bg-purple-100 dark:bg-purple-900/30",
      iconColor: "text-purple-600 dark:text-purple-400"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 md:px-6 lg:px-12 bg-neutral-50 dark:bg-neutral-800/50" ref={ref}>
      <div className="max-w-[65ch] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl lg:text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-12 text-center"
        >
          Hubungi Saya
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                  Nama
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Nama Anda"
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                  Email
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="email@example.com"
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                  Pesan
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  placeholder="Tulis pesan Anda di sini..."
                  required
                  className="w-full resize-none"
                />
              </div>

              <Button type="submit" className="w-full hover:scale-105 transition-transform duration-300">
                Kirim Pesan
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
              Mari Terhubung
            </h3>

            <p className="text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed">
              Saya selalu terbuka untuk diskusi tentang proyek baru, kolaborasi, atau sekadar berbagi ide.
              Jangan ragu untuk menghubungi saya melalui platform berikut:
            </p>

            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={contact.name}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 + 0.1 * index }}
                  className="flex items-center p-4 rounded-lg bg-white dark:bg-neutral-800 shadow-sm hover:shadow-md transition-all duration-300 group"
                >
                  <div className={`w-12 h-12 ${contact.bgColor} rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <contact.icon className={`w-6 h-6 ${contact.iconColor}`} />
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-900 dark:text-neutral-100">{contact.name}</h4>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">{contact.detail}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
