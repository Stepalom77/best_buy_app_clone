import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'

function Registry() {
  return (
    <Form>
        <Container>
        <Row className="justify-content-md-center">
            <Col>
            <Form.Group className="mb-3" controlId="formBasicFirstName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" />
            </Form.Group>
            </Col>
            <Col>
            <Form.Group className="mb-3" controlId="formBasicLastName">
            <Form.Label>Last name</Form.Label>
            <Form.Control type="text" placeholder="Enter last name" />
            </Form.Group>
            </Col>
        </Row>
        <Row className="justify-content-md-center">
            <Col>
            <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter username" />
            </Form.Group>
            </Col>
        </Row>
        <Row className="justify-content-md-center">
            <Col>
            <Form.Group className="mb-3" controlId="formBasicPaymentMethod">
            <Form.Label>Payment method</Form.Label>
            <Form.Control type="text" placeholder="Enter your payment method" />
            </Form.Group>
            </Col>
            <Col>
            <Form.Group className="mb-3" controlId="formBasicTelephoneNumber">
            <Form.Label>Telephone Number</Form.Label>
            <Form.Control type="number" placeholder="Enter your telephone number" />
            </Form.Group>
            </Col>
        </Row>
        <Row className="justify-content-md-center">
            <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
            </Form.Group>
            </Col>
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
            Submit
            </Button>
            </Col>
        </Row>
        </Container>
      
    </Form>
  );
}

export default Registry;