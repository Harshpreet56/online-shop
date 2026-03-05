import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiTailwindcss } from "react-icons/si";

function Skills() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-4xl" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-4xl" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-4xl" /> },
    { name: "React", icon: <FaReact className="text-cyan-500 text-4xl" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-4xl" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-4xl" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400 text-4xl" /> },
  ];

  return (
    <section id="skills" className="py-16 md:py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          My Skills
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center gap-3
                         hover:-translate-y-2 hover:shadow-xl transition duration-300"
            >
              {skill.icon}

              <h3 className="font-semibold text-gray-700">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;