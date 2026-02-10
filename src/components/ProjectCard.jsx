import "./ProjectCard.css";

export default function ProjectCard({
  name,
  screenshot,
  githubRepo,
  techUsed,
  shortWriteUp,
  whatItDoes,
  whatILearned,
  role,
  challengesSolved,
  onSelect,
}) {
  return (
    <article
      className="card project"
      onClick={() => onSelect?.()}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onSelect?.()}
    >
      <div className="project__media">
        <img src={screenshot} alt={`Screenshot of ${name}`} />
      </div>

      <div className="project__body">
        <div className="project__top">
          <h3 className="project__title">{name}</h3>
          <a
            className="btn btn--ghost"
            href={githubRepo}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()} // så klick på länken inte öppnar popup igen
          >
            GitHub Repo →
          </a>
        </div>

        <p className="muted">{shortWriteUp}</p>

        <div className="chips">
          {techUsed.map((t) => (
            <span className="chip" key={t}>{t}</span>
          ))}
        </div>

        <div className="project__grid">
          <div>
            <h4>What the project does</h4>
            <p>{whatItDoes}</p>
          </div>
          <div>
            <h4>What you learned</h4>
            <p>{whatILearned}</p>
          </div>
          <div>
            <h4>Your role</h4>
            <p>{role}</p>
          </div>
          <div>
            <h4>Challenges you solved</h4>
            <p>{challengesSolved}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
