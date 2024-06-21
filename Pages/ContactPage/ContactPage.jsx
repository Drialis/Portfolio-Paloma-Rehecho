import { Container, Row, Col, Card } from "react-bootstrap"
import React from "react"
import './ContactPage.css'
import { Link } from "react-router-dom"

const ContactPage = () => {

    return (
        <Container fluid className="ContactPage">
            <Row>
                <Col className="BigImage" xs={12} md={4} lg={4}>
                    <img src="https://res.cloudinary.com/du8mlfcf9/image/upload/v1718901548/IMG_2892_m4bgqu.jpg" alt="Contact image" />
                </Col>
                <Col xs={12} md={8} lg={8}>
                    <Card className='ContactPageCard'>
                        <Card.Body>
                            <Card.Title> My Contact </Card.Title>
                            <Card.Text className="fw-lighter" >
                                I'm always eager to connect with talented individuals and companies seeking a passionate and skilled MERN stack developer.
                                Feel free to reach out if you have any questions about my experience or potential collaborations!
                            </Card.Text>
                            <Card.Text>
                                Also, if you're looking for a developer who thrives in a fast-paced environment and is eager to learn new technologies,
                                I'd be happy to connect and discuss potential opportunities.
                            </Card.Text>

                            <Row className="m-4">
                                <Col className="imgcontact"
                                    xs={1} md={1} lg={1}>
                                    <img src="https://res.cloudinary.com/du8mlfcf9/image/upload/v1718967660/pngwing.com_21_iqdhdh.png" alt="phone" />
                                </Col>
                                <Col className="contactcol"
                                    xs={11} md={11} lg={11}>
                                    +34 606264198
                                </Col>
                            </Row>
                            <Row className="m-4">
                                <Col className="imgcontact"
                                    xs={1} md={1} lg={1}>
                                    <img src="https://res.cloudinary.com/du8mlfcf9/image/upload/v1718902699/pngwing.com_18_atefbm.png" alt="email" />
                                </Col>
                                <Col className="contactcol"
                                    xs={11} md={11} lg={11}>
                                    paloma_re@hotmail.com
                                </Col>
                            </Row>
                            <Row className="m-4">
                                <Col className="imgcontact"
                                    xs={1} md={1} lg={1}>
                                    <img src="https://res.cloudinary.com/du8mlfcf9/image/upload/v1718967604/pngwing.com_20_avrwvs.png" alt="github" />
                                </Col>
                                <Col className="contactcol"
                                    xs={11} md={11} lg={11}>
                                    <Link to='https://github.com/Drialis'>github.com/Drialis</Link>
                                </Col>
                            </Row>
                            <Row className="m-4">
                                <Col className="imgcontact"
                                    xs={1} md={1} lg={1}>
                                    <img src="https://res.cloudinary.com/du8mlfcf9/image/upload/v1718968668/pngwing.com_23_q4hx6y.png" alt="github" />
                                </Col>
                                <Col className="contactcol"
                                    xs={11} md={11} lg={11}>
                                    <Link to='https://www.linkedin.com/in/paloma-rehecho-antolin/'> Paloma Rehecho Antolín - Linkedin </Link>
                                </Col>
                            </Row>
                            <Row className="m-4">
                                <Col className="imgcontact"
                                    xs={1} md={1} lg={1}>
                                    <img src="https://res.cloudinary.com/du8mlfcf9/image/upload/v1718967769/pngwing.com_22_m6rkdm.png" alt="github" />
                                </Col>
                                <Col className="contactcol"
                                    xs={11} md={11} lg={11}>
                                    Las Palmas de Gran Canaria, Las Palmas, Spain
                                </Col>
                            </Row>


                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default ContactPage