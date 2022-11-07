import React from 'react'
import { Col, Row, Button } from 'react-bootstrap';
import avatar from '../../images/avatar.png';
import add from '../../images/add.png';
import Select from 'react-select'
import makeAnimated from 'react-select/animated';

const AdminAddDetailsProduct = () => {

    const animatedComponents = makeAnimated();

    const options = [
        { value: 'Frist Category', label: 'Frist' },
        { value: 'Sceond Category', label: 'Sceond' },
        { value: 'Third Category', label: 'Third' },
        { value: 'Fourth Category', label: 'Fourth' }
    ]

  return (
    <div>
    <Row className="justify-content-start">
        <div className="admin-text pb-4 mt-3">Add New Product</div>
        <Col sm="8">
            <div className="text-form pb-2">Product Images</div>
            <img src={avatar} alt="" height="100px" width="120px" />
            <input
                type="text"
                className="input-form d-block mt-3 px-3"
                placeholder="Product Name"
            />
            <textarea
                className="input-form-area p-2 mt-3"
                rows="4"
                cols="50"
                placeholder="Product Description"
            />
            <input
                type="number"
                className="input-form d-block mt-3 px-3"
                placeholder="Discound Price"
            />
            <input
                type="number"
                className="input-form d-block mt-3 px-3"
                placeholder="Product Price"
            />
            <select
                name="languages"
                id="lang"
                className="select input-form-area mt-3 px-2 ">
                <option value="val">Main Category</option>
                <option value="val">Frist Category</option>
                <option value="val2">Sceond Category</option>
                <option value="val2">Third Category</option>
                <option value="val2">Fourth Category</option>
            </select>

            <Select 
            className='mt-3'
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
            options={options}
    />

            <select
                name="brand"
                id="brand"
                className="select input-form-area mt-3 px-2 ">
                <option value="val">Brand</option>
                <option value="val2">Frist Brand Category</option>
                <option value="val2">Second Brand Category</option>
                <option value="val2">Third Brand Category</option>
            </select>
            <div className="text-form mt-3 ">Available colours For Product</div>
            <div className="mt-1 d-flex">
                <div
                    className="color me-2 border  mt-1"
                    style={{ backgroundColor: "#E52C2C" }}></div>
                <div
                    className="color me-2 border mt-1 "
                    style={{ backgroundColor: "blue" }}></div>
                <div
                    className="color me-2 border  mt-1"
                    style={{ backgroundColor: "black" }}></div>
                <img src={add} alt="" width="30px" height="35px" className="" />
            </div>
        </Col>
    </Row>
    <Row>
        <Col sm="8" className="d-flex justify-content-center">
            <Button className="btn-save d-inline my-2">Save Changes</Button>
        </Col>
    </Row>
</div>
  )
}

export default AdminAddDetailsProduct;