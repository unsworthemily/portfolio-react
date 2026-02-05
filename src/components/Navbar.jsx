import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="nav">
      <div className="container nav__inner">
        <Link className="nav__brand" to="/">Portfolio</Link>

        <nav className="nav__links">
          <Link to="/portfolio">Projects</Link>
          <Link to="/about">About</Link>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
