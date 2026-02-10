import { Link } from "react-router-dom";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero__inner">

        <div style={{ display: "flex", alignItems: "center", gap: "40px", flexWrap: "wrap" }}>

          {/* TEXT */}
          <div style={{ flex: 1 }}>
            <p className="kicker">
              React • JavaScript • Frontend • Learning by building
            </p>

            <h1 className="hero__title">My Frontend Developer Portfolio</h1>

            <p className="hero__lead">
              A collection of projects built during my frontend development studies.
              Each project focuses on components, state, and user interaction.
            </p>

            <div className="hero__actions">
              <Link className="btn" to="/portfolio">View projects</Link>
              <a className="btn btn--ghost" href="#contact">Contact</a>
            </div>
          </div>

          {/* IMAGE */}
          <img
            src="/profile.png"
            alt="Emily"
            style={{
              width: "220px",
              height: "220px",
              objectFit: "cover",
              borderRadius: "50%",
              boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
            }}
          />

        </div>

      </div>
    </section>
  );
}
