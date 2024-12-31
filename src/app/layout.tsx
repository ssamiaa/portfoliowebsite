"use client";

import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="flex flex-col min-h-screen ">

        {/* SVG Grain Filter Definition */}
        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
          <filter id="grain-filter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.8"
              numOctaves="4"
              result="noise"
            />
            <feColorMatrix type="saturate" values="0" />
            <feBlend in="SourceGraphic" in2="noise" mode="multiply" />
          </filter>
        </svg>
        
        {/* Main content */}
        <main className="flex-grow relative z-10">{children}</main>
      </body>
    </html>
  );
}
