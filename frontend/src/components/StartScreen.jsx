export default function StartScreen({ onStart }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-5xl font-black border-b-4 pb-2">Tekizz</h1>
      <p className="mt-4 text-sm text-gray-500">
        Quiz tech. Rapide. Addictif.
      </p>
      <button
        onClick={onStart}
        className="mt-8 px-10 py-3 bg-black text-white rounded-lg font-bold"
      >
        Jouer
      </button>
    </div>
  );
}
