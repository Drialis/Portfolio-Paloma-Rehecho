import { useEffect, useState } from 'react'
import { Navbar, Nav, Container, Image, Button, Overlay, Dropdown } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import './Navigation.css'
import { useTranslation } from 'react-i18next';

const Navigation = () => {
    const [expanded, setExpanded] = useState(false);
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }
    const { lng } = useParams()

    useEffect(() => {
        if (lng){
            i18n.changeLanguage(lng)
        }
    }, [lng, i18n])


    return (
        <Navbar expand="lg" className="Navbar align-items-center" expanded={expanded}>
            <Container className='ContainerNavbar'>
                <Navbar.Brand href="/" className="BrandTitle"><Image src="https://res.cloudinary.com/du8mlfcf9/image/upload/v1718809637/Presentaci%C3%B3n_diapositiva_Marca_creativa_Doodle_Blanco_y_marr%C3%B3n_1_ra697s.png"></Image></Navbar.Brand>
                <Navbar.Toggle
                    aria-controls="basic-navbar-nav"
                    className="Navicon"
                    onClick={() => setExpanded(!expanded)}
                >
                    <img
                        src="https://res.cloudinary.com/du8mlfcf9/image/upload/v1718363278/navicon_fdew9y.png"
                        alt="Nav icon"
                        className="NavIconImage"
                    />
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto fixed-right">
                        <Link to="/projects" className="nav-link" onClick={() => setExpanded(false)}>
                            {t("NAVIGATION.PROJECTS_LINK")}
                        </Link>
                        <Link to="/it-tools" className="nav-link" onClick={() => setExpanded(false)}>
                            {t("NAVIGATION.IT_TOOLS_LINK")}
                        </Link>
                        <Link to="/about-me" className="nav-link" onClick={() => setExpanded(false)}>
                            {t("NAVIGATION.ABOUT_ME_LINK")}
                        </Link>
                        <Link to="/contact" className="nav-link" onClick={() => setExpanded(false)}>
                            {t("NAVIGATION.CONTACT_LINK")}
                        </Link>
                        <Dropdown >
                            <Dropdown.Toggle className="nav-link">
                            {t("NAVIGATION.LANGUAGES.TITLE")}
                            </Dropdown.Toggle>
                            <Dropdown.Menu style={{backgroundColor: 'rgba(31, 32, 32, 0.5)'}}>
                                <Dropdown.Item className='nav-link' onClick={() =>changeLanguage('en')}>{t("NAVIGATION.LANGUAGES.LANGUAGE_EN")}</Dropdown.Item>
                                <Dropdown.Item className='nav-link' onClick={() => changeLanguage('es')}>{t("NAVIGATION.LANGUAGES.LANGUAGE_ES")}</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;
