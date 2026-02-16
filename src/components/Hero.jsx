import { Link } from "react-router-dom";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero__inner">

        <div className="hero__layout">

          {/* TEXT */}
          <div className="hero__content">
            <div className="hero__signature">
              <span className="name-signature">Emily Unsworth</span>
            </div>
            
            <p className="kicker">
              React • JavaScript • Frontend • Learning by building
            </p>

            <h1 className="hero__title">
              My Frontend Developer Portfolio
            </h1>

            <p className="hero__lead">
              A collection of projects built during my frontend development studies.
              Each project focuses on components, state, and user interaction.
            </p>

            <div className="hero__actions">
              <Link className="btn" to="/portfolio">
                View projects
              </Link>
              <Link className="btn btn--ghost" to="/contact">
              Contact
              </Link>
            </div>
            
          </div>

          {/* IMAGE */}
          <img
            src="/profile.png"
            alt="Emily"
            className="hero__profile"
          />

        </div>

      </div>
    </section>
  );
}
