import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Web Development",
    desc: "Custom websites and applications built with modern frameworks.",
    icon: "💻",
  },
  {
    title: "UI/UX Design",
    desc: "Creating user-centered designs that look and feel amazing.",
    icon: "🎨",
  },
  {
    title: "Digital Marketing",
    desc: "Helping your business reach more people through strategic marketing.",
    icon: "🚀",
  },
];

const testimonials = [
  {
    name: "John Doe",
    text: "Working with RJCorp. was a game changer! Our website looks amazing.",
  },
  {
    name: "Sarah Lee",
    text: "They delivered exactly what we needed — professional and fast!",
  },
  {
    name: "David Chen",
    text: "The team is incredibly talented. Highly recommended for any business.",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col items-center text-center">
      {/* hero */}
      <section className="relative w-full h-[100vh] flex items-center justify-center overflow-hidden">
        <Image
          src="hero-bg.svg"
          alt="hero background"
          fill
          className="object-cover object-center brightness-50"
          priority
        />
        <div className="relative z-10 px-6 max-w-3xl">
          <h1 className="text-5xl font-bold drop-shadow-md mb-4">
            Building the Future with Innovation
          </h1>
          <p className="text-lg text-gray-200 mb-8">
            We deliver high-quality solutions that help your business grow.
          </p>
          <Link
            href="/about"
            className="bg-white/20 backdrop-blur-md text-white font-medium px-6 py-3 rounded-full hover:bg-white/30 transition"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* company overview */}
      <section className="py-20 px-6 max-w-5xl text-center">
        <h2 className="text-3xl font-bold mb-6">About Our Company</h2>
        <p className="text-gray-200 leading-relaxed">
          <span className="font-semibold">
            <span className="text-lime-500">[</span>rj
            <span className="text-lime-500">]</span>
            <span className="text-lime-500">corp.</span>
          </span>{" "}
          has been delivering innovative digital solutions for over a decade.
          Our mission is to empower businesses with cutting-edge technology and
          exceptional service quality. From web design to software development,
          we help brands stand out in the digital world.
        </p>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-20 px-6 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-md hover:scale-[1.02] transition"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-200 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 px-6 backdrop-blur-md w-full">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Clients Say
        </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimony, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white/10 border border-white/20 text-gray-100"
            >
              <p className="italic mb-4">“{testimony.text}”</p>
              <p className="font-semibold">— {testimony.name}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
