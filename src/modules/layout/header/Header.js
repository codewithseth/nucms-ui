import { Link, NavLink } from "react-router-dom";
import logo from "../../../_timouy/assets/svg/logo.svg";
import menu from "../../../_timouy/assets/svg/menu.svg";
import close from "../../../_timouy/assets/svg/close.svg"; // Import the close icon
import { useState } from "react";
import React from "react";
import LanguageSelector from "../../../_timouy/components/languageSelector/language-selector";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const activeLink = "text-[#2596BE] text-lg font-body";
  const normalLink = "text-black text-lg font-body";

  const { t } = useTranslation();

  return (
    <nav className="lg:py-4 sm:px-10 px-4 sticky top-0 z-50 bg-white">
      <div className="flex items-center justify-between">
        <div>
          <Link to="/">
            <img src={logo} className="mr-9 h-10" alt="logo" />
          </Link>
        </div>
        {/* For Desktop */}
        <div className="lg:flex items-center gap-7 hidden text-black font-semibold list-none">
          <NavLink className={({ isActive }) => (isActive ? activeLink : normalLink)} to="/">
            {t("navbar.home")}
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? activeLink : normalLink)} to="/overview">
            {t("navbar.overview")}
          </NavLink>
          {/* <NavLink
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
            to="/documentation"
          >
            {t("navbar.documentation")}
          </NavLink> */}
          <NavLink className={({ isActive }) => (isActive ? activeLink : normalLink)} to="/about">
            {t("navbar.aboutus")}
          </NavLink>
        </div>
        <div className="lg:flex hidden">
          <div className="inline-flex items-center font-body justify-end px-4 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer w-40">
            <LanguageSelector />
          </div>
          <NavLink to="/login">
            <button className="block ms-3 font-body text-primary border-2 border-primary px-2 py-1.5 transition duration-300 rounded hover:bg-primary hover:text-white">
              {t("navbar.signin")}
            </button>
          </NavLink>
          <NavLink to="/register">
            <button className="block ms-3 px-2 py-1.5 border-2 rounded bg-primary text-white transition duration-300 hover:bg-white hover:text-primary border-primary">
              {t("navbar.signup")}
            </button>
          </NavLink>
        </div>
        <button onClick={toggleMenu} className="lg:hidden py-4">
          <img src={isMenuOpen ? close : menu} alt="menu-toggle" className="w-7" />
        </button>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden font-semibold py-1">
          <NavLink className={({ isActive }) => (isActive ? activeLink : normalLink)} to="/">
            <div className="my-2 pb-2 block border-b-2">{t("navbar.home")}</div>
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? activeLink : normalLink)} to="/overview">
            <div className="my-2 pb-2 block border-b-2">{t("navbar.overview")}</div>
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? activeLink : normalLink)} to="/documentation">
            <div className="my-2 pb-2 block border-b-2">{t("navbar.documentation")}</div>
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? activeLink : normalLink)} to="/about">
            <div className="my-2 pb-2 block border-b-2">{t("navbar.aboutus")}</div>
          </NavLink>
          <div className="my-2 block">
            <div className="inline-flex font-body text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer w-40">
              <LanguageSelector />
            </div>
          </div>
          <NavLink
            to="/login"
            className="my-2 block text-center ms-3 px-2 py-1.5 border-2 rounded bg-primary text-white transition duration-300 hover:bg-white hover:text-primary border-primary"
          >
            {t("navbar.signin")}
          </NavLink>
          <NavLink
            to="/register"
            className="my-2 block text-center ms-3 px-2 py-1.5 border-2 rounded bg-primary text-white transition duration-300 hover:bg-white hover:text-primary border-primary"
          >
            {t("navbar.signup")}
          </NavLink>
        </div>
      )}
    </nav>
  );
};
