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
                                Experienced in leveraging MongoDB to build dynamic and flexible applications. 
                                I have a strong grasp of data modeling and can optimize database performance for high-traffic environments.
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
                                 I can develop robust and scalable web applications with Express.
                                 Proficient in routing, middleware, and error handling, I have a deep understanding of building RESTful APIs.
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
                                Experienced in building complex and scalable single-page applications using React. 
                                I have a strong understanding of React's component lifecycle and can optimize performance 
                                through techniques like memoization and lazy loading.
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
                                Experienced in Node.js, I can build high-performance, scalable, 
                                and event-driven applications. Skilled in asynchronous programming and I/O operations, 
                                I have a deep understanding of the Node.js ecosystem.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>


            <Row className="ItToolsRow1 pt-5">
                <Col xs={6} md={4} lg={2}>
                
                </Col>
                <Col xs={6} md={4} lg={3}>
                    <Card >
                        <Card.Img className="NestImg" variant="top" src="https://res.cloudinary.com/du8mlfcf9/image/upload/v1725367455/pngwing.com_26_tbyp9f.png" />
                        <Card.Body>
                            <Card.Title>NestJS</Card.Title>
                            <Card.Text>
                                Using NestJS for backend projects is being a game-changer. Its modular architecture, 
                                powerful CLI, and TypeScript support make development efficient and scalable. 
                                It’s been incredibly effective for building robust, maintainable applications.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs={6} md={4} lg={2}>
                </Col>

                <Col xs={6} md={4} lg={3}>
                    <Card >
                        <Card.Img className="TypeScripImg" variant="top" src="https://res.cloudinary.com/du8mlfcf9/image/upload/v1718888405/pngwing.com_11_ttnkeo.png" />
                        <Card.Body>
                            <Card.Title>TypeScript</Card.Title>
                            <Card.Text>
                                TypeScript has significantly improved my development process. Its static typing, modern JavaScript features, 
                                and strong tooling support enhance code quality and catch errors early. 
                                It’s become essential for building applications with confidence and precision.
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