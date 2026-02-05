import "./Footer.css";
export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container footer__inner">
        <p className="footermuted">Made for Assignment R1 — React + props + reusable components.</p>
        <div className="footer__links">
          <a href="https://github.com/unsworthemily" target="_blank" rel="noreferrer">GitHub</a>
          <a href="mailto:unsworthemily@example.com">Email</a>
        </div>
      </div>
    </footer>
  );
}
