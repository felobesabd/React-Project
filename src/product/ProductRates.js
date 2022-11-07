import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import PaginationReact from '../component/HomeComp/PaginationReact';
import rate from '../images/rate.png'
import ProductRateItem from './ProductRateItem';
import ProductRatesStar from './ProductRatesStar';

const ProductRates = () => {
  return (
    <Container className='rate-container my-3'>
    <Row>
        <Col className="d-flex align-items-center">
            <div className="sub-tile p-1 ">Rates</div>
            <img className="" src={rate} alt="" height="16px" width="16px" />
            <div className="cat-rate  d-inline  p-1 pt-2">4.3</div>
            <div className="rate-count d-inline p-1 pt-2">(160 Rates)</div>
        </Col>
    </Row>
    <ProductRatesStar />
    <ProductRateItem />
    <ProductRateItem />
    <ProductRateItem />
    <ProductRateItem />
    <ProductRateItem />
    
    <PaginationReact />
    </Container>
  )
}

export default ProductRates;