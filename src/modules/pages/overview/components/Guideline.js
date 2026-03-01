import React from "react";
import { Card } from "flowbite-react";
import choosetemplate from "../../../../_timouy/assets/images/overview/choosetemplate.svg";
import managecontent from "../../../../_timouy/assets/images/overview/managecontent.svg";
import publish from "../../../../_timouy/assets/images/overview/publish.svg";
import { useTranslation } from "react-i18next";

export const Guideline = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h3 className="text-center font-semibold text-2xl mb-10 mt-10 xs:mb-0">
        {t("overview.guideline.heading")}
      </h3>
      <div className="flex justify-center items-center">
        <div className="grid xl:grid-cols-3 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 gap-4 xs:p-5">
          <Card className="max-w-sm">
            <div className="flex justify-center items-center">
              <img
                className="object-cover h-40 w-40 mb-5"
                src={choosetemplate}
                alt={""}
              />
            </div>
            <div>
              <h5 className="text-2xl text-gray-900 text-center dark:text-white">
                {t("overview.guideline.heading1")}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400 text-center mt-3">
                {t("overview.guideline.desc1")}
              </p>
            </div>
          </Card>
          <Card className="max-w-sm">
            <div className="flex justify-center items-center">
              <img
                className="object-cover h-40 w-40 mb-5"
                src={managecontent}
                alt={""}
              />
            </div>
            <div>
              <h5 className="text-2xl text-gray-900 text-center dark:text-white">
                {t("overview.guideline.heading2")}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400 text-center mt-3">
                {t("overview.guideline.desc2")}
              </p>
            </div>
          </Card>
          <Card className="max-w-sm">
            <div className="flex justify-center items-center">
              <img
                className="object-cover h-40 w-40 mb-5"
                src={publish}
                alt={""}
              />
            </div>
            <div>
              <h5 className="text-2xl text-gray-900 text-center dark:text-white">
                {t("overview.guideline.heading3")}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400 text-center mt-3">
                {t("overview.guideline.desc3")}
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
