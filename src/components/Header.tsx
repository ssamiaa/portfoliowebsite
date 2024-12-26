"use client";

import Link from "next/link";
import { useState, useEffect } from "react";


export default function Header() {
  const [showBackground, setShowBackground] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowBackground(false);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 flex justify-center ${
        showBackground ? "bg-gray-100 shadow-md" : "bg-transparent"
      } transition-all duration-300`}
    >
      <nav
        className={`rounded-full bg-gray-100/70 backdrop-blur-md flex gap-8 px-6 py-2 items-center shadow-sm mt-4 ${
          showBackground ? "mt-2" : ""
        }`}
      >
        {/* Navigation Links */}
        <Link
          href="#home"
          className="text-gray-700 font-medium hover:text-gray-900 transition"
        >
          Home
        </Link>
        <Link
          href="#about"
          className="text-gray-700 font-medium hover:text-gray-900 transition"
        >
          About
        </Link>
        <Link
          href="#projects"
          className="text-gray-700 font-medium hover:text-gray-900 transition"
        >
          Projects
        </Link>
        <Link
          href="#experience"
          className="text-gray-700 font-medium hover:text-gray-900 transition"
        >
          Experience
        </Link>
        <Link
          href="#contact"
          className="text-gray-700 font-medium hover:text-gray-900 transition"
        >
          Connect
        </Link>
      </nav>
    </header>
  );
}