import React from "react"
import { Row, Col, Card, Button, Container } from "react-bootstrap"
import './ProjectsPage.css'
import { Link } from "react-router-dom"

const ProjectsPage = () => {



    return (
        <Container fluid className="ProjectsPage">

            <Row>
                <Col>
                    <h1>MY PROJECTS</h1>
                    <hr className="titlesub" />
                </Col>
            </Row>
            <Row className="ProjectsRow pt-5">
                <Col xs={12} md={6} lg={4}>
                    <Card >
                        <Link to={'https://wavescope.netlify.app/'}>
                            <Card.Img variant="top" src="https://res.cloudinary.com/du8mlfcf9/image/upload/v1718799369/Captura_de_pantalla_2024-06-19_131549_qkqbhx.png" />
                        </Link>
                        <Card.Body>
                            <Card.Title>Wave Scope</Card.Title>
                            <Card.Text>
                                Your go-to platform for discovering wildlife on beaches around the world!
                                Share your Experiences
                                report your wildlife sightings and explore the ones made by the community.
                                WaveScope is a single page application developed with stack MERN and powered
                                by Netlifly.
                            </Card.Text>
                            <Link to={'https://wavescope.netlify.app/'}>
                                <Button className="projectButton">Go to Wave Scope App</Button>
                            </Link>
                            <Link to={'https://github.com/Drialis/Wave-Scope-client'}>
                                <Button className="projectButton">Client Repository</Button>
                            </Link>
                            <Link to={'https://github.com/Drialis/Wave-Scope-API'}>
                                <Button className="projectButton">Server Repository</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs={12} md={6} lg={4}>
                    <Card>
                        <Link to={'https://hackajet.netlify.app/'}>
                            <Card.Img variant="top" src="https://res.cloudinary.com/du8mlfcf9/image/upload/v1718799233/Captura_de_pantalla_2024-06-08_101800_jb3tdq.png" />
                        </Link>
                        <Card.Body>
                            <Card.Title>Hack a Jet</Card.Title>
                            <Card.Text>
                                Hack a Jet is a luxurious web experience built with React and JSON Server,
                                highlighting elegant design and sophisticated web development techniques powered by Netlify.
                                Featuring full CRUD functionality, each company can add, update, or delete its fleet independently.
                            </Card.Text>
                            <Link to={'https://hackajet.netlify.app/'}>
                                <Button className="projectButton">Go to Hack a Jet Web</Button>
                            </Link>
                            <Link to={'https://github.com/Drialis/Hack-a-Jet-client'}>
                                <Button className="projectButton">Client Repository</Button>
                            </Link>
                            <Link to={'https://github.com/Drialis/Hack-a-Jet-server'}>
                                <Button className="projectButton">Server Repository</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs={12} md={6} lg={4}>
                    <Card>
                        <Link to={'https://drialis.github.io/julitas-dungeon-game/'}>
                            <Card.Img variant="top" src="https://res.cloudinary.com/du8mlfcf9/image/upload/v1718799457/Captura_de_pantalla_2024-06-19_131721_cafxie.png" />
                        </Link>
                        <Card.Body>
                            <Card.Title>Julita's Dungeon Game</Card.Title>
                            <Card.Text>
                                Julita's Dungeon Game is a retro 80s-style
                                turn-based board game rendered with JavaScript. Inspired by the classic role-playing games of the era.
                                Experience thrilling adventures with a Dungeons and Dragons theme, bringing nostalgic gameplay to life.
                            </Card.Text>
                            <Link to={'https://drialis.github.io/julitas-dungeon-game/'}>
                                <Button className="projectButton">Go to Julitas Dungeon</Button>
                            </Link>
                            <Link to={'https://github.com/Drialis/julitas-dungeon-game'}>
                                <Button className="projectButton">Full Repository</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>


        </Container>
    )
}

export default ProjectsPage