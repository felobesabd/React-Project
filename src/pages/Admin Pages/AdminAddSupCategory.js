import React from 'react';
import { Row, Col, Button, Spinner } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import SubCategoryHooks from './../../hookAbbreviation/Sub-CategoryHooks/SubCategoryHooks';

const AdminAddSupCategory = () => {

  const [name, loading, inPress, category, handleChangeValue, onChangeName, handleSubmit] = SubCategoryHooks()

  return (
    <div>
    <Row className="justify-content-start">
        <div className="admin-text pt-5 pb-2">Add New Sub-Category</div>
        <Col sm="8">
            <input
              onChange={onChangeName}
              value={name}
              type="text"
              className="input-form d-block mt-3 px-3"
              placeholder="Sub-Category Name"
            />
        </Col>
        <Col sm="8" className="d-flex mt-2">
        <select
          name="languages"
          id="lang"
          className="select input-form-area mt-1 px-2 w-100"
          onChange={handleChangeValue}
          >
            <option value="0">Choose Category</option>
            {
              category.data ? (
                // eslint-disable-next-line array-callback-return
                category.data.map((e, index) => {
                  return (
                    <option value={e._id} key={index}>{e.name}</option>
                  )
                })
              ) :null 
            }
        </select>
        </Col>
    </Row>
    <Row>
        <Col sm="8" className="d-flex justify-content-end ">
        {
            inPress ? loading === true ?
              (
                  <Button variant="btn-save d-inline mt-2" disabled>
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                  </Button>
                ) : null
                  : <button
                      onClick={handleSubmit}
                      className="btn-save d-inline mt-2">Save Edit
                    </button>
          }
        </Col>
    </Row>
    <ToastContainer />
</div>
  )
}

export default AdminAddSupCategory;