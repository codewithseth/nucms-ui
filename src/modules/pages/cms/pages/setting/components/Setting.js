import AccountInformation from "./AccountInfo";
import { Outlet } from "react-router-dom";

export const Setting = () => {
    return (
        <div className="cms-post overflow-x-auto">
            <div className="font-semibold text-[17px]">General settings</div>
            <h1>Manage your profile here.</h1>
            <div className="p-2 bg-gray-50 rounded-lg mt-5 mb-2">
                <div className="bg-white rounded-lg p-2">
                    <AccountInformation />
                    <Outlet />
                </div>
            </div>
        </div>
    );
};
