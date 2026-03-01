import logo from "../../../../_timouy/assets/svg/logo.svg";
import { ReactComponent as Post } from "../../../../_timouy/assets/svg/post.svg";
import { ReactComponent as Category } from "../../../../_timouy/assets/svg/category.svg";
import { ReactComponent as Media } from "../../../../_timouy/assets/svg/media.svg";
import { ReactComponent as Comment } from "../../../../_timouy/assets/svg/comment.svg";
// import { ReactComponent as Privacy } from "../../../../_timouy/assets/svg/privacy.svg";
import { ReactComponent as Appearance } from "../../../../_timouy/assets/svg/wand.svg";
import { ReactComponent as Setting } from "../../../../_timouy/assets/svg/setting.svg";
import { ReactComponent as Home } from "../../../../_timouy/assets/svg/home.svg";
import { ReactComponent as Internet } from "../../../../_timouy/assets/svg/internet.svg";
import { ReactComponent as Slider } from "../../../../_timouy/assets/svg/carousel-1.svg"
import burger from "../../../../_timouy/assets/svg/burger.svg";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Dropdown } from "flowbite-react";
import { HiLogout, HiUser } from "react-icons/hi";
import { useEffect } from "react";
import useUser from "../pages/users/core/action";
import no_avartar from "../../../../_timouy/assets/images/pf.png"

export const SideBar = () => {
  const location = useLocation();
  const { getUserInfo, user: { info: user } } = useUser()

  useEffect(() => {
    getUserInfo()
  }, []);

  const isBasePathActive = location.pathname.startsWith('/user-dashboard/setting');

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="side-bar">
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 px-5">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <img src={burger} className="h-8 me-3" alt="burger" />
                <span className="sr-only">Open sidebar</span>
              </button>
              <Link to="/" className="flex ms-2 md:me-24">
                <img src={logo} className="h-8 me-3" alt="FlowBite Logo" />
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                  TIMOUY
                </span>
              </Link>

              <Link to={`/${user?.id}/template/ngo`} target="_blank" className="flex text-center items-center"><Internet className="me-1" /> timouy.com</Link>
            </div>
            <Dropdown
              label=""
              dismissOnClick={true}
              renderTrigger={() => (
                <div className="flex items-center gap-2 cursor-pointer">
                  <img
                    class="w-8 h-8 rounded-full"
                    src={user?.profile || no_avartar}
                    alt="user"
                  />
                  <p class="text-sm text-gray-900 dark:text-white" role="none">
                    {user?.username || "username"}
                  </p>
                </div>
              )}
            >
              <Dropdown.Header>
                <div className="flex gap-4 items-center">
                  <img
                    class="w-8 h-8 rounded-full"
                    src={user?.profile || no_avartar}
                    alt="user"
                  />
                  <div>
                    <span className="block text-sm">
                      {" "}
                      {user?.username || "username"}
                    </span>
                    <span className="block truncate text-sm font-medium">
                      {user?.email || "email"}
                    </span>
                  </div>
                </div>
              </Dropdown.Header>
              <Dropdown.Item as={Link} to="/user-dashboard/setting" icon={HiUser}>My Profile</Dropdown.Item>
              <Dropdown.Item
                icon={HiLogout}
                onClick={() => {
                  localStorage.removeItem("token");
                  localStorage.removeItem("user");
                  window.location.reload();
                }}
              >
                Sign out
              </Dropdown.Item>
            </Dropdown>
          </div>
        </div>
      </nav>

      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar"
      >
        <div className="h-full px-7 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                to="/user-dashboard"
                className={`menu-sidebar flex items-center p-2 text-gray-900 rounded-lg dark:text-white dark:hover:bg-gray-700 group ${isActive("/user-dashboard") ? "active-link" : ""
                  }`}
              >
                <Home />
                <span className="ms-3">My Home</span>
              </Link>
            </li>
            <li>
              <Link
                to="/user-dashboard/post"
                className={`menu-sidebar flex items-center p-2 text-gray-900 rounded-lg dark:text-white  dark:hover:bg-gray-700 group ${isActive("/user-dashboard/post") ? "active-link" : ""
                  }`}
              >
                <Post />
                <span className="flex-1 ms-3 whitespace-nowrap">Post</span>
              </Link>
            </li>
            <li>
              <Link
                to="/user-dashboard/category"
                className={`menu-sidebar flex items-center p-2 text-gray-900 rounded-lg dark:text-white dark:hover:bg-gray-700 group ${isActive("/user-dashboard/category") ? "active-link" : ""
                  }`}
              >
                <Category />
                <span className="flex-1 ms-3 whitespace-nowrap">Category</span>
              </Link>
            </li>
            <li>
              <Link
                to="/user-dashboard/media"
                className={`menu-sidebar flex items-center p-2 text-gray-900 rounded-lg dark:text-white  dark:hover:bg-gray-700 group ${isActive("/user-dashboard/media") ? "active-link" : ""
                  }`}
              >
                <Media />
                <span className="flex-1 ms-3 whitespace-nowrap">Media</span>
              </Link>
            </li>
            <li>
              <Link
                to="/user-dashboard/slider"
                className={`menu-sidebar flex items-center p-2 text-gray-900 rounded-lg dark:text-white  dark:hover:bg-gray-700 group ${isActive("/user-dashboard/slider") ? "active-link" : ""
                  }`}
              >
                <Slider />
                <span className="flex-1 ms-3 whitespace-nowrap">Slider</span>
              </Link>
            </li>
            <li>
              <Link
                to="/user-dashboard/template"
                className={`menu-sidebar flex items-center p-2 text-gray-900 rounded-lg dark:text-white  dark:hover:bg-gray-700 group ${isActive("/user-dashboard/template") ? "active-link" : ""
                  }`}
              >
                <Appearance />
                <span className="flex-1 ms-3 whitespace-nowrap">Template</span>
              </Link>
            </li>
            <li>
              <Link
                to="/user-dashboard/comment"
                className={`menu-sidebar flex items-center p-2 text-gray-900 rounded-lg dark:text-white  dark:hover:bg-gray-700 group ${isActive("/user-dashboard/comment") ? "active-link" : ""
                  }`}
              >
                <Comment />
                <span className="flex-1 ms-3 whitespace-nowrap">Comment</span>
              </Link>
            </li>
            <li>
              <NavLink
                to="/user-dashboard/setting/contact-setting"
                className={`menu-sidebar flex items-center p-2 text-gray-900 rounded-lg dark:text-white dark:hover:bg-gray-700 group ${isBasePathActive ? 'active-link' : ''
                  }`}
              >
                <Setting />
                <span className="flex-1 ms-3 whitespace-nowrap">Setting</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};