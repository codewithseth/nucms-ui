import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import App from "../../App";
import { useSelector } from "react-redux";
import PrivateRoutes from "./PrivateRoutes";
import { Layout } from "../layout/Layout";
import Home from "../pages/home/HomePage";
import OverView from "../pages/overview/OverView";
import About from "../pages/about/About";
import AuthPage from "../auth/AuthPage";
import CitizenTemplate from "../pages/template/citizen-template/CitizenTemplate";
import CitizenDetail from "../pages/template/citizen-template/CitizenDetail";
import CitizenItem from "../pages/template/citizen-template/CitizenItem";
import NgoTemplate from "../pages/template/ngo-template/NgoTemplate";
import Article from "../pages/template/ngo-template/[id]";
import MediaTemplate from "../pages/template/media-template/MediaTemplate";
import MediaCategory from "../pages/template/media-template/MediaCategory";
import MediaItem from "../pages/template/media-template/MediaItem";
import NgoItem from "../pages/template/ngo-template/NgoItem";

const AppRoutes = () => {
    const { token } = useSelector(state => state.auth);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    {token ? (
                        <>

                            <Route path="/*" element={<PrivateRoutes />} />
                            <Route index element={<Navigate to="/user-dashboard" />} />
                        </>
                    ) : (
                        <>
                            <Route element={<Layout />}>
                                <Route path="/" element={<Home />} />
                                <Route path="/overview" element={<OverView />} />
                                <Route path="/about" element={<About />} />
                                <Route path="*" element={<Navigate to="/" />} />
                            </Route>

                            <Route path="/login" element={<AuthPage page="login" />} />
                            <Route path="/register" element={<AuthPage page="register" />} />
                            <Route path="/verify-email" element={<AuthPage page="verify-email" />} />
                            <Route path="/forgot-password" element={<AuthPage page="forgot-password" />} />
                            <Route path={`/reset-password/:ab`} element={<AuthPage page="reset-password" />} />
                            <Route path="*" element={<Navigate to="/login" />} />
                        </>
                    )}
                    {/* Ngo template */}
                    <Route path={`/:id/template/ngo`} element={<NgoTemplate />} />
                    <Route path={`/:id/template/ngo/:catid`} element={<Article />} />
                    <Route path={`/:id/template/ngo/ngo-item/:catid`} element={<NgoItem />} />
                    <Route path={`/preview/template/ngo`} element={<NgoTemplate />} />
                    {/* Citizen template */}
                    <Route path={`/:id/template/citizen`} element={<CitizenTemplate />} />
                    <Route path={`/:id/template/citizen/:catid`} element={<CitizenDetail />} />
                    <Route path={`/:id/template/citizen/citizen-item/:catid`} element={<CitizenItem />} />
                    <Route path={`/preview/template/citizen`} element={<CitizenTemplate />} />
                    {/* Media template */}
                    <Route path={`/:id/template/media`} element={<MediaTemplate />} />
                    <Route path={`/:id/template/media/:catid`} element={<MediaCategory />} />
                    <Route path={`/:id/template/media/media-item/:catid`} element={<MediaItem />} />
                    
                    <Route path={`/preview/template/media/`} element={<MediaTemplate />} />
                    <Route path={`/preview/template/media/:catname`} element={<MediaCategory />} />
                    <Route path={`/preview/template/media/media-item/:pid`} element={<MediaItem />} />

                    {/* <Route path={`/preview/template/media/:cat`} element={<MediaCategory/>} /> */}
                    
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
