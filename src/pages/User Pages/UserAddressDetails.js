import React from 'react'
import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UserAddressCard from './UserAddressCard';

const UserAddressDetails = () => {
  return (
    <div>
    <div className='admin-text mt-3 mb-2'>Address Book</div>

    <UserAddressCard />
    <UserAddressCard />
    <UserAddressCard />

    <Row className="justify-content-center">
    <Col sm="5" className="d-flex justify-content-center">
        <Link to="/user/add-address" style={{ textDecoration: "none" }}>
            <Button className="btn btn-dark">Add New Address</Button>
        </Link>
    </Col>
    </Row>

    </div>
  )
}

export default UserAddressDetails;