import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import logo from "../../../../../_timouy/assets/svg/logo.svg";
import { useSelector } from "react-redux";
import useCategory from "../../../cms/pages/category/core/action";
import { Navbar } from "flowbite-react";
import dataExport from "./../core/MockData";
import englishImg from "../../../../../_timouy/assets/svg/english.svg";
import cambodia from "../../../../../_timouy/assets/svg/cambodia.svg";
import { Avatar, Dropdown } from "flowbite-react";
import changeLanguageIcon from "../../../../../_timouy/assets/svg/change-language.svg";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const { id } = useParams();
  const { categories, categoriesPub } = useSelector((state) => state.category);
  const { user } = useSelector((state) => state.auth);
  const { getCategories, getCategoriesPub } = useCategory();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const [isKhmer, setIsKhmer] = useState(() => {
    const savedLang = localStorage.getItem("isKhmer");
    return savedLang === "true";
  });
  const languages = [
    { code: "en", flag: englishImg, lang: "English" },
    { code: "kh", flag: cambodia, lang: "Khmer" },
  ];

  useEffect(() => {
    if (user) {
      getCategories();
    } else {
      getCategoriesPub(id);
    }
    // eslint-disable-next-line
  }, []);

  const categoryList = user ? categories : categoriesPub;

  const changeLanguage = (languageCode) => {
    const isKhmerSelected = languageCode === "kh";
    setIsKhmer(isKhmerSelected);
    localStorage.setItem("isKhmer", isKhmerSelected);
  };

  const renderLinks = () => {
    if (!Array.isArray(categoryList) || !id) {
      return dataExport.navbar.cate.map((cat) => (
        <div>
          <Navbar.Link
            key={cat.id}
            href={cat.name === "Home" ? `/preview/template/media` : `/preview/template/media/${cat.name}`}
          >
            <p className="text-lg"> {isKhmer ? cat.khName : cat.name}</p>
          </Navbar.Link>
        </div>
      ));
    } else {
      return categoryList.map((cat) => (
        <div>
          <Navbar.Link key={cat.id} href={`/${id}/template/media/${cat.id}`}>
            <p className="text-lg"> {isKhmer ? cat.khName : cat.name}</p>
          </Navbar.Link>
        </div>
      ));
    }
  };

  return (
    <header className="sticky top-0 z-10 px-6 md:px-12 py-0 bg-white border-b-2">
      <Navbar fluid rounded className="p-2 lex items-center justify-between">
        <Navbar.Brand href={id ? `/${user?.id}/template/media` : "/preview/template/media"}>
          {<img src={logo} className="mr-3 h-6 sm:h-9" alt="Logo" />}
        </Navbar.Brand>

        <div className="flex md:order-2 align-center">
          <Navbar.Toggle onClick={toggleMobileMenu} />
        </div>

        <Navbar.Collapse className={`${isMobileMenuOpen ? "block" : "hidden md:flex"} space-x-6 text-lg font-medium`}>
          {renderLinks()}
        </Navbar.Collapse>

        <Dropdown label={<Avatar img={changeLanguageIcon} alt="Change Language" className="cursor-pointer" />} inline>
          {languages.map((lng) => (
            <Dropdown.Item
              key={lng.code}
              onClick={() => changeLanguage(lng.code)}
              className={isKhmer === (lng.code === "kh") ? "bg-gray-100" : ""}
            >
              <div className="flex items-center">
                <Avatar img={lng.flag} rounded alt={`${lng.lang} flag`} size="xs" />
                <span className="ml-2">{lng.lang}</span>
              </div>
            </Dropdown.Item>
          ))}
        </Dropdown>
      </Navbar>

      <div className="lg:flex hidden"></div>
    </header>
  );
};

export default Header;
