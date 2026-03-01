import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AccountInformation = () => {
  const [activeTab, setActiveTab] = useState("contact");
  const navigate = useNavigate();

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (tab === "contact") {
      navigate("contact-setting");
    } else if (tab === "purchase") {
      navigate("activity-logs");
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl text-black font-bold mb-4">Account Information</h1>
      <div className="flex space-x-8">
        <button
          className={`pb-2 text-black ${activeTab === "contact" ? "border-b-2 border-black font-semibold" : ""}`}
          onClick={() => handleTabClick("contact")}
        >
          Contact & settings
        </button>
        <button
          className={`pb-2 text-black ${activeTab === "purchase" ? "border-b-2 border-black font-semibold" : ""}`}
          onClick={() => handleTabClick("purchase")}
        >
          Activity logs
        </button>
      </div>
    </div>
  );
};

export default AccountInformation;
