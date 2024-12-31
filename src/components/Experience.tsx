"use client";

const experiences = [
  {
    role: "UI/UX Designer",
    organization: "Emerging Media Lab (EML), UBC",
    duration: "May 2024 - Present",
    description:
      "Designing and refining VR simulation interfaces, integrating user-centric designs into Unreal Engine for clinical training and immersive storytelling projects.",
  },
  {
    role: "Web Developer",
    organization: "UBC Orbit Satellite Design Team",
    duration: "September 2024 - Present",
    description:
      "Maintaining the team’s website for 100+ members and leading the development of a custom-coded platform to enhance team navigation and collaboration.",
  },
  {
    role: "Vice President",
    organization: "UBC Students for AI Literacy (SAIL)",
    duration: "September 2024 - Present",
    description:
      "Leading AI literacy initiatives by organizing events and educational programs, fostering student engagement with emerging AI technologies.",
  },
  {
    role: "Partnerships Director",
    organization: "UBC UXHUB",
    duration: "October 2024 - Present",
    description:
      "Securing sponsorships to support hackathons and build industry connections, strengthening UXHUB’s resources for design-focused events and projects.",
  },
  {
    role: "Core Volunteer",
    organization: "UBC Islamic Relief Canada (IRC)",
    duration: "September 2024 - Present",
    description:
      "Supporting event organization and fundraising efforts for humanitarian causes, contributing to campus community impact initiatives.",
  },
  {
    role: "Freelance Designer",
    organization: "",
    duration: "January 2021 - August 2022",
    description:
      "Collaborated with clients to create custom designs, including branding, websites, and digital illustrations, delivering tailored solutions to meet unique project goals.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-16 text-purple-950 bg-origin-padding">
      <div className="max-w-5xl mx-auto px-8">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-purple-950 text-center mb-8">
          What I’ve been up to
        </h2>

        {/* Timeline */}
        <div className="relative flex flex-col space-y-12">
          {/* Timeline Line */}
          <div className="absolute left-6 top-0 h-full w-[2px] bg-gray-300"></div>

          {/* Timeline Nodes */}
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative flex items-start group"
            >
              {/* Node Dot */}
              <div className="absolute left-3 top-0 bg-purple-950 w-6 h-6 rounded-full border-4 border-white"></div>

              {/* Node Card */}
              <div className="ml-12 bg-white shadow-md p-6 rounded-lg border border-gray-200 transition-all duration-300 w-full group-hover:scale-105 group-hover:min-h-[100px]">
                <h3 className="text-lg font-semibold">{exp.role}</h3>
                <p className="text-sm text-gray-600">{exp.organization}</p>
                <p className="text-sm text-gray-500 italic">{exp.duration}</p>

                {/* Description */}
                <p className="text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
