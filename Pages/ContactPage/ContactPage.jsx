import { Container, Row, Col, Card } from "react-bootstrap"
import React from "react"
import './ContactPage.css'

const ContactPage = () => {



    return (
        <Container className="ContactPage">
            <Row>
                <Col>
                    <img src="https://res.cloudinary.com/du8mlfcf9/image/upload/v1718901548/IMG_2892_m4bgqu.jpg" alt="Contact image" />
                </Col>
                <Col xs={12} md={6} lg={6}>

                    <h1>My Contact</h1>

                    <Card className='AboutMeText'>
                        <Card.Body style={{ height: '400px' }}>
                            <Card.Text className="fw-lighter aboutmeText" >
                                <p>
                                    After years of dedication to business consulting and with a passion for the technology sector,
                                    I decided to embark on a journey into web development. Gradually, this industry has captivated me,
                                    leading to my complete immersion today.
                                </p>
                                <Row className="m-4">
                                    <Col className="imgcontact">
                                        <img src="https://res.cloudinary.com/du8mlfcf9/image/upload/v1718902159/pngwing.com_16_uzfdhr.png" alt="phone" />
                                    </Col>
                                    <Col className="contactcol">
                                        +34 606264198
                                    </Col>
                                </Row>
                                <Row className="m-4">
                                    <Col className="imgcontact">
                                        <img src="https://res.cloudinary.com/du8mlfcf9/image/upload/v1718902699/pngwing.com_18_atefbm.png" alt="email" />
                                    </Col>
                                    <Col className="contactcol">
                                        paloma_re@hotmail.com
                                    </Col>
                                </Row>
                                <Row className="m-4">
                                    <Col className="imgcontact">
                                        <img src="https://res.cloudinary.com/du8mlfcf9/image/upload/v1718902154/pngwing.com_17_fu5rze.png" alt="github" />
                                    </Col>
                                    <Col className="contactcol">
                                        github.com/Drialis
                                    </Col>
                                </Row>


                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default ContactPage