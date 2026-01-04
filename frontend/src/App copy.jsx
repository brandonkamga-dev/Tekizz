import { useEffect, useState } from "react";
import ThemeToggle from "./components/ThemeToggleBox";
import StartScreen from "./components/StartScreen";
import QuizScreen from "./components/QuizScreen";
import ResultScreen from "./components/ResultScreen";
import AddQuestionScreen from "./components/AddQuestionScreen";
import { initialQuestions } from "./constants/initialQuestions";

const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);

export default function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  const [questions, setQuestions] = useState(() => {
    const saved = localStorage.getItem("tekizz_questions");
    return shuffle(saved ? JSON.parse(saved) : initialQuestions);
  });

  const [gameState, setGameState] = useState("start"); // start | playing | end | add
  const [score, setScore] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [lives, setLives] = useState(3);

  // Persist questions
  useEffect(() => {
    localStorage.setItem("tekizz_questions", JSON.stringify(questions));
  }, [questions]);

  // Theme
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  // ⏱️ TIMER
  useEffect(() => {
    if (gameState !== "playing") return;

    if (timeLeft <= 0) {
      handleAnswer(false);
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft((t) => t - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, gameState]);

  // 💀 Fin de partie si plus de vies
  useEffect(() => {
    if (lives <= 0) {
      setGameState("end");
    }
  }, [lives]);

  const toggleTheme = () =>
    setTheme((t) => (t === "light" ? "dark" : "light"));

  const startGame = () => {
    setScore(0);
    setLives(3);
    setQuestionIndex(0);
    setTimeLeft(10);
    setQuestions((q) => shuffle(q));
    setGameState("playing");
  };

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore((s) => s + timeLeft * 10);
    } else {
      setLives((l) => l - 1);
    }

    setQuestionIndex((i) => (i + 1) % questions.length);
    setTimeLeft(10);
  };

  const addQuestion = (newQ) => {
    setQuestions((q) => shuffle([...q, newQ]));
    setGameState("start");
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] text-black dark:text-white">
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

      {gameState === "start" && <StartScreen onStart={startGame} />}

      {gameState === "playing" && (
        <QuizScreen
          question={questions[questionIndex]}
          timeLeft={timeLeft}
          lives={lives}
          onAnswer={handleAnswer}
        />
      )}

      {gameState === "end" && (
        <ResultScreen
          score={score}
          onRestart={startGame}
          onAddQuestion={() => setGameState("add")}
        />
      )}

      {gameState === "add" && (
        <AddQuestionScreen
          onAdd={addQuestion}
          onCancel={() => setGameState("start")}
        />
      )}
    </div>
  );
}
