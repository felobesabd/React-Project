import React from 'react'
import { Row, Col } from 'react-bootstrap';
import avatar from '../../images/avatar.png'

const AdminAddCategory = () => {
  return (
    <div>
    <Row className="justify-content-start ">
        <div className="admin-text pt-5 pb-2">Add New Category</div>
        <Col sm="8">
            <div className="text-form pb-2">Category Image</div>
            <img src={avatar} alt="" height="100px" width="120px" />
            <input
                type="text"
                className="input-form d-block mt-3 px-3"
                placeholder="Category Name"
            />
        </Col>
    </Row>
    <Row>
        <Col sm="8" className="d-flex justify-content-end ">
            <button className="btn-save d-inline mt-2 ">Save Edit</button>
        </Col>
    </Row>
</div>
  )
}

export default AdminAddCategory;