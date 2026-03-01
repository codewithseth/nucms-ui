import React from "react";
import { NavLink } from "react-router-dom";
import ui from "../../../../_timouy/assets/images/ui-cms.png";
import { useTranslation } from "react-i18next";

function UserInterface() {
  const { t } = useTranslation();
  return (
    <div>
      <h3 className="text-center font-semibold text-2xl mb-10 mt-10">
        {t("homepage.interface.heading")}
      </h3>
      <div className="flex justify-center align-middle">
        <NavLink
          to="/login"
          className="w-32 max-md:border-2 max-md:border-primary max-md:inline font-body text-primary max-md:px-2 max-md:py-1.5 transition duration-300 rounded sm:border-2 sm:block sm:py-1.5 sm:px-2 sm:border-primary
                    hover:bg-primary hover:text-white text-center xs:border-2 xs:block xs:py-1.5 xs:px-2 xs:border-primary"
        >
          {t("homepage.interface.button")}
        </NavLink>
      </div>
      <div className="flex align-middle justify-center mt-10 mb-10 px-10">
        <img src={ui} alt="-_-" />
      </div>
    </div>
  );
}

export default UserInterface;
