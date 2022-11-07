import React from 'react'
import { Row, Col } from 'react-bootstrap';

const AdminAddSupCategory = () => {
  return (
    <div>
    <Row className="justify-content-start">
        <div className="admin-text pt-5 pb-2">Add New Sub-Category</div>
        <Col sm="8">
            <input
                type="text"
                className="input-form d-block mt-3 px-3"
                placeholder="Sub-Category Name"
            />
        </Col>
        <Col sm="8" className="d-flex mt-2">
        <select
            name="languages"
            id="lang"
            className="select input-form-area mt-1 text-center px-2 w-100">
            <option value="val">One Category</option>
            <option value="val2">Two Category</option>
            <option value="val2">Three Category</option>
            <option value="val2">Four Category</option>
        </select>
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

export default AdminAddSupCategory