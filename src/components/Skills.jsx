import "./Skills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faHtml5,
  faCss3Alt,
  faJs,
  faGithub,
  faFigma,
  faSass,
} from "@fortawesome/free-brands-svg-icons";

const skills = [
  { name: "HTML", icon: faHtml5 },
  { name: "CSS", icon: faCss3Alt },
  { name: "JavaScript", icon: faJs },
  { name: "React", icon: faReact },
  { name: "Git & GitHub", icon: faGithub },
  { name: "Figma", icon: faFigma },
  { name: "Sass", icon: faSass },
];

export default function Skills() {
  return (
    <section className="skills">
      <div className="container">
        <h2 className="skills__title">Skills</h2>

        <div className="skills__grid">
          {skills.map((skill) => (
            <div key={skill.name} className="skills__item">
              <FontAwesomeIcon icon={skill.icon} size="3x" />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
