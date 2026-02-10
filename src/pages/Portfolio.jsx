import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectPopup from "../components/ProjectPopup";
import { projects } from "../data/projects";

export default function Portfolio({ searchQuery, setSearchQuery }) {
  const [showProjects, setShowProjects] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = projects.filter((project) => {
    const query = (searchQuery || "").toLowerCase().trim();
    if (!query) return true;

    const matchesName = project.name.toLowerCase().includes(query);
    const matchesTech = project.techUsed.some((tech) =>
      tech.toLowerCase().includes(query)
    );

    return matchesName || matchesTech;
  });

  return (
    <section className="container" id="projects">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 12,
        }}
      >
        <h1 style={{ margin: 0 }}>Projects</h1>

        <button
          className="btn btn--ghost"
          onClick={() => setShowProjects((prev) => !prev)}
        >
          {showProjects ? "Hide projects" : "Preview projects"}
        </button>
      </div>

      {showProjects && (
        <div style={{ marginTop: 22, display: "grid", gap: 28 }}>
          {filteredProjects.length === 0 && (
            <p className="muted">No projects match your search.</p>
          )}

          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.name}
              {...project}
              onSelect={() => setSelectedProject(project)}
            />
          ))}
        </div>
      )}

      <ProjectPopup
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
