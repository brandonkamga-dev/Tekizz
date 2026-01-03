import { useState } from "react";

export default function AddQuestionScreen({ onAdd, onCancel }) {
  const [q, setQ] = useState("");
  const [a, setA] = useState("");
  const [wrong, setWrong] = useState(["", "", ""]);

  const valid =
    q.trim() && a.trim() && wrong.every((o) => o.trim());

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <h2 className="text-2xl font-bold mb-4">Nouvelle question</h2>

      <div className="w-full max-w-md space-y-2">
        <input
          placeholder="Question"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          className="w-full px-3 py-2 rounded bg-gray-100"
        />
        <input
          placeholder="Bonne réponse"
          value={a}
          onChange={(e) => setA(e.target.value)}
          className="w-full px-3 py-2 rounded bg-gray-100"
        />
        {wrong.map((o, i) => (
          <input
            key={i}
            placeholder={`Option fausse ${i + 1}`}
            value={o}
            onChange={(e) => {
              const copy = [...wrong];
              copy[i] = e.target.value;
              setWrong(copy);
            }}
            className="w-full px-3 py-2 rounded bg-gray-100"
          />
        ))}

        <button
          disabled={!valid}
          onClick={() =>
            onAdd({
              q,
              a,
              options: [a, ...wrong].sort(() => Math.random() - 0.5),
            })
          }
          className="w-full py-3 bg-black text-white rounded font-bold disabled:opacity-40"
        >
          Ajouter
        </button>

        <button
          onClick={onCancel}
          className="w-full py-3 bg-gray-200 rounded"
        >
          Annuler
        </button>
      </div>
    </div>
  );
}
