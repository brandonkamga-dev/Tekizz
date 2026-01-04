import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ThemeLangBox from "../ThemeLangBox";

const Header = () => {
  const { t } = useTranslation('common');
  return (
    <header className="w-full">
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">

        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-black text-gray-900 border-b-2"
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
          <Link
            to="/login"
            className="px-4 py-2 border border-gray-800 text-sm hover:bg-black hover:text-white transition"
          >
            {t('header.login')}
          </Link>

          <ThemeLangBox />
        </div>

      </div>
    </header>
  );
};

export default Header;
