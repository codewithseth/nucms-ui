import React from "react";
import { NavLink } from "react-router-dom";
import { Card } from "flowbite-react";
import citizen from "../../../../_timouy/assets/images/citizen.png";
import privateCompany from "../../../../_timouy/assets/images/private-company.png";
import ngo from "../../../../_timouy/assets/images/ngo.png";
import { useTranslation } from "react-i18next";

export const Tamplate = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h3 className="text-center font-semibold text-2xl mb-10 mt-10">{t("homepage.provide.heading")}</h3>
      <div className="flex justify-center align-middle">
        <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-10 mb-5 xs:p-5">
          <Card className="max-w-sm">
            <div className="flex flex-col items-center pb-10">
              <img alt="citizen-tamplate" height="96" src={citizen} width="96" className="mb-3" />
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                {t("homepage.provide.heading1")}
              </h5>
              <span className="text-sm text-center text-gray-500 dark:text-gray-400">
                {t("homepage.provide.desc1")}
              </span>
              <div className="mt-4 flex space-x-3 lg:mt-6">
                <NavLink
                  to="/login"
                  className="w-32 max-md:border-2 max-md:border-primary max-md:inline font-body text-primary max-md:px-2 max-md:py-1.5 transition duration-300 rounded sm:border-2 sm:block sm:py-1.5 sm:px-2 sm:border-primary
                    hover:bg-primary hover:text-white text-center xs:border-2 xs:block xs:py-1.5 xs:px-2 xs:border-primary"
                >
                  {t("homepage.provide.button")}
                </NavLink>
              </div>
            </div>
          </Card>
          <Card className="max-w-sm">
            <div className="flex flex-col items-center pb-10">
              <img alt="citizen-tamplate" height="96" src={ngo} width="96" className="mb-3" />
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                {t("homepage.provide.heading2")}
              </h5>
              <span className="text-sm text-center text-gray-500 dark:text-gray-400">
                {t("homepage.provide.desc2")}
              </span>
              <div className="mt-4 flex space-x-3 lg:mt-6">
                <NavLink
                  to="/login"
                  className="w-32 max-md:border-2 max-md:border-primary max-md:inline font-body text-primary max-md:px-2 max-md:py-1.5 transition duration-300 rounded sm:border-2 sm:block sm:py-1.5 sm:px-2 sm:border-primary
                    hover:bg-primary hover:text-white text-center xs:border-2 xs:block xs:py-1.5 xs:px-2 xs:border-primary"
                >
                  {t("homepage.provide.button")}
                </NavLink>
              </div>
            </div>
          </Card>
          <Card className="max-w-sm">
            <div className="flex flex-col items-center pb-10">
              <img alt="citizen-tamplate" height="96" src={privateCompany} width="96" className="mb-3" />
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                {t("homepage.provide.heading3")}
              </h5>
              <span className="text-sm text-center text-gray-500 dark:text-gray-400">
                {t("homepage.provide.desc3")}
              </span>
              <div className="mt-4 flex space-x-3 lg:mt-6">
                <NavLink
                  to="/login"
                  className="w-32 max-md:border-2 max-md:border-primary max-md:inline font-body text-primary max-md:px-2 max-md:py-1.5 transition duration-300 rounded sm:border-2 sm:block sm:py-1.5 sm:px-2 sm:border-primary
                    hover:bg-primary hover:text-white text-center xs:border-2 xs:block xs:py-1.5 xs:px-2 xs:border-primary"
                >
                  {t("homepage.provide.button")}
                </NavLink>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
