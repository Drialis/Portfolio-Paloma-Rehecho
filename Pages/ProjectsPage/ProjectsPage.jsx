import { Row, Col, Card, Button, Container } from "react-bootstrap"
import './ProjectsPage.css'
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

const ProjectsPage = () => {

    const {t} = useTranslation()

    return (
        <Container fluid className="ProjectsPage">

            <Row>
                <Col>
                    <h1>{t("PROJECTS_PAGE.TITLE")}</h1>
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
                            {t("PROJECTS_PAGE.PROJECTS.PROJECT_1.PARAGRAPH")}
                            </Card.Text>
                            <Link to={'https://wavescope.netlify.app/'}>
                                <Button className="projectButton">{t("PROJECTS_PAGE.PROJECTS.PROJECT_1.BUTTONS.GO_PROJECT_BUTTON")}</Button>
                            </Link>
                            <Link to={'https://github.com/Drialis/Wave-Scope-client'}>
                                <Button className="projectButton">{t("PROJECTS_PAGE.BUTTONS.CLIENT_REPO_BUTTON")}</Button>
                            </Link>
                            <Link to={'https://github.com/Drialis/Wave-Scope-API'}>
                                <Button className="projectButton">{t("PROJECTS_PAGE.BUTTONS.SERVER_REPO_BUTTON")}</Button>
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
                                {t("PROJECTS_PAGE.PROJECTS.PROJECT_2.PARAGRAPH")}
                            </Card.Text>
                            <Link to={'https://hackajet.netlify.app/'}>
                                <Button className="projectButton">{t("PROJECTS_PAGE.PROJECTS.PROJECT_2.BUTTONS.GO_PROJECT_BUTTON")}</Button>
                            </Link>
                            <Link to={'https://github.com/Drialis/Hack-a-Jet-client'}>
                                <Button className="projectButton">{t("PROJECTS_PAGE.BUTTONS.CLIENT_REPO_BUTTON")}</Button>
                            </Link>
                            <Link to={'https://github.com/Drialis/Hack-a-Jet-server'}>
                                <Button className="projectButton">{t("PROJECTS_PAGE.BUTTONS.SERVER_REPO_BUTTON")}</Button>
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
                                {t("PROJECTS_PAGE.PROJECTS.PROJECT_3.PARAGRAPH")}
                            </Card.Text>
                            <Link to={'https://drialis.github.io/julitas-dungeon-game/'}>
                                <Button className="projectButton">{t("PROJECTS_PAGE.PROJECTS.PROJECT_3.BUTTONS.GO_PROJECT_BUTTON")}</Button>
                            </Link>
                            <Link to={'https://github.com/Drialis/julitas-dungeon-game'}>
                                <Button className="projectButton">{t("PROJECTS_PAGE.BUTTONS.FULL_REPO_BUTTON")}</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>


        </Container>
    )
}

export default ProjectsPage