import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar({ query, setQuery }) {
  const location = useLocation();
  const isPortfolioPage = location.pathname === "/portfolio";

  return (
    <header className="nav">
      <div className="container nav__inner">
        <Link className="nav__brand" to="/">
          Portfolio
        </Link>

        <nav className="nav__links">
          <Link to="/portfolio">Projects</Link>
          <Link to="/about">About</Link>
          <Link to="/game">Game</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        {isPortfolioPage && (
          <input
            className="nav__search"
            type="text"
            placeholder="Search projects..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        )}
      </div>
    </header>
  );
}
