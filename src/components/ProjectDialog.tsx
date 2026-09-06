import { useEffect, useRef } from "react";
import type { Project } from "../data/profile";
import { Tags } from "./Tags";
export function ProjectDialog({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!project || !dialog) return;
    dialog.showModal();
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
      dialog.close();
    };
  }, [project]);
  return (
    <dialog
      ref={dialogRef}
      className="project-dialog"
      aria-labelledby="project-detail-title"
      onCancel={() => onClose()}
      onClose={() => onClose()}
    >
      {project && (
        <>
          <div className="dialog-top">
            <p className="eyebrow">{project.category}</p>
            <button
              onClick={() => onClose()}
              aria-label="Fechar detalhes do projeto"
            >
              ✕
            </button>
          </div>
          <h2 id="project-detail-title">{project.title}</h2>
          {project.period && <p className="project-period">{project.period}</p>}
          <p>{project.description}</p>
          <h3>O que o projeto explora</h3>
          <ul>
            {project.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <Tags items={project.tags} />
          {project.note && <p className="project-note">{project.note}</p>}
          <a
            className="button"
            href={project.url}
            target="_blank"
            rel="noreferrer"
          >
            Abrir repositório no GitHub ↗
          </a>
        </>
      )}
    </dialog>
  );
}
