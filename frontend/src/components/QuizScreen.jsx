import { useState } from "react";

export default function QuizScreen({ question, timeLeft, lives, onAnswer }) {
  const [selected, setSelected] = useState(null);
  const [locked, setLocked] = useState(false);

  const handleClick = (option) => {
    if (locked) return;

    setSelected(option);
    setLocked(true);

    const correct = option === question.a;

    setTimeout(() => {
      setSelected(null);
      setLocked(false);
      onAnswer(correct);
    }, 700);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-xl space-y-6">

        {/* Header */}
        <div className="flex justify-between items-center">
          {/* ❤️ Vies */}
          <div className="flex gap-1 text-lg">
            {[1, 2, 3].map((i) => (
              <span key={i} className={i <= lives ? "text-red-500" : "text-gray-300"}>
                ♥
              </span>
            ))}
          </div>

          {/* ⏱️ Temps */}
          <span
            className={`text-xl font-bold tabular-nums ${
              timeLeft <= 3 ? "text-red-500 animate-pulse" : ""
            }`}
          >
            {timeLeft}s
          </span>
        </div>

        {/* Question */}
        <h2 className="text-lg sm:text-xl font-bold text-center">
          {question.q}
        </h2>

        {/* Réponses */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {question.options.map((opt, i) => {
            let style =
              "py-3 px-3 rounded-lg text-sm font-medium border transition";

            if (locked) {
              if (opt === question.a) {
                style += " bg-green-500 text-white border-green-500";
              } else if (opt === selected) {
                style += " bg-red-500 text-white border-red-500";
              } else {
                style += " bg-gray-100 text-gray-400 border-gray-300";
              }
            } else {
              style +=
                " bg-gray-50 dark:bg-gray-900 border-gray-200 hover:border-black";
            }

            return (
              <button
                key={i}
                disabled={locked || timeLeft <= 0}
                onClick={() => handleClick(opt)}
                className={style}
              >
                {opt}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
