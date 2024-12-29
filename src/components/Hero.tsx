"use client";

import { TypeAnimation } from "react-type-animation";

export default function Hero() {
    return (
      <section
        id="home"
        className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-950 via-blue-900 to-blue-600 text-white text-center"
      >
        {/* Type Animation */}
      <TypeAnimation
        sequence={[
          "Hi, I'm Samia",
          2000, 
          "", 
          2000, 
        ]}
        speed={5} 
        className="text-6xl font-extrabold mb-6 drop-shadow-md"
        cursor={true} 
        repeat={Infinity} 
      />

      {/* Description */}
      <p className="text-lg max-w-2xl mb-6 px-4">
        Undergraduate Computer Science Student @ UBC 
      </p>

      {/* Button */}
      <a
        href="#about"
        className="bg-white text-gray-800 font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:bg-gray-100 transition-all duration-300"
      >
        Explore
      </a>
    </section>
  );
  }
  