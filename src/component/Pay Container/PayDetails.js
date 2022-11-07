import React from 'react'
import { Row, Col, Button } from 'react-bootstrap';

const PayDetails = () => {
  return (
    <div>
        <div className="admin-content-text pt-5">Choose Pay Method</div>
        <div className="user-address-card my-3 px-3">
        <Row className="d-flex justify-content-between ">
            <Col xs="12" className="my-4 d-flex align-items-start">
                <input
                name="group"
                id="group1"
                type="radio"
                value="Payment by credit card"
                className="mt-2"
                />
                <label className="mx-2" for="group1">
                Payment by credit card
                </label>
            </Col>
        </Row>
        <Row className="mt-3">
            <Col xs="12" className="d-flex align-items-start">
                <input
                name="group"
                id="group1"
                type="radio"
                value="Cash On Delivery"
                className="mt-2"
                />
                <label className="mx-2" for="group1">
                Cash On Delivery
                </label>
            </Col>
        </Row>
        </div>
        <Row>
            <Col xs="12" className="d-flex justify-content-end">
                <Button variant="outline-dark" className="">34000 EGP</Button>
                <Button className="btn-success px-3 pt-2 ms-2">Checkout</Button>
            </Col>
        </Row>
    </div>
  )
}

export default PayDetails;