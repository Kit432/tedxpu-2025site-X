/* Navigation Component */

"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState(false);

  const navLinks = [
    { href: "/", label: "Home"},
    { href: "/event", label: "Event" },
    { href: "/sponsors", label: "Sponsors" },
    { href: "/contact", label: "Contact" },
  ];

  const aboutLinks = [
    { href: "/about", label: "Overview" },
    { href: "/about/team", label: "Our Team" },
    { href: "/about/history", label: "History" },
  ];

    return (
        <nav className="hidden md:flex space-x-8 text-sm{font-size: 14px} font-bold">
           {/* OTHER LINKS */}
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors ${
                pathname === link.href
                  ? "text-red-500"
                  : "hover:text-red-500"
              }`}
            >
              {link.label}
            </Link>
          ))}
          
          {/* ABOUT (Dropdown) */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown(true)}
            onMouseLeave={() => setOpenDropdown(false)}
          >
            <button
              className={`transition-colors ${
                pathname.startsWith("/about")
                  ? "text-red-500"
                  : "hover:text-red-500"
              }`}
            >
              About
            </button>

            <AnimatePresence>
              {openDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 mt-2 bg-white text-black rounded-md shadow-lg py-2 w-48"
                >
                  {aboutLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      {item.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>
    );
}