import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Setting } from './components/Setting';
import ActivityLogs from './components/ActivityLogs';
import { ContactSetting } from './components/ContactSetting';

const SettingPage = () => {
    return (
        <Routes>
            <Route path="/" element={<Setting />}>
                <Route index element={<Navigate to="contact-setting" />} />
                <Route path="contact-setting" element={<ContactSetting />} />
                <Route path="activity-logs" element={<ActivityLogs />} />
            </Route>
        </Routes>
    );
};

export default SettingPage;
