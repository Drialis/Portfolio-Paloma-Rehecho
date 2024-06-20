import { Routes, Route } from "react-router-dom";
import WelcomePage from "../Pages/WelcomePage/WelcomePage";
import AboutMe from "../Pages/AboutMe/AboutMe";
import React from 'react';
import './AppRoutes.css';
import { Container } from "react-bootstrap";
import ProjectsPage from "../Pages/ProjectsPage/ProjectsPage";
import ItToolsPage from "../Pages/ItToolsPage/ItToolsPage";

const AppRoutes = () => {
    return (
        <Container fluid className="AppRoutes">
            <Routes>
                <Route path="/" element={<WelcomePage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/it-tools" element={<ItToolsPage />} />
                <Route path="/about-me" element={<AboutMe />} />
                <Route path="/contact" element={<AboutMe />} />
                {/* <Route path="/custom-map" element={<CustomMap />} /> */}
                {/* <Route path="/*" element={<NotFoundPage />} /> */}
            </Routes>
        </Container>
    );
};

export default AppRoutes;
