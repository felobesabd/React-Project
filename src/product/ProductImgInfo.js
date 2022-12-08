import React from 'react'
import { Col, Row } from 'react-bootstrap';
import ProductImg from './ProductImg';
import ProductInfo from './ProductInfo';

const ProductImgInfo = ({id}) => {
  return (
    <div>
    <Row>
    <Col lg='3'>
    <ProductImg id={id}/>
    </Col>
    <Col lg='9'>
    <ProductInfo />
    </Col>
    </Row>
    </div>
  )
}

export default ProductImgInfo;