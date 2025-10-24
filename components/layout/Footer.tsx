/* Footer Component */

"use client";
import { FaFacebookF, FaInstagram, FaTiktok, FaSpotify, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        {/* Left Text */}
        <p className="text-sm max-w-sm">
          This independent TEDx event is operated under license from TED.
        </p>

        {/* Center Text */}
        <p className="text-xs text-gray-400 text-center md:absolute left-1/2 transform md:-translate-x-1/2">
          ALL RIGHTS RESERVED © 2025
        </p>

        {/* Social Icons */}
        <div className="flex space-x-5 text-xl">
          {/* Replace # with your actual social links */}
          <a href="#" aria-label="Facebook" className="hover:text-red-500">
            <FaFacebookF />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-red-500">
            <FaInstagram />
          </a>
          <a href="#" aria-label="TikTok" className="hover:text-red-500">
            <FaTiktok />
          </a>
          <a href="#" aria-label="Spotify" className="hover:text-red-500">
            <FaSpotify />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-red-500">
            <FaTwitter />
          </a>
          <a href="#" aria-label="YouTube" className="hover:text-red-500">
            <FaYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
}
