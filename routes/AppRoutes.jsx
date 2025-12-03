import { Routes, Route } from "react-router-dom";
import WelcomePage from "../Pages/WelcomePage/WelcomePage";
import AboutMe from "../Pages/AboutMe/AboutMe";
import React from 'react';
import './AppRoutes.css';
import { Container } from "react-bootstrap";
import ProjectsPage from "../Pages/ProjectsPage/ProjectsPage";
import ItToolsPage from "../Pages/ItToolsPage/ItToolsPage";
import ContactPage from "../Pages/ContactPage/ContactPage";
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage";

const AppRoutes = () => {

   // const {i18n} = useTranslation()
  //  const userLang = i18n.language || "en"

    return (
        <Container fluid className="AppRoutes">
            <Routes>

                <Route path="/" element={<WelcomePage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/it-tools" element={<ItToolsPage />} />
                <Route path="/about-me" element={<AboutMe />} />
                <Route path="/contact" element={<ContactPage />} />     
                 {/*TODO: */}           
                {/* <Route path="/custom-map" element={<CustomMap />} /> */}
                <Route path="/*" element={<NotFoundPage/>} /> 

            </Routes>
        </Container>
    );
};

export default AppRoutes;
