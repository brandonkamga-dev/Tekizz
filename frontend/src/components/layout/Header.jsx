import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import NavBar from "../NavBar";

const Header = () => {
  const { t } = useTranslation("common");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 transition-all duration-500">
      <motion.div 
        className={`
          flex items-center justify-between transition-all duration-500 ease-in-out
          ${isScrolled 
            ? "w-full max-w-5xl bg-transparent backdrop-blur-xl border-y border-white/10 px-6 py-3 rounded-xl shadow-xl" 
            : "w-full max-w-7xl bg-transparent border-transparent px-2 py-4 shadow-none"
          }
        `}
      >
        <div className="flex items-center gap-12">
          <Link to="/" className="text-2xl font-black tracking-tighter">
            Tekizz<span className="text-primary">.</span>
          </Link>

          <NavBar />
        </div>

        <div className="flex items-center gap-4">
          <Link to="/login">
            <Button variant="ghost" className="font-semibold text-sm hover:bg-transparent hover:text-primary">
              {t("header.login")}
            </Button>
          </Link>
          
          <Link to="/signup">
            <Button className="rounded-full px-6 bg-primary text-primary-foreground hover:opacity-90 shadow-lg shadow-primary/20">
              {t("header.getStarted")}
            </Button>
          </Link>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;