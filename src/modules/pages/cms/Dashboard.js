import { Outlet, useLocation } from "react-router-dom";
import { SideBar } from "./components/SideBar";

export const Dashboard = () => {
  const location = useLocation();
  return (
    <div className="dashboard">
      <SideBar key={location.pathname} />
      <main class="p-4 sm:ml-64">
        <div class="p-4 rounded-lg dark:border-gray-700 mt-14">
          <Outlet />
        </div>
      </main>
    </div>
  );
};
