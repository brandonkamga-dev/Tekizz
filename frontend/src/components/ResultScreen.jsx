export default function ResultScreen({ score, onRestart, onAddQuestion }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <div className="text-6xl font-black">{score}</div>
      <p className="mt-2 text-sm text-gray-500">points</p>

      <div className="mt-8 space-y-3 w-full max-w-xs">
        <button
          onClick={onRestart}
          className="w-full py-3 bg-black text-white rounded-lg font-bold"
        >
          Rejouer
        </button>

        <button
          onClick={onAddQuestion}
          className="w-full py-3 bg-gray-200 rounded-lg text-sm"
        >
          Ajouter une question
        </button>
      </div>
    </div>
  );
}
