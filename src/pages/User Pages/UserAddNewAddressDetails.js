import React from 'react'
import { Row, Col, Button } from 'react-bootstrap';

const UserAddNewAddressDetails = () => {
  return (
    <div>
    <Row className="justify-content-start">
    <div className='admin-text mt-3 mb-2'>Add Address</div>
        <Col sm="8">
            <input
                type="text"
                className="input-form d-block mt-3 px-3"
                placeholder="Address Name(Work - Home)"
            />
            <textarea
                className="input-form-area p-2 mt-3"
                rows="4"
                cols="50"
                placeholder="Address In Detail"
            />
            <input
                type="text"
                className="input-form d-block mt-3 px-3"
                placeholder="Phone"
            />
        </Col>
    </Row>
    <Row>
        <Col sm="8" className="d-flex justify-content-end ">
            <Button className="btn btn-dark d-inline mt-2 ">Add</Button>
        </Col>
    </Row>
</div>
  )
}

export default UserAddNewAddressDetails;