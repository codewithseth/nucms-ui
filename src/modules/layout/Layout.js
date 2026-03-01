import React from "react";
import { useLocation } from "react-router-dom";
import { Header } from "./header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";

export const Layout = () => {
  const location = useLocation();
  const hideHeaderAndFooter = location.pathname.startsWith("/user-dashboard");

  return (
    <>
      {!hideHeaderAndFooter && <Header />}
      <Outlet />
      {!hideHeaderAndFooter && <Footer />}
    </>
  );
};
