/* Header Component */

"use client"; // Rendered on client side
import Image from "next/image";
import Navigation from "@/components/layout/Navigation";

export default function Header() {
  return (
    <header className="w-full bg-black text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo placeholder */}
        <div className="flex items-center space-x-2">
          {/* Replace /logo.png with your actual logo in /public/images */}
          <Image
            src="/images/favicon.ico"
            alt="TEDx Logo"
            width={70}
            height={30}
            className="object-contain"
          />
        </div>

        <Navigation />

        {/* Mobile nav placeholder (optional, add later) */}
        <div className="md:hidden">
          {/* Add mobile menu button later if needed */}
        </div>
      </div>
    </header>
  );
}
