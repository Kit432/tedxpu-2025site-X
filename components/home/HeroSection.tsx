/* Home Page Hero Section */

"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative h-screen bg-[url('/images/aexevent_logos-1.png')] bg-cover bg-center text-white min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background overlay (optional if you add a background image later) */}
      <div className="absolute inset-0  from-black/80 to-black/60 z-0"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center max-w-3xl px-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
          <span className="text-red-600 left">TEDx</span> PanteionUniversity
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Ideas worth spreading from the heart of Athens — connecting creativity,
          research, and community.
        </p>
        <div className="flex justify-center">
          <a
            href="#about"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300"
          >
            Join the Event
          </a>
        </div>
      </motion.div>
    </section>
  );
}
