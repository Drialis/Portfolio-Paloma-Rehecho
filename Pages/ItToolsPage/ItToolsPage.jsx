import React from "react"
import { Row, Col, Card, Button, Container } from "react-bootstrap"
import './ItToolsPage.css'
import { Link } from "react-router-dom"

const ItToolsPage = () => {



    return (
        <Container fluid className="ItToolsPage">

            <Row>
                <Col>
                    <h1>IT TOOLS</h1>
                    <hr className="titlesub" />
                </Col>
            </Row>

            <Row className="ItToolsRow1 pt-5">
                <Col xs={6} md={4} lg={3}>
                    <Card >
                        <Card.Img className="Mongoimg" variant="top" src="https://res.cloudinary.com/du8mlfcf9/image/upload/v1718882764/pngwing.com_lvfscw.png" />
                        <Card.Body>
                            <Card.Title>Mongo DB</Card.Title>
                            <Card.Text>
                                The most advanced cloud database service on the market,
                                with unmatched data distribution and mobility across AWS, Azure, and Google Cloud,
                                built-in automation for resource and workload optimization, and so much more.
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
                            <Card.Title>Express</Card.Title>
                            <Card.Text>
                                Express is a lightweight and flexible routing framework with minimal core features meant to be
                                augmented through the use of Express middleware modules.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs={6} md={4} lg={3}>
                    <Card>
                        <Card.Img variant="top" src="https://res.cloudinary.com/du8mlfcf9/image/upload/v1718883394/pngwing.com_3_aexztf.png" />
                        <Card.Body>
                            <Card.Title>React</Card.Title>
                            <Card.Text>
                                <p> Use different React features from your components. </p>
                                <p> Documents built-in components that you can use in your JSX.</p>
                                <p> APIs that are useful for defining components.</p>
                                <p> Provide instructions to bundlers compatible with React Server Components.</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs={6} md={4} lg={3}>
                    <Card>
                        <Card.Img variant="top" src="https://res.cloudinary.com/du8mlfcf9/image/upload/v1718883418/pngwing.com_4_pbwxfg.png" />

                        <Card.Body>
                            <Card.Title>Node.js</Card.Title>
                            <Card.Text>
                                Free, open-source, cross-platform JavaScript runtime environment that lets
                                developers create servers, web apps, command line tools and scripts.
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
                        <Card.Img variant="top" src="https://res.cloudinary.com/du8mlfcf9/image/upload/v1718888405/pngwing.com_11_ttnkeo.png" />
                        <Card.Body>
                            <Card.Title className="h6">TypeScript</Card.Title>
                            <Card.Text>
                                Trained with Openbootcamp
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