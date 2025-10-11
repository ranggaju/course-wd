import { IExperience } from "@/lib/interface";

const experiences: IExperience[] = [
  {
    role: "Full-Stack Web Developer",
    company: "Freelance",
    period: "2022 - Present",
    description:
      "Developing and deploying scalable web applications using React, Node.js, and MongoDB. Focused on performance, clean code, and responsive design.",
  },
  {
    role: "Front-End Developer",
    company: "Tech Solutions Inc.",
    period: "2021 - 2022",
    description:
      "Built interactive UIs with React and Tailwind CSS, collaborated with backend teams, and improved page performance by 25%.",
  },
  {
    role: "Intern Web Developer",
    company: "Startup Hub",
    period: "2020 - 2021",
    description:
      "Assisted in developing internal tools using Next.js and Firebase. Learned agile workflow and real-world product development.",
  },
];

const Experience = () => {
  return (
    <div id="experience" className="container mx-auto pt-24">
      {/* title */}
      <h2 className="text-4xl font-semibold">
        Experience<span className="text-lime-500">.</span>
      </h2>

      {/* experiences */}
      <div className="mt-4 space-y-4">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="border-l-4 border-lime-500 pl-6 bg-white shadow-sm rounded-lg p-6 hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold text-gray-800">{exp.role}</h3>
            <p className="text-blue-600 font-medium">{exp.company}</p>
            <p className="text-sm text-gray-500 mb-3">{exp.period}</p>
            <p className="text-gray-600 leading-relaxed">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
