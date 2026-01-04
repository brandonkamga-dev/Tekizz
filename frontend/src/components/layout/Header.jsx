import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ThemeLangBox from "../ThemeLangBox";
import { Button } from "@/components/ui/button";

const Header = () => {
  const { t } = useTranslation("common");

  return (
    <header className="w-full">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center">

        {/* LEFT ZONE : Logo + Nav */}
        <div className="flex items-center gap-56">
          {/* Logo */}
          <Link
            to="/"
            className="text-xl font-black tracking-tight text-foreground"
          >
            Tekizz
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition">
              {t("header.home")}
            </Link>
            <Link to="/about" className="hover:text-foreground transition">
              {t("header.about")}
            </Link>
          </nav>
        </div>

        {/* RIGHT ZONE */}
        <div className="ml-auto flex items-center gap-20">
          {/* Theme + Lang */}
          <ThemeLangBox />

          {/* Login */}
          <Button className="w-fit px-10 py-4"  size="sm">
            <Link to="/login">
              {t("header.login")}
            </Link>
          </Button>
        </div>

      </div>
    </header>
  );
};

export default Header;
