import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Portfolio() {
  const [showProjects, setShowProjects] = useState(false);

  return (
    <section className="container" id="projects">
      <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "center" }}>
        <h1 style={{ margin: 0 }}>Projects</h1>

        <button className="btn btn--ghost" onClick={() => setShowProjects((prev) => !prev)}>
          {showProjects ? "Hide projects" : "Preview projects"}
        </button>
      </div>

      {/* Som default: tomt */}
      {showProjects && (
        <div style={{ marginTop: 22, display: "grid", gap: 28 }}>
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
        </div>
      )}
    </section>
  );
}
