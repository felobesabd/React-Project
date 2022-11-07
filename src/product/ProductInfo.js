import React from 'react'
import { Row,Col, Button } from 'react-bootstrap'

const ProductInfo = () => {
    return (
        <div>
        <Row className="mt-2">
            <div className="cat-text">Electronic :</div>
        </Row>
        <Row>
            <Col md="8">
            <div className="cat-title d-inline">
            iPhone XR 128GB 4G LTE With Face App<div className="cat-rate d-inline mx-3">4.5</div>
            </div>
            </Col>
        </Row>
        <Row>
            <Col md="8" className="mt-3 d-flex align-items-centre mb-2">
            <div className="cat-text d-inline">Brand :</div>
            <div className="barnd-text d-inline mx-1">Apple</div>
            </Col>
        </Row>
        <Row>
            <Col md="8" className="mt-1 d-flex">
            <div
                className="color ms-2 border"
                style={{ backgroundColor: "#E52C2C" }}></div>
            <div
                className="color ms-2 border "
                style={{ backgroundColor: "white" }}></div>
            <div
                className="color ms-2 border"
                style={{ backgroundColor: "black" }}></div>
            </Col>
        </Row>

        <Row className="mt-4">
            <div className="cat-text">Specification :</div>
        </Row>
        <Row className="mt-2">
            <Col md="10">
            <div className="product-description d-inline">
            It features a dual SIM physical card and an e-SIM card that you can unlock
            your iPhone and easily log into applications, accounts, etc.,
            The Face ID feature is the fastest and safest for fingerprint authentication
            The face features the A12 Bionic chip, which is the smartest and most powerful chip in phones
            Smartphones The world's most famous camera has ushered in a new era of photography
            Photography where the innovative ISP sensor and actuator work
            Neuron, enabling you to capture never before before with a single-lens camera
            Makes the people in the front in a precise focus range as opposed to the range
            blurred background overview.
            </div>
            </Col>
        </Row>
        <Row className="mt-4">
            <Col md="12 d-flex justify-content-start">
            <Button className="btn btn-info d-inline px-3 py-3 border">
            34000EGP</Button>
            <Button className="btn btn-danger px-3 py-3 d-inline mx-3">
            Add Cart</Button>
            </Col>
        </Row>
    </div>
    )
}

export default ProductInfo;