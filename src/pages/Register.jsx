import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Register.css";


export default function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function validate(u, p) {
    if (u.trim().length < 3) return "Username must be at least 3 characters.";
    if (p.length < 8) return "Password must be at least 8 characters.";
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(p)) return "Password must include a symbol.";
    if (!/[0-9]/.test(p)) return "Password must include a number.";
    return "";
  }

  function handleSubmit(e) {
    e.preventDefault();
    const msg = validate(username, password);
    if (msg) return setError(msg);

    localStorage.setItem("r6_username", username.trim());
    localStorage.setItem("r6_password", password); // (demo för uppgift)
    localStorage.setItem("r6_loggedIn", "true");

    navigate("/game");
  }

  return (
    <section className="auth">
      <div className="container auth__inner">
        <div className="auth__card">
          <h1 className="auth__title">Create account</h1>
          <p className="auth__text">
            Register to play the minigame. (Stored locally in your browser.)
          </p>

          {error && <p className="auth__error">{error}</p>}

          <form className="auth__form" onSubmit={handleSubmit}>
            <label className="sr-only" htmlFor="username">Username</label>
            <input
              id="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="username"
              required
            />

            <label className="sr-only" htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="new-password"
              required
            />

            <button className="btn" type="submit">Register</button>
          </form>

          <p className="auth__footer">
            Already have an account? <Link to="/login">Log in</Link>
          </p>
        </div>
      </div>
    </section>
  );
}
