import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import logo from "../../../../../_timouy/assets/svg/logo.svg";
import { useSelector } from "react-redux";
import useCategory from "../../../cms/pages/category/core/action";
import englishImg from "../../../../../_timouy/assets/svg/english.svg";
import cambodia from "../../../../../_timouy/assets/svg/cambodia.svg";
import changeLanguageIcon from "../../../../../_timouy/assets/svg/change-language.svg";
import { Avatar, Dropdown } from "flowbite-react";

const Header = () => {
    const { id } = useParams();
    const { categories, categoriesPub } = useSelector((state) => state.category);
    const { user } = useSelector((state) => state.auth);
    const { getCategories, getCategoriesPub } = useCategory();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isKhmer, setIsKhmer] = useState(() => {
        const savedLang = localStorage.getItem('isKhmer');
        return savedLang === 'true';
    });
    const languages = [
        { code: 'en', flag: englishImg, lang: 'English' },
        { code: 'kh', flag: cambodia, lang: 'Khmer' },
    ];

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    useEffect(() => {
        if (user) {
            getCategories();
        } else {
            getCategoriesPub(id);
        }
        // eslint-disable-next-line
    }, []);

    const changeLanguage = (languageCode) => {
        const isKhmerSelected = languageCode === 'kh';
        setIsKhmer(isKhmerSelected);
        localStorage.setItem('isKhmer', isKhmerSelected);
    };

    const categoryList = user ? categories : categoriesPub;

    return (
        <header className="sticky top-0 z-10 px-6 md:px-12 py-0 bg-white border-b-2">
            <div className="flex items-center justify-between">
                <NavLink to={`/${user?.id}/template/ngo`}>
                    <img src={logo} alt="Logo" className="w-10 h-14" />
                </NavLink>

                <nav id="navbar" className="hidden md:flex space-x-6 text-lg font-medium">
                    <NavLink
                        to={`/${id}/template/ngo`}
                        end
                        className={({ isActive }) =>
                            `hover:underline ${isActive ? 'text-[#148ECE] font-bold' : ''}`
                        }
                    >
                        {isKhmer ? 'ទំព័រដើម' : 'Home'}
                    </NavLink>

                    {categoryList.map((cat) => (
                        <NavLink
                            to={`/${id}/template/ngo/ngo-item/${cat.id}`}
                            key={cat.id}
                            className={({ isActive }) =>
                                `hover:underline ${isActive ? 'text-[#148ECE] font-bold' : ''}`
                            }
                        >
                            {isKhmer ? cat.khName : cat.name}
                        </NavLink>
                    ))}
                </nav>
                <div className="flex items-center space-x-4 md:space-x-6 lg:flex-">
                    <div className="lg:flex hidden">
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
                                    className={isKhmer === (lng.code === 'kh') ? "bg-gray-100" : ""}
                                >
                                    <div className="flex items-center">
                                        <Avatar img={lng.flag} rounded alt={`${lng.lang} flag`} size="xs" />
                                        <span className="ml-2">{lng.lang}</span>
                                    </div>
                                </Dropdown.Item>
                            ))}
                        </Dropdown>
                    </div>
                    <button
                        id="mobile-menu-button"
                        className="md:hidden text-black focus:outline-none"
                        aria-label="Toggle mobile menu"
                        aria-expanded={isMobileMenuOpen}
                        aria-controls="mobile-menu"
                        onClick={toggleMobileMenu}
                    >
                        {!isMobileMenuOpen ? (
                            <svg
                                id="menu-icon"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="w-8 h-8"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        ) : (
                            <svg
                                id="close-icon"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="w-8 h-8"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div id="mobile-menu" className="md:hidden my-4">
                    <nav className="flex flex-col space-y-4 text-lg font-medium">
                        <NavLink
                            to={`/${id}/template/ngo`}
                            end
                            className={({ isActive }) =>
                                `hover:underline ${isActive ? 'text-[#148ECE] font-bold' : ''}`
                            }
                        >
                            {isKhmer ? 'ទំព័រដើម' : 'Home'}
                        </NavLink>
                        {categoryList.map((cat) => (
                            <NavLink
                                to={`/${id}/template/ngo/ngo-item/${cat.id}`}
                                key={cat.id}
                                className={({ isActive }) =>
                                    `hover:underline ${isActive ? 'text-[#148ECE] font-bold' : ''}`
                                }
                                onClick={closeMobileMenu}
                            >
                                {isKhmer ? cat.khName : cat.name}
                            </NavLink>
                        ))}
                    </nav>
                    <div className="pt-2">
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
                                    className={isKhmer === (lng.code === 'kh') ? "bg-gray-100" : ""}
                                >
                                    <div className="flex items-center">
                                        <Avatar img={lng.flag} rounded alt={`${lng.lang} flag`} size="xs" />
                                        <span className="ml-2">{lng.lang}</span>
                                    </div>
                                </Dropdown.Item>
                            ))}
                        </Dropdown>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
