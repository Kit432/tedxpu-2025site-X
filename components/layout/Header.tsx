/* Header Component */

"use client"; // Rendered on client side
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/layout/Navigation";

export default function Header() {
  return (
    <header className="w-full bg-black text-white relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <div className="flex items-center space-x-2">
          {/* Replace /logo.png with your actual logo in /public/images */}
          <Link href="/">
          <Image
            src="/images/logo-white.png"
            alt="TEDx Logo"
            width={200}
            height={50}
            className="cursor-pointer"
          />
          </Link>
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
