import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation('home');
  return (
    <section className="w-full h-full flex flex-col md:flex-row items-center justify-center bg-white text-black px-6">


    {/* LEFT */}
      <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6 md:pl-16 order-2 md:order-1">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          {t("home.title")}
        </h1>

        <p className="text-base md:text-xl max-w-lg leading-relaxed text-gray-700">
          {t("home.description")}
        </p>

        <button className="w-fit px-10 py-4 border-2 border-black font-bold hover:bg-black hover:text-white transition">
          {t("home.startQuiz")}
        </button>
      </div>

      {/* RIGHT */}
      <div className="hidden md:flex w-full md:w-1/2 items-center justify-center order-1 md:order-2">
        <div className="w-[260px] md:w-[300px] h-[360px] md:h-[400px] border border-black flex items-center justify-center text-sm">
          Image Preview
        </div>
      </div>

      

    </section>
  );
};

export default Home;