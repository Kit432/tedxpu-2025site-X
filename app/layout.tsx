// Shared UI structure 
// wraps all pages in app folder

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Cursor from "@/components/ui/Cursor";
import ScrollToTop from "@/utils/scrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TEDxPanteion University",
  description: "Η επίσημη ιστοσελίδα του TEDxPanteion University.",
  openGraph: {
    // 3. Αυτό λέει στην Google τι να γράψει στο μικρό όνομα ΠΑΝΩ από το URL (Site Name)
    siteName: "TEDxPanteion University", 
    title: "TEDxPanteion University",
    description: "Η επίσημη ιστοσελίδα του TEDxPanteion University.",
    url: "https://tedxpanteionuniversity.com",
    type: "website",
  },
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children, // {children} is where the specific page content (like page.tsx) will render
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased absolute inset-0 z-1 pt-24`}>
          <ScrollToTop />
          <div className="hidden lg:block">
            <Cursor />
          </div>
          <Header />
        <main className="">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
