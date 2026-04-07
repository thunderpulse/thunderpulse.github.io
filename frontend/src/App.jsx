import AnimatedBackground from "./components/AnimatedBackground";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function App() {
  return (
    <>
      <AnimatedBackground />

      <div className="relative">
        <Navbar />
        <main>
          <Hero />
          <Experience />
          <Education />
          <Skills />
          <Projects />
          <Certificates />
          <Contact />
        </main>
      </div>
    </>
  );
}
