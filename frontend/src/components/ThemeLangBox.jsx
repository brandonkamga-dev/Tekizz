import { SunIcon, MoonIcon, GithubLogoIcon } from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";
import { useTheme } from "./theme-provider";

const ThemeLangBox = () => {
  const { i18n } = useTranslation();
  const { theme, setTheme } = useTheme();

  const toggleTheme = () =>
    setTheme(theme === "light" ? "dark" : "light");

  const toggleLang = () =>
    i18n.changeLanguage(i18n.language === "fr" ? "en" : "fr");

  return (
    <div className="flex items-center gap-4 text-muted-foreground">
      
      {/* Theme */}
      <button
        onClick={toggleTheme}
        className="w-7 h-7 flex items-center justify-center hover:text-foreground transition"
        aria-label="Toggle theme"
      >
        {theme === "light" ? (
          <SunIcon size={18} weight="bold" />
        ) : (
          <MoonIcon size={18} weight="bold" />
        )}
      </button>

      {/* Language */}
      <button
        onClick={toggleLang}
        className="text-xs font-medium tracking-widest hover:text-foreground transition"
        aria-label="Toggle language"
      >
        {i18n.language.toUpperCase()}
      </button>

      {/* GitHub */}
      <a
        href="https://github.com/brandonkamga"
        target="_blank"
        rel="noreferrer"
        className="w-7 h-7 flex items-center justify-center hover:text-foreground transition"
        aria-label="GitHub"
      >
        <GithubLogoIcon size={18} weight="bold" />
      </a>

    </div>
  );
};

export default ThemeLangBox;
