"use client";
import { motion } from "framer-motion";

export default function Marquee({reverse = false }) {
  const text = "10 ΧΡΟΝΙΑ • 10 ΧΡΟΝΙΑ • 10 ΧΡΟΝΙΑ • 10 ΧΡΟΝΙΑ • 10 ΧΡΟΝΙΑ • 10 ΧΡΟΝΙΑ • ";

  return (
    <div className="relative w-full overflow-hidden">
      <motion.div
        className="whitespace-nowrap text-4xl md:text-6xl font-bold text-red-600 uppercase tracking-wider"
        animate={{ x: reverse ? ["-100%", "0%"] : ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "linear",
        }}
      >
        <span>{text.repeat(2)}</span>
      </motion.div>
    </div>
  );
}
