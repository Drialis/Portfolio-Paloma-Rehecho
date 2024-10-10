import { Container, Row, Col, Card } from "react-bootstrap"
import React from "react"
import './ContactPage.css'
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import CVpdf from '../../src/assets/CV-Paloma-Rehecho.pdf'

const ContactPage = () => {

    const { t } = useTranslation()

    return (
        <Container fluid className="ContactPage">
            <Row>
                <Col className="BigImage" xs={12} md={4} lg={4}>
                    <img src="https://res.cloudinary.com/du8mlfcf9/image/upload/v1718901548/IMG_2892_m4bgqu.jpg" alt="Contact image" />
                </Col>
                <Col xs={12} md={8} lg={8}>
                    <Card className='ContactPageCard'>
                        <Card.Body>
                            <Card.Title> {t("CONTACT_PAGE.TITLE")} </Card.Title>
                            <Card.Text className="fw-lighter" >
                                {t("CONTACT_PAGE.PARAGRAPHS.PARAGRAPH_1")}
                            </Card.Text>
                            <Card.Text>
                                {t("CONTACT_PAGE.PARAGRAPHS.PARAGRAPH_2")}
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
                            </Row>                                    <Row className="m-4">
                                <Col className="imgcontact"
                                    xs={1} md={1} lg={1}>
                                    <img src="https://res.cloudinary.com/du8mlfcf9/image/upload/v1718967769/pngwing.com_22_m6rkdm.png" alt="github" />
                                </Col>
                                <Col className="contactcol"
                                    xs={11} md={11} lg={11}>
                                    <a href={CVpdf} target="_blank"> ▷ Curriculum Vitae </a>
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