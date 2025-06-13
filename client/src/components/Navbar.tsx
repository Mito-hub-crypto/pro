import { useTheme } from "./ThemeProvider";
import { Sun, Moon, Menu, X, Home, User, Users, FolderOpen, Github, Youtube, MessageCircle, Send, Mail } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setIsMenuOpen(false);
  };

  const menuItems = [
    { label: "Home", icon: Home, action: scrollToTop },
    { label: "About", icon: User, action: () => scrollToSection("about") },
    { label: "Friend", icon: Users, action: () => scrollToSection("about") },
    { label: "Project", icon: FolderOpen, action: () => scrollToSection("projects") },
    { label: "Contact", icon: MessageCircle, action: () => scrollToSection("contact") },
  ];

  const socialLinks = [
    { label: "GitHub", icon: Github, href: "https://github.com/akahost", color: "text-gray-600 dark:text-gray-400" },
    { label: "YouTube", icon: Youtube, href: "https://www.youtube.com/@always-aka", color: "text-red-500" },
    { label: "WhatsApp", icon: MessageCircle, href: "https://wa.me/6281266950382", color: "text-green-500" },
    { label: "Telegram", icon: Send, href: "https://t.me/aka", color: "text-blue-500" },
    { label: "Email", icon: Mail, href: "mailto:aka@example.com", color: "text-purple-500" },
  ];

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-[65ch] mx-auto px-4 md:px-6 lg:px-12">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="font-bold text-xl text-neutral-900 dark:text-neutral-100">
              aka
            </div>

            {/* Desktop Navigation & Controls */}
            <div className="flex items-center space-x-4">
              {/* Navigation Links - Hidden on mobile */}
              <div className="hidden md:flex items-center space-x-6">
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-all duration-300 relative group"
                >
                  About
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </button>
                <button
                  onClick={() => scrollToSection("skills")}
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-all duration-300 relative group"
                >
                  Skills
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-all duration-300 relative group"
                >
                  Projects
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-all duration-300 relative group"
                >
                  Contact
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </button>
              </div>

              {/* Theme Toggle Button */}
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-all duration-300"
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>

              {/* Hamburger Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-all duration-300 md:hidden"
              >
                {isMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
            />
            
            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white dark:bg-neutral-900 shadow-xl z-50 md:hidden overflow-y-auto"
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">Menu</h2>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 rounded-lg text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-300"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Navigation Items */}
                <div className="space-y-4 mb-8">
                  {menuItems.map((item, index) => (
                    <motion.button
                      key={item.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={item.action}
                      className="flex items-center w-full p-3 rounded-lg text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-300"
                    >
                      <item.icon className="w-5 h-5 mr-3" />
                      {item.label}
                    </motion.button>
                  ))}
                </div>

                {/* Social Media Links */}
                <div className="border-t border-neutral-200 dark:border-neutral-700 pt-6">
                  <h3 className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-4">Media Sosial</h3>
                  <div className="space-y-3">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.label}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: (menuItems.length + index) * 0.1 }}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-300"
                      >
                        <social.icon className={`w-5 h-5 mr-3 ${social.color}`} />
                        <span className="text-neutral-700 dark:text-neutral-300">{social.label}</span>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
