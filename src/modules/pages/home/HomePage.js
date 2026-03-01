import landing from "../../../_timouy/assets/images/landing.png";
import { NavLink } from "react-router-dom";
import { Responsive } from "./components/Responsive";
import { Tamplate } from "./components/Tamplate";
import UserInterface from "./components/UserInterface";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="page">
        <div className="hero-section xs:flex xs:flex-col xs:gap-16">
          <div className="context mt-8">
            <div>
              <h1 className="text-4xl font-body mb-3 tracking-tight xs:hidden md:text-4xl lg:text-5xl dark:text-white ">
                {t("homepage.herosection.heading1")}
              </h1>
              <h1 className="text-4xl font-body mb-3 tracking-tight xs:hidden md:text-4xl lg:text-5xl dark:text-white ">
                {t("homepage.herosection.heading2")}
              </h1>

              <h1 className="text-4xl font-body mb-3 tracking-tight xs:leading-tight md:hidden lg:hidden sm:hidden dark:text-white ">
                {t("homepage.herosection.headingxs")}
              </h1>
            </div>

            <p className="md:text-sm lg:text-lg text-gray-900 dark:text-white" id="name">
              {t("homepage.herosection.description")}
            </p>

            <NavLink
              to="/login"
              className="w-32 text-center max-md:border-2 max-md:border-primary max-md:inline font-body text-primary max-md:px-2 max-md:py-1.5 transition duration-300 rounded sm:border-2 sm:block sm:py-1.5 sm:px-2 sm:border-primary
                    hover:bg-primary hover:text-white xs:border-2 xs:block xs:py-1.5 xs:px-2 xs:border-primary"
            >
              {t("homepage.herosection.button")}
            </NavLink>
          </div>
          <div className="image lg:mt-0 lg:col-span-5 lg:flex w-2/5 xs:w-full">
            <img src={landing} alt="logo" className="object-contain" />
          </div>
        </div>
        <Responsive />
        <Tamplate />
        <UserInterface />
      </div>
    </>
  );
};

export default Home;
