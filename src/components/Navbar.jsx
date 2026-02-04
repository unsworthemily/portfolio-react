import "./Navbar.css";
export default function Navbar() {
  return (
    <header className="nav">
      <div className="container nav__inner">
        <a className="nav__brand" href="#top">Portfolio</a>
        <nav className="nav__links">
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
