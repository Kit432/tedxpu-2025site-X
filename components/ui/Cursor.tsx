"use client";
import { useEffect } from "react";

export default function Cursor() {
  useEffect(() => {
    const cursor = document.querySelector(".cursor") as HTMLElement;
    document.addEventListener("mousemove", (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    });
  }, []);

  return <div className="cursor fixed top-0 left-0 w-6 h-6 bg-tedx-red rounded-full 
  pointer-events-none transition-transform duration-200 mix-blend-difference z-9999" />;
}
