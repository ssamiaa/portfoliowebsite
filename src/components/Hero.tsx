"use client";

import { TypeAnimation } from "react-type-animation";
import GradientBackground from "@/components/GradientBackground";

export default function Hero() {
    return (
      <section
        id="home"
        className="h-screen pb-5 flex flex-col items-center justify-center bg-transparent text-white text-center"
      >
        <div className="relative">
            <GradientBackground/>
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
      </div>
    </section>
  );
  }
  