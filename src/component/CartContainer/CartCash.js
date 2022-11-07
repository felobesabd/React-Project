import React from 'react'
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CartCash = () => {
  return (
    <Row className="my-1 d-flex justify-content-center cart-checkout pt-3">
    <Col xs="12" className="d-flex flex-column">
        <div className="d-flex">
            <input
                className="copon-input d-inline text-center "
                placeholder="Discount Code"
            />
            <button className="copon-btn d-inline ">Use</button>
        </div>
        <div className="product-price d-inline w-100 my-3  border">60000 EGP</div>
        <Link
            to="/pay"
            style={{ textDecoration: "none" }}
            className="product-cart-add  d-inline ">
            <button className="product-cart-add w-100 px-2">Checkout</button>
        </Link>
    </Col>
</Row>
  )
}

export default CartCash;