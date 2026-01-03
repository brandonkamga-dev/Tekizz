// src/constants/initialQuestions.js
export const initialQuestions = [
  {
    q: "Quel hook remplace componentDidMount ?",
    a: "useEffect",
    options: ["useLayoutEffect", "useEffect", "useState", "useMemo"],
  },
  {
    q: "Quel statut HTTP pour 'I'm a teapot' ?",
    a: "418",
    options: ["200", "404", "418", "501"],
  },
  {
    q: "Qui a créé React ?",
    a: "Facebook",
    options: ["Google", "Facebook", "Microsoft", "Netflix"],
  },
  {
    q: "En CSS, que fait 'gap' ?",
    a: "Espace entre flex/grid items",
    options: ["Marge externe", "Espace entre items", "Padding", "Border"],
  },
  {
    q: "Quel package npm fait 11ko pour vérifier si un nombre est pair ?",
    a: "is-odd",
    options: ["is-even", "is-odd", "even-or-odd", "parity-check"],
  },
  {
    q: "Quelle commande pour voir les branches distantes ?",
    a: "git branch -r",
    options: ["git remote -v", "git branch -r", "git fetch", "git status"],
  },
].map((q) => ({
  ...q,
  options: [...q.options].sort(() => Math.random() - 0.5),
}));