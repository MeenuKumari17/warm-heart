import React from 'react';
import { motion } from 'framer-motion';
import heroBackground from '../assets/hero-back-1.jpg';
import Lottie from 'lottie-react';
import scroll from '../assets/scroll.json';

const Hero = () => {
  return (
    <section
    id='home'
      className="relative h-screen bg-center bg-cover flex items-center justify-center px-6"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-opacity-30" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl text-center space-y-12">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-800 via-purple-700 to-pink-700 bg-clip-text text-transparent"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Warm Your Heart & Home
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-base sm:text-lg md:text-xl text-black max-w-xl mx-auto"
        >
          Handcrafted with love 💕 Premium candles that create magical moments for every season,
          celebration, and sacred space in your heart.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col sm:flex-row justify-center gap-4 mt-6"
        >
          {/* Primary Button */}
          <a
            href="#collection"
            className="px-6 py-3 rounded-full font-semibold text-black relative overflow-hidden border-2 border-double border-pink-400 transition-all duration-300 group"
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-gray-800">
              Shop Collections
            </span>
            <span
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-gradient-to-r from-pink-200 via-purple-200 to-pink-100"
            ></span>
          </a>

          {/* Secondary Button */}
          <a
            href="#custom-order"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full font-medium text-black relative overflow-hidden border-2 border-double border-purple-400 transition-all duration-300 group"
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-gray-800">
              Custom Orders
            </span>
            <span
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-gradient-to-r from-purple-200 via-pink-100 to-purple-100"
            ></span>
          </a>
        </motion.div>
      </div>
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 w-20 md:w-18 lg:w-16">
        <a href="#collection" className="cursor-pointer">
            <Lottie animationData={scroll} loop={true} />
        </a>
        </div>
    </section>
  );
};

export default Hero;
