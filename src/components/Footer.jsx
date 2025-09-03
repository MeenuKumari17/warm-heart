import React, { useEffect, useState } from "react";
import { FaInstagram, FaWhatsapp, FaArrowUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Footer = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTopBtn(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  // smooth scroll function
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-pink-50 via-white to-blue-50 text-gray-700 px-6 pt-16 pb-32 mt-20 overflow-hidden">
      {/* Soft background accents */}
      <div className="pointer-events-none absolute top-0 left-0 w-72 h-72 bg-pink-200/30 rounded-full blur-3xl -z-10" />
      <div className="pointer-events-none absolute bottom-20 right-0 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl -z-10" />

      {/* Content */}
      <div className="relative max-w-6xl mx-auto flex flex-col items-center space-y-8">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">
          MyBrand
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl text-center">
          Designing experiences that feel bright, friendly, and memorable. ✨
        </p>

        {/* Socials */}
        <div className="flex gap-6">
          <motion.a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-pink-600 transition-colors"
            whileHover={{ scale: 1.3, rotate: 8 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaInstagram size={34} className="text-[28px] hover:spin-once" />
          </motion.a>
          <motion.a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:text-green-600 transition-colors"
            whileHover={{ scale: 1.3, rotate: -8 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaWhatsapp size={34} className="text-[28px] hover:spin-once" />
          </motion.a>
        </div>

        {/* Quick Links (updated like navbar) */}
        <nav className="flex gap-6 mt-2 text-gray-600 text-sm md:text-base">
          <button onClick={() => handleScroll("home")} className="hover:text-pink-400">Home</button>
          <button onClick={() => handleScroll("collection")} className="hover:text-pink-400">Collections</button>
          <button onClick={() => handleScroll("featured")} className="hover:text-pink-400">Featured</button>
          <button onClick={() => handleScroll("custom-order")} className="hover:text-pink-400">Custom</button>
        </nav>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm mt-6">
          © {new Date().getFullYear()} MyBrand · Made with ❤️
        </div>
      </div>

      {/* Animated Wave */}
      <div className="absolute inset-x-0 bottom-0 h-28 overflow-hidden">
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <motion.path
            fill="url(#waveGradFront)"
            initial={{
              d: "M0,60 C150,90 350,30 600,60 C850,90 1050,30 1200,60 L1200,120 L0,120 Z",
            }}
            animate={{
              d: [
                "M0,60 C150,90 350,30 600,60 C850,90 1050,30 1200,60 L1200,120 L0,120 Z",
                "M0,65 C150,35 350,95 600,65 C850,35 1050,95 1200,65 L1200,120 L0,120 Z",
                "M0,60 C150,90 350,30 600,60 C850,90 1050,30 1200,60 L1200,120 L0,120 Z",
              ],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <defs>
            <linearGradient id="waveGradFront" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#F9A8D4" />
              <stop offset="100%" stopColor="#93C5FD" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Scroll-to-top */}
      <AnimatePresence>
        {showTopBtn && (
          <motion.button
            key="scrollTop"
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-8 right-8 p-4 rounded-full bg-gradient-to-r from-pink-400 to-blue-400 text-white shadow-lg hover:scale-110"
          >
            <FaArrowUp size={22} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
