import React, { useState } from 'react';
import ProductModal from './products'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'
import '../App.css';

function Product() {
    const [modalShow, setModalShow] = useState(false);
  
    return (
      <>
      <Container>
        <Row className="justify-content-md-center" id='productModal'>
            <Col>
            <Button variant="primary" onClick={() => setModalShow(true)}>
          Launch vertically centered modal
        </Button>
  
        <ProductModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
            </Col>
        </Row>
      </Container>
      </>
    );
  }
  
  //render(<Product/>);

  export default Product;