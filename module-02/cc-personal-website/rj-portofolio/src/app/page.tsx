import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Portofolio from "./components/Portofolio";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <main className="container mx-auto">
      <Hero />
      <AboutMe />
      <Skills />
      <Portofolio />
      <Experience />
      <Testimonials />
      <Contact />
    </main>
  );
}
