import React from "react";
import { SunIcon, MoonIcon } from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";
import { useTheme } from "./theme-provider";

const ThemeLangBox = () => {
  const { i18n } = useTranslation();
  const { theme, setTheme } = useTheme();

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
        className="w-6 h-6 text-foreground dark:text-foreground  flex items-center justify-center"
      >
        {theme === "light" ? <SunIcon size={20} /> : <MoonIcon size={20} />}
      </button>

      {/* Language */}
      <button
        onClick={toggleLang}
        className="w-6 h-6 text-xl text-foreground dark:text-foreground flex items-center justify-center"
      >
        {i18n.language.toUpperCase()}
      </button>
    </div>
  );
};

export default ThemeLangBox;
