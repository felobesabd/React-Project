import React from 'react'
import { Col, Row } from 'react-bootstrap';
import AdminOrderCard from './AdminOrderCard';

const AdminOrderDetails = () => {
  return (
    <div>
    <div className='admin-text'>Order Details Number #55</div>
    <AdminOrderCard />
    <AdminOrderCard />
    <AdminOrderCard />
    <Row className="justify-content-center mt-4 user-data">
        <Col xs="12" className=" d-flex">
            <div className="admin-content-text py-2">Custom Details</div>
        </Col>
        <Col xs="12" className="d-flex">
            <div
                style={{
                    color: "#555550",
                    fontSize: "16px",
                }}>
                Name :
            </div>
            <div
                style={{
                    color: "#979797",
                    fontSize: "16px",
                }}
                className="mx-2">
                Felobes Abd Sadek
            </div>
        </Col>
        <Col xs="12" className="d-flex">
            <div
                style={{
                    color: "#555550",
                    fontSize: "16px",
                }}>
                Phone Number :
            </div>
            <div
                style={{
                    color: "#979797",
                    fontSize: "16px",
                }}
                className="mx-2">
                01060712169
            </div>
        </Col>
        <Col xs="12" className="d-flex">
            <div
                style={{
                    color: "#555550",
                    fontSize: "16px",
                }}>
                Email :
            </div>
            <div
                style={{
                    color: "#979797",
                    fontSize: "16px",
                }}
                className="mx-2">
                felobesabdd@gmail.com
            </div>
        </Col>
        <div className="d-inline px-4 border text-center pt-2">
            Total 60000EGP
        </div>
        <div className="d-flex mt-2 justify-content-center">
            <select
                name="languages"
                id="lang"
                className="select input-form-area mt-1 text-center px-2 w-50">
                <option value="val">Order Status</option>
                <option value="val2">in progress</option>
                <option value="val2">Finished</option>
                <option value="val2">Cancel</option>
            </select>
            <button className="btn-a px-3 d-inline mx-2">Save</button>
        </div>
    </Row>
</div>
  )
}

export default AdminOrderDetails;