import React from 'react'
import { Col, Row } from 'react-bootstrap';
import mobile from '../../images/mobile.png'
import deleteicon from '../../images/delete.png'

const CartDetails = () => {
  return (
        <Col xs="12" className="cart-item-body my-2 d-flex px-2">
        <img width="160px" height="197px" src={mobile} alt="" />
        <div className="w-100">
        <Row className="justify-content-between mt-2">
            <Col sm="12" className="d-flex flex-row justify-content-between align-items-center">
            <div className="d-inline pt-2 cat-text">Electronic</div>
            <div className="d-flex pt-2 align-items-center" style={{ cursor: "pointer" }}>
                <img src={deleteicon} alt="" width="20px" height="24px" />
                <div className="cat-text d-inline ms-1">Delete</div>
            </div>
            </Col>
        </Row>
        <Row className="justify-content-center mt-2">
            <Col sm="12" className=" d-flex flex-row justify-content-start align-items-center">
            <div className="d-inline pt-2 cat-title">
            iPhone XR 128GB 4G LTE With Face App
            </div>
            <div className="d-inline pt-2 cat-rate ms-2">4.5</div>
            </Col>
        </Row>
        <Row>
            <Col sm="12" className="mt-1">
            <div className="cat-text d-inline">Brand :</div>
            <div className="barnd-text d-inline mx-1">Apple</div>
            </Col>
        </Row>
        <Row>
            <Col sm="12" className="mt-1 d-flex">
            <div
                className="color ms-2 border"
                style={{ backgroundColor: "#E52C2C" }}></div>
            </Col>
        </Row>
        <Row className="justify-content-between">
            <Col sm="12" className=" d-flex flex-row justify-content-between align-items-center">
            <div className="d-inline pt-2 d-flex">
                <div className="cat-text  d-inline">Quantity:</div>
                <input
                className="mx-2 "
                type="number"
                style={{ width: "40px", height: "25px" }}
                />
            </div>
            <div className="d-inline pt-2 barnd-text">35000 EGP</div>
            </Col>
        </Row>
        </div>
        </Col>
  )
}

export default CartDetails;