import "./About.css";

export default function About() {
  return (
    <section className="about">
      <div className="container about__inner">

        {/* LEFT: IMAGE */}
        <div className="about__image-wrapper">
          <img src="/profile.png" alt="Emily" className="about__image" />
        </div>

        {/* RIGHT: TEXT */}
        <div className="about__content">

          <h1 className="about__title">About me</h1>

          <p className="about__text">
            I am a 43-year-old professional with a strong sense of balance between career, family life, and personal development.
            Managing these areas has strengthened my ability to prioritize, stay focused, and think long-term.
          </p>

          <p className="about__text">
            Health and training are important parts of my life, not only as personal interests but as reflections of discipline,
            structure, and continuous improvement. I value consistency and growth — both physically and professionally.
          </p>

          <p className="about__text">
            I am deeply curious about technology and how it can simplify processes, create smarter solutions, and improve everyday
            life as well as professional environments. I am motivated by learning, problem-solving, and combining practical
            thinking with strategic vision.
          </p>

          {/* FACT BOX */}
          <div className="about__facts">

            <div>
              <span>What drives me</span>
              <p>Learning new things and turning ideas into practical solutions</p>
            </div>

            <div>
              <span>How I work</span>
              <p>Structured, calm and consistent — step by step</p>
            </div>

            <div>
              <span>What I enjoy</span>
              <p>Building clear interfaces and improving usability</p>
            </div>

            <div>
              <span>Outside coding</span>
              <p>Training, family life and continuous personal development</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}