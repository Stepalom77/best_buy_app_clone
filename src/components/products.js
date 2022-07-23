import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'

function ProductModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Product Name
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
            <Row className="justify-content-md-center" >
                <Col>
                <h4>Product Price</h4>
                </Col>
                <Col>
                <h4>Product Rating</h4>
                </Col>
            </Row>
            <Row className="justify-content-md-center" >
                <Col>
                <p id='productText'>
                Product Overview
                </p>
                </Col>
            </Row>
            <Row className="justify-content-md-center" >
                <Col>
                <p id='productText'>
                Product Specifications
                </p>
                </Col>
            </Row>
            <Row className="justify-content-md-center" >
                <Col>
                <p>
                Product Shipping
                </p>
                </Col>
                <Col>
                <p>Product Stock</p>
                </Col>
            </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}


export default ProductModal;