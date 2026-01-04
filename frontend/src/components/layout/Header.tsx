import React from "react";
import { Link } from "react-router-dom";
import ThemeLangBox from "../ThemeLangBox";

const Header = () => {
  return (
    <header className="w-full">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-black border-b-4 pb-2 text-gray-800"
        >
          Tekizz
        </Link>

        {/* Navigation desktop */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="hover:text-gray-900">
            Home
          </Link>
          <Link to="/about" className="hover:text-gray-900">
            About
          </Link>
        </nav>

        {/* Login + ThemeLangBox */}
        <div className="flex items-center space-x-10">
          <Link
            to="/login"
            className="px-4 py-2 border border-gray-700 hover:bg-gray-100"
          >
            Login
          </Link>

          {/* Theme + Lang */}
          <ThemeLangBox />
        </div>

      </div>
    </header>
  );
};

export default Header;
