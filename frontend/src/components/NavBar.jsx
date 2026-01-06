import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const NavBar = () => {
  const { t } = useTranslation('common');

  return (
    <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
      <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
        {t("header.home")}
      </Link>
      <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
        {t("header.about")}
      </Link>
    </nav>
  );
};

export default NavBar;