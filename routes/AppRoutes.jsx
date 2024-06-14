import { Routes, Route } from "react-router-dom"
import WelcomePage from "../Pages/WelcomePage/WelcomePage"
import AboutMe from "../Pages/AboutMe/AboutMe"
import React from 'react'
import './AppRoutes.css'

const AppRoutes = () => {
    return (
        <div className="AppRoutes">
            <Routes>
                <Route path={"/"} element={<WelcomePage />} />
                <Route path={"/projects"} element={<AboutMe />} />
                <Route path={"/it-tools"} element={<AboutMe />} />
                <Route path={"/about-me"} element={<AboutMe />} />
                <Route path={"/contact"} element={<AboutMe />} />
                {/* <Route path={"/custom-map"} element={<CustomMap />} />
s
                <Route path={"/*"} element={<NotFoundPage />} /> */}
            </Routes>
        </div>
    )
}

export default AppRoutes