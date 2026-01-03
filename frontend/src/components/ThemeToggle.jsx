export default function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      className="absolute top-4 right-4 border px-3 py-1 text-sm"
    >
      {theme === "light" ? "Dark" : "Light"}
    </button>
  );
}
