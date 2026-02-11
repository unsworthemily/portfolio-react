import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import JokeGame from "../components/JokeGame";

export default function Game() {
  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = localStorage.getItem("r6_loggedIn") === "true";
    if (!loggedIn) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <section className="container" style={{ padding: "28px 0 64px" }}>
      <JokeGame />
    </section>
  );
}
