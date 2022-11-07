import React from 'react'
import rate from '../images/rate.png'
import { Col, Row } from 'react-bootstrap';

const ProductRateItem = () => {
  return (
    <div>
    <Row className='my-2'>
    <Col className="d-felx me-5 align-items-center">
    <div className="rate-name  d-inline mx-2">Felobes Abd</div>
    <img className="" src={rate} alt="" height="16px" width="16px" />
    <div className="cat-rate d-inline  p-1 pt-2">4.3</div>
    </Col>
    </Row>
    <Row className="border-bottom mx-2">
    <Col className="d-felx me-4 pb-2">
        <div className="rate-description  d-inline ms-2">
            This Product Very Good And Wonderful
        </div>
    </Col>
    </Row>
    </div>
  )
}

export default ProductRateItem;