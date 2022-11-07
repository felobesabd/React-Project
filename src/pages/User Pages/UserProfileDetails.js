import React from 'react'
import { Row, Col, Button } from 'react-bootstrap';

const UserProfileDetails = () => {
  return (
    <div>
    <div className='admin-text mt-3 mb-2'>Profile</div>
    <div className="user-address-card my-3 px-2">
        <Row className="d-flex justify-content-between pt-2">
            <Col xs="6" className="d-flex align-items-baseline">
                <div className="p-2">Name :</div>
                <div className="p-1 item-delete-edit">Felobes Abd</div>
            </Col>
            <Col xs="6" className="d-flex justify-content-end">
                <div className="d-flex mx-2 position-relative">
                <i className="position-absolute fa fa-pencil-square-o" aria-hidden="true" 
                style={{left: '-20px',
                        top: '5px'}}></i>
                    <p className="item-delete-edit">Edit</p>
                </div>
            </Col>
        </Row>

        <Row className="">
            <Col xs="12" className="d-flex align-items-baseline">
                <div className="p-2">Phone :</div>
                <div className="p-1 item-delete-edit">01060712196</div>
            </Col>
        </Row>
        <Row className="">
            <Col xs="12" className="d-flex align-items-baseline">
                <div className="p-2">Email:</div>
                <div className="p-1 item-delete-edit">felobesabdd@gmail.com</div>
            </Col>
        </Row>
        <Row className="mt-5">
            <Col xs="10" sm="8" md="6" className="">
                <div className="admin-content-text">Change Password</div>
                <input
                    type="password"
                    className="input-form d-block mt-1 px-3"
                    placeholder="Enter Old Password"
                />
                <input
                    type="password"
                    className="input-form d-block mt-3 px-3"
                    placeholder="Enter New Password"
                />
            </Col>
        </Row>

        <Row>
            <Col xs="10" sm="8" md="6" className="d-flex justify-content-end ">
                <Button className="btn btn-dark d-inline mt-2 ">Save</Button>
            </Col>
        </Row>
    </div>
</div>
  )
}

export default UserProfileDetails;