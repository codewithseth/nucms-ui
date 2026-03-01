import React from "react";
import { Link } from "react-router-dom";
import { Card } from "flowbite-react";
import reliability from "../../../../_timouy/assets/images/overview/reliability.svg";
import security from "../../../../_timouy/assets/images/overview/security.svg";
import management from "../../../../_timouy/assets/images/overview/sitemanagement.svg";
import { useTranslation } from "react-i18next";

const Feature = () => {
  const { t } = useTranslation();
  return (
    <div className={"mt-5 mb-5"}>
      <div className="mt-5 py-5">
        <h3 className="text-center font-semibold text-2xl mb-10 mt-10 xs:mb-0">{t("overview.feature.heading")}</h3>
      </div>
      <div className="container mx-auto xs:p-5">
        <Card className="rounded-lg mb-5 mx-auto max-w-6xl">
          <div className="grid max-w-screen-2xl px-2 py-2 mx-auto lg:gap-2 xl:gap-0 lg:py-2 lg:grid-cols-12 sm:grid-cols-1">
            <div className="mr-auto place-self-center lg:col-span-7">
              <p className="max-w-md mb-3 text-dark-500 lg:mb-4 md:text-lg lg:text-xl dark:text-gray-500">
                {t("overview.feature.desc1")}
              </p>

              <Link
                to="/"
                className="max-md:px-2 max-md:py-1.5 max-md:border-2 rounded max-md:bg-primary duration-300 max-md:border-primary max-md:text-white hover:bg-white hover:text-primary max-md:me-1 
                sm:border-2 sm:block sm:py-1.5 sm:px-2 sm:border-[#2596BE] sm:bg-[#2596BE] sm:text-white
                xs:border-2 xs:block sm:py-1.5 xs:px-2 xs:border-[#2596BE] xs:bg-[#2596BE] xs:text-white"
              >
                {t("overview.feature.button")}
              </Link>
            </div>
            <div className="lg:mt-0 lg:col-span-5 lg:flex justify-center items-center">
              <div className="grid grid-cols-1">
                <img className="object-fill h-48 w-96" src={reliability} alt={""} />
                <p className="max-w-xl mb-6 text-dark-500 lg:mb-8 md:text-lg lg:text-2xl flex justify-center items-center dark:text-gray-500">
                  {t("overview.feature.heading1")}
                </p>
              </div>
            </div>
          </div>
        </Card>

        <Card className="rounded-lg mb-5 mx-auto max-w-6xl">
          <div className="grid max-w-screen-2xl px-2 py-2 mx-auto lg:gap-2 xl:gap-0 lg:py-2 lg:grid-cols-12 sm:grid-cols-1">
            <div className="mr-auto place-self-center lg:col-span-7">
              <p className="max-w-md mb-3 text-dark-500 lg:mb-4 md:text-lg lg:text-xl dark:text-gray-500">
                {t("overview.feature.desc2")}
              </p>
              <Link
                to="/"
                className="max-md:px-2 max-md:py-1.5 max-md:border-2 rounded max-md:bg-primary duration-300 max-md:border-primary max-md:text-white hover:bg-white hover:text-primary max-md:me-1 
                sm:border-2 sm:block sm:py-1.5 sm:px-2 sm:border-[#2596BE] sm:bg-[#2596BE] sm:text-white
                xs:border-2 xs:block sm:py-1.5 xs:px-2 xs:border-[#2596BE] xs:bg-[#2596BE] xs:text-white"
              >
                {t("overview.feature.button")}
              </Link>
            </div>
            <div className="lg:mt-0 lg:col-span-5 lg:flex justify-center items-center">
              <div className="grid grid-cols-1">
                <img className="object-fill h-48 w-96" src={security} alt={"/"} />
                <p className="max-w-xl mb-6 text-dark-500 lg:mb-8 md:text-lg lg:text-2xl flex justify-center items-center dark:text-gray-500">
                  {t("overview.feature.heading2")}
                </p>
              </div>
            </div>
          </div>
        </Card>

        <Card className="rounded-lg mb-5 mx-auto max-w-6xl">
          <div className="grid max-w-screen-2xl px-2 py-2 mx-auto lg:gap-2 xl:gap-0 lg:py-2 lg:grid-cols-12 sm:grid-cols-1">
            <div className="mr-auto place-self-center lg:col-span-7">
              <p className="max-w-md mb-3 text-dark-500 lg:mb-4 md:text-lg lg:text-xl dark:text-gray-500">
                {t("overview.feature.desc3")}
              </p>
              <Link
                to="/"
                className="max-md:px-2 max-md:py-1.5 max-md:border-2 rounded max-md:bg-primary duration-300 max-md:border-primary max-md:text-white hover:bg-white hover:text-primary max-md:me-1 
                sm:border-2 sm:block sm:py-1.5 sm:px-2 sm:border-[#2596BE] sm:bg-[#2596BE] sm:text-white
                xs:border-2 xs:block sm:py-1.5 xs:px-2 xs:border-[#2596BE] xs:bg-[#2596BE] xs:text-white"
              >
                {t("overview.feature.button")}
              </Link>
            </div>
            <div className="lg:mt-0 lg:col-span-5 lg:flex justify-center items-center">
              <div className="grid grid-cols-1">
                <img className="object-fill h-48 w-96" src={management} alt={"/"} />
                <p className="max-w-xl mb-6 text-dark-500 lg:mb-8 md:text-lg lg:text-2xl flex justify-center items-center dark:text-gray-500">
                  {t("overview.feature.heading3")}
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Feature;
