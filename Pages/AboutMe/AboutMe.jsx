import { Card, Container, Row, Col, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import React from 'react'
import './AboutMe.css'

const AboutMe = () => {

    return (

        <Container fluid className='AboutMePage g-0'>
            <Row >
                <Col xs={12} md={6} lg={6}>
                    <Card className='AboutMeText'>
                        <Card.Body >
                            <Card.Title className="AboutMeTitle">
                                About Me
                                <hr className="titlesub" />
                            </Card.Title>
                            <Card.Text className="fw-lighter aboutmeText" >
                                <p>
                                    After years of dedication to business consulting and with a passion for the technology sector,
                                    I decided to embark on a journey into web development. Gradually, this industry has captivated me,
                                    leading to my complete immersion today.
                                </p>
                                <br />
                                <br />
                                <p>
                                    Upon completing my training at Ironhack, I've emerged from weeks of intensive MERN stack training,
                                    ready to make a positive impact in the industry. I continue to develop projects and expand my knowledge of new technologies,
                                    as showcased on the It Tools page.
                                </p>
                                <br />
                                <br />
                                <p>
                                    I hope to continue adding exciting projects to this portfolio. If you'd like to connect with me,
                                    please feel free to visit my contact page or my GitHub.
                                </p>
                            </Card.Text>
                            <br />
                            <Link to="https://github.com/Drialis">
                                <Button className="GitHubLink">
                                    🔗 GitHub Link
                                </Button>
                            </Link>
                            <Link to={'/contact'}>
                                <Button className='ContactButton'>
                                    Contact
                                </Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={6} lg={6} style={{ padding: 0 }}>
                    <Card className='br-0'>
                        <Card.Img
                            className="PalomaRehechoAntolín m-0"
                            src="https://res.cloudinary.com/du8mlfcf9/image/upload/v1718897590/IMG_1776_n7fbfz.jpg"
                        />
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default AboutMe