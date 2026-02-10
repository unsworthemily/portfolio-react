import "./ProjectPopup.css";

export default function ProjectPopup({ project, onClose }) {
  if (!project) return null;

  const {
    name,
    screenshot,
    githubRepo,
    techUsed,
    shortWriteUp,
    whatItDoes,
    whatILearned,
    role,
    challengesSolved,
  } = project;

  return (
    <div className="popup__overlay" onClick={onClose} role="presentation">
      <div
        className="popup"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <div className="popup__header">
          <h2 className="popup__title">{name}</h2>
          <button className="btn btn--ghost" onClick={onClose}>
            Close
          </button>
        </div>

        <div className="popup__media">
          <img src={screenshot} alt={`Screenshot of ${name}`} />
        </div>

        <p className="popup__lead">{shortWriteUp}</p>

        <div className="chips">
          {techUsed.map((t) => (
            <span className="chip" key={t}>
              {t}
            </span>
          ))}
        </div>

        <div className="popup__grid">
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

        <div className="popup__actions">
          <a className="btn" href={githubRepo} target="_blank" rel="noreferrer">
            GitHub Repo →
          </a>
        </div>
      </div>
    </div>
  );
}
