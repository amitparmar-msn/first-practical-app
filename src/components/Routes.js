import React from "react";

// import { HomePage } from "./pages/HomePage";
// import { AboutPage } from "./pages/AboutPage";
// import { UserPage } from "./pages/UserPage";

import { HomePage } from "../pages/HomePage";
import { AboutPage } from "../pages/AboutPage";
import { UserPage } from "../pages/UserPage";
import { Route, Routes } from "react-router-dom";
const PageRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/user" element={<UserPage />} />
            </Routes>
        </>
    );
};

export default PageRoutes;
