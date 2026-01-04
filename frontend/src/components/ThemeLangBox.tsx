import React, { useState } from "react";
import { Sun, Moon } from "@phosphor-icons/react"; // Note: do not rename
import { useTranslation } from "react-i18next";

const ThemeLangBox = () => {
  const { i18n } = useTranslation();
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");
  const toggleLang = () => {
    const newLang = i18n.language === "fr" ? "en" : "fr";
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="flex gap-1">

      {/* Theme */}
      <button
        onClick={toggleTheme}
        className="w-6 h-6 text-gray-800 flex items-center justify-center"
      >
        {theme === "light" ? <Sun size={12} /> : <Moon size={12} />}
      </button>

      {/* Language */}
      <button
        onClick={toggleLang}
        className="w-6 h-6  text-gray-800 flex items-center justify-center"
      >
        {i18n.language.toUpperCase()}
      </button>
    </div>
  );
};

export default ThemeLangBox;
