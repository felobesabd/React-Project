import React from 'react'
import { Row, Col, Button, Spinner } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddCreateCategory from '../../hookAbbreviation/CategoryHooks/AddCreateCategory';

const AdminAddCategory = () => {

  const [img, name, loadingStatus, inpress, onImageChange, handleSendData, onChangeName] = AddCreateCategory()

  return (
    <div>
    <Row className="justify-content-start ">
        <div className="admin-text pt-5 pb-2">Add New Category</div>
        <Col sm="8">
            <div className="text-form pb-2">Category Image</div>

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
                type="type"
                className="input-form d-block mt-3 px-3"
                placeholder="Category Name"
            />

        </Col>
    </Row>
  <Row>
    <Col sm="8" className="d-flex justify-content-end">
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

export default AdminAddCategory;