import "./Contact.css";

export default function Contact() {
  function handleSubmit(e) {
    e.preventDefault();
    // Mini-funktion: bara en alert. (Du kan koppla till EmailJS senare)
    alert("Thanks! Your message was sent (demo).");
    e.target.reset();
  }

  return (
    <section className="contact">
      <div className="container contact__inner">
        {/* Left */}
        <div className="contact__left">
          <h1 className="contact__title">Let’s Connect</h1>
          <p className="contact__text">
            I value connecting with people from diverse backgrounds. <br />
            Whether you have an idea to share, a collaboration in mind,<br /> or simply want to start a conversation,<br /> I’d love to hear from you.
          </p>

          <div className="contact__socials">
            <a
              className="contact__icon"
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              in
            </a>
            <a
              className="contact__icon"
              href="https://github.com/unsworthemily"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              ⌂
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="contact__right">
          <form className="contact__form" onSubmit={handleSubmit}>
            <label className="sr-only" htmlFor="name">Name</label>
            <input id="name" name="name" placeholder="Name" required />

            <label className="sr-only" htmlFor="email">Email</label>
            <input id="email" name="email" type="email" placeholder="Email" required />

            <label className="sr-only" htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Message" rows="7" required />

            <button className="btn" type="submit">Send message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
