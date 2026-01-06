import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation("home");

  return (
    <section className="relative pt-32 pb-20 min-h-screen flex items-center overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.8] tracking-tighter">
            {t("home.hero.title")} <br />
            <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
              {t("home.hero.highlight")}
            </span>
          </h1>

          <p className="mt-8 text-lg sm:text-xl text-muted-foreground max-w-lg leading-relaxed font-medium">
            {t("home.hero.description")}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button
              size="lg"
              className="h-14 px-10 text-lg rounded-full shadow-2xl shadow-primary/20 hover:scale-105 transition-all"
            >
              {t("home.hero.cta")}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>

            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`https://i.pravatar.cc/100?img=${i}`}
                    alt="User"
                    className="w-10 h-10 rounded-full border-2 border-background object-cover shadow-sm"
                  />
                ))}
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-sm font-bold leading-none text-primary">+1,000</p>
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">
                  {t("home.hero.members")}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative"
        >
          <div className="absolute -inset-10 bg-primary/50 blur-[120px] rounded-full" />
          <div className="relative rounded-[2.5rem] border border-white/10 bg-slate-900/50 backdrop-blur-3xl p-2 shadow-2xl overflow-hidden shadow-primary/10">
             <img 
               src="/preview.png" 
               alt="App Preview" 
               className="rounded-[2rem] w-full h-auto shadow-inner"
             />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;