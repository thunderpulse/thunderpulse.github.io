import AnimatedBackground from "./components/AnimatedBackground";
import Certificates from "./components/Certificates";
import CodingProfiles from "./components/CodingProfiles";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function App() {
  return (
    <>
      {/* Single global animated background — fixed behind everything */}
      <AnimatedBackground />

      <div className="relative">
        <Navbar />
        <main>
          <Hero />
          <Education />
          <Skills />
          <Projects />
          <Certificates />
          <CodingProfiles />
          <Contact />
        </main>
      </div>
    </>
  );
}
