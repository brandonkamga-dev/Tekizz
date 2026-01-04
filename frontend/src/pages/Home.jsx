import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation('home');
  return (
    <section className="w-full h-full flex flex-col md:flex-row items-center justify-center bg-background text-foreground px-6">


      {/* LEFT */}
      <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6 md:pl-16 order-2 md:order-1">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          {t("home.title")}
        </h1>

        <p className="text-base md:text-xl max-w-lg leading-relaxed text-muted-foreground">
          {t("home.description")}
        </p>

        <Button variant="default" className="w-fit px-10 py-4font-bold hover:bg-foreground hover:text-background transition">
          {t("home.startQuiz")}
        </Button>
      </div>

      {/* RIGHT */}
      <div className="hidden md:flex w-full md:w-1/2 items-center justify-center order-1 md:order-2">
        <div className="w-[260px] md:w-[300px] h-[360px] md:h-[400px] border border-foreground flex items-center justify-center text-sm">
          Image Preview
        </div>
      </div>



    </section>
  );
};

export default Home;