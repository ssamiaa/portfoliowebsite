"use client";

import { TypeAnimation } from "react-type-animation";
import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";



export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen py-16 bg-gray-50 text-gray-900 flex flex-col items-center"
    >

       {/* Typing Animation */}
      <div className="mb-8">
        <TypeAnimation
          sequence={[
            "Welcome to My Digital Playground!",  
            2000,                                
            "",                                  
            1000,                                
          ]}
          speed={50}                             
          className="text-4xl font-bold text-center text-blue-900"
          cursor={true}                          
          repeat={Infinity}                      
        />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-2 grid-rows-3 gap-8">
        {/* Top Left: Current Positions */}
        <div className="bg-white shadow-md p-6 rounded-lg border border-gray-200">
          <h3 className="text-xl font-bold text-blue-600 mb-4">Currently a...</h3>
          <ul className="list-disc pl-5 space-y-2">
                <li>Computer Science Student @ UBC</li>
                <li>UX/UI Designer @ Emerging Media Lab</li>
                <li>Web Developer @ UBC Orbit</li>
                <li>Partnerships Director @ UBC UXHub</li>
                <li>VP @ UBC Society for AI Literacy</li>
                <li>Core Volunteer @ IRC UBC</li>
          </ul>
        </div>

        {/* Top Right: Type Animation
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
        </div> */}

        {/* Top Right: Walking Animation */}
        <div className="flex items-center justify-center">
          <DotLottieReact
            src="https://lottie.host/094732f4-cef9-4adf-ad71-9b3990eca8dd/mXtEiZL9Jx.lottie"
            loop
            autoplay
            style={{ width: 200, height: 200 }}
          />
        </div>

        {/* Middle Left: Type Animation */}
        {/* <div className="bg-gradient-to-r from-blue-950 via-blue-900 to-blue-600 text-white font-light p-6 rounded-lg shadow-md flex items-center justify-center">
          <TypeAnimation
            sequence={[
                "I create things...", 2000,
                "and break them sometimes.", 2000
            ]}
            speed={50}
            className="text-2xl font-extrabold text-center"
            cursor={true}
            repeat={Infinity}
          />
        </div> */}

        <div className="flex items-center justify-center">
          <DotLottieReact
            src="https://lottie.host/13e6223e-7dbf-439b-a5aa-43d4a0438f42/M3dUHnAW7z.lottie"
            loop
            autoplay
            style={{ width: 200, height: 200 }}
          />
        </div>

        {/* Middle Right: Interests */}
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

        {/* Bottom Left: Hobbies */}
        <div className="bg-white shadow-md p-6 rounded-lg border border-gray-200">
          <h3 className="text-xl font-bold text-blue-600 mb-4">I enjoy...</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Reading</li>
            <li>Art & Design </li>
            <li>Nature Walking</li>
          </ul>
        </div>

        {/* Bottom Right: Another Type Animation
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
        </div> */}

        {/* Middle Left: Drawing Animation */}
        <div className="flex items-center justify-center">
          <DotLottieReact
            src="https://lottie.host/1fd191df-ab50-4ca3-b8de-500d08c562b4/G4i2IUTit3.lottie"
            loop
            autoplay
            style={{ width: 200, height: 200 }}
          />
        </div>
      </div>
    </section>
  );
}
// import React from 'react';
// import { DotLottieReact } from '@lottiefiles/dotlottie-react';

// const App = () => {
//   return (
//     <DotLottieReact
//       src="https://lottie.host/1fd191df-ab50-4ca3-b8de-500d08c562b4/G4i2IUTit3.lottie"
//       loop
//       autoplay
//     />
//   );
// };

