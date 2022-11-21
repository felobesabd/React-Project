import React from 'react'
import { Row, Col, Button, Spinner } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import AddCreateBrand from './../../hookAbbreviation/BrandHooks/HomeBrandHook';

const AdminAddBrand = () => {
    const [img, name, loadingStatus, inpress, onImageChange, handleSendData, onChangeName] = AddCreateBrand()
    return (
    <div>
    <Row className="justify-content-start ">
        <div className="admin-text pt-5 pb-2">Add New Brand</div>
        <Col sm="8">
            <div className="text-form pb-2">Brand Image</div>
            <div>
            <label htmlFor='upload-file'>
            <img src={img} alt="" height="100px" width="120px" style={{ cursor: "pointer" }}/>
            </label>
              <input
                style={{
                  opacity: 0,
                  position:'absolute',
                  zIndex: -1
                }}
                type="file"
                name="photo"
                onChange={onImageChange}
                id='upload-file' />
            </div>

            <input
              onChange={onChangeName}
              value={name}
                type="text"
                className="input-form d-block mt-3 px-3"
                placeholder="Brand Name"
            />
        </Col>
    </Row>
    <Row>
        <Col sm="8" className="d-flex justify-content-end ">
        {
            inpress ? loadingStatus === true ? 
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
                ) : (<h4>finish</h4>) 
                  : <button 
                      onClick={handleSendData}
                      className="btn-save d-inline mt-2">Save Edit
                    </button> 
          }
        </Col>
    </Row>
    <ToastContainer />
    </div>
  )
}

export default AdminAddBrand;