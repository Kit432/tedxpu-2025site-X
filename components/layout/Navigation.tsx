/* Navigation Component */

"use client";

export default function Navigation() {
    return (
        <nav className="hidden md:flex space-x-8 text-sm{font-size: 14px} font-bold">
          <a href="#about" className="hover:text-red-500 transition-colors">
            About
          </a>
          <a href="#speakers" className="hover:text-red-500 transition-colors">
            Speakers
          </a>
          <a href="#schedule" className="hover:text-red-500 transition-colors">
            Schedule
          </a>
          <a href="#contact" className="hover:text-red-500 transition-colors">
            Contact
          </a>
        </nav>
    );
}