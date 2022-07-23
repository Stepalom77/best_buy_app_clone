import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'

function Login() {
    return(
        <Form>
            <Container>
                <Row className="justify-content-md-center">
                    <Col>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col>
                    <Button variant="primary" type="submit">
                    Login
                    </Button>
                    </Col>
                </Row>
            </Container>
        </Form>
    );
}

export default Login;