import React from 'react'
import { Row,Col, Button } from 'react-bootstrap'
import GetOneProductByIdHook from "../hookAbbreviation/ProductHooks/GetOneProductById";
import {useParams} from "react-router-dom";

const ProductInfo = () => {
    const { id } = useParams()

    const [item, cat, brand, products] = GetOneProductByIdHook(id)

    return (
        <div>
        <Row className="mt-2">
            <div className="cat-text">{cat.name} :</div>
        </Row>
        <Row>
            <Col md="8">
            <div className="cat-title d-inline">
                {item.title}
                <div className="cat-rate d-inline mx-3">{item.ratingsQuantity}</div>
            </div>
            </Col>
        </Row>
        <Row>
            <Col md="8" className="mt-3 d-flex align-items-centre mb-2">
            <div className="cat-text d-inline">Brand :</div>
            <div className="barnd-text d-inline mx-1">Apple</div>
            </Col>
        </Row>
        <Row>
            <Col md="8" className="mt-1 d-flex">
                {
                    item.availableColors ? (
                        item.availableColors.map((color, index)=> {
                            return (
                                <div
                                    key={index}
                                    className="color ms-2 border"
                                    style={{ backgroundColor: color }}>
                                </div>
                            )
                        })
                    ) :null
                }
            </Col>
        </Row>

        <Row className="mt-4">
            <div className="cat-text">Specification :</div>
        </Row>
        <Row className="mt-2">
            <Col md="10">
            <div className="product-description d-inline">
                {item.description}
            </div>
            </Col>
        </Row>
        <Row className="mt-4">
            <Col md="12 d-flex justify-content-start">
            <Button className="btn btn-info d-inline px-3 py-3 border">{item.price} EGP</Button>
            <Button className="btn btn-danger px-3 py-3 d-inline mx-3">Add Cart</Button>
            </Col>
        </Row>
    </div>
    )
}

export default ProductInfo;