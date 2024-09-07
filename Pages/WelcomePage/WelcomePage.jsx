import React from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './WelcomePage.css';

const WelcomePage = () => {
    return (
        <Container fluid className='WelcomePage g-0'>
            <Row>
                <Col xs={12} md={6} lg={5} style={{ padding: 0 }}>
                    <Card className='br-0'>
                        <Card.Img
                            className="Paloma Rehecho Antolín"
                            src="https://res.cloudinary.com/du8mlfcf9/image/upload/v1719767647/IMG_2136_uekmad.jpg"
                        />
                    </Card>
                </Col>

                <Col xs={12} md={6} lg={7}>
                    <Card className='WelcomeText'>
                        <Card.Body style={{ height: '400px' }}>
                            <Card.Img variant='top' src='https://res.cloudinary.com/du8mlfcf9/image/upload/v1718808024/Presentaci%C3%B3n_diapositiva_Marca_creativa_Doodle_Blanco_y_marr%C3%B3n_gsapy7.png'></Card.Img>
                            <Card.Title>Full Stack Developer</Card.Title>
                            <br />
                            <Card.Text className="fw-lighter">
                                {t("")}
                                My development in the IT world continues evolving. After completing several courses on my own,
                                I decided to further my studies by attending the Web Developer bootcamp at Ironhack.
                                With the valuable skills gained during this training,
                                I'm actively seeking opportunities to join the industry, as you can see in my repositories.
                            </Card.Text>

                            <br />
                            <Link to="https://github.com/Drialis">
                                <Button className="GitHubLink">
                                    🔗 GitHub Link
                                </Button>
                            </Link>
                            <Link to={'/about-me'}>
                                <Button className='AboutMe'>
                                    ▷ About me
                                </Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default WelcomePage;
