import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Dropdown, Avatar } from "flowbite-react";
import englishImg from "../../../_timouy/assets/svg/english.svg";
import cambodia from "../../../_timouy/assets/svg/cambodia.svg";
import changeLanguageIcon from "../../../_timouy/assets/svg/change-language.svg";

const LanguageSelector = () => {
  const { t, i18n } = useTranslation();
  const [activeLanguage, setActiveLanguage] = useState(i18n.language);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setActiveLanguage(lng);
  };

  const languages = [
    { code: "en", lang: t("language.english"), flag: englishImg },
    { code: "kh", lang: t("language.khmer"), flag: cambodia },
  ];

  return (
    <Dropdown
      label={
        <Avatar
          img={changeLanguageIcon}
          alt="Change Language"
          className="cursor-pointer"
        />
      }
      inline
    >
      {languages.map((lng) => (
        <Dropdown.Item
          key={lng.code}
          onClick={() => changeLanguage(lng.code)}
          className={activeLanguage === lng.code ? "bg-gray-100" : ""}
        >
          <div className="flex items-center">
            <Avatar img={lng.flag} rounded alt={`${lng.lang} flag`} size="xs" />
            <span className="ml-2">{lng.lang}</span>
          </div>
        </Dropdown.Item>
      ))}
    </Dropdown>
  );
};

export default LanguageSelector;
