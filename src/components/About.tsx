"use client";

import { TypeAnimation } from "react-type-animation";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen py-16 bg-gray-50 text-gray-900 flex items-center justify-center"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-2 grid-rows-3 gap-8">
        {/* Top Left: Currently a... */}
        <div className="bg-white shadow-md p-6 rounded-lg border border-gray-200">
          <h3 className="text-xl font-bold text-blue-600 mb-4">Currently a...</h3>
          <ul className="list-disc pl-5 space-y-2">
                <li>BSc. Computer Science Student @ UBC</li>
                <li>UX/UI Designer @ Emerging Media Lab</li>
                <li>Web Developer @ UBC Orbit</li>
                <li>Partnerships Director @ UBC UXHub</li>
                <li>VP @ UBC Society for AI Literacy</li>
                <li>Core Volunteer @ IRC UBC</li>
          </ul>
        </div>

        {/* Top Right: Type Animation */}
        <div className="bg-gradient-to-r from-blue-950 via-blue-900 to-blue-600 text-white p-6 rounded-lg shadow-md flex items-center justify-center">
          <TypeAnimation
            sequence={[
              "I design interfaces... ", 2000,
              "and then redesign them." , 2000
            ]}
            speed={50}
            className="text-2xl font-bold text-center"
            repeat={Infinity}
          />
        </div>

        {/* Middle Left: Hi, I'm Samia */}
        <div className="bg-gradient-to-r from-blue-950 via-blue-900 to-blue-600 text-white font-light p-6 rounded-lg shadow-md flex items-center justify-center">
          <TypeAnimation
            sequence={[
                "I create things...", 2000,
                "and break them sometimes.", 2000

            ]}
            speed={50}
            className="text-2xl font-extrabold text-center"
            cursor={true}
            repeat={0}
          />
        </div>

        {/* Middle Right: Talk to me about... */}
        <div className="bg-white shadow-md p-6 rounded-lg border border-gray-200">
          <h3 className="text-xl font-bold text-blue-600 mb-4">
            Talk to me about...
          </h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Extended Reality</li>
            <li>Computer Graphics</li>
            <li>Human Computer Interaction</li>
            <li>Artificial Intelligence</li>
          </ul>
        </div>

        {/* Bottom Left: I like to... */}
        <div className="bg-white shadow-md p-6 rounded-lg border border-gray-200">
          <h3 className="text-xl font-bold text-blue-600 mb-4">I also like...</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li> read </li>
            <li> binge watch series </li>
            <li> draw </li>
          </ul>
        </div>

        {/* Bottom Right: Another Type Animation */}
        <div className="bg-gradient-to-r from-blue-950 via-blue-900 to-blue-600 text-white font-light p-6 rounded-lg shadow-md flex items-center justify-center">
          <TypeAnimation
            sequence={[
                "I create stuff... ", 2000,
                "and pretend it's on purpose.",2000
            ]}
            speed={50}
            className="text-2xl font-bold text-center"
            repeat={Infinity}
          />
        </div>
      </div>
    </section>
  );
}

