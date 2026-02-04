import "./ProjectCard.css";

function ProjectCard({ name, screenshot, githubRepo, techUsed, shortWriteUp, whatItDoes, whatILearned, role, challengesSolved }) {
  return (
    <article className="card">
      <img src={screenshot} alt={name} />

      <div className="cardBody">
        <h2 className="cardTitle">{name}</h2>
        <p className="short">{shortWriteUp}</p>

        <div className="tags">
          {techUsed.map((t) => (
            <span className="tag" key={t}>{t}</span>
          ))}
        </div>

        <div className="section">
          <h4>What it does</h4>
          <p>{whatItDoes}</p>
        </div>

        <div className="section">
          <h4>What I learned</h4>
          <p>{whatILearned}</p>
        </div>

        <div className="section">
          <h4>Role</h4>
          <p>{role}</p>
        </div>

        <div className="section">
          <h4>Challenges</h4>
          <p>{challengesSolved}</p>
        </div>

        <div className="actions">
          <a className="btn" href={githubRepo} target="_blank" rel="noreferrer">
            GitHub Repo
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
