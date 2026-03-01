import about from "../../../../_timouy/assets/images/about-us.png";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <div className="page">
      <div className="hero-section xs:flex xs:flex-col xs:gap-16">
        <div className="context mt-8">
          <div>
            <h1 className="text-4xl font-body mb-3 tracking-tight xs:leading-tight md:text-4xl lg:text-5xl dark:text-white ">
              {t("aboutus.herosection.heading")}
            </h1>
          </div>
          <p
            className="md:text-sm lg:text-lg text-gray-900 dark:text-white"
            id="name"
          >
            {t("aboutus.herosection.description")}
          </p>
        </div>
        <div className="image lg:mt-0 lg:col-span-5 lg:flex w-2/5 xs:w-full">
          <img src={about} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
