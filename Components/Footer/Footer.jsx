import { Container, Row, Col } from 'react-bootstrap'
import './Footer.css'
import React from 'react'

const Footer = () => {
    return (

        <Container className='Footer'>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <p
                        style={{ fontSize: '12px' }}
                        className='text-center'>
                        &copy; 2024 Paloma Rehecho Antolín. All rights reserved.
                    </p>
                </Col>
            </Row>
        </Container>

    )
}

export default Footer