import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

const ProductSubNav = () => {
  return (
    <div className='product'>
    <Container>
    <Row>
    <Col className='d-flex py-3 flex-wrap'>
    <div className='product-text'>All</div>
    <div className='product-text'>Electronics</div>
    <div className='product-text'>Clothes</div>
    <div className='product-text'>Ratings</div>
    <div className='product-text'>All</div>
    <div className='product-text'>All</div>
    </Col>
    </Row>
    </Container>
    </div>
  )
}

export default ProductSubNav;