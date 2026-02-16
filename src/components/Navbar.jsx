import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar({ query, setQuery }) {
  const location = useLocation();
  const isPortfolioPage = location.pathname === "/portfolio";

  return (
    <header className="nav">
      <div className="container nav__inner">
        <NavLink className="nav__brand" to="/">
          Portfolio
        </NavLink>

        <nav className="nav__links">

          <NavLink to="/about" className={({isActive}) => isActive ? "active" : ""}>
            About
          </NavLink>

          <NavLink to="/portfolio" className={({isActive}) => isActive ? "active" : ""}>
            Projects
          </NavLink>

          {/* 🔎 SEARCH RIGHT AFTER PROJECTS */}
          {isPortfolioPage && (
            <input
              className="nav__search"
              type="text"
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          )}

          <NavLink to="/game" className={({isActive}) => isActive ? "active" : ""}>
            Game
          </NavLink>

          <NavLink to="/contact" className={({isActive}) => isActive ? "active" : ""}>
            Contact
          </NavLink>

        </nav>
      </div>
    </header>
  );
}
