import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages/cms/Dashboard";
import AuthRoutes from "./Router";
import CitizenTemplate from "../pages/template/citizen-template/CitizenTemplate";
import CitizenDetail from "../pages/template/citizen-template/CitizenDetail";
import { useSelector } from "react-redux";
import CitizenItem from "../pages/template/citizen-template/CitizenItem";
import NgoTemplate from "../pages/template/ngo-template/NgoTemplate";
import Article from "../pages/template/ngo-template/[id]";
import MediaTemplate from "../pages/template/media-template/MediaTemplate";
import NgoItem from "../pages/template/ngo-template/NgoItem";

const PrivateRoutes = () => {
    const { user } = useSelector(state => state.auth);

    return (
        <Routes>
            <Route path="/" element={<Navigate to="/user-dashboard" />} />
            {/* Ngo template */}
            <Route path={`/${user?.id}/template/ngo`} element={<NgoTemplate />} />
            <Route path={`/${user?.id}/template/ngo/:catid`} element={<Article />} />
            <Route path={`/${user?.id}/template/ngo/ngo-item/:catid`} element={<NgoItem />} />
            {/* Citizen template */}
            <Route path={`/${user?.id}/template/citizen`} element={<CitizenTemplate />} />
            <Route path={`/${user?.id}/template/citizen/:catid`} element={<CitizenDetail />} />
            <Route path={`/${user?.id}/template/citizen/citizen-item/:catid`} element={<CitizenItem />} />
            {/* Media template */}
            <Route path={`/:id/template/media`} element={<MediaTemplate />} />
            <Route path={`/${user?.id}/template/media/:catid`} element={<CitizenDetail />} />
            <Route path={`/${user?.id}/template/media/media-item/:catid`} element={<CitizenItem />} />

            <Route element={<Dashboard />}>
                {AuthRoutes.map((route, i) => {
                    return <Route key={i} path={route.path} element={route.element} />;
                })}
            </Route>

            <Route path="*" element={<Navigate to="/user-dashboard" />} />
        </Routes>
    );
}

export default PrivateRoutes;
