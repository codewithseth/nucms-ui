import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, Link, useParams } from "react-router-dom";
import useCategory from "../../../cms/pages/category/core/action";
import { Avatar, Dropdown } from "flowbite-react";
import englishImg from "../../../../../_timouy/assets/svg/english.svg";
import cambodia from "../../../../../_timouy/assets/svg/cambodia.svg";
import changeLanguageIcon from "../../../../../_timouy/assets/svg/change-language.svg";

const Navbar = () => {
  const { id } = useParams();
  const { categories, categoriesPub } = useSelector((state) => state.category);
  const { user } = useSelector(state => state.auth);
  const { getCategories, getCategoriesPub } = useCategory();
  const [isKhmer, setIsKhmer] = useState(() => {
    const savedLang = localStorage.getItem('isKhmer');
    return savedLang === 'true';
  });
  const languages = [
    { code: 'en', flag: englishImg, lang: 'English' },
    { code: 'kh', flag: cambodia, lang: 'Khmer' },
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const activeLink = "text-[#5850ec] text-lg font-body";
  const normalLink = "text-black text-lg font-body";

  useEffect(() => {
    if (user) {
      getCategories();
    } else {
      getCategoriesPub(id);
    }
    // eslint-disable-next-line
  }, [])

  const changeLanguage = (languageCode) => {
    const isKhmerSelected = languageCode === 'kh';
    setIsKhmer(isKhmerSelected);
    localStorage.setItem('isKhmer', isKhmerSelected);
  };

  const categoryList = user ? categories : categoriesPub;

  return (
    <header className="sticky top-0 z-50 lg:py-4 pt-3 sm:py-4 px-4 bg-white border-b-2">
      <div className="flex items-center justify-between">
        <div className="relative">
          <input
            type="search"
            className="relative m-0 block w-full rounded border border-solid border-neutral-200 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-white/10 dark:text-white dark:placeholder:text-neutral-200 dark:autofill:shadow-autofill dark:focus:border-primary"
            placeholder="Search"
            aria-label="Search"
            id="exampleFormControlInput4"
          />
        </div>
        {/* For Desktop */}
        <div className="lg:flex items-center gap-7 hidden text-black list-none font-semibold">
          <NavLink
            to={`/${id}/template/citizen`}
            end
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            {isKhmer ? 'ទំព័រដើម' : 'Home'}
          </NavLink>
          {categoryList.map((category) => (
            <NavLink
              key={category.id}
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
              to={`/${id}/template/citizen/citizen-item/${category.id}`}
            >
              {isKhmer ? category.khName : category.name}
            </NavLink>
          ))}
        </div>
        <div className="lg:flex hidden">
          <div className="bg-white w-full h-auto flex items-center gap-2 flex-wrap">
            <Link
              to={"#"}
              className="p-2 rounded-lg flex items-center border border-gray-300 justify-center transition-all duration-500 hover:border-gray-100 hover:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 71 72"
                fill="none"
              >
                <path
                  d="M46.4233 38.6403L47.7279 30.3588H39.6917V24.9759C39.6917 22.7114 40.8137 20.4987 44.4013 20.4987H48.1063V13.4465C45.9486 13.1028 43.7685 12.9168 41.5834 12.8901C34.9692 12.8901 30.651 16.8626 30.651 24.0442V30.3588H23.3193V38.6403H30.651V58.671H39.6917V38.6403H46.4233Z"
                  fill="#111827"
                />
              </svg>
            </Link>
            <Link
              to={"#"}
              className="p-2 rounded-lg flex items-center border border-gray-300 justify-center transition-all duration-500 hover:border-gray-100 hover:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 71 72"
                fill="none"
              >
                <path
                  d="M27.3762 35.7808C27.3762 31.1786 31.1083 27.4468 35.7132 27.4468C40.3182 27.4468 44.0522 31.1786 44.0522 35.7808C44.0522 40.383 40.3182 44.1148 35.7132 44.1148C31.1083 44.1148 27.3762 40.383 27.3762 35.7808ZM22.8683 35.7808C22.8683 42.8708 28.619 48.618 35.7132 48.618C42.8075 48.618 48.5581 42.8708 48.5581 35.7808C48.5581 28.6908 42.8075 22.9436 35.7132 22.9436C28.619 22.9436 22.8683 28.6908 22.8683 35.7808ZM46.0648 22.4346C46.0646 23.0279 46.2404 23.608 46.5701 24.1015C46.8997 24.595 47.3684 24.9797 47.9168 25.2069C48.4652 25.4342 49.0688 25.4939 49.6511 25.3784C50.2334 25.2628 50.7684 24.9773 51.1884 24.5579C51.6084 24.1385 51.8945 23.6041 52.0105 23.0222C52.1266 22.4403 52.0674 21.8371 51.8404 21.2888C51.6134 20.7406 51.2289 20.2719 50.7354 19.942C50.2418 19.6122 49.6615 19.436 49.0679 19.4358H49.0667C48.2708 19.4361 47.5077 19.7522 46.9449 20.3144C46.3821 20.8767 46.0655 21.6392 46.0648 22.4346ZM25.6072 56.1302C23.1683 56.0192 21.8427 55.6132 20.9618 55.2702C19.7939 54.8158 18.9606 54.2746 18.0845 53.4002C17.2083 52.5258 16.666 51.6938 16.2133 50.5266C15.8699 49.6466 15.4637 48.3214 15.3528 45.884C15.2316 43.2488 15.2073 42.4572 15.2073 35.781C15.2073 29.1048 15.2336 28.3154 15.3528 25.678C15.4639 23.2406 15.8731 21.918 16.2133 21.0354C16.668 19.8682 17.2095 19.0354 18.0845 18.1598C18.9594 17.2842 19.7919 16.7422 20.9618 16.2898C21.8423 15.9466 23.1683 15.5406 25.6072 15.4298C28.244 15.3086 29.036 15.2844 35.7132 15.2844C42.3904 15.2844 43.1833 15.3106 45.8223 15.4298C48.2612 15.5408 49.5846 15.9498 50.4677 16.2898C51.6356 16.7422 52.4689 17.2854 53.345 18.1598C54.2211 19.0342 54.7615 19.8682 55.2161 21.0354C55.5595 21.9154 55.9658 23.2406 56.0767 25.678C56.1979 28.3154 56.2221 29.1048 56.2221 35.781C56.2221 42.4572 56.1979 43.2466 56.0767 45.884C55.9656 48.3214 55.5573 49.6462 55.2161 50.5266C54.7615 51.6938 54.2199 52.5266 53.345 53.4002C52.4701 54.2738 51.6356 54.8158 50.4677 55.2702C49.5872 55.6134 48.2612 56.0194 45.8223 56.1302C43.1855 56.2514 42.3934 56.2756 35.7132 56.2756C29.033 56.2756 28.2432 56.2514 25.6072 56.1302ZM25.4001 10.9322C22.7371 11.0534 20.9174 11.4754 19.3282 12.0934C17.6824 12.7316 16.2892 13.5878 14.897 14.977C13.5047 16.3662 12.6502 17.7608 12.0116 19.4056C11.3933 20.9948 10.971 22.8124 10.8497 25.4738C10.7265 28.1394 10.6982 28.9916 10.6982 35.7808C10.6982 42.57 10.7265 43.4222 10.8497 46.0878C10.971 48.7494 11.3933 50.5668 12.0116 52.156C12.6502 53.7998 13.5049 55.196 14.897 56.5846C16.289 57.9732 17.6824 58.8282 19.3282 59.4682C20.9204 60.0862 22.7371 60.5082 25.4001 60.6294C28.0687 60.7506 28.92 60.7808 35.7132 60.7808C42.5065 60.7808 43.3592 60.7526 46.0264 60.6294C48.6896 60.5082 50.5081 60.0862 52.0983 59.4682C53.7431 58.8282 55.1373 57.9738 56.5295 56.5846C57.9218 55.1954 58.7745 53.7998 59.4149 52.156C60.0332 50.5668 60.4575 48.7492 60.5768 46.0878C60.698 43.4202 60.7262 42.57 60.7262 35.7808C60.7262 28.9916 60.698 28.1394 60.5768 25.4738C60.4555 22.8122 60.0332 20.9938 59.4149 19.4056C58.7745 17.7618 57.9196 16.3684 56.5295 14.977C55.1395 13.5856 53.7431 12.7316 52.1003 12.0934C50.5081 11.4754 48.6894 11.0514 46.0284 10.9322C43.3612 10.811 42.5085 10.7808 35.7152 10.7808C28.922 10.7808 28.0687 10.809 25.4001 10.9322Z"
                  fill="#111827"
                />
              </svg>
            </Link>
            <Link
              to={"#"}
              className="p-2 rounded-lg flex items-center border border-gray-300 justify-center transition-all duration-500 hover:border-gray-100 hover:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 72 72"
                fill="none"
              >
                <path
                  d="M24.7612 55.999V28.3354H15.5433V55.999H24.7621H24.7612ZM20.1542 24.5591C23.3679 24.5591 25.3687 22.4348 25.3687 19.7801C25.3086 17.065 23.3679 15 20.2153 15C17.0605 15 15 17.065 15 19.7799C15 22.4346 17.0001 24.5588 20.0938 24.5588H20.1534L20.1542 24.5591ZM29.8633 55.999H39.0805V40.5521C39.0805 39.7264 39.1406 38.8985 39.3841 38.3088C40.0502 36.6562 41.5668 34.9455 44.1138 34.9455C47.4484 34.9455 48.7831 37.4821 48.7831 41.2014V55.999H58V40.1376C58 31.6408 53.4532 27.6869 47.3887 27.6869C42.4167 27.6869 40.233 30.4589 39.0198 32.347H39.0812V28.3364H29.8638C29.9841 30.9316 29.8631 56 29.8631 56L29.8633 55.999Z"
                  fill="#111827"
                />
              </svg>
            </Link>
            <Link
              to={"#"}
              className="p-2 rounded-lg flex items-center border border-gray-300 justify-center transition-all duration-500 hover:border-gray-100 hover:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 72 72"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M36.4808 11C22.1254 11 11 21.317 11 35.2508C11 42.5396 14.0454 48.8375 19.0031 53.1887C19.4184 53.5559 19.6696 54.0639 19.6901 54.6122L19.8285 59.059C19.8747 60.4775 21.3666 61.398 22.6894 60.8296L27.7445 58.6414C28.1752 58.4553 28.652 58.4201 29.1031 58.5408C31.4256 59.1696 33.9019 59.5016 36.4808 59.5016C50.8361 59.5016 61.9615 49.1846 61.9615 35.2508C61.9615 21.317 50.8361 11 36.4808 11ZM51.7795 29.6572L44.2942 41.3072C43.1047 43.1584 40.5515 43.6211 38.7674 42.3082L32.815 37.9269C32.2664 37.5245 31.5179 37.5295 30.9745 37.9319L22.9355 43.9179C21.8639 44.7177 20.4592 43.4551 21.1821 42.3384L28.6674 30.6884C29.8568 28.8372 32.41 28.3745 34.1942 29.6874L40.1465 34.0687C40.6951 34.4711 41.4436 34.4661 41.9871 34.0637L50.0261 28.0777C51.0976 27.2779 52.5024 28.5405 51.7795 29.6572Z"
                  fill="#111827"
                />
              </svg>
            </Link>
          </div>
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
        <button onClick={toggleMenu} className="lg:hidden">
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            viewBox="0 0 24 24"
            className="w-6 h-6"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {/* For Mobile */}
      {isMenuOpen ? (
        <div className="lg:hidden font-semibold">
          <NavLink
            to={`/${id}/template/citizen`}
            end
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            <div className="block text-center my-2">
              {isKhmer ? 'ទំព័រដើម' : 'Home'}
            </div>
          </NavLink>
          {categoryList.map((category) => (
            <NavLink
              key={category.id}
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
              to={`/${id}/template/citizen/citizen-item/${category.id}`}
            >
              <div className="block text-center my-2">
                {isKhmer ? category.khName : category.name}
              </div>
            </NavLink>
          ))}
          <div className="flex items-center justify-center">
            <div className="bg-white w-full h-auto flex items-center justify-center gap-2 flex-wrap mt-1 mb-2">
              <Link
                to={"#"}
                className="p-2 rounded-lg flex items-center border border-gray-300 justify-center transition-all duration-500 hover:border-gray-100 hover:bg-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 71 72"
                  fill="none"
                >
                  <path
                    d="M46.4233 38.6403L47.7279 30.3588H39.6917V24.9759C39.6917 22.7114 40.8137 20.4987 44.4013 20.4987H48.1063V13.4465C45.9486 13.1028 43.7685 12.9168 41.5834 12.8901C34.9692 12.8901 30.651 16.8626 30.651 24.0442V30.3588H23.3193V38.6403H30.651V58.671H39.6917V38.6403H46.4233Z"
                    fill="#111827"
                  />
                </svg>
              </Link>
              <Link
                to={"#"}
                className="p-2 rounded-lg flex items-center border border-gray-300 justify-center transition-all duration-500 hover:border-gray-100 hover:bg-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 71 72"
                  fill="none"
                >
                  <path
                    d="M27.3762 35.7808C27.3762 31.1786 31.1083 27.4468 35.7132 27.4468C40.3182 27.4468 44.0522 31.1786 44.0522 35.7808C44.0522 40.383 40.3182 44.1148 35.7132 44.1148C31.1083 44.1148 27.3762 40.383 27.3762 35.7808ZM22.8683 35.7808C22.8683 42.8708 28.619 48.618 35.7132 48.618C42.8075 48.618 48.5581 42.8708 48.5581 35.7808C48.5581 28.6908 42.8075 22.9436 35.7132 22.9436C28.619 22.9436 22.8683 28.6908 22.8683 35.7808ZM46.0648 22.4346C46.0646 23.0279 46.2404 23.608 46.5701 24.1015C46.8997 24.595 47.3684 24.9797 47.9168 25.2069C48.4652 25.4342 49.0688 25.4939 49.6511 25.3784C50.2334 25.2628 50.7684 24.9773 51.1884 24.5579C51.6084 24.1385 51.8945 23.6041 52.0105 23.0222C52.1266 22.4403 52.0674 21.8371 51.8404 21.2888C51.6134 20.7406 51.2289 20.2719 50.7354 19.942C50.2418 19.6122 49.6615 19.436 49.0679 19.4358H49.0667C48.2708 19.4361 47.5077 19.7522 46.9449 20.3144C46.3821 20.8767 46.0655 21.6392 46.0648 22.4346ZM25.6072 56.1302C23.1683 56.0192 21.8427 55.6132 20.9618 55.2702C19.7939 54.8158 18.9606 54.2746 18.0845 53.4002C17.2083 52.5258 16.666 51.6938 16.2133 50.5266C15.8699 49.6466 15.4637 48.3214 15.3528 45.884C15.2316 43.2488 15.2073 42.4572 15.2073 35.781C15.2073 29.1048 15.2336 28.3154 15.3528 25.678C15.4639 23.2406 15.8731 21.918 16.2133 21.0354C16.668 19.8682 17.2095 19.0354 18.0845 18.1598C18.9594 17.2842 19.7919 16.7422 20.9618 16.2898C21.8423 15.9466 23.1683 15.5406 25.6072 15.4298C28.244 15.3086 29.036 15.2844 35.7132 15.2844C42.3904 15.2844 43.1833 15.3106 45.8223 15.4298C48.2612 15.5408 49.5846 15.9498 50.4677 16.2898C51.6356 16.7422 52.4689 17.2854 53.345 18.1598C54.2211 19.0342 54.7615 19.8682 55.2161 21.0354C55.5595 21.9154 55.9658 23.2406 56.0767 25.678C56.1979 28.3154 56.2221 29.1048 56.2221 35.781C56.2221 42.4572 56.1979 43.2466 56.0767 45.884C55.9656 48.3214 55.5573 49.6462 55.2161 50.5266C54.7615 51.6938 54.2199 52.5266 53.345 53.4002C52.4701 54.2738 51.6356 54.8158 50.4677 55.2702C49.5872 55.6134 48.2612 56.0194 45.8223 56.1302C43.1855 56.2514 42.3934 56.2756 35.7132 56.2756C29.033 56.2756 28.2432 56.2514 25.6072 56.1302ZM25.4001 10.9322C22.7371 11.0534 20.9174 11.4754 19.3282 12.0934C17.6824 12.7316 16.2892 13.5878 14.897 14.977C13.5047 16.3662 12.6502 17.7608 12.0116 19.4056C11.3933 20.9948 10.971 22.8124 10.8497 25.4738C10.7265 28.1394 10.6982 28.9916 10.6982 35.7808C10.6982 42.57 10.7265 43.4222 10.8497 46.0878C10.971 48.7494 11.3933 50.5668 12.0116 52.156C12.6502 53.7998 13.5049 55.196 14.897 56.5846C16.289 57.9732 17.6824 58.8282 19.3282 59.4682C20.9204 60.0862 22.7371 60.5082 25.4001 60.6294C28.0687 60.7506 28.92 60.7808 35.7132 60.7808C42.5065 60.7808 43.3592 60.7526 46.0264 60.6294C48.6896 60.5082 50.5081 60.0862 52.0983 59.4682C53.7431 58.8282 55.1373 57.9738 56.5295 56.5846C57.9218 55.1954 58.7745 53.7998 59.4149 52.156C60.0332 50.5668 60.4575 48.7492 60.5768 46.0878C60.698 43.4202 60.7262 42.57 60.7262 35.7808C60.7262 28.9916 60.698 28.1394 60.5768 25.4738C60.4555 22.8122 60.0332 20.9938 59.4149 19.4056C58.7745 17.7618 57.9196 16.3684 56.5295 14.977C55.1395 13.5856 53.7431 12.7316 52.1003 12.0934C50.5081 11.4754 48.6894 11.0514 46.0284 10.9322C43.3612 10.811 42.5085 10.7808 35.7152 10.7808C28.922 10.7808 28.0687 10.809 25.4001 10.9322Z"
                    fill="#111827"
                  />
                </svg>
              </Link>
              <Link
                to={"#"}
                class="p-2 rounded-lg flex items-center border border-gray-300 justify-center transition-all duration-500 hover:border-gray-100 hover:bg-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 72 72"
                  fill="none"
                >
                  <path
                    d="M24.7612 55.999V28.3354H15.5433V55.999H24.7621H24.7612ZM20.1542 24.5591C23.3679 24.5591 25.3687 22.4348 25.3687 19.7801C25.3086 17.065 23.3679 15 20.2153 15C17.0605 15 15 17.065 15 19.7799C15 22.4346 17.0001 24.5588 20.0938 24.5588H20.1534L20.1542 24.5591ZM29.8633 55.999H39.0805V40.5521C39.0805 39.7264 39.1406 38.8985 39.3841 38.3088C40.0502 36.6562 41.5668 34.9455 44.1138 34.9455C47.4484 34.9455 48.7831 37.4821 48.7831 41.2014V55.999H58V40.1376C58 31.6408 53.4532 27.6869 47.3887 27.6869C42.4167 27.6869 40.233 30.4589 39.0198 32.347H39.0812V28.3364H29.8638C29.9841 30.9316 29.8631 56 29.8631 56L29.8633 55.999Z"
                    fill="#111827"
                  />
                </svg>
              </Link>
              <Link
                to={"#"}
                class="p-2 rounded-lg flex items-center border border-gray-300 justify-center transition-all duration-500 hover:border-gray-100 hover:bg-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 72 72"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M36.4808 11C22.1254 11 11 21.317 11 35.2508C11 42.5396 14.0454 48.8375 19.0031 53.1887C19.4184 53.5559 19.6696 54.0639 19.6901 54.6122L19.8285 59.059C19.8747 60.4775 21.3666 61.398 22.6894 60.8296L27.7445 58.6414C28.1752 58.4553 28.652 58.4201 29.1031 58.5408C31.4256 59.1696 33.9019 59.5016 36.4808 59.5016C50.8361 59.5016 61.9615 49.1846 61.9615 35.2508C61.9615 21.317 50.8361 11 36.4808 11ZM51.7795 29.6572L44.2942 41.3072C43.1047 43.1584 40.5515 43.6211 38.7674 42.3082L32.815 37.9269C32.2664 37.5245 31.5179 37.5295 30.9745 37.9319L22.9355 43.9179C21.8639 44.7177 20.4592 43.4551 21.1821 42.3384L28.6674 30.6884C29.8568 28.8372 32.41 28.3745 34.1942 29.6874L40.1465 34.0687C40.6951 34.4711 41.4436 34.4661 41.9871 34.0637L50.0261 28.0777C51.0976 27.2779 52.5024 28.5405 51.7795 29.6572Z"
                    fill="#111827"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
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
      ) : null}
    </header>
  );
};

export default Navbar;
