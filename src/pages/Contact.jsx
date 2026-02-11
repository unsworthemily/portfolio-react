import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  function handleSubmit(e) {
    e.preventDefault();
    alert("Thanks! Your message was sent (demo).");
    e.target.reset();
  }

  return (
    <section className="contact">
      <div className="container contact__inner">
        {/* LEFT */}
        <div className="contact__left">
          <h1 className="contact__title">Let’s Connect</h1>

          <p className="contact__text">
            I value connecting with people from diverse backgrounds. Whether you
            have an idea, want to collaborate, or just want to say hello — feel
            free to reach out.
          </p>

          <div className="contact__socials">
            <a
              href="https://www.linkedin.com/in/emily-unsworth/"
              target="_blank"
              rel="noreferrer"
              className="contact__icon"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>

            <a
              href="https://github.com/unsworthemily"
              target="_blank"
              rel="noreferrer"
              className="contact__icon"
              aria-label="GitHub"
            >
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
          </div>
        </div>

        {/* RIGHT (FORM) */}
        <div className="contact__right">
          <form className="contact__form" onSubmit={handleSubmit}>
            <label className="sr-only" htmlFor="name">
              Name
            </label>
            <input id="name" name="name" placeholder="Name" required />

            <label className="sr-only" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              required
            />

            <label className="sr-only" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              rows="7"
              required
            />

            <button className="btn" type="submit">
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
