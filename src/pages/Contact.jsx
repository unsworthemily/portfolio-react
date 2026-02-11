import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact">
      <div className="container contact__inner">

        <div>
          <h2 className="contact__title">Let’s Connect</h2>
          <p className="contact__text">
            I value connecting with people from diverse backgrounds. 
            Whether you have an idea, want to collaborate, or simply want to say hello — feel free to reach out.
          </p>

          <div className="contact__socials">
            <a
              href="https://linkedin.com/in/DINPROFIL"
              target="_blank"
              rel="noreferrer"
              className="contact__icon"
            >
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>

            <a
              href="https://github.com/DINPROFIL"
              target="_blank"
              rel="noreferrer"
              className="contact__icon"
            >
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
