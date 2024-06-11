import { Card, Container, Row, Col } from "react-bootstrap"
import './AboutUs.css'
import { Link } from "react-router-dom"

const WelcomePage = () => {

    return (

        <Container
            className="WelcomePage mb-5">

            <Row className="mb-5">

                <Col xs={{ span: 12 }} md={{ span: 6 }} lg={{ span: 4 }}>
                    <Card>
                        <Card.Img className="Paloma Rehecho Antolín" variant="top" src="https://res.cloudinary.com/du8mlfcf9/image/upload/v1717432580/Paloma_mylwne.jpg"></Card.Img>
                    </Card>
                </Col>

                <Col xs={{ span: 12 }} md={{ span: 6 }} lg={{ span: 4 }}>
                    <Card className="m-4 border-0 shadow-lg">
                        <Link to="https://github.com/Drialis">
                        </Link>
                        <Card.Body
                            style={{ height: '300px' }}>
                            <Card.Title> Paloma Rehecho </Card.Title>
                            <Card.Text>Web Developer</Card.Text>
                            <Card.Text className="fw-lighter">This full stack developer is a dreamer who gets lost in scientific and fantasy books. She invests her time learning new technologies and practicing her favorite sport, taekwondo.</Card.Text>
                            <Link className="GitHubLink fw-bold" to="https://github.com/Drialis">GitHub Link</Link>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </Container>


    )
}

export default WelcomePage