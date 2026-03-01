import React from "react";
import { NavLink } from "react-router-dom";
import hero from "../../../../_timouy/assets/images/overview/hero.png";
import { useTranslation } from "react-i18next";

export const Hero = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="page">
        <div className="hero-section xs:flex xs:flex-col gap-16">
          <div className="context mt-8 ">
            <div>
              <h1 className="text-4xl font-body mb-3 tracking-tight md:text-4xl lg:text-5xl dark:text-white xs:leading-tight ">
                {t("overview.herosection.heading1")}
              </h1>
              <h1 className="text-4xl font-body tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white xs:leading-tight">
                {t("overview.herosection.heading2")}
              </h1>
            </div>

            <p
              className="md:text-sm lg:text-lg text-gray-900 dark:text-white"
              id="name"
            >
              {t("overview.herosection.description")}
            </p>

            <NavLink
              to="/login"
              className="w-32 text-center max-md:border-2 max-md:border-primary max-md:inline font-body text-primary max-md:px-2 max-md:py-1.5 transition duration-300 rounded sm:border-2 sm:block sm:py-1.5 sm:px-2 sm:border-primary
                    hover:bg-primary hover:text-white xs:border-2 xs:block xs:py-1.5 xs:px-2 xs:border-primary"
            >
              {t("overview.herosection.button")}
            </NavLink>
          </div>
          <div className="image lg:mt-0 lg:col-span-5 lg:flex w-2/5 xs:w-full">
            <img src={hero} alt="logo" />
          </div>
        </div>
      </div>
    </>
  );
};
