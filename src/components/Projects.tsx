/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";

const projectData = [
  {
    title: "Nurse Practioner VR Tool",
    category: "EML",
    description:
      "A VR simulation tool to evaluate nurse practitioner performance, providing real-time feedback and performance metrics.",
    tags: ["UNREAL ENGINE", "FIGMA", "PERFORCE"],
    image: "/projects/nptool.png",
    external: "https://eml.ubc.ca/projects/nurse-practitioner-vr-tool/",
  },
  {
    title: "Procedural Poetry Funhouse",
    category: "EML",
    description:  "An immersive 3D environment showcasing procedurally generated poetry integrated with interactive elements and animations.",
    tags: ["UNREAL ENGINE","BLENDER", "FIGMA", "PERFORCE"],
    image: "/projects/poetry.png",
    external: "https://eml.ubc.ca/projects/procedural-poetry-playhouse/",
  },
  {
    title: "Design Portfolio",
    category: "Design",
    description: "A curated showcase of my design projects, featuring UI/UX designs, and interactive web elements.",
    tags: ["FIGMA", "PROCREATE"],
    image: "/projects/designportfolio.png",
    external: "https://samiadesigns.carrd.co",
  },
  {
    title: "Coeats",
    category: "Design",
    description: "A mobile app concept designed to help students collaboratively organize and track their meal plans for better nutrition and budgeting.",
    tags: ["FIGMA"],
    image: "/projects/coeats.png",
    external: "https://drive.google.com/file/d/1dbxd4pIW-z_fKg7gwn_4PeE3sYsTCG29/view?usp=sharing",
  },
  {
    title: "Predicting Heart Disease",
    category: "Data Analysis",
    description: "A data Science project leveraging predictive models to assess heart disease risk using health data.",
    tags: ["R", "JUPYTER NOTEBOOK"],
    image: "/projects/heartdisease.png",
    external: "https://github.com/ssamiaa/Predicting-HeartDisease-Grp10",
  },
  {
    title: "Study Track",
    category: "Personal Projects",
    description: "A course management application that tracks learning progress and confidence levels using a visual dashboard.",
    tags: ["JAVA"],
    image: "/projects/studytrack.png",
    external: "https://github.com/ssamiaa/StudyTrack",
  }
];

const categories = ["All", "Design", "EML", "Data Analysis", "Personal Projects"];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = projectData.filter((project) =>
    selectedCategory === "All"
      ? true
      : project.category === selectedCategory
  );

  return (
    <section id="projects" className="py-16 bg-gray-50 text-gray-900 bg-clip-padding">
      <div className="max-w-7xl mx-auto px-8">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">
          My Builds 
        </h2>

        {/* Categories */}
        <div className="flex justify-center gap-8 mb-8">
        {categories.map((category) => (
            <button
            key={category}
            className={`px-4 py-2 rounded-full font-medium transition-colors ${
                selectedCategory === category
                ? "bg-blue-500 text-white"
                : "text-gray-800 hover:bg-gray-100 hover:text-blue-500"
            }`}
            onClick={() => setSelectedCategory(category)}
            >
            {category}
            </button>
        ))}
        </div>

        {/* Project Cards */}
        <div
        className={`flex space-x-4 py-4 overflow-y-auto ${
            filteredProjects.length > 3 ? "justify-between" : "justify-center"
        }`}
        >
        {filteredProjects.map((project, index) => (
            <a
            key={index}
            href={project.external} // Link to navigate to
            target="_blank"
            rel="noopener noreferrer"
            className="min-w-[250px] max-w-[250px] bg-white shadow-md p-4 rounded-lg border border-gray-200 flex-shrink-0 hover:scale-105 transition-transform no-underline"
            >
            <img
                src={project.image}
                alt={project.title}
                className="rounded-md mb-2 w-full h-[120px] object-cover"
            />
            <h3 className="text-md font-semibold mb-1">{project.title}</h3>
            <p className="text-xs text-gray-600 mb-2 line-clamp-2">
                {project.description}
            </p>
            <div className="flex flex-wrap gap-1 mb-2">
                {project.tags.map((tag, idx) => (
                <span
                    key={idx}
                    className="text-[10px] bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full"
                >
                    {tag}
                </span>
                ))}
            </div>
            </a>
        ))}
        </div>

      </div>
    </section>
  );
}
