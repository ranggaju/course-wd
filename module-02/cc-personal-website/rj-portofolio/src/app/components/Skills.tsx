import { FaHtml5, FaCss3, FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiBackendless,
} from "react-icons/si";

const skills = [
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3 /> },
  { name: "React", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Backendless", icon: <SiBackendless /> },
];

const Skills = () => {
  return (
    <div id="skills" className="container mx-auto pt-24">
      <h2 className="text-4xl font-semibold">
        Skills<span className="text-lime-500">.</span>
      </h2>
      <ul className="grid grid-cols-3 gap-12 text-6xl mt-4">
        {skills.map((skill) => (
          <li
            key={skill.name}
            className="flex flex-col items-center hover:text-lime-500 transition"
          >
            {skill.icon}
            <span className="mt-2 text-lg font-mono font-medium">
              {skill.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
