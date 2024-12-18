import React from "react"
import { Row, Col, Card, Button, Container } from "react-bootstrap"
import './ItToolsPage.css'
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

const ItToolsPage = () => {

const { t } = useTranslation()

    return (
        <Container fluid className="ItToolsPage">

            <Row>
                <Col>
                    <h1>{t("IT_TOOLS_PAGE.TITLE")}</h1>
                    <hr className="titlesub" />
                </Col>
            </Row>

            <Row className="ItToolsRow1 pt-5">
                <Col xs={6} md={4} lg={3}>
                    <Card >
                        <Card.Img className="Mongoimg" variant="top" src="https://res.cloudinary.com/du8mlfcf9/image/upload/v1718882764/pngwing.com_lvfscw.png" />
                        <Card.Body>
                            <Card.Title>{t("IT_TOOLS_PAGE.TOOLS.MONGODB.TITLE")}</Card.Title>
                            <Card.Text>
                               {t("IT_TOOLS_PAGE.TOOLS.MONGODB.PARAGRAPH")}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs={6} md={4} lg={3}>
                    <Card>
                        <Link to={'https://drialis.github.io/julitas-dungeon-game/'}>
                            <Card.Img variant="top" src="https://res.cloudinary.com/du8mlfcf9/image/upload/v1718883374/pngwing.com_1_pbq7zq.png" />
                        </Link>
                        <Card.Body>
                            <Card.Title>{t("IT_TOOLS_PAGE.TOOLS.EXPRESS.TITLE")}</Card.Title>
                            <Card.Text>
                                {t("IT_TOOLS_PAGE.TOOLS.EXPRESS.PARAGRAPH")}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs={6} md={4} lg={3}>
                    <Card>
                        <Card.Img variant="top" src="https://res.cloudinary.com/du8mlfcf9/image/upload/v1718883394/pngwing.com_3_aexztf.png" />
                        <Card.Body>
                            <Card.Title>{t("IT_TOOLS_PAGE.TOOLS.REACT.TITLE")}</Card.Title>
                            <Card.Text>
                                {t("IT_TOOLS_PAGE.TOOLS.REACT.PARAGRAPH")}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs={6} md={4} lg={3}>
                    <Card>
                        <Card.Img variant="top" src="https://res.cloudinary.com/du8mlfcf9/image/upload/v1718883418/pngwing.com_4_pbwxfg.png" />

                        <Card.Body>
                            <Card.Title>{t("IT_TOOLS_PAGE.TOOLS.NODEJS.TITLE")}</Card.Title>
                            <Card.Text>
                                {t("IT_TOOLS_PAGE.TOOLS.NODEJS.PARAGRAPH")}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>


            <Row className="ItToolsRow1 pt-5 d-flex justify-content-center">
                <Col xs={6} md={4} lg={3}>
                    <Card >
                        <Card.Img className="NestImg" variant="top" src="https://res.cloudinary.com/du8mlfcf9/image/upload/v1725367455/pngwing.com_26_tbyp9f.png" />
                        <Card.Body>
                            <Card.Title>{t("IT_TOOLS_PAGE.TOOLS.NESTJS.TITLE")}</Card.Title>
                            <Card.Text>
                                {t("IT_TOOLS_PAGE.TOOLS.NESTJS.PARAGRAPH")}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs={6} md={6} lg={6}>
                    <Card >
                        <Card.Img className="TypeScripImg" variant="top" src="https://res.cloudinary.com/du8mlfcf9/image/upload/v1718888405/pngwing.com_11_ttnkeo.png" />
                        <Card.Body>
                            <Card.Title>{t("IT_TOOLS_PAGE.TOOLS.TYPESCRIPT.TITLE")}</Card.Title>
                            <Card.Text>
                                {t("IT_TOOLS_PAGE.TOOLS.TYPESCRIPT.PARAGRAPH")}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="ItToolsRow2 pt-5">
                <Col xs={12} md={4} lg={4}>
                    <Card >
                        <Card.Img variant="top" src="https://res.cloudinary.com/du8mlfcf9/image/upload/v1718888478/pngwing.com_12_pxs7qm.png" />
                        <Card.Body>
                            <Card.Title>JavaScript</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={4} lg={4}>
                    <Card >
                        <Card.Img variant="top" src="https://res.cloudinary.com/du8mlfcf9/image/upload/v1718886291/pngwing.com_8_wcnhnp.png" />
                        <Card.Body>
                            <Card.Title>HTML</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={4} lg={4}>
                    <Card >
                        <Card.Img variant="top" src="https://res.cloudinary.com/du8mlfcf9/image/upload/v1718886303/pngwing.com_10_imcedq.png" />
                        <Card.Body>
                            <Card.Title>Css</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
            <br />
            <br />
            <Row className="ItToolsRow3">
                <Col lg={1}></Col>
                <Col xs={12} md={4} lg={2}>
                    <Card >
                        <Card.Img variant="top" src="https://res.cloudinary.com/du8mlfcf9/image/upload/v1718886271/pngwing.com_6_s5nbpx.png" />
                        <Card.Body>
                            <Card.Title className="h6">Bootstrap</Card.Title>
                            <Card.Text>
                                React Bootstrap
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs={12} md={4} lg={2}>
                    <Card >
                        <Card.Img variant="top" src="https://res.cloudinary.com/du8mlfcf9/image/upload/v1718886277/pngwing.com_5_ty2olr.png" />
                        <Card.Body>
                            <Card.Title className="h6">Vue.js</Card.Title>
                            <Card.Text>
                                Currently learning
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs={12} md={4} lg={2}>
                    <Card >
                        <Card.Img variant="top" src="https://res.cloudinary.com/du8mlfcf9/image/upload/v1724255409/pngwing.com_25_m3apfz.png" />
                        <Card.Body>
                            <Card.Title className="h6">Figma</Card.Title>
                            <Card.Text>
                                Improving skills with new projects in collaboration with designers
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs={12} md={4} lg={2}>
                    <Card >
                        <Card.Img variant="top" src="https://res.cloudinary.com/du8mlfcf9/image/upload/v1718888716/pngwing.com_14_rmcryt.png" />
                        <Card.Body>
                            <Card.Title className="h6">.NET</Card.Title>
                            <Card.Text>
                                Currently learning
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs={12} md={4} lg={2}>
                    <Card >
                        <Card.Img variant="top" src="https://res.cloudinary.com/du8mlfcf9/image/upload/v1718888766/pngwing.com_15_wxkubc.png" />
                        <Card.Body>
                            <Card.Title className="h6">Angular</Card.Title>
                            <Card.Text>
                                My next project involves working with the MEAN stack
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </Container >
    )
}

export default ItToolsPage