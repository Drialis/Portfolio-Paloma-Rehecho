import { Card, Container, Row, Col, Button } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"
import React, { useEffect } from 'react'
import './AboutMe.css'
import { useTranslation } from "react-i18next"

const AboutMe = () => {

    const { t } = useTranslation()

    return ( 

        <Container fluid className='AboutMePage g-0'>
            <Row >
                <Col xs={12} md={6} lg={6}>
                    <Card className='AboutMeText'>
                        <Card.Body >
                            <Card.Title className="AboutMeTitle">
                                {t("ABOUT_ME_PAGE.TITLE")}
                                <hr className="titlesub" />
                            </Card.Title>
                            <Card.Text className="fw-lighter aboutmeText" >
                            {t("ABOUT_ME_PAGE.PARAGRAPHS.PARAGRAPH_1")}
                            <br />                             
                            <br />
                            {t("ABOUT_ME_PAGE.PARAGRAPHS.PARAGRAPH_2")}
                            <br />
                            <br />
                            {t("ABOUT_ME_PAGE.PARAGRAPHS.PARAGRAPH_3")}                            
                            </Card.Text>
                            <br />
                            <Link to="https://github.com/Drialis">
                                <Button className="GitHubLink">
                                    {t("COMMONS.BUTTONS.GITHUB_LINK")}
                                </Button>
                            </Link>
                            <Link to={'/contact'}>
                                <Button className='ContactButton'>
                                    {t("COMMONS.BUTTONS.CONTACT_BUTTON")}
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