const AboutMe = () => {
  return (
    <div id="aboutme" className="container mx-auto pt-24">
      <div className="max-w-4xl">
        {/* title */}
        <h2 className="text-4xl font-semibold">
          About Me<span className="text-lime-500">.</span>
        </h2>

        {/* bio */}
        <p className="text-lg mt-4">
          Hi! I&apos;m{" "}
          <span className="font-semibold text-lime-500">Rangga Julio</span> a
          passionate{" "}
          <span className="font-semibold text-lime-500">
            Front-End Developer
          </span>{" "}
          with a knack for creating engaging and user-friendly web applications.
          With a strong foundation in HTML, CSS, and JavaScript, I specialize in
          building responsive and dynamic interfaces that enhance user
          experience. I&apos;m always eager to learn new technologies and stay
          updated with the latest trends in web development. When I&apos;m not
          coding, you can find me exploring new places, reading tech blogs, or
          experimenting with new recipes in the kitchen.
        </p>

        {/* core skills */}
        <div className="mt-8">
          <h3 className="text-2xl font-semibold mb-4">
            Core Skills<span className="text-lime-500">.</span>
          </h3>
          <ul className="flex flex-wrap gap-3">
            {[
              "JavaScript",
              "TypeScript",
              "React",
              "Next.js",
              "Node.js",
              "Tailwind CSS",
              "Git/GitHub",
            ].map((skill) => (
              <li
                key={skill}
                className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-mono font-medium hover:bg-gray-200 transition"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* key values */}
        <div className="mt-8">
          <h3 className="text-2xl font-semibold mb-4">
            Key Values<span className="text-lime-500">.</span>
          </h3>
          <p className="text-lg">
            I believe in{" "}
            <span className="text-lime-500 font-semibold">
              continuous learning, collaboration, and delivering high-quality
              work
            </span>
            . I&apos;m committed to writing clean, maintainable code and always
            strive to improve my skills and contribute positively to any team
            I&apos;m part of.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
