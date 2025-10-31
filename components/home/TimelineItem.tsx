"use client";
import Link from "next/link";
import { motion } from "framer-motion";

type Event = {
  id: string;
  year: string;
  title: string;
  highlight?: boolean; // for 2025 card style in screenshot
};

export default function TimelineItem({
  event,
  side,
}: {
  event: Event;
  side: "left" | "right";
}) {
  const card = (
    <motion.article
      initial={{ opacity: 0, y: side === "right" ? 40 : 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className={`group relative rounded-xl p-8 shadow-2xl border ${
        event.highlight
          ? "border-red-600 ring-1 ring-red-600 bg-[#0b0b0b]"
          : "border-gray-800 bg-[#0b0b0b]"
      }`}
    >
      <div className="items-start justify-between gap-2">
        <div>
          <div className="text-xs font-semibold text-red-500">{event.year}</div>
          <h3 className="mt-2 text-2xl md:text-3xl font-extrabold tracking-tight text-white">
            {event.title}
          </h3>
        </div>
      </div>
    </motion.article>
  );

  // Layout for left or right in the 9-column grid (see Timeline component)
  return (
    <div
      className={`relative col-span-4 ${
        side === "left" ? "md:col-start-1 md:col-end-5 md:text-left" : "md:col-start-6 md:col-end-10 md:text-right md:mt-24"
      }`}
    >
      <div className={`md:pr-6 ${side === "left" ? "" : "md:pl-6"}`}>{card}</div>
    </div>
  );
}
