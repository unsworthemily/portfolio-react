import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectPopup from "../components/ProjectPopup";
import { projects } from "../data/projects";

export default function Portfolio({ searchQuery }) {
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
    <section className="container" id="projects" style={{ padding: "28px 0 64px" }}>
      <h1 style={{ margin: 0 }}>Projects</h1>

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

      <ProjectPopup project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
