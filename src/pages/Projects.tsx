import { projects, projectCategories } from "../data/profile";
import { useState } from "react";
import type { Project } from "../data/profile";
import { ProjectDialog } from "../components/ProjectDialog";
import { Tags } from "../components/Tags";

export function Projects() {
  const [filter, setFilter] = useState("Todos");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const filters = ["Todos", ...projectCategories];
  const visibleProjects = projects.filter(
    (project) => filter === "Todos" || project.category === filter,
  );

  return (
    <>
      {projects.length > 0 && (
        <section
          className="section wrapper"
          id="projetos"
          aria-labelledby="projects-title"
        >
          <div className="projects-heading">
            <div>
              <p className="eyebrow">PROJETOS</p>
              <h1 id="projects-title" className="page-title">
                DevOps na prática.
              </h1>
            </div>
            <div className="filters" role="group" aria-label="Filtrar projetos">
              {filters.map((item) => (
                <button
                  key={item}
                  aria-pressed={filter === item}
                  onClick={() => setFilter(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div className="project-grid" aria-live="polite">
            {visibleProjects.length ? (
              visibleProjects.map((project) => (
                <article className="project-card" key={project.title}>
                  <p className="eyebrow">{project.category}</p>
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                  <Tags items={project.tags} />
                  <a
                    className="project-repository"
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Repositório no GitHub ↗
                  </a>
                  <button
                    className="project-open"
                    onClick={() => setSelectedProject(project)}
                    aria-haspopup="dialog"
                    aria-label={`Explorar projeto: ${project.title}`}
                  >
                    Explorar projeto <span aria-hidden="true">↗</span>
                  </button>
                </article>
              ))
            ) : (
              <p className="empty-projects">
                Nenhum projeto nesta categoria por enquanto.
              </p>
            )}
          </div>
        </section>
      )}

      <ProjectDialog
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
