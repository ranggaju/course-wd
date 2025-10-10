import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Skills from "@/app/components/Skills";
import Portofolio from "@/app/components/Portofolio";
import Experience from "@/app/components/Experience";
import Testimonials from "@/app/components/Testimonials";
import Contact from "@/app/components/Contact";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Portofolio />
      <Experience />
      <Testimonials />
      <Contact />
    </div>
  );
}
