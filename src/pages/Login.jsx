import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";


export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const savedUser = localStorage.getItem("r6_username") || "";
    const savedPass = localStorage.getItem("r6_password") || "";

    if (username.trim() === savedUser && password === savedPass) {
      localStorage.setItem("r6_loggedIn", "true");
      navigate("/game");
    } else {
      setError("Wrong username or password.");
    }
  }

  return (
    <section className="auth">
      <div className="container auth__inner">
        <div className="auth__card">
          <h1 className="auth__title">Log in</h1>
          <p className="auth__text">Enter your credentials to access the game.</p>

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
              autoComplete="current-password"
              required
            />

            <button className="btn" type="submit">Log in</button>
          </form>

          <p className="auth__footer">
            No account yet? <Link to="/register">Create one</Link>
          </p>
        </div>
      </div>
    </section>
  );
}
