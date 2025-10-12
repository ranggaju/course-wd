import {
  Sparkles,
  Code2,
  ShoppingCart,
  Smartphone,
  Globe,
  ShieldCheck,
} from "lucide-react";

export default function Products() {
  const services = [
    {
      icon: <Code2 className="w-10 h-10 text-cyan-400" />,
      title: "Web Development",
      desc: "Build fast, modern, and responsive websites tailored to your business needs.",
    },
    {
      icon: <Smartphone className="w-10 h-10 text-green-400" />,
      title: "Mobile App Development",
      desc: "Native and cross-platform mobile applications that engage your users anywhere.",
    },
    {
      icon: <ShoppingCart className="w-10 h-10 text-pink-400" />,
      title: "E-Commerce Solutions",
      desc: "Robust online stores designed for seamless shopping experiences and growth.",
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-yellow-400" />,
      title: "Cybersecurity",
      desc: "Protect your business with our security-first approach and expert audits.",
    },
    {
      icon: <Globe className="w-10 h-10 text-blue-400" />,
      title: "SEO & Digital Marketing",
      desc: "Boost your online visibility and reach your audience with effective SEO strategies.",
    },
    {
      icon: <Sparkles className="w-10 h-10 text-purple-400" />,
      title: "UI/UX Design",
      desc: "Intuitive, user-centered designs that make your digital presence shine.",
    },
  ];

  return (
    <main className="flex flex-col items-center mt-4 px-6 py-20 text-center">
      {/* SECTION: Header */}
      <section className="max-w-3xl mb-16">
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-gray-200 leading-relaxed">
          We provide a wide range of digital solutions to help your business
          grow and stay ahead in the digital era.
        </p>
      </section>

      {/* SECTION: Services Grid */}
      <section className="max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, i) => (
          <div
            key={i}
            className="
              flex flex-col items-center 
              bg-white/10 
              backdrop-blur-md 
              border border-white/20 
              rounded-2xl 
              p-8 
              shadow-lg
              hover:scale-[1.03]
              transition
            "
          >
            <div className="mb-6">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-200 text-sm">{service.desc}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
