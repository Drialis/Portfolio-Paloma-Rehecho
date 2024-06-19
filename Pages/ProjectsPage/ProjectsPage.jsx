import React from "react"
import { Container, Row, Col, Card, Button } from "react-bootstrap"
import './ProjectsPage.css'
import { Link } from "react-router-dom"

const ProjectsPage = () => {



    return (
        <Row className="ProjectsPage" style={{ margin: 0, padding: 50 }}>
            <Col xs={12} md={6} lg={4}>
                <Card>
                    <Link to={'https://wavescope.netlify.app/'}>
                        <Card.Img variant="top" src="https://res.cloudinary.com/du8mlfcf9/image/upload/v1718799369/Captura_de_pantalla_2024-06-19_131549_qkqbhx.png" />
                    </Link>
                    <Card.Body>
                        <Card.Title>Wave Scope</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Link to={'https://wavescope.netlify.app/'}>
                            <Button className="projectButton">Go to Wave Scope App</Button>
                        </Link>
                        <Link to={'https://github.com/Drialis/Wave-Scope-client'}>
                            <Button className="projectButton">Client Repository</Button>
                        </Link>
                        <Button className="projectButton">Server Repository</Button>
                    </Card.Body>
                </Card>
            </Col>

            <Col xs={12} md={6} lg={4}>
                <Card>
                    <Card.Img variant="top" src="https://res.cloudinary.com/du8mlfcf9/image/upload/v1718799233/Captura_de_pantalla_2024-06-08_101800_jb3tdq.png" />
                    <Card.Body>
                        <Card.Title>Wave Scope</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button className="projectButton">Go to Hack a Jet Web</Button>
                        <Button className="projectButton">Client Repository</Button>
                        <Button className="projectButton">Server Repository</Button>
                    </Card.Body>
                </Card>
            </Col>

            <Col xs={12} md={6} lg={4}>
                <Card>
                    <Card.Img variant="top" src="https://res.cloudinary.com/du8mlfcf9/image/upload/v1718799457/Captura_de_pantalla_2024-06-19_131721_cafxie.png" />
                    <Card.Body>
                        <Card.Title>Wave Scope</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button className="projectButton">Go to Julitas Dungeon</Button>
                        <Button className="projectButton">Client Repository</Button>
                        <Button className="projectButton">Server Repository</Button>
                    </Card.Body>
                </Card>
            </Col>
        </Row>

    )
}

export default ProjectsPage