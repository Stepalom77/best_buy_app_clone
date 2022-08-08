import React, {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'
import { useParams } from 'react-router-dom';
import {getProduct, getProducts} from './fetchAPI'

function ProductModal(props) {
  const [list, setList] = useState([]);
  //const {id} = useParams();

  useEffect(() => {
    getProducts().then((products) => {
      setList(products)
    })
  }, [])

  return (
    <div className="Products">
      {list.map((results) => {
        return (
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                {results.name}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Container>
                  <Row className="justify-content-md-center" >
                      <Col>
                      <h4>{results.price}</h4>
                      </Col>
                      <Col>
                      <h4>{results.rating}</h4>
                      </Col>
                  </Row>
                  <Row className="justify-content-md-center" >
                      <Col>
                      <p id='productText'>
                      {results.overview}
                      </p>
                      </Col>
                  </Row>
                  <Row className="justify-content-md-center" >
                      <Col>
                      <p id='productText'>
                      {results.specifications}
                      </p>
                      </Col>
                  </Row>
                  <Row className="justify-content-md-center" >
                      <Col>
                      <p>
                      {results.shipping}
                      </p>
                      </Col>
                      <Col>
                      <p>{results.stock}</p>
                      </Col>
                  </Row>
              </Container>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        );
      })}
    </div>
  );
  
}


export default ProductModal;