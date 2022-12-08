import React, { useEffect, useState } from 'react';
import {Col, Row, Button, Spinner} from 'react-bootstrap';
import add from '../../images/add.png';
import MultiImageInput from 'react-multiple-image-input';
import { CompactPicker } from 'react-color'
import Multiselect from 'multiselect-react-dropdown';
import { ToastContainer } from "react-toastify";
import { useParams } from "react-router-dom";
import EditProductAdminHook from "../../hookAbbreviation/Admin/EditProductAdminHook";

const AdminEditProductDetails = () => {
    const { id } = useParams()

    const [onChangeProdName, onChangeDesName, onChangePriceBefore, onChangePriceAfter, onChangeQty,
        category, brand, image, setImage, name, description, priceBefore, priceAfter, qty, catID,
        brandID, selectedSubID, loading, subCategory, option, onSelectCategory, onSelect, onRemove,
        onSelectBrand, color, removeColor, showColor, onColorSelected, statusCompact,
        handleData, product] = EditProductAdminHook(id)

    return (
        <div>
            <Row className="justify-content-start">
                <div className="admin-text pb-4 mt-3">Edit Product - {name}</div>
                <Col sm="8">
                    <div className="text-form pb-2">Product Images</div>

                    <MultiImageInput
                        images={image}
                        setImages={setImage}
                        cropConfig={{ minWidth: 200 }}
                        theme={'light'}
                        max={3}
                    />

                    <input
                        onChange={onChangeProdName}
                        value={name}
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="Product Name"
                    />

                    <textarea
                        onChange={onChangeDesName}
                        value={description}
                        className="input-form-area p-2 mt-3"
                        rows="4"
                        cols="50"
                        placeholder="Product Description"
                    />

                    <input
                        onChange={onChangePriceBefore}
                        value={priceBefore}
                        type="number"
                        className="input-form d-block mt-3 px-3"
                        placeholder="Product Price"
                    />

                    <input
                        onChange={onChangePriceAfter}
                        value={priceAfter}
                        type="number"
                        className="input-form d-block mt-3 px-3"
                        placeholder="Discount Price"
                    />

                    <input
                        onChange={onChangeQty}
                        value={qty}
                        type="number"
                        className="input-form d-block mt-3 px-3"
                        placeholder="Quantity"
                    />

                    <select
                        onChange={onSelectCategory}
                        value={catID}
                        name="languages"
                        id="lang"
                        className="select input-form-area mt-3 px-2 ">
                        <option value='0'>Choose Category</option>
                        {
                            category.data ? (
                                category.data.map((e, index)=> {
                                    return (
                                        <option key={index} value={e._id}>{e.name}</option>
                                    )
                                })
                            ) :null
                        }
                    </select>

                    {/*<Select */}
                    {/*className='mt-3'*/}
                    {/*closeMenuOnSelect={false}*/}
                    {/*components={animatedComponents}*/}
                    {/*isMulti*/}
                    {/*options={option}*/}
                    {/*/>*/}

                    <Multiselect
                        className='mt-3'
                        options={option}
                        placeholder="Sub-Category"
                        onSelect={onSelect}
                        onRemove={onRemove}
                        displayValue="name"
                        style={{color: 'red' }}
                    />

                    <select
                        onChange={onSelectBrand}
                        value={brandID}
                        name="brand"
                        id="brand"
                        className="select input-form-area mt-3 px-2 ">
                        <option value="0">Choose Brand</option>
                        {
                            brand.data ? (
                                brand.data.map((e, index)=> {
                                    return (
                                        <option key={index} value={e._id}>{e.name}</option>
                                    )
                                })
                            ) :null
                        }
                    </select>
                    <div className="text-form mt-3 ">Available colours For Product</div>
                    <div className="mt-1 d-flex">
                        {
                            color.length >= 1 ? (
                                color.map((e, index)=> {
                                    return (
                                        <div
                                            key={index}
                                            onClick={()=> removeColor(e)}
                                            className="color me-2 border mt-1"
                                            style={{ backgroundColor: e }}>
                                        </div>
                                    )
                                })
                            ) : null
                        }
                        <img src={add} alt="" width="30px" height="35px"
                             style={{cursor:'pointer'}} onClick={showColor} />
                        {
                            statusCompact === true ? <CompactPicker onChangeComplete={onColorSelected} /> : null
                        }
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-end">
                    {
                        loading === false ?
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
                            ) : <button
                                onClick={handleData}
                                className="btn-save d-inline my-2">Save Changes
                            </button>
                    }

                </Col>
            </Row>
            <ToastContainer />
        </div>
    )
}

export default AdminEditProductDetails;
