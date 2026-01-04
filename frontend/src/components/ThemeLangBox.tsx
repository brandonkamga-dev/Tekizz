import React, { useState } from "react";
import { Sun, Moon } from "@phosphor-icons/react"; // Note : ne pas renommer

const ThemeLangBox = () => {
  const [theme, setTheme] = useState("light");
  const [lang, setLang] = useState("EN");

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");
  const toggleLang = () => setLang(lang === "FR" ? "EN" : "FR");

  return (
    <div className="flex flex-col gap-2">

      {/* Bouton thème */}
      <button
        onClick={toggleTheme}
        className="w-8 h-8 text-gray-800 flex items-center justify-center border border-gray-400"
      >
        {theme === "light" ? <Sun size={14} /> : <Moon size={14} />}
      </button>

      {/* Bouton langue */}
      <button
        onClick={toggleLang}
        className="w-8 h-8  text-gray-800 flex items-center justify-center border border-gray-400"
      >
        {lang}
      </button>
    </div>
  );
};

export default ThemeLangBox;
