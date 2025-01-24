import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
import Team from "./components/Team/Team";
import Workshop from "./components/Workshop/Workshop";
import Contests from "./components/Contest/Contest";
import Home from "./components/Home/Home";
import Accommodation from "./components/Accommodation/Accommodation";
import Gallery1 from "./components/Gallery/Gallery";

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