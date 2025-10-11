import { IProject } from "@/lib/interface";
import Image from "next/image";

const projects: IProject[] = [
  {
    title: "E-Commerce Platform for XYZ Retail",
    technologies: ["React", "Node.js", "MongoDB", "AWS"],
    description:
      "A scalable e-commerce web app built to help a retail company expand its business online with real-time inventory and a seamless checkout system.",
    situation:
      "XYZ Retail wanted to move from offline to online sales to reach a wider audience.",
    task: "I was responsible for building both the front-end and back-end with a focus on performance and scalability.",
    action:
      "Used React for UI, Node.js for APIs, and MongoDB for data. Integrated AWS for hosting and image optimization.",
    result:
      "Boosted online sales by 35% in the first 3 months and improved inventory management efficiency.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Personal Portfolio Website",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    description:
      "A modern personal portfolio website showcasing my work, experience, and contact details.",
    situation:
      "I wanted a single-page portfolio to present my work professionally.",
    task: "Design and code a responsive and clean personal website using modern web tools.",
    action:
      "Built with Next.js and Tailwind CSS. Deployed on Vercel for high performance and easy updates.",
    result: "Achieved 100% Lighthouse score for performance and SEO.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
  },
];

const Portofolio = () => {
  return (
    <div id="portofolio" className="container mx-auto pt-24">
      <h2 className="text-4xl font-semibold">
        Portofolio<span className="text-lime-500">.</span>
      </h2>

      {/* projects */}
      <div className="grid md:grid-cols-2 gap-10 mt-4">
        {projects.map((project, index) => (
          <div key={index}>
            <div className="relative w-full h-48 mb-6 rounded-xl overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>

            {/* title & technologies */}
            <h3 className="text-2xl font-semibold mb-2 text-lime-500">
              {project.title}
            </h3>
            <p className="mb-3 text-sm">{project.technologies.join(" • ")}</p>

            {/* description */}
            <p className="mb-4">{project.description}</p>

            {/* STAR Method Detail */}
            <div className="rounded-xl text-sm mb-4">
              <p>
                <span className="font-semibold text-lime-500">Situation:</span>{" "}
                {project.situation}
              </p>
              <p>
                <span className="font-semibold text-lime-500">Task:</span>{" "}
                {project.task}
              </p>
              <p>
                <span className="font-semibold text-lime-500">Action:</span>{" "}
                {project.action}
              </p>
              <p>
                <span className="font-semibold text-lime-500">Result:</span>{" "}
                {project.result}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portofolio;
