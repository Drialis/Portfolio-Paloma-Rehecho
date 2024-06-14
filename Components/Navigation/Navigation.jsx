import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <Navbar expand="lg" className="Navbar m-auto align-items-center" expanded={expanded}>
            <Container className='ContainerNavbar'>
                <Navbar.Brand href="/" className="BrandTitle">Paloma Rehecho</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="Navicon" onClick={() => setExpanded(!expanded)} />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto fixed-right">
                        <Link to="/projects" className="nav-link" onClick={() => setExpanded(false)}>
                            Projects
                        </Link>
                        <Link to="/it-tools" className="nav-link" onClick={() => setExpanded(false)}>
                            IT Tools
                        </Link>
                        <Link to="/about-me" className="nav-link" onClick={() => setExpanded(false)}>
                            About me
                        </Link>
                        <Link to="/contact" className="nav-link" onClick={() => setExpanded(false)}>
                            Contact
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;
