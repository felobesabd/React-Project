import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import mobile from '../../images/mobile.png'

const AdminOrderCard = () => {
  return (
    <Col sm="12">
    <Link
        to="/admin/orders/:id"
        className="cart-item-body my-2 px-1 d-flex"
        style={{ textDecoration: "none" }}>
        <img width="160px" height="197px" src={mobile} alt="" className='m-auto'/>
        <div className="w-100 m-auto">
            <Row className="justify-content-between">
                <Col sm="12" className=" d-flex flex-row justify-content-between">
                    <div className="d-inline pt-2 cat-text">Order Number #2321</div>
                    <div className="d-inline pt-2 cat-text">Delete</div>
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
                <Col sm="12" className=" d-flex align-items-center my-2">
                    <div className="mt-2  cat-text d-inline">Brand :</div>
                    <div className="mt-1 barnd-text d-inline mx-1">Apple</div>
                    <div
                        className="color ms-1 mt-1 border"
                        style={{ backgroundColor: "#E52C2C" }}></div>
                </Col>
            </Row>
            <Row className="justify-content-between">
                <Col sm="12" className=" d-flex flex-row justify-content-between">
                    <div className="d-inline pt-2 d-flex">
                        <div className="cat-text pt-1 d-inline">Quantity</div>
                            <input
                                className="mx-2 mt-1"
                                type="number"
                                style={{ width: "40px", height: "25px" }}
                            />
                        </div>
                    <div className="d-inline pt-2 barnd-text">35000EGP</div>
                </Col>
            </Row>
        </div>
    </Link>
</Col>
  )
}

export default AdminOrderCard;