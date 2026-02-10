import { useEffect, useMemo, useState } from "react";
import "./JokeGame.css";

const API_URL = "https://official-joke-api.appspot.com/random_ten";

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

export default function JokeGame() {
  const [jokes, setJokes] = useState([]);
  const [current, setCurrent] = useState(null);
  const [picked, setPicked] = useState(null);
  const [result, setResult] = useState(null); // "correct" | "wrong" | null
  const [score, setScore] = useState(0);
  const [round, setRound] = useState(0);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function loadJokes() {
    try {
      setLoading(true);
      setError("");
      setPicked(null);
      setResult(null);

      const res = await fetch(API_URL);
      if (!res.ok) throw new Error("Could not fetch jokes.");

      const data = await res.json();
      setJokes(data);

      // välj en “question joke”
      const question = data[Math.floor(Math.random() * data.length)];
      setCurrent(question);
      setRound((r) => r + 1);
    } catch (e) {
      setError(e.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadJokes();
  }, []);

  const options = useMemo(() => {
    if (!current || jokes.length === 0) return [];
    const wrong = jokes
      .filter((j) => j.id !== current.id)
      .slice(0, 3)
      .map((j) => j.punchline);

    return shuffle([current.punchline, ...wrong]);
  }, [current, jokes]);

  function pickAnswer(option) {
    if (!current || picked) return; // lås efter val
    setPicked(option);

    const ok = option === current.punchline;
    setResult(ok ? "correct" : "wrong");
    if (ok) setScore((s) => s + 1);
  }

  return (
    <section className="jg">
      <div className="jg__top">
        <div>
          <p className="jg__kicker">useEffect • fetch • API • minigame</p>
          <h1 className="jg__title">Joke Punchline Quiz</h1>
          <p className="jg__lead">
            Pick the correct punchline. Data is fetched from an external API.
          </p>
        </div>

        <div className="jg__stats">
          <div className="jg__stat">
            <span className="jg__label">Score</span>
            <span className="jg__value">{score}</span>
          </div>
          <div className="jg__stat">
            <span className="jg__label">Round</span>
            <span className="jg__value">{round}</span>
          </div>
        </div>
      </div>

      <div className="jg__card">
        {loading && <p className="jg__muted">Loading joke…</p>}
        {error && <p className="jg__error">{error}</p>}

        {!loading && !error && current && (
          <>
            <p className="jg__setup">{current.setup}</p>

            <div className="jg__options">
              {options.map((opt) => {
                const isPicked = picked === opt;
                const isCorrect = result && opt === current.punchline;

                return (
                  <button
                    key={opt}
                    className={[
                      "jg__option",
                      isPicked ? "is-picked" : "",
                      result && isCorrect ? "is-correct" : "",
                      result && isPicked && !isCorrect ? "is-wrong" : "",
                    ].join(" ")}
                    onClick={() => pickAnswer(opt)}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>

            {result && (
              <p className="jg__result">
                {result === "correct" ? "✅ Correct!" : "❌ Not quite!"}
              </p>
            )}

            <div className="jg__actions">
              <button className="btn" onClick={loadJokes} disabled={loading}>
                Next joke
              </button>
              <button
                className="btn btn--ghost"
                onClick={() => {
                  setScore(0);
                  setRound(0);
                  loadJokes();
                }}
                disabled={loading}
              >
                Reset
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
