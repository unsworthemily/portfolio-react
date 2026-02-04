import "./Hero.css";
export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero__inner">
        <p className="kicker">React • Components • Props</p>
        <h1 className="hero__title">My Portfolio</h1>
        <p className="hero__lead">
          A small portfolio built with reusable components. Each project card is driven by props.
        </p>

        <div className="hero__actions">
          <a className="btn" href="#projects">View projects</a>
          <a className="btn btn--ghost" href="#contact">Contact</a>
        </div>
      </div>
    </section>
  );
}
