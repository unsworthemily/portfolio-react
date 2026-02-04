
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectCard from "./components/ProjectCard";
import Footer from "./components/Footer";
import { projects } from "./data/projects";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />

      <main className="container" id="projects">
        {projects.map((p) => (
          <ProjectCard
            key={p.name}
            name={p.name}
            screenshot={p.screenshot}
            githubRepo={p.githubRepo}
            techUsed={p.techUsed}
            shortWriteUp={p.shortWriteUp}
            whatItDoes={p.whatItDoes}
            whatILearned={p.whatILearned}
            role={p.role}
            challengesSolved={p.challengesSolved}
          />
        ))}
      </main>

      <Footer />
    </>
  );
}
