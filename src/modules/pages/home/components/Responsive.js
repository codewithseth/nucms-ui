import React from "react";
import { Card } from "flowbite-react";
import computer_room from "../../../../_timouy/assets/svg/computer-room.svg";
import laptop from "../../../../_timouy/assets/svg/Laptop.svg";
import tablet from "../../../../_timouy/assets/svg/tablet.svg";
import smartphone from "../../../../_timouy/assets/svg/smart-phone.svg";
import { useTranslation } from "react-i18next";

export const Responsive = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-slate-100 sm:p-5">
      <h3 className="text-center font-semibold text-2xl mb-10 mt-10">{t("homepage.responsive.heading")}</h3>
      <div className="flex justify-center align-middle">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10 mb-5">
          <Card>
            <img src={computer_room} alt="-_-" />
          </Card>
          <Card>
            <img src={laptop} width={"90px"} alt="-_-" />
          </Card>
          <Card>
            <img src={tablet} width={"90px"} alt="-_-" />
          </Card>
          <Card>
            <img src={smartphone} width={"90px"} alt="-_-" />
          </Card>
        </div>
      </div>
      <div className="flex justify-center align-middle mb-14 mt-10">
        <p className="w-4/5 text-center">{t("homepage.responsive.description")}</p>
      </div>
    </div>
  );
};
