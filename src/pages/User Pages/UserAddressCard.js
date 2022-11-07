import React from 'react'
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import deleteicon from '../../images/delete.png';

const UserAddressCard = () => {
  return (
    <div className="user-address-card my-3 px-2">
    <Row className="d-flex justify-content-between  ">
        <Col xs="1">
            <div className="p-2">Home</div>
        </Col>
        <Col xs="4" className="d-flex d-flex justify-content-end">
            <div className="d-flex p-2">
                <div className="d-flex mx-2 position-relative">
                    <i className="position-absolute fa fa-pencil-square-o" aria-hidden="true" 
                    style={{left: '-20px',
                            top: '5px'}}></i>
                    <Link to="/user/edit-address" style={{ textDecoration: "none" }}>
                        <p className="item-delete-edit">Edit</p>
                    </Link>
                </div>
                <div className="d-flex ">
                    <img
                        src={deleteicon}
                        alt=""
                        className="ms-1 mt-1"
                        style={{
                            height:"19px",
                            width:"17px"
                        }}
                    />
                    <p className="item-delete-edit">Delete</p>
                </div>
            </div>
        </Col>
    </Row>

    <Row className='ps-3'>
        <Col xs="12">
            <div
                style={{
                    color: "#555550",
                    fontSize: "14px",
                }}>
                ElMaadi, Cairo
            </div>
        </Col>
    </Row>

    <Row className="mt-3 ps-3">
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
                01060712196
            </div>

        </Col>
    </Row>

    </div>
  )
}

export default UserAddressCard;