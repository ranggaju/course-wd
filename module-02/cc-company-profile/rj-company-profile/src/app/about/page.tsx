import Image from "next/image";

const rjValues = [
  {
    title: "Innovation",
    desc: "We believe in pushing boundaries and creating solutions that make a difference.",
    icon: "💡",
  },
  {
    title: "Integrity",
    desc: "Transparency, honesty, and respect form the foundation of all our relationships.",
    icon: "🤝",
  },
  {
    title: "Teamwork",
    desc: "Together, we achieve greatness by supporting and learning from each other.",
    icon: "👥",
  },
];

const people = [
  { name: "John Carter", role: "CEO", img: "/person1.webp" },
  { name: "Emily Davis", role: "CTO", img: "/person2.webp" },
  {
    name: "Michael Lee",
    role: "Lead Designer",
    img: "/person3.webp",
  },
];

const About = () => {
  return (
    <main className="flex flex-col items-center mt-4 px-6 py-20 text-center">
      {/* header */}
      <section className="max-w-3xl mb-16">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-gray-200 leading-relaxed">
          Get to know who we are, our story, and what drives us to keep
          innovating every day.
        </p>
      </section>

      {/* company history */}
      <section className="max-w-5xl mb-24">
        <div
          className="
            bg-white/10 
            backdrop-blur-md 
            border border-white/20 
            rounded-2xl 
            p-10 
            shadow-lg
          "
        >
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-200 leading-relaxed">
            Founded in 2015,{" "}
            <span className="font-semibold">
              <span className="text-lime-500">[</span>rj
              <span className="text-lime-500">]</span>
              <span className="text-lime-500">corp.</span>
            </span>{" "}
            started with a simple mission — to help businesses harness the power
            of technology. What began as a small team of developers has now
            grown into a full-scale digital agency serving clients across the
            globe.
          </p>
          <p className="text-gray-200 leading-relaxed mt-4">
            Over the years, we’ve achieved multiple milestones, from launching
            enterprise-level software to building world-class web experiences.
            Our passion for innovation continues to drive everything we do.
          </p>
        </div>
      </section>

      {/* culture & values */}
      <section className="max-w-6xl mb-24">
        <h2 className="text-2xl font-semibold mb-10">Our Culture & Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {rjValues.map((value, i) => (
            <div
              key={i}
              className="
                p-8 
                rounded-2xl 
                bg-white/10 
                backdrop-blur-md 
                border border-white/20 
                shadow-md 
                hover:scale-[1.02] 
                transition
              "
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-200 text-sm">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* team introduction */}
      <section className="max-w-6xl">
        <h2 className="text-2xl font-semibold mb-10">Meet Our Core Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {people.map((person, i) => (
            <div
              key={i}
              className="
                flex flex-col items-center 
                bg-white/10 
                backdrop-blur-md 
                border border-white/20 
                rounded-2xl 
                p-6 
                shadow-md
                hover:scale-[1.03]
                transition
              "
            >
              <div className="relative w-32 h-32 mb-4">
                <Image
                  src={person.img}
                  alt={person.name}
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="text-lg font-semibold">{person.name}</h3>
              <p className="text-gray-300 text-sm">{person.role}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default About;
