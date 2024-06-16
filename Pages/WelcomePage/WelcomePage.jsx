import React from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './WelcomePage.css'

const WelcomePage = () => {
    return (
        <Container className='WelcomePage'>
            <Row>
                <Col xs={12} md={6} lg={6} style={{ padding: 0 }}>
                    <Card>
                        <Card.Img
                            className="Paloma Rehecho Antolín"
                            src="https://res.cloudinary.com/du8mlfcf9/image/upload/v1717432580/Paloma_mylwne.jpg"
                        />
                    </Card>
                </Col>

                <Col xs={12} md={6} lg={6} style={{ padding: 0 }}>
                    <Card>
                        <Card.Body style={{ height: '300px' }}>
                            <Card.Title>Full Stack Developer</Card.Title>
                            <br />
                            <Card.Text className="fw-lighter">
                                This full stack developer is a dreamer who gets lost in scientific and fantasy books. She invests her time learning new technologies and practicing her favorite sport, taekwondo.
                            </Card.Text>
                            <br />
                            <Link className="GitHubLink fw-bold" to="/github">
                                🔗 GitHub Link
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </Container>
    )
}

export default WelcomePage;
