import { Routes, Route, Navigate } from "react-router-dom";
import WelcomePage from "../Pages/WelcomePage/WelcomePage";
import AboutMe from "../Pages/AboutMe/AboutMe";
import React from 'react';
import './AppRoutes.css';
import { Container } from "react-bootstrap";
import ProjectsPage from "../Pages/ProjectsPage/ProjectsPage";
import ItToolsPage from "../Pages/ItToolsPage/ItToolsPage";
import ContactPage from "../Pages/ContactPage/ContactPage";
import { useTranslation } from "react-i18next";

const AppRoutes = () => {

   // const {i18n} = useTranslation()
  //  const userLang = i18n.language || "en"

    return (
        <Container fluid className="AppRoutes">
            <Routes>
                {/* <Route path="/" element={<Navigate to={`/${userLang}`}/>} /> */}

                {/* <Route path="/:lng(en|es)" element={<WelcomePage />} /> */}
                <Route path="/" element={<WelcomePage />} />
                {/* <Route path="/:lng(en|es)/projects" element={<ProjectsPage />} /> */}
                <Route path="/projects" element={<ProjectsPage />} />
                {/* <Route path="/:lng(en|es)/it-tools" element={<ItToolsPage />} /> */}
                <Route path="/it-tools" element={<ItToolsPage />} />
                {/* <Route path="/:lng(en|es)/about-me" element={<AboutMe />} /> */}
                <Route path="/about-me" element={<AboutMe />} />
                {/* <Route path="/:lng(en|es)/contact" element={<ContactPage />} /> */}
                <Route path="/contact" element={<ContactPage />} />                
                {/* <Route path="/custom-map" element={<CustomMap />} /> */}
                {/* <Route path="/*" element={<NotFoundPage />} /> */}
                {/* <Route path="*" element={<Navigate to={`/${userLang}`}/>} /> */}

            </Routes>
        </Container>
    );
};

export default AppRoutes;
