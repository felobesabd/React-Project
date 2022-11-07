import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import CartDetails from './../../component/CartContainer/CartDetails';
import CartCash from './../../component/CartContainer/CartCash';

const CartPages = () => {
  return (
    <div style={{minHeight:'752px'}}>
    <Container>
    <Row>
    <div className='mt-4 fw-bold fs-4'>Cart</div>
    </Row>
    <Row className='d-flex'>
    <Col xs='12' md='9'>
    <CartDetails />
    <CartDetails />
    </Col>
    <Col xs='12' md='3'>
    <CartCash />
    </Col>
    </Row>
    </Container>
    </div>
  )
}

export default CartPages;