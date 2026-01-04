import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ThemeLangBox from "../ThemeLangBox";
import { Button } from "@/components/ui/button";

const Header = () => {
  const { t } = useTranslation('common');
  return (
    <header className="w-full">
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">

        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-black text-foreground border-b-2 border-foreground"
        >
          Tekizz
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link to="/" className="hover:underline">
            {t('header.home')}
          </Link>
          <Link to="/about" className="hover:underline">
            {t('header.about')}
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-8">
          <Button variant="default" className="px-6">
              <Link
            to="/login"
          >
            {t('header.login')}
          </Link>
          </Button>
          <ThemeLangBox />
        </div>

      </div>
    </header>
  );
};

export default Header;
