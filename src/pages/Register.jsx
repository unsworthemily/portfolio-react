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
    localStorage.setItem("r6_password", password); // demo for assignment
    localStorage.setItem("r6_loggedIn", "true");

    navigate("/game");
  }

  return (
    <section className="register">
      <div className="container register__inner">
        <div className="register__card">
          <h1 className="register__title">Create account</h1>
          <p className="register__text">Register to play the minigame.</p>

          {error && <p className="register__error">{error}</p>}

          <form className="register__form" onSubmit={handleSubmit}>
            <input
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="username"
              required
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="new-password"
              required
            />

            <button className="btn" type="submit">Register</button>
          </form>

          <p className="register__footer">
            Already have an account? <Link to="/login">Log in</Link>
          </p>
        </div>
      </div>
    </section>
  );
}
