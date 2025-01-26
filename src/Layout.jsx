import React from "react";
import Header from "./Pages/Header";
import Footer from "./Pages/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
    return(
        <>
        <Header />
        <Outlet />
        <Footer />
        </>
    )
}

export default Layout;