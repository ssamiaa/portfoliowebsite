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
          "Hi, I'm Samia", // Type this out
          2000, // Wait for 2 seconds
          "Welcome to My Digital Playground!", // Replace with this
          2000, // Wait for 2 seconds
        ]}
        speed={5} // Typing speed (higher is slower)
        className="text-6xl font-extrabold mb-6 drop-shadow-md"
        cursor={true} // Show a blinking cursor
        repeat={Infinity} // Do not repeat the animation
      />

      {/* Description */}
      <p className="text-lg max-w-2xl mb-6 px-4">
        Undergraduate Computer Science Student @ UBC 
      </p>

      {/* Button */}
      <a
        href="https://www.linkedin.com/in/samiasajid2"
        className="bg-white text-gray-800 font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:bg-gray-100 transition-all duration-300"
      >
        Connect
      </a>
    </section>
  );
  }
  